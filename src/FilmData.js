import React, { useState,useEffect } from "react"
import ShowData from './ShowData'
import './FilmData.css'


const DataInfoContext = React.createContext('')

function FilmData(){
    const [searchValue , setSearchValue] = useState('');
    const [data , setData] = useState('');
    const [showAll , setShowAll] = useState(false);
    const [showSearch , setShowSearch] = useState(false);

    useEffect(()=>{
         fetch('https://ghibliapi.herokuapp.com/films').then((result) => result.json()).then((result) => setData(result));
    } , [])
   
    function ShowAll (){
        return(
            <div className="films">
                {data.map((film)=>{
                    return (
                        <div className="film">
                            <img src ={film.image} alt="asd"/> 
                            <div>Name: {film.title}</div> 
                            <div>Director: {film.director}</div>   
                            <div>Release Date: {film.release_date}</div>     
                            <div>Time: {film.running_time}</div>     
                        </div>
                    )
                })}
            </div>
        )
       
    }
    
        
    return (
        <div className = "parent">
        <DataInfoContext.Provider value={[data ,searchValue]}>
        <form onSubmit={(e)=>{
            e.preventDefault();
            setShowSearch(true)
        }}>
            <input type = "text" onChange={(e)=>{
                setSearchValue(e.target.value)
            }}/>
            <button className="search">Search</button>
            <button onClick = {() =>{
                setShowAll(!showAll)
            }}>Show All</button>
        </form>
        <div>

        {
            showAll && (
                <ShowAll/>)
                }
        
        {
            showSearch && (
                <ShowData/>)
                }
                 </div>
            </DataInfoContext.Provider>
    </div>
    )
}


export { FilmData, DataInfoContext}