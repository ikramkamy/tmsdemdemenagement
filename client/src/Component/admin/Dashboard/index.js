import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import './dashboard.css'
import DrawLineGraph from './Drawlinegraph'
import PieChart from './CirclGraph'
const Dashboard=(props)=>{
    const {user,soto,tranquille ,stok}=props;
    const canvasRef = useRef(null);
    useEffect(() => {
        const data = [10, 20, 15, 30, 25, 35, 40];
        const canvas = canvasRef.current;
        const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
        const yLabel = 'Subscribers';
        const axisColor = '#2C216F';
        const axisWidth = 3;
        const lineColor="yellow"
        DrawLineGraph(canvas, data,xLabels,yLabel,axisColor,axisWidth,lineColor);
      }, []);
    
return(<div className='dashbord'>
    <div className='primary_statistics'>
        <div className='stat_1'>
            <div className='top_stat_item'>
                <div className='icon_stat'><img 
                src="./images/icones/admin/users.png" alt="les visiteurs du site TMSDEM"/></div>
                <div className='valu_stat'>{user.length}</div> 
                </div>
            <div className='but_stat_item'>Visiteurs</div>
            
            </div>
        <div className='stat_1'>
        <div className='top_stat_item'>
                <div className='icon_stat'><img src="/images/icones/admin/statistics.png" alt="la formule soto"/></div>
                <div className='valu_stat'>{soto.length}</div> 
                </div>
            <div className='but_stat_item'>Soto</div>
            
            
            </div>
        <div className='stat_1'>
        <div className='top_stat_item'>
                <div className='icon_stat'>
                    <img src="/images/icones/admin/trend.png" alt="la formule tranquile"/></div>
                <div className='valu_stat'>145</div> 
                </div>
            <div className='but_stat_item'>Tranquille</div>
            </div>
        <div className='stat_1'>
        <div className='top_stat_item'>
                <div className='icon_stat'><img src="/images/icones/admin/bar.png"  alt="la formule stock"/></div>
                <div className='valu_stat'>145</div> 
                </div>
            <div className='but_stat_item'>Stock</div>
            
            </div>
       
    </div>
    <div className='graphs'>

        <div className='graph'></div>
        <div className='graph'></div>
        
    </div>
    <div className='wrap_graph'>
        <div className='graphs_styling'>
    <PieChart data={[10, 20, 30]} colors={['#ED1C24', 'white', '#2C216F']} />
<p>La pourcentage de chaque formule</p>
</div>
<div className='graphs_styling'>
    <canvas ref={canvasRef} width={400} height={300}  />
    <p>l'évolution du nombre des inscrits par mois</p>
    </div>
    </div>

</div>)
}
export default Dashboard;