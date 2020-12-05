import React, {useEffect, useState} from "react";
import axios from "axios"
import '../App.css'
import NumberFormat from "react-number-format"

 const Global = () => {
     const [positif, setPositif] = useState();
     const [Meninggal, setMeninggal] = useState();
     const [Sembuh, setSembuh] = useState();
     useEffect(() => {
         axios 
         .get("https://covid19.mathdro.id/api")
         .then((response) =>

         {
             setPositif(response.data.confirmed.value);
             setMeninggal(response.data.deaths.value);
             setSembuh(response.data.recovered.value);
         })
     }, []);

    
     return( 

        
         <div>
             <b>Jumlah kasus seluruh dunia</b>
            <br></br>
            <h1 className="boxpositif"> Positif <NumberFormat value={positif} thousandSeparator={true} displayType={'text'}/></h1>
             <h1 className ="boxmeninggal">Meninggal <NumberFormat value={Meninggal} thousandSeparator={true} displayType={'text'}/></h1>
             <h1 className ="boxsembuh">Sembuh <NumberFormat value={Sembuh} thousandSeparator={true} displayType={'text'}/></h1>
             
             
         </div>
     )
 }
 export default Global



