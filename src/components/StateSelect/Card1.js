import { Grid, List, ListItem, ListItemText, Paper } from '@material-ui/core';
import React from 'react';
import './index.scss';
export default function Card1({states,handleClick}) {
// console.log("inside card1",states);
  return (
    <>
    {/* <div style={{}}> */}
      <List style={{maxWidth:'100%',maxHeight:'100%',overflowY: 'auto'}} dense>
      {states.map((state=>
      <ListItem alignItems="center" button key={state} onClick={()=>handleClick(state)}>
        < ListItemText primary = {
            < span style = {
              {
                fontSize: '17px',
                fontWeight: 700,
                color: '#A09CB4'
              }
            } >
          {state}
        </span>} />
      </ListItem>
        ))}
    </List>
    {/* </div> */}
    
    </>
  );
}
