import React, { useEffect, useState } from 'react';
import HeaderCard from './HeaderCard';
import StateCardNew from './StateCardNew';
import StateSelect from './StateSelect';

export default function State() {
  
  const [states, setStates] = useState(["ahhhs", "akkab", "cakka", "da", "aje", "af", "jag"])
  const [filteredList,setFilteredList] = useState(states);
  const mask=(val)=>{
    console.log('mask called ',val);
    let res= states.filter(state=>match(state,val));
    console.log(res);
    console.log(states);
    setFilteredList([...res]);
  }
  const match=(state,val)=>{
    if(val.length){
      for(let i=0;i<=state.length-val.length;i++){
        if(state[i]===val[0]);
        let j=0;
        while (j<val.length) {
          if(state[j+i]!==val[j])
            break;
          j++;
        }
        if(j===val.length) return true;
      }
      return false;
    }
    return true;
  }
  useEffect(()=>{console.log('useeffect called',filteredList)},[filteredList]);
  return (
    <>
    <HeaderCard />
    <StateCardNew />
    <input onChange={(e)=>mask(e.target.value)} />
    
    <div style={{width: '400px',height: '500px'}}>
      
      < StateSelect.Card1 states = {
        filteredList
      }
      handleClick = {
        () => console.log("clicked")
      }
      />
    </div>
    
    </>
  );
}
