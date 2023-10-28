import React, { useEffect, useState } from "react";
import Loading from '../../components/Loading/Loading'

import "./Homepage.css";


const Homepage = () => {

  const url = " https://api.quicksell.co/v1/internal/frontend-assignment ";

  // array of objects
  const [list,setList]=useState([]);
  const [masterList,setmasterList]=useState([]);
  const [loading,setLoading]=useState(true);

  const fetchItems=async()=>{
      setLoading(true);
    try{
      const data=await fetch(url);
      const res=await data.json();
      setLoading(false);
      setList(res);
      setmasterList(res);
      console.log(list);

    }
    catch(err){
      setLoading(false);
      console.log(err);

      
    }
  }

  useEffect(()=>{
    fetchItems();

  },[])

  if(loading){
    return (
      <Loading/>
    )
  }
  
  return (
    <>
      <div className="full">
        <div className="nav">Display</div>
        <div className="display"></div>
      </div>

    </>
  );
};

export default Homepage;
