import './modal.css';
import Data from './data'

function Modal() {
    return (
        <div className='container-form' >
            <form id="agregar">
                <label for="service">
                    Service:
                    <input type="text" name="name" id="service"/>
                </label>
                <label for="amount">
                    Amount:
                    <input type="text" name="name" id="amount"/>
                </label>
                <button clasName="button-agregar" type="submit" value="Agregar">Add</button>
            </form>
        </div>
    )


}

export default Modal