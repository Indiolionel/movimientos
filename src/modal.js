import './modal.css';

function Modal() {
    return (
        <div>
            <form>
                <label>
                    Servicio:
                    <input type="text" name="name" />
                </label>
                <label>
                    Monto:
                    <input type="text" name="name" />
                </label>
                <button clasName="button-agregar" type="submit" value="Agregar">Agregar</button>
            </form>
        </div>
    )


}

export default Modal