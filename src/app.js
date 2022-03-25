import Dashboard from './dashboard'
import Table from './table'
import { useState } from 'react';
import Modal from './modal'


function App() {

const data = () => {
    let url = 'http://localhost:5000/api/movements';
    let fetchData = {
        method: 'GET'
    }
    
    fetch(url, fetchData)
        .then((resp) => resp.json())
        .then(function (data) {

            console.log(data.data[0])
           
        })
        .catch(function (error) {
            console.log(error);
        });
}

    const [showModal, setshowModal] = useState(false);

    return (
        <>
            
            <div className='container'>
            {data()}
                {/* <Dashboard balance={data.balance} onclick={setshowModal} />
                {showModal ? <Modal onclose={setshowModal} /> : null}

                <Table items={data.items} onclick={setshowModal} /> */}
            </div>

        </>

    )

}

export default App;