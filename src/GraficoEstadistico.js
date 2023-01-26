import {useState,useEffect} from 'react';
import './App.css';
import { getStoreApi } from './Api/store';

import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import {Pie} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
ChartJS.register(BarElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend)
function GraficoEstadistico(){
    
    const [ventas,setventas]=useState([]);
  const [id_tienda,setid_tienda]=useState([]);
  const datos={
    labels:id_tienda,
    datasets:[
        {
            label:'Area de la Tienda',
            backgroundColor:['rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'],
            borderColor:'black',
            borderWidth:1,
            hoverBackgroundColor:'rgba(255,0,0,0.2)',
            hoverBorderColor:"#FFFF00",
            data:ventas
        }
    ]
};
const opciones={
    maintainAspectRatio:false,
    responsive:true
} 
  useEffect(()=>{(async () => {
    var tmp_ventas=[];
    var tmp_id_tienda=[];
  let response = await getStoreApi("Store_Area",5);
  response.map(elemento=>{
    tmp_id_tienda.push(elemento.Store_id);
    tmp_ventas.push(elemento.Store_Area);
});
setid_tienda(tmp_id_tienda);
setventas(tmp_ventas);
})();},[])
  console.log(id_tienda);
  
    return(
        datos &&(
        <div style={{width:'100%',height:'300px'}}>
            <Bar data={datos} options={opciones}></Bar>
            <Pie data={datos} options={opciones}></Pie>
        </div>)
    );

}
export default GraficoEstadistico