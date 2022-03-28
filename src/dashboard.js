import './dashboard.css';


function Dashboard({ status, onclick }) {

  const total = ()=> {
    let valorInicial = 0;
    for (let i=0; i<status.length;i++) {
      valorInicial = valorInicial+status[i].amount
    }
    return valorInicial;
  }
  

  return (
    <div className="dashboard" >
      <div className='container-dashboard'>
        <h2>Santiago Bank</h2>
        <div className="balance">
          <h5>BALANCE</h5>
          <div className='precio'>
            <p>$</p>
            <p>{total()}</p>
          </div>
          


        </div>
        <button className='button-new-move' onClick={() => onclick(true)}>
          New Move
        </button>
      </div>
    </div>
  )
}

export default Dashboard;

