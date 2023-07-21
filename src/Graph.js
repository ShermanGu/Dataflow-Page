import React from 'react';
import {ReactFlow, ReactFlowProvider, Controls, Background} from 'reactflow';
import dagre from 'dagre';
import StmtNode from './StmtNode';
import GridNode from './GridNode';
import ValNode from './ValNode';

const nodeTypes = {
  GridNode: GridNode,
  ValNode: ValNode,
  StmtNode: StmtNode,
};

function preprocess({data}) {
  const position = { x: 0, y: 0};
  var i;
  var initialNodes = [],initialEdges = [];
  for(i = 0; i< data.nodes.length; i++) {
    if(data.nodes[i].type == "val" && data.nodes[i].val.charAt(0) == '[' && data.nodes[i].val.charAt(1) == '['){
      initialNodes = initialNodes.concat([{id: data.nodes[i].id, position:{x:0,y:0}, data:{sor: data.nodes[i].val, name: data.nodes[i].name}, type: 'GridNode'}])    
    }else if(data.nodes[i].type == "stmt"){
      initialNodes = initialNodes.concat([{id: data.nodes[i].id, position:{x:0,y:0}, data:{stmt: data.nodes[i].val}, type:'StmtNode'}])    
    }else{
      initialNodes = initialNodes.concat([{id: data.nodes[i].id, position:{x:0,y:0}, data:{label: data.nodes[i].val, name: data.nodes[i].name}, type: 'ValNode'}])    
    }
  }
  
  for(i = 0; i< data.edges.length; i++){
      initialEdges = initialEdges.concat([{ id: ('e' + data.edges[i][0] + '-' + data.edges[i][1]), source: data.edges[i][0], target:  data.edges[i][1], type: 'smoothstep', animated: true}])    
  }
  return [initialNodes, initialEdges];
}

function createGraphLayout(nodes, edges) {
  const graph = new dagre.graphlib.Graph();
  
  graph.setGraph({});
  graph.setDefaultEdgeLabel(() => ({}));

  const nodeHeight = 300;
  const nodeWidth = 300;

  nodes.forEach(node => {
    graph.setNode(node.id, { width: nodeWidth, height: nodeHeight })
  });

  edges.forEach(edge => {
    graph.setEdge(edge.source, edge.target);
  });

  dagre.layout(graph);

  nodes.forEach(node => {
    const nodeWithPosition = graph.node(node.id);
    node.targetPosition = "top";
    node.sourcePosition = "bottom";

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2
    };

    return node;
  });

  return [nodes, edges];
}

export default function Graph(data) {
  const [initialNodes, initialEdges] = preprocess(data);
  const [nodes, edges] = createGraphLayout(initialNodes, initialEdges);
  return (
    <div className='graph'>
      <ReactFlowProvider>
        <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView/>
        <Controls/>
      </ReactFlowProvider>
    </div>
  );
};
