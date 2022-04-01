
function Delete(status) {
    const conFirm = window.confirm("Estas seguro de eliminalo??")
    const url = 'http://localhost:5000/api/movements/';
    if (conFirm) {
        fetch(url + status, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
            });
    }
    else return;



}

export default Delete;