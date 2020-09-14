import { Grid, InputAdornment, Paper, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
// import HeaderCard from './HeaderCard';
import StateCardNew from "../StateCardNew";
import StateSelect from "../StateSelect";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from '@material-ui/core/Paper';
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from "@material-ui/icons/Directions";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "90%",
    backgroundColor: "#F0F3F7",
    borderRadius: "50px",
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

export default function State() {
  const classes = useStyles();
  const [states, setStates] = useState([]);
  const [objs,setObjs] = useState({});
  const [selected, setSelected] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const mask = (val) => {
    console.log("mask called ", val);
    let res = states.filter((state) => match(state, val));
    console.log(res);
    console.log(states);
    setFilteredList([...res]);
  };
  const match = (state, val) => {
    if (val.length) {
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
    console.log("new usefeefect");
    (async () => {
      let res = await Axios.get("https://api.rootnet.in/covid19-in/contacts");
      let data = res.data.data.contacts.regional;
      console.log("axios res", data);
      let res2 = await Axios.get(
        "https://api.rootnet.in/covid19-in/hospitals/beds"
      );
      let data2 = res2.data.data.regional;
      console.log(data2);
      let arr = {};

      for (let i = 0; i < data.length; i++) {
        arr[data[i].loc] = { ...arr[data[i].loc], ...data[i] };
        // arr[data2[i].state]={...arr[data2[i].state],...data2[i]};
      }
      for (let i = 0; i < data2.length; i++) {
        // arr[data[i].loc] = { ...arr[data[i].loc], ...data[i] };
        arr[data2[i].state] = { ...arr[data2[i].state], ...data2[i] };
      }
      let temp = [];

      console.log("arr is", arr);
      console.log("temp is", temp);
      setObjs(arr);
      //   arr.forEach((item) => console.log(item));
      //   console.log(arr.keys)
      temp = Object.keys(arr);
      console.log(temp);
      setStates(temp);
      setFilteredList(temp);
    })();
  }, []);
  let obj = {
    state: "Arunachal Pradesh",
    ruralHospitals: 3733,
    ruralBeds: 56721,
    urbanHospitals: 2312,
    urbanBeds: 23456,
    totalHospitals: 23456,
    totalBeds: 12345654,
    number: "+91-118289-289",
  };
  const handleClick = (value) =>{
      console.log(value);
      setSelected(value);
  }
  return (
    <>
      {/* <HeaderCard /> */}
      <Paper
        style={{
          margin: "20px",
          borderRadius: "10px",
          backgroundColor: "#ffffff55",
        }}
      >
        <Grid style={{ padding: "10px" }} container>
          <Grid item xs={12} md={4} style={{ padding: "20px" }}>
            <Paper component="form" className={classes.root}>
              <InputBase
                className={classes.input}
                placeholder="Search states"
                onChange={(e) => mask(e.target.value)}
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
              {/* <Divider className={classes.divider} orientation="vertical" />
                    <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                        <DirectionsIcon />
                    </IconButton> */}
            </Paper>

            <div style={{ height: "300px" }}>
              <StateSelect.Card1
                states={filteredList}
                handleClick={handleClick}
              />
            </div>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={8}
            alignItems="center"
            justify="center"
          >
            <StateCardNew {...objs[selected]} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
