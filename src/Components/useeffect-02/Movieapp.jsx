import { all } from 'axios';
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
      Setalldata(res.Search);
      console.log(alldata);
    }
    
  return (
    <div style={{width:"100%",height:"auto",border:"2px solid red",boxSizing:"border-box"}}>
        <div style={{width:"80%",textAlign:"center",border:"2px solid yellow",margin:"0px auto"}}>
        <h2>Movie App</h2>
        <div style={{display:"flex",justifyContent:"center"}}>
        <input type='text' placeholder='Enter Your movie name' onChange={(e)=>{
           Settextvalue(e.target.value);
        }} style={{padding:"10px 50px"}}></input>
        <button onClick={fetch_data} style={{padding:"10px 50px",background:"black",color:"white"}}>Search</button>
        </div>
        
          <div style={{display:"flex",flexWrap:"wrap"}}>
            {
              alldata == ''? <h2 style={{textAlign:"center"}}>'please load the movie' </h2>:
               alldata.map((ele)=>{
                return(
                  <div style={{width:"250px",boxShadow:"0px 0px 5px black",margin:"20px",borderRadius:"10px"}}>
                    <img src={ele.Poster} width="250px" height="250px"></img>
                    <h2 style={{color:"green",fontSize:"18px"}} >{ele.Title}</h2>
                    <h4>{ele.Type}</h4>
                    <h5>{ele.Year}</h5>
                    </div>
                )
              })
          }    
          </div>
        </div>
    </div>
  )
}

export default Movieapp
