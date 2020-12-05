import React, {useEffect, useState} from "react";
import axios from "axios"
import '../App.css'
//import NumberFormat from 'react-number-format';

 const Indonesia = () => {
     const [terkena, setTerkena] = useState([]);
     const [die, setDie] = useState([]);
     const [pulih, setPulih] = useState([]);
     useEffect(() => {
         axios 
         .get("https://indonesia-covid-19.mathdro.id/api")
         .then((response) =>

         {
             setTerkena(response.data.perawatan);
             setDie(response.data.meninggal);
             setPulih(response.data.sembuh);
         })
     }, []);

    
     return( 

        
         <div>
             <b>Jumlah kasus di indonesia</b>
           <br></br>
           <h1 className ="boxpositif">Positif {terkena} </h1>
           <h1 className ="boxsembuh">Sembuh {pulih}</h1>
           <h1 className ="boxmeninggal">Meninggal {die}</h1>

            {/* <h1 className ="boxmeninggal">Meninggal <NumberFormat value={Meninggal} thousandSeparator={true} displayType={'text'}/></h1> */}
             {/* <h1 className ="boxsembuh">Sembuh <NumberFormat value={sembuh} thousandSeparator={true} displayType={'text'}/></h1> */}
            </div>
        
     )
 }
 export default Indonesia;