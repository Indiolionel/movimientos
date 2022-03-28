import { Fragment } from 'react';
import './table.css';
import Button from './button'


let url = 'http://localhost:5000/api/movements';

function Table({ status }) {

  const listItems = status.map(a => {
    const changeColor = a.amount > 0 ? 'green' : 'red';

    return (
      <tr className={`atributte ${changeColor}`} key={a.description}>
        <td>{a.description}</td>
        <td>{a.amount}</td>
      </tr>
    )
  }

  );


  return (
    <div className='container-table'>
      <div className='table'>

        <h3>Last movements!</h3>

        <table >
          <tbody>
          {listItems}
          </tbody>
          
        </table>
        
      </div>

    </div>
  )

}

export default Table;