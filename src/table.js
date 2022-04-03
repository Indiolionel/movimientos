import { Fragment } from 'react';
import './table.css';
import Button from './button'
import Delete from './delete'
import Edit from './edit'

let validar = 'container-edit' ;
let amon = '' ;
let descrip= '';
let id = '';


function Table({ status }) {
  
  
  const listItems = status.map(a => {
    const changeColor = a.amount > 0 ? 'green' : 'red';

    return (
      
      <tr className={`atributte ${changeColor}`} key={a.description}>
        <div className='td'>
          <td>{a.description}</td>
          <td>{a.amount}</td>
        </div>
        <div className='btn-method'>
        <button onClick={() =>{id=a._id; validar='container-edit2'; amon=a.amount; descrip=a.description} }  className='btn-icon'><i class="fas fa-edit"></i></button>
        <button onClick={() => { Delete(a._id) }} className='btn-icon'><i class="fa-solid fa-trash-can"></i></button>

        </div>
      </tr>
    )
  });

  return (
    <div className='container-table'>
      <div className='table'>
        <h3>Last movements!</h3>
        <table >
          <tbody>
            
            {listItems}
                  <Edit ids={id} valida={validar} amount={amon} description={descrip}/>

          </tbody>
        </table>
        </div>
    </div>
  )
}

export default Table;