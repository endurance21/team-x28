import React from "react";
import SummaryCard from '../SummaryCard';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card1: {
    padding: "20px",
    flex: 1,
  },
  card2: {
    padding: "10px",
    minWidth: "200px",
  },
  container1: {
    width: "100%",
    paddingLeft: "5%",
    paddingRight: "5%",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "nowrap",
    overflowX: "auto",
    overflowY: "hidden",
  },
  container2: {
    width: "100%",
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    overflowY: "hidden",
  },
});
function HeaderCard() {
  const matches = useMediaQuery("(min-width:650px)");
  const classes = useStyles();
  return (
    <>
      <div className={matches ? classes.container1 : classes.container2}>
        <div className={matches ? classes.card1 : classes.card2}>
          <SummaryCard
            title={"Confirmed"}
            value={7390}
            subtitle={"new confirmed"}
            subvalue={123}
            color={"#fa640099"}
          />
        </div>
        <div className={matches ? classes.card1 : classes.card2}>
          <SummaryCard
            title={"Recovered"}
            value={2000}
            subtitle={"new recovered"}
            subvalue={35}
            color={"#1cb142"}
          />
        </div>
        <div className={matches ? classes.card1 : classes.card2}>
          <SummaryCard
            title={"Death"}
            value={123}
            subtitle={"new death"}
            subvalue={23}
            color={"#f9345e"}
          />
        </div>
      </div>
    </>
  );
}

export default HeaderCard;
