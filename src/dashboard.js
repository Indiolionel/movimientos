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
      <button className='button-new-move' onClick={()=>onclick(true)}>
        New Move
      </button>
      </div>
    </div>
    
    
    
    
    
)
    
}

export default Dashboard;

