import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datasource";
import { Link } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './table.css';
import axios from 'axios'

const AppFooter = () => {
    const [places, setPlaces] = useState([]) ;
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res => 
            setPlaces(res.data))

        .catch(err => console.log(err));
    },[])
    const handleDelete = async(id) => {
        try{
            await axios.delete('http://localhost:8081/place/'+id)
            window.location.reload()
        }catch(err){
            console.log(err);

        }
    }
    
    
    console.log(places)
    
    
    return (
        
        <div className='datatable'>
            <div className="datatableTitle">
                Touristic places
                <Link to="/home/posts/new" className="link">
                    Add New
                </Link>
            </div>
            
            <div className=' justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>place-name</th>
                            <th>description</th>
                            <th>categorie</th>
                            <th>theme</th>
                            <th>Wilaya</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            places.map((data,i)=>(
                                <tr key={i}>
                                    <td>{data.id}</td>
                                    <td>{data.place_name}</td>
                                    <td>{data.description}</td>
                                    <td>{data.categorie}</td>
                                    <td>{data.theme}</td>
                                    <td>{data.wilaya}</td>
                                    <td>
                                        <Link to ={`/posts/modifier/${data.id}`}className='btn btn-primary'>update</Link>
                                        <button className='btn btn-danger ms-2' onClick={ e => handleDelete(data.id)}>delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
           </div>
           
        </div>
        
        
    )
}
export default AppFooter
