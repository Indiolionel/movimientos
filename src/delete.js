


function Delete(status) {
    const conFirm=window.confirm("Estas seguro de eliminalo??")

    if (conFirm){
    fetch('http://localhost:5000/api/movements/'+status, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
        });}
        else return;

    

}

export default Delete;