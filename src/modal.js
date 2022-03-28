import './modal.css';
import { useState } from 'react';

const url = 'http://localhost:5000/api/movements';


function Modal({ onclose }) {


    const [datos, setDatos] = useState({
        description: '',
        amount: ''
    })



    const handleInputChange = (e) => {
            // console.log (e.target.value)
            setDatos({
                ...datos,
                [e.target.name] : e.target.value
            })                                                                                                                                                                                               

    }

    const enviarDatos= async e=>{
            e.preventDefault();
            // console.log(datos.service + ' ' + datos.amount);
           
            try {
                let config = {
                    method: 'POST',
                    headers: {
                        'Accept':'application/json',
                        'Content-type':'application/json'
                        },
                        body: JSON.stringify(datos)
                                       
                }
                let res = await fetch(url, config);
                let json = await res.json()
                console.log (json)
                onclose(false);
            } catch (error){

            }
    }

    return (
        
        <div className='container-form' >
            <form id="agregar" onSubmit={enviarDatos}>
                <div className='container-title'>
                    <h4>NEW MOVEMENT</h4>
                    <h4 className='modal-x' onClick={() => onclose(false)}>X</h4>

                </div>
                <label className='label-input' htmlFor="service">
                    Service Name
                    <input
                        type="text"
                        name="description" 
                        id="service"
                        onChange={handleInputChange}
                    />
                </label>
                <label className='label-input' htmlFor="amount">
                    Amount
                    <input
                        type="text"
                        name="amount"
                        id="amount"
                        onChange={handleInputChange}
                    />
                </label>
                <button onClick={useState} className='button-agregar' type="submit" value="Agregar">ADD</button>
            </form>
            {/*         
            <form id="agregar">
                <div className='container-title'>
            <h4>NEW MOVEMENT</h4>
            <h4 className='modal-x' onClick={()=>onclose(false)}>X</h4>
            
            </div>
                <label className='label-input' for="service">
                    Service Name
                    <input type="text" name="name" id="service"/>
                </label>
                <label className='label-input' for="amount">
                    Amount
                    <input type="text" name="name" id="amount"/>
                </label>
                <button onClick={miPost} className='button-agregar' type="submit" value="Agregar">ADD</button>
            </form> */}


        </div>
        
    )

    
}

export default Modal