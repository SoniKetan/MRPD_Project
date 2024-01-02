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
    childLiTag.appendChild(document.createTextNode(`${newObj._id} - ${newObj.userInput} - ${newObj.emailInput} - ${newObj.phoneInput}`));

    const delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger';
    delBtn.appendChild(document.createTextNode('DELETE'));
    delBtn.onclick = () =>{
        // localStorage.removeItem(newObj.userInput);
        axios.delete(`https://crudcrud.com/api/133c608d216541999c5e99e90d82de0f/ketanSoni/${newObj._id}`)
        .then((arr) =>{
            console.log(arr);
            for(let i = 0; i < arr.data.length; i++)
            {
                showingDataOfCloudToDisplay(arr.data[i]);
            }
        })
        .catch((brr) =>{
            console.log(brr);
        })
        parentUlTag.removeChild(childLiTag);
    }
    childLiTag.appendChild(delBtn);


    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-success';
    editBtn.appendChild(document.createTextNode('EDIT'));
    editBtn.onclick = () =>{
        // localStorage.removeItem(newObj.userInput);
        axios.put(`https://crudcrud.com/api/133c608d216541999c5e99e90d82de0f/ketanSoni/${newObj._id}`)
        .then((crr) =>{
            console.log(crr);
            for(let i = 0; i < crr.data.length; i++)
            {
                showingDataOfCloudToDisplay(crr.data[i]);
            }
        })
        .catch((drr) =>{
            console.log(drr);
        })
        parentUlTag.removeChild(childLiTag);
        document.getElementById('usn').value = newObj.userInput;
        document.getElementById('em').value = newObj.emailInput;
        document.getElementById('pn').value = newObj.phoneInput;
        
    }
    childLiTag.appendChild(editBtn);

    parentUlTag.appendChild(childLiTag);
}






////////*************************************************************************** */
