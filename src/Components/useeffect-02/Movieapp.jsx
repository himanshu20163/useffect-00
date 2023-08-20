import React, { useEffect, useState } from 'react'

const Movieapp = () => {
    const[textvalue,Settextvalue] = useState('gadar');
    const[alldata,Setalldata] = useState([]);

    useEffect(() => {
        fetch_data();
    }, []);

    const fetch_data = async()=>{
      const ans = await fetch(`https://www.omdbapi.com/?s=${textvalue}&apikey=263d22d8`);
      const res = await ans.json();
      console.log(res);
    }
    
  return (
    <div style={{width:"100%",height:"auto",border:"2px solid red",boxSizing:"border-box"}}>
        <div style={{width:"80%",textAlign:"center",border:"2px solid yellow"}}>
        <h2>Movie App</h2>
        <div style={{display:"flex"}}>
        <input type='text' onChange={(e)=>{
           Settextvalue(e.target.value);
        }}></input>
        <button>Search</button>
        </div> 
          <h2>{textvalue}</h2>
        </div>
    </div>
  )
}

export default Movieapp