import React, { useState } from 'react';
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


function ColorBox({ color, size }) {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        backgroundColor: color,
        border: '1px solid black',
        cursor: 'pointer',
      }}
    />
  );
};

export default function GridNode({ grid, size }) {
  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
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
  );
};
