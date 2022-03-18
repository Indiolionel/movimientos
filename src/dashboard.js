import './dashboard.css';
function Dashboard({balance}) {
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
      <button>
        Nuevo Movimiento
      </button>
      </div>
    </div>
    
    
    
    
)
    
}

export default Dashboard;

