import './modal.css';
import Data from './data'

function Modal({onclose}) {
    


    return (
        <div className='container-form' >
            
            <form id="agregar">
                <div className='container-title'>
            <h4>NEW MOVEMENT</h4>
            <h4 onClick={()=>onclose(false)}>X</h4>
            
            </div>
                <label className='label-input' for="service">
                    Service Name
                    <input type="text" name="name" id="service"/>
                </label>
                <label className='label-input' for="amount">
                    Amount
                    <input type="text" name="name" id="amount"/>
                </label>
                <button className='button-agregar' type="submit" value="Agregar">ADD</button>
            </form>
        </div>
    )


}

export default Modal