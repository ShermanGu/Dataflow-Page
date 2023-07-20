import React, { useState, useEffect } from 'react';
import { Grid, List, ListItem } from '@mui/material';
import Graph from './Graph';
import TaskList from './TaskList';
import 'reactflow/dist/style.css';

function App() {
  const [data, setData] = useState({ nodes: [], edges: [] });

  const handleTaskChange = (fileName) => {
    fetch(`flow/${fileName}.json`)
      .then(response => { console.log(response); return response.json() })
      .then(jsonData => {
        const nodes = jsonData.nodes;
        const edges = jsonData.edges;
        setData({ nodes, edges });
      });
  };

  useEffect(() => {
    handleTaskChange('t0');
  }, []);

  return (
    <Grid container>
      <Grid item xs={3}>
        <TaskList onTaskChange={handleTaskChange} />
      </Grid>
      <Grid item xs={9}>
        <Graph data={data} />
      </Grid>
    </Grid>

  );
};

export default App;
