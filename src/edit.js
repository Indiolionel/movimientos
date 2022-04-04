import './edit.css'
import { useState, useEffect } from 'react';

function Edit({ amount, description, ids, changeModal}) {

    const url = `http://localhost:5000/api/movements/`;

    const register = () => {
        
        fetch(url+ids, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                'API-Key': 'secret',
            },
            body: JSON.stringify({ amount:  firstAmount , description:  firstDescription  })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
            });
            
    }

    const [firstAmount, setFirstAmount] = useState();

    useEffect(() => {
        setFirstAmount(amount);
    }, [amount]);

    const [firstDescription, setFirstDescription] = useState();

    useEffect(() => {
        setFirstDescription(description);
    }, [description]);

    return ( 

        <div className='container-edit2'>
            <p className='inputs'>Description: <input type="text" name="nombre" value={firstDescription} onChange={e => setFirstDescription(e.target.value)} /></p>
            <p className='inputs'>Amount: <input type="text" name="nombre" value={firstAmount} onChange={e => setFirstAmount(e.target.value)} /></p>
            <button className='btn-register' onClick={()=> {changeModal(false);register()}} >Register</button>
            <p className='x' onClick={()=>changeModal(false)}>X</p>
        </div>



    )







}

export default Edit;