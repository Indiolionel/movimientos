import Dashboard from './dashboard'
import Table from './table'
import { useState } from 'react';
import Modal from './modal'


let url = 'http://localhost:5000/api/movements';

function App() {

    const [showModal, setshowModal] = useState(false);
    const [datajson, setDatajson] = useState([]);


    
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {

            return setDatajson(data.data);

        })
        .catch(function (error) {
            console.log(error);
        });


    return (
        <>
            <div className='container'>
        <Dashboard status={datajson} onclick={setshowModal} />
         {showModal ? <Modal onclose={setshowModal} /> : null}

        <Table status={datajson} /> 

                {/* <Dashboard status={datajson} onclick={setDatajson} /> */}

                {/* <Dashboard balance={data.balance} onclick={setshowModal} />
                {showModal ? <Modal onclose={setshowModal} /> : null}

                <Table items={data.items} onclick={setshowModal} /> */}
            </div>
        </>

    )

}

export default App;