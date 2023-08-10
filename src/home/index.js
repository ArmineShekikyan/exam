import React,{useState, useEffect} from 'react';
import { datas } from '../data';
import { nameData } from '../data';
const Cart = ()=>{
    const [list,setList]=useState([]);
    const [value,setValue]=useState('');
    const getingData =async()=>{
        try{
            const response = await fetch(`${datas}/${value}`);
            const info = await response.json();
            setList(info);
            console.log(info)
        }catch (error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getingData();
    },[value]);
    return(
        <>
<input type='search' value={value} onChange={(e)=>setValue(e.target.value)}/>
{list.map(({name:{common},languages, timezones, flags: {png, alt}})=>(
    <div>
        <h2>{common}</h2>
      <p>{languages ? Object.values(languages).join(','):''}</p>
      <p>{timezones.join(',')}</p>
        <img className='image' src={png} alt ={alt}/>
    </div>
))}
        </>
    )
}
export default Cart;