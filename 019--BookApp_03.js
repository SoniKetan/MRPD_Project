document.getElementById('btn').addEventListener('click', saveToLocalStorage)

function saveToLocalStorage(event){
    event.preventDefault();
    console.log(event.target)
    let userInput = document.getElementById('usn').value;
    let emailInput = document.getElementById('em').value;
    let phoneInput = document.getElementById('pn').value;

    const newObj = {
        userInput,
        emailInput,
        phoneInput
    }
    // localStorage.setItem(newObj.userInput , JSON.stringify(newObj));
    axios.post("https://crudcrud.com/api/133c608d216541999c5e99e90d82de0f/ketanSoni" , newObj)    
    .then((response) =>{
        console.log(response);
        showingDataOfCloudToDisplay(response.data);
    })
    .catch((error) =>{
        console.log(error);
    })
    document.getElementById('usn').value = '';
    document.getElementById('em').value = '';
    document.getElementById('pn').value = '';
}


window.addEventListener('DOMContentLoaded' , () =>{
    axios.get("https://crudcrud.com/api/133c608d216541999c5e99e90d82de0f/ketanSoni")
    .then((res) => {
        console.log(res);
        for(let i = 0 ; i < res.data.length; i++)
        {
            showingDataOfCloudToDisplay(res.data[i]);
        }
    })
    .catch((err) =>{
        console.log(err);
    })
})


function showingDataOfCloudToDisplay(newObj){
    const parentUlTag = document.getElementById("ulTag");
    const childLiTag = document.createElement('li');
    childLiTag.className = 'display-details';
    childLiTag.appendChild(document.createTextNode(`${newObj.userInput} - ${newObj.emailInput} - ${newObj.phoneInput}`));

    const delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger';
    delBtn.appendChild(document.createTextNode('DELETE'));
    childLiTag.appendChild(delBtn);

    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-success';
    editBtn.appendChild(document.createTextNode('EDIT'));
    childLiTag.appendChild(editBtn);

    parentUlTag.appendChild(childLiTag);
}






////////*************************************************************************** */
