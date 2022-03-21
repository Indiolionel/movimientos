import './button.css';


function Button ({onclick}) {
    return (
        <div className='container-icono1'>
          <button onClick={()=>onclick(true)}><i class="fa-solid fa-circle-plus color" /></button> 
        </div>

    )
 
}

export default Button;