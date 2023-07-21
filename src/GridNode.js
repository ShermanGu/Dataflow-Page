import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { Box } from '@mui/material';

function numberToColor(number) {
  const colors = [
    "#000000",
    "#0000FF",
    "#FF0000",
    "#008000",
    "#FFFF00",
    "#808080",
    "#FFC0CB",
    "#FFA500",
    "#FFFF00",
    "#800000",
  ];

  return colors[number % 10];
};

function transpose(matrix) {
  return matrix.reduce((prev, next) => next.map((item, i) =>
    (prev[i] || []).concat(next[i])
  ), []);
}

function StringToArray(str){
  var i,flag;
  var re = [];
  var temp = [];
  flag = 0;
  for(i = 0;i<str.length;i++){
    if(str.charAt(i) == '['){
      flag ++
    }else if(str.charAt(i) == ']'){
      flag --
    }else if(str.charAt(i) == '\n'){
      re.push(temp)
      temp = [];
    }else if(str.charAt(i) == '1' && flag == 2){
      temp.push(1)
    }else if(str.charAt(i) == '2' && flag == 2){
      temp.push(2)
    }else if(str.charAt(i) == '3' && flag == 2){
      temp.push(3)
    }else if(str.charAt(i) == '4' && flag == 2){
      temp.push(4)
    }else if(str.charAt(i) == '5' && flag == 2){
      temp.push(5)
    }else if(str.charAt(i) == '6' && flag == 2){
      temp.push(6)
    }else if(str.charAt(i) == '7' && flag == 2){
      temp.push(7)
    }else if(str.charAt(i) == '8' && flag == 2){
      temp.push(8)
    }else if(str.charAt(i) == '9' && flag == 2){
      temp.push(9)
    }else if(str.charAt(i) == '0' && flag == 2){
      temp.push(0)
    }
    
  }
  if(temp.length > 0){
    re.push(temp)
  }
  return transpose(re);
}

function GetPixelSize(nest_list){
  var column, row, column_pixel, row_pixel;
  column = nest_list[0].length
  row = nest_list.length
  column_pixel = (298-(row*2))/row
  row_pixel = (278-(column*2))/column

  return (column_pixel>row_pixel ? row_pixel:column_pixel)
}


function ColorBox({ color, size }) {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        backgroundColor: color,
        border: '1px solid white',
        cursor: 'pointer',
      }}
    />
  );
};


export default function GridNode({ data }) {
  const grid = StringToArray(data.sor)
  const size = GetPixelSize(grid)
  
  return (
    <div className='DefaultNode'>
    <Handle type="target" position={Position.Top} />

    <div className = 'Var_name'> {data.name}</div>
    <Box className = 'graph'>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((cell, colIndex) => (
            <ColorBox
              key={colIndex}
              color={numberToColor(cell)}
              size={size}
            />
          ))}
        </div>
      ))}
    </Box>

    <Handle type="source" position={Position.Bottom} />
    </div>
  );
};
