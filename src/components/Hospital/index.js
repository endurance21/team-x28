import { Divider, Grid, ListItem, ListItemText } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "./index.scss";
import Axios from "axios";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
      // height:30
    },
  },
}))(TableRow);
const useStyles = makeStyles((theme)=>({
  table: {
    minWidth: 700,
    // height: 700,
    overflow: "auto",
    // height: '90%'
  },
  root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: "90%",
      backgroundColor: "#F0F3F7",
      borderRadius: "50px",
      position: "relative"
    },
    listVisible:{
      position:'absolute',
      top:'100%',
      left:'7%',
      // backgroundColor:'#ffffff',
      width:'90%',
      maxHeight:'300px',
      minHeight:'100px',
      borderRadius:'20px',
      zIndex:1,
      display:'flex',
      flexDirection:'column',
      overflow:'auto',
      padding:'30px',
      paddingTop:'10px'

    },
    listNotVisible:{
      display:'none'

      // position: 'absolute',
      // bottom: 0,
      // left: 0,
      // width: '100%',
      // borderRadius: '20px',
      // zIndex: 1,
      
      // flexDirection: 'column'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },

    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
}));
export default function Hospital() {
  const [dataList, setDataList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [selectedState,setSelectedState] = useState('');
  const [selectedType,setSelectedType] = useState('');

  const [states,setStates] = useState([]);
  const [selectedStatesList,setSelectedStatesList] = useState([]);
  const [types,setTypes] = useState([]);
  // let types = [];
  const mask = (val) => {
    console.log("mask called ", val);
    let res = states.filter((state) => match(state, val));
    console.log(res);
    console.log(states);
    setSelectedStatesList([...res]);
  };
  const match = (state, val) => {
    if (val && val.length && state && state.length) {
      state = state.toUpperCase();
      val = val.toUpperCase();
      for (let i = 0; i <= state.length - val.length; i++) {
        if (state[i] === val[0]);
        let j = 0;
        while (j < val.length) {
          if (state[j + i] !== val[j]) break;
          j++;
        }
        if (j === val.length) return true;
      }
      return false;
    }
    return true;
  };
  useEffect(() => {
    (async () => {
      let res = await Axios.get(
        "https://api.rootnet.in/covid19-in/hospitals/medical-colleges"
      );
      console.log(res);
      let data = res.data.data.medicalColleges;
      console.log(data);
      let t1=new Set();
      let t2= new Set();
      data.forEach((item,index)=>{
        t1.add(item.state);
        t2.add(item.ownership);
        item.key=index;
      })
      t1 = Array.from(t1);
      t2 = Array.from(t2);
      setStates(t1);
      setSelectedStatesList(t1);
      setTypes(t2);
      // setSelectedType
      console.log("states are",t1);
      console.log("types are", t2);
      setDataList(data);
      setFilteredList(data);

    })();
  }, []);
  const classes = useStyles();

  const [menu, setMenu] = useState(false);

  const handleFocus = (event) => {
    // setAnchorEl(event.currentTarget);
    // console.lo
    console.log("Handle Focus called", event.currentTarget);
    setMenu(true);
  };

  const handleClose = () => {
    console.log("handleclose Called");
    // setAnchorEl(null);
    setMenu(false);
  };

  return (
    <div className="container">
      <div className="heading">
        <h1> Hospital Dashboard </h1>
        < Divider / >
      </div>
      
      <div className="form">
        <Grid container style={{padding:'20px'}}>
          <Grid item direction='column' alignItems='center' container justify="center" xs={12} md={6} style={{paddingLeft:'50px',paddingRight:'50px'}}>
            < Paper component = "form"
            className = {
              classes.root
            }
            aria-controls = "simple-menu"
            aria-haspopup = "true" >
              <InputBase
                className={classes.input}
                placeholder="Search states"
                onChange={(e) => {
                  mask(e.target.value)}}
                inputProps={{ "aria-label": "search google maps" }}
                onFocus={handleFocus}
                // onBlur={handleClose}
              />
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
              <Paper className={(menu)?classes.listVisible:classes.listNotVisible}>
                {/* <ListItem */}
                  {
                    selectedStatesList.map(item => ( < ListItem button className = {
                            classes.listItem
                          }
                          onClick = { 
                            () => {
                              console.log("clicked",item);
                              handleClose();
                              setSelectedState(item);
                              let temp = dataList.filter((data) => match(data.state,item) && match(data.ownership,selectedType));
                              setFilteredList(temp);
                              console.log('temp ',temp);
                            }
                          } 
                          key={item}
                          >
                        <ListItemText primary={<span>{item}</span>} />
                    </ListItem>))
                  }
              </Paper>
            </Paper>
                <h3>{selectedState}</h3>
          </Grid>
          <Grid item container justify="center" xs={12} md={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={selectedType}
                    onChange={(e)=>{
                      setSelectedType(e.target.value)
                      let item = e.target.value;
                      let temp = dataList.filter((data) => match(data.state, selectedState) && match(data.ownership, item));
                      setFilteredList(temp);
                      console.log('temp ', temp);
                    }}
                    label="Type"
                  >
                  <MenuItem value="">
                    <em>All</em>
                  </MenuItem>
                  {
                    types.map(type=>(<MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>))
                  }
                </Select>
              </FormControl>
          </Grid>
        </Grid>
        < Divider / >
      </div>
      
      <div className="table">
        <TableContainer style={{height: "100%",padding:'10px'}} component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                
                <StyledTableCell  align="right">State</StyledTableCell>
                <StyledTableCell  align="right">Name</StyledTableCell>
                <StyledTableCell align="right">City</StyledTableCell>
                <StyledTableCell align="right">Ownership</StyledTableCell>
                <StyledTableCell align="right">
                  Admission Capacity
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredList.map((item) =>(
                <StyledTableRow   key={item.key}>
                  <StyledTableCell   component="th" scope="row">
                    {item.state}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.name}</StyledTableCell>
                  <StyledTableCell align="right">{item.city}</StyledTableCell>
                  <StyledTableCell align="right">
                    {item.ownership}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.admissionCapacity}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
