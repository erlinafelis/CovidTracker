import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../App.css'
import NumberFormat from "react-number-format"

export default function Provinsi (){
    const [provinsiData, Provinsi] = useState([]);
    useEffect(() => {
        axios
            .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
            .then(response => {Provinsi(response.data.data)})
            .catch(err => {console.log(err)})
    }, []);
    console.log(provinsiData)
    return(
        <div align="center">
            <table border="1" className="table-container">
                <tr>
                    <th className="table-value-first">Nomor</th>
                    <th className="table-value-second">Provinsi</th>
                    <th className="table-value-third">Positif covid</th>
                    <th className="table-value-fourth">Sembuh</th>
                    <th className="table-value-fifth">Meninggal</th>
                </tr>
                {provinsiData.map((item, index) => {
                    return(
                        <tr>
                            <th className="table-value-first"scope="row" key={item.fid}>{index + 1}</th>
                            <th className="table-value-second">{item.provinsi}</th>
                            <th className="table-value-third"><NumberFormat value={item.kasusPosi} thousandSeparator={true} displayType={'text'}/></th>
                            <th className="table-value-fourth"><NumberFormat value={item.kasusSemb} thousandSeparator={true} displayType={'text'}/></th>
                            <th className="table-value-fifth"><NumberFormat value={item.kasusMeni} thousandSeparator={true} displayType={'text'}/></th>
                        </tr>
                    )
                })}
            </table>
        </div>    
    )
}