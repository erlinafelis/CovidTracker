import React, {useEffect, useState} from "react";
import axios from "axios"
import '../App.css'
import NumberFormat from 'react-number-format';

 const Indonesia = () => {
     const [perawatan, setPerawatan] = useState([]);
     const [meninggal, setMeninggal] = useState([]);
     const [sembuh, setSembuh] = useState([]);
     useEffect(() => {
         axios 
         .get("https://indonesia-covid-19.mathdro.id/api")
         .then((response) =>

         {
             setPerawatan(response.data.perawatan);
             setMeninggal(response.data.meninggal);
             setSembuh(response.data.sembuh);
         })
     }, []);

    
     return( 

        
         <div>
             <b>Jumlah kasus di indonesia</b>
           <br></br>
             <h1 className ="boxpositif">Positif {perawatan}</h1>
             <h1 className ="boxmeninggal">Meninggal {meninggal}</h1>
             <h1 className ="boxsembuh">Sembuh {sembuh}</h1>
            </div>
        
     )
 }
 export default Indonesia;