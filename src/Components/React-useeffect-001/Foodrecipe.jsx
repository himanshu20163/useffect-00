
import React, { useEffect, useState } from 'react'

const Foodrecipe = () => {
    const [food, Setfood] = useState('salad');
    const [alldata, Setalldata] = useState([]);

    const ans = async () => {
        const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=d0d7bc25&app_key=8b2bff8bc01f609505a0f1b701111946`);
        const response = await data.json();
        console.log(response.hits);
        Setalldata(response.hits);
        console.log(alldata);
    }
    useEffect(() => {
        ans();
    }, [])

    return (
        <div style={{margin:"20px 0px",width:"100%"}}>
            <div style={{margin:"0px auto",width:"100%",textAlign:"center"}}>
            <input type='text' onChange={(e) => {
                Setfood(e.target.value);
            }} style={{padding:"10px 50px"}} placeholder='Search Your favourite recipe'/>
            <button onClick={ans} style={{backgroundColor:"black",color:"#fff",padding:"10px 30px"}}>Search</button>
            </div>
            <br />
            {
                alldata == '' ? 'no data found' :
                    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
                        {
                            alldata.map((e) => {
                                return (
                                    <div style={{margin:"10px"}}>
                                        <img src={e.recipe.image}></img>
                                        <h3>{e.recipe.source}</h3>
                                        <h5>calories: {parseInt(e.recipe.calories)}</h5>
                                    </div>
                                )
                                    
                            })
                        }
                    </div>
            }
        </div>
    )
}

export default Foodrecipe