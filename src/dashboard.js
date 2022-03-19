import './dashboard.css';
function Dashboard({balance, onclick}) {
    return (
    <div className="dashboard" >
      <div className='container-dashboard'>
      <h2>Santiago Bank</h2>
      <div className="balance">
          <h5>BALANCE</h5>
          <div className='precio'>
          <p>$</p>
          <p>{balance}</p>
          </div>
          

      </div>
      <button onClick={()=>onclick(true)}>
        Nuevo Movimiento
      </button>
      </div>
    </div>
    
    
    
    
)
    
}

export default Dashboard;

