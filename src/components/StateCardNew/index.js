import { Paper,Grid } from '@material-ui/core';
import React from 'react';
import './index.scss';
export default function StateCardNew() {
  return (
    <>
        <Paper elevation={2} style={{padding:'20px',width: '500px'}}>
            <Grid container justify="center" alignItems="center" direction="row" spacing={2}>
                <Grid item xs={12} >
                    <span className="state-name">
                        Arunachal Pradesh
                    </span>
                </Grid>
                <Grid container spacing item xs={12}>
                    <Grid container item xs={12} >
                        <Grid container justify="center" item xs={12} md={6}>
                            
                                <span className="title">
                                Rural Hospital
                                </span>
                                < span className = "value" >
                                    56
                                </span>
                            
                        </Grid>
                        <Grid container justify="center" item xs={12} md={6}>
                           
                                <span className="title">
                                Rural Hospital
                                </span>
                                < span className = "value" >
                                    56
                                </span>
                            
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} >
                        <Grid container justify="center" item xs={12} md={6}>
                            
                                <span className="title">
                                Rural Hospital
                                </span>
                                < span className = "value" >
                                    56
                                </span>
                           
                        </Grid>
                        <Grid container justify="center" item xs={12} md={6}>
                            
                                <span className="title">
                                Rural Hospital
                                </span>
                                < span className = "value" >
                                    56
                                </span>
                            
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} >
                        <Grid container justify="center" item xs={12} md={6}>
                            
                                <span className="title">
                                Rural Hospital
                                </span>
                                < span className = "value" >
                                    56
                                </span>
                            
                        </Grid>
                        <Grid container justify="center" item xs={12} md={6}>
                            
                                <span className="title">
                                Rural Hospital
                                </span>
                                < span className = "value" >
                                    56
                                </span>
                            
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justify="center" item xs={12}>
                    <span className="helpline-title">
                        Helpline Number
                    </span>
                    <a className = "helpline-value"
                    href = "tel:123-456-7890" > 123 - 456 - 7890 </a>
                </Grid>
            </Grid>
        </Paper>
    </>
  );
}
