
function Delete(status) {
    const conFirm = window.confirm("Estas seguro de eliminalo??")
    const url = 'http://localhost:5000/api/movements/';

    const deleteId = async () => {
        try {
            const deleteFetch = await fetch (url + status,{
                method:'DELETE',
            })
            const deleteFetchJson = await deleteFetch.json();
    
            return deleteFetchJson;
         }
        catch (err) {
            console.log(err);
        }

        }
        

    if (conFirm) {

        deleteId();
    }

    else return;



}

export default Delete;