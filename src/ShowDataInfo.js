import { useContext } from "react";
import { DataInfoContext } from "./FilmData";
import './showDataInfo.css'


function ShowDataInfo() {
  const datainfo = useContext(DataInfoContext);
  let data = datainfo[0];
  let searchValue = datainfo[1];
  for(let i = 0 ; i < data.length ; i++){
      if(searchValue === data[i].title){
          return (
            <div className="info">
               <img src ={data[i].image} alt="asd"/> 
               <div>Name: {data[i].title}</div> 
                <div>Director: {data[i].director}</div>   
                <div>Release Date: {data[i].release_date}</div>     
                <div>Time: {data[i].running_time}</div>     
            </div>
          )

      }
  }
}

export default ShowDataInfo;
