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
            <table border="3" className="table covid">
                <tr>
                    <td className="table1">No</td>
                    <td className="table2">Provinsi</td>
                    <td className="table3">Positif </td>
                    <td className="table4">Sembuh</td>
                    <td className="table5">Meninggal</td>
                </tr>
                {provinsiData.map((item, index) => {
                    return(
                        <tr>
                            <th className="table1"scope="row" key={item.fid}>{index + 1}</th>
                            <td className="table2">{item.provinsi}</td>
                            <td className="table3"><NumberFormat value={item.kasusPosi} thousandSeparator={true} displayType={'text'}/></td>
                            <td className="table4"><NumberFormat value={item.kasusSemb} thousandSeparator={true} displayType={'text'}/></td>
                            <td className="table5"><NumberFormat value={item.kasusMeni} thousandSeparator={true} displayType={'text'}/></td>
                        </tr>
                    )
                })}
            </table>
        </div>    
    )
}