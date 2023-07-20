import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const tasks = ['t3', 't2', 't0']; // Hardcoded list of tasks
export default function TaskList({onTaskChange}) {
  return (
    <Box className = 'tabs'>
        <List>
        {tasks.map(task => (
          <ListItem disablePadding key={task}>
            <ListItemButton onClick={() => onTaskChange(task)} style={{height:'4vw'}}>
              <ListItemText primary={task} align ='center'/> 
            </ListItemButton>
          </ListItem>
        ))}
        </List>
    </Box>
  );
}