import { Paper,Grid } from '@material-ui/core';
import React from 'react';
import CallIcon from '@material-ui/icons/Call';
import './index.scss';
export default function StateCardNew(props) {
    console.log(props);
  return (
    <>
        < Paper elevation = {
            2
        }
        style = {
            {
                padding: '20px',
                width: '90%',
                borderRadius: '10px',
                backgroundColor: '#EDEFFD55'
            }
        } >
            <Grid container justify="center" alignItems="center" direction="row" spacing={2}>
                <Grid item xs={12} >
                    <span className="state-name">
                        {props.state}
                    </span>
                </Grid>
                <Grid container spacing item xs={12}>
                    <Grid container item xs={12} >
                        <Grid container justify="center" item xs={12} md={6}>
                            
                                <span className="title">
                                Rural Hospitals :
                                </span>
                                < span className = "value" >
                                    {props.ruralHospitals}
                                </span>
                            
                        </Grid>
                        <Grid container justify="center" item xs={12} md={6}>
                           
                                <span className="title">
                                Rural Beds :
                                </span>
                                < span className = "value" >
                                    {props.ruralBeds}
                                </span>
                            
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} >
                        <Grid container justify="center" item xs={12} md={6}>
                            
                                <span className="title">
                                Urban Hospital :
                                </span>
                                < span className = "value" >
                                    {props.urbanHospitals}
                                </span>
                           
                        </Grid>
                        <Grid container justify="center" item xs={12} md={6}>
                            
                                <span className="title">
                                Urban Beds :
                                </span>
                                < span className = "value" >
                                    {props.urbanBeds}
                                </span>
                            
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} >
                        <Grid container justify="center" item xs={12} md={6}>
                            
                                <span className="title">
                                Total Hospital :
                                </span>
                                < span className = "value" >
                                    {props.totalHospitals}
                                </span>
                            
                        </Grid>
                        <Grid container justify="center" item xs={12} md={6}>
                            
                                <span className="title">
                                Total Beds :
                                </span>
                                < span className = "value" >
                                    {props.totalBeds}
                                </span>
                            
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction='row' justify="center" item xs={12}>
                    <span className="helpline-title">
                            Helpline Number : &nbsp;
                    </span>
                    
                    <a className = "helpline-value"
                    href = {`tel:${props.number}`} >
                         < CallIcon className = 'helpline-icon' / >
                         < span className='phone'> {props.number} </span>
                     </a >
                </Grid>
            </Grid>
        </Paper>
    </>
  );
}
