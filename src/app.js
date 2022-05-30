import Dashboard from './dashboard'
import Table from './table'
import { useState } from 'react';
import Modal from './modal'
import Button from './button'


const url = 'http://localhost:5000/api/movements';

function App() {

    const [showModal, setshowModal] = useState(false);
    const [datajson, setDatajson] = useState([]);

    
const traerDato = async () => {
    
    try {
        const tDfetch = await fetch(url);
        const tDfetchJson = await tDfetch.json();
        return setDatajson(tDfetchJson.data);
    }
    catch(err) {
        console.log(err)
    }
    }
    
traerDato()



    return (
        <>
            <div className='container'>
                <Dashboard status={datajson} onclick={setshowModal} />
                {showModal ? <Modal onclose={setshowModal} /> : null}
                <Button onclick={setshowModal} />
                <Table status={datajson} />
            </div>
        </>

    )

}

export default App;