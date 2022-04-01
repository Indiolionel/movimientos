import './edit.css'
import { useState,useEffect } from 'react';

function Edit({valida, amount, description}) {
    
    
    const [firstAmount, setFirstAmount] = useState();
    
    useEffect(() => {
        setFirstAmount(amount);
      }, [amount]);

      const [firstDescription, setFirstDescription] = useState();
    
useEffect(() => {
    setFirstDescription(description);
  }, [description]);

    return (

        <div  className={valida}>
            <p className='amount'>Description: <input type="text" name="nombre" value={firstDescription} onChange={e => setFirstDescription(e.target.value)} /></p>
            <p className='amount'>Amount: <input type="text" name="nombre" value={firstAmount} onChange={e => setFirstAmount(e.target.value)} /></p>
        </div>


    )
        
     
    

    


}

export default Edit;