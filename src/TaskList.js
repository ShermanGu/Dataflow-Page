import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import tablist from './tablist.json';

const tasks = tablist; // Hardcoded list of tasks
export default function TaskList({onTaskChange}) {
  return (
    <Box className = 'tabs'>
        <List>
        {tasks.map(task => (
          <ListItem disablePadding key={task}>
            <ListItemButton onClick={() => onTaskChange(task)} className='button'>
              <ListItemText primary={task} align ='center'/> 
            </ListItemButton>
          </ListItem>
        ))}
        </List>
    </Box>
  );
}