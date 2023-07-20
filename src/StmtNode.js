import * as React from 'react';
import { Handle, Position } from 'reactflow';

import { Box } from '@mui/system'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function StmtNode({data}) {

  return (
    <>
    <Handle type="target" position={Position.Top} />
    <Box width={300} height={300} display="inline-block">
    <Card style={{ width: 300, height: 300 }}>
      <CardContent style={{overflow: 'clip'}}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Statement
        </Typography>
        <Typography variant="h5" component="div">
          {data.stmt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Box>
    <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
}