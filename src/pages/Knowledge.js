import React,{useEffect, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import Card from '../component/Card'
import {cards} from '../cards'


function Knowledge() {
  const [curr,setCurr] = useState("All");
  const [data,setData] = useState([...cards])
  const [team,setTeam] = useState("");
  console.log(team)

  useEffect(()=>{
    if (curr==="All"){
      let narr = cards.filter((obj)=>obj.teams.includes(team))
      setData([...narr])
      return
    }
    let temp = cards.filter((obj)=>obj.stat===curr)
    let narr = temp.filter((obj)=>obj.teams.includes(team))
    setData([...narr])
  },[curr,team])

  return (
    <div class="p-10 flex flex-col" style={{backgroundColor:"#e9ecf2",height:"100%"}}>
      <nav class="flex flex-row justify-between">
        <div class="flex flex-row gap-8 font-medium pb-10">
          <a href='#' style={curr==="All" ? {textDecoration:"underline"}:{}}  onClick={()=>setCurr("All")}>All</a>
          <a href='#' style={curr==="Live" ? {textDecoration:"underline"}:{}}  onClick={()=>setCurr("Live")}>Live</a>
          <a href='#' style={curr==="Archive" ? {textDecoration:"underline"}:{}} onClick={()=>setCurr("Archive")} >Archive</a>
          <a href='#' style={curr==="Draft" ? {textDecoration:"underline"}:{}}  onClick={()=>setCurr("Draft")}>Draft</a>
        </div>
        <div >
        <select class="w-40 font-sm" onChange={(e)=>setTeam(e.target.value)}>
            <option value="" selected disabled hidden>Select Team</option>
            <option value="">All</option>
            <option value="Alpha">Alpha</option>
            <option value="Beta">Beta</option>
            <option value="Bravo">Bravo</option>
        </select>
        </div>
      </nav>
      <div class="flex flex-row gap-6 flex-wrap" style={{height:"100vh"}}>
        {
          data.map((ele,idx)=>(
            <Card key={idx} props={ele} />
          ))
        }


      </div>
        
    </div>
  )
}

export default Knowledge