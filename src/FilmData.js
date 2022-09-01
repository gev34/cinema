import React, { useState,useEffect } from "react"
import ShowData from './ShowData'


const DataInfoContext = React.createContext('')

function FilmData(){
    const [searchValue , setSearchValue] = useState('');
    const [data , setData] = useState('');
    const [val , setVal] = useState(false)
    const [val2 , setVal2] = useState(false)

    useEffect(()=>{
         fetch('https://ghibliapi.herokuapp.com/films').then((result) => result.json()).then((result) => setData(result));
    } , [])
   
    function ShowAll (){
        return(
            <div>
                {data.map((film)=>{
                    return (
                        <div>
                            {film.title}
                        </div>
                    )
                })}
            </div>
        )
       
    }
    
        
    return (
        <>
        <DataInfoContext.Provider value={[data ,searchValue]}>
        <form onSubmit={(e)=>{
            e.preventDefault();
            setVal(true)
        }}>
            <input type = "text" onChange={(e)=>{
                setSearchValue(e.target.value)
            }}/>
            <button>Search</button>
            <button onClick = {() =>{
                setVal2(!val2)
            }}>Show All</button>
        </form>
        {
            val2 && (
                <ShowAll/>)
                }
        
        {
            val && (
                <ShowData/>)
                }
            </DataInfoContext.Provider>
    </>
    )
}


export { FilmData, DataInfoContext}