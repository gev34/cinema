import { useContext } from "react";
import { DataInfoContext } from "./FilmData";

function ShowDataInfo() {
  const datainfo = useContext(DataInfoContext);
  let data = datainfo[0];
  let searchValue = datainfo[1];
  for(let i = 0 ; i < data.length ; i++){
      if(searchValue === data[i].title){
          return (
            <div>
               <img url ={data[i].image} alt="asd"/> 
                Name: {data[i].title}
                Director:{data[i].director}
                
            </div>
          )

      }
  }
}

export default ShowDataInfo;
