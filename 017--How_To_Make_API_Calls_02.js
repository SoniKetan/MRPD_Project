function getTodos(){
    axios
    .get("https://jsonplaceholder.typicode.com/users?_limit=5")
    .then(res=>showOutput(res))
    .catch(err=>console.log(err));
  }
  document.getElementById("get").addEventListener('click' , getTodos);
  
  // // Here, in the showOutput(res) we set the parameter i.e, we limit the data to 5 ;
  // // Therefore, we will get the data upto 5 content i.e, only 5 arrays of data;
  
  
    ///////******************************************************************************************************************* */
  
  
  
  function addTodo() {
    // console.log('POST Request');
    axios.post("https://jsonplaceholder.typicode.com/todos", {
      title : "New to do", 
      completed : false
    })
    .then(res=>showOutput(res))
    .catch(err=>console.log(err));
  }
  document.getElementById('post').addEventListener('click', addTodo);
  // // Here, we are getting the output when we click on the post button on the main screen we will get the output as ;
  
  
  
    ///////******************************************************************************************************************* */
  
  
    
    function updateTodo() {
      // console.log('PUT/PATCH Request');
      axios.put("https://jsonplaceholder.typicode.com/users/1", {// // In the url we have to update the id i.e, /1  is the id of that data we have to update;
        title : 'Coming Soon',
        completed : true
      })
      .then(res=>showOutput(res))
      .catch(err=>console.log(err));
    }
    document.getElementById('update').addEventListener('click', updateTodo);
    // // Here, we are getting the output when we click on the  PUT/PATCH button on the main screen we will get the output as ;
    // // While using axios.patch only we will get this below;
  
  
    ///////******************************************************************************************************************* */
  
  
  
    
    // DELETE REQUEST
    
    function removeTodo() {
      // console.log('DELETE Request');
      axios.delete("https://jsonplaceholder.typicode.com/users/1")
      .then(res=>showOutput(res))
      .catch(err=>console.log(err));
    }
    document.getElementById('delete').addEventListener('click', removeTodo);
  // // Here, we are getting the output when we click on the __________ button on the main screen we will get the output as ;
  // // Data
  // // {}
  
  
  
    ///////******************************************************************************************************************* */
  
  
  
  function getData() {
    // console.log('Simultaneous Request');
    axios.all([
      axios.get("https://jsonplaceholder.typicode.com/todos"), 
      axios.get("https://jsonplaceholder.typicode.com/posts")
    ])
    .then(axios.spread((todos, posts)=>showOutput(posts)))
    .catch((err)=>{
      console.error(err);
    })
  }
  document.getElementById('sim').addEventListener('click', getData);
  // // Here, we are getting the output when we click on the Sim Request button on the main screen we will get the output as ;
  // // Get the data on the main screen;
  
  
    ///////******************************************************************************************************************* */
  
  
    
  // // INTERCEPTING REQUESTS & RESPONSES
    
  axios.interceptors.request.use(
    config => {
      console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()} `)
      return config;
    },
    error=>{
      return Promise.reject(error);
    }
  )
  // // Here, we are getting the output when we click on the Sim Request button on the main screen we will get the output as ;
  // // GET request sent to https://jsonplaceholder.typicode.com/todos at 1702532507959  i.e, from the users side 
  // // GET request sent to https://jsonplaceholder.typicode.com/posts at 1702532507960  i.e, from the posts side 
  
  
  
  ///////******************************************************************************************************************* */
  
  
    
    // CUSTOM HEADERS
    
    function customHeaders() {
      const config = {
        headers : {
          "content-type" : "application/json",
          Authorization : "Some Kind of Token"
        }
      }
      
    
      axios
        .post('https://jsonplaceholder.typicode.com/todos',
          {
            title: 'New Todo',
            completed: false
          },
          config
        )
        .then(res => showOutput(res))
        .catch(err => console.error(err));
    }
     
    document.getElementById('headers').addEventListener('click', customHeaders);
  // // Here, we are getting the output when we click on the __________ button on the main screen we will get the output as ;
  // // 
  
  
  
    ///////******************************************************************************************************************* */
  
  
  
    
    // TRANSFORMING REQUESTS & RESPONSES
    
    function transformResponse() {
      // console.log('Transform Response');
      const option ={
        method : 'post',
        url : 'https://jsonplaceholder.typicode.com/todos',
        data : {
          title : "Unique World"
        },
        transformResponse : axios.defaults.transformResponse.concat(data=>{
          data.title = data.title.toUpperCase();
          return data;
        })
        }
        axios(option).then(res=>showOutput(res))
      }
      
    document.getElementById('transform').addEventListener('click', transformResponse);
  // // Here, we are getting the output when we click on the __________ button on the main screen we will get the output as ;
  // // 
  
  
  
    ///////******************************************************************************************************************* */
  
  
    // // Axios Global :--
  
  
    axios.defaults.headers.common['X-Auto-Token'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  // // Here, we have make the token global i.e, it is used by all the buttons;;
  
  
  
  
    ///////******************************************************************************************************************* */
  
    
    // ERROR HANDLING
    
    function errorHandling() {
      // console.log('Error Handling');
      axios.get("https://jsonplaceholder.typicode.com/todols")//// Here, we have to write extra s or any letter in todos to get the alert msg;
      .then(res=>showOutput(res))
      .catch(err=>{
        if(err.response)
        {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
          if(err.response.status === 404)
          {
            alert('Page Not Found');
          }
        }
        else if(err.request)
        {
          console.error(err.request);
        }
        else
        {
          console.error(err.message);
        }
        
      });
    }
    document.getElementById('error').addEventListener('click', errorHandling);
  // // Here, we are getting the output when we click on the __________ button on the main screen we will get the output as ;
  // // 
  
  
  
    ///////******************************************************************************************************************* */
  
  
  
    
    // CANCEL TOKEN
    
    function cancelToken() {
      const source = axios.CancelToken.source();
  
      axios.get("https://jsonplaceholder.typicode.com/todos", {
        cancelToken : source.token
      })
      .then(res => showOutput(res))
      .catch(thrown => {
        if(axios.isCancel(thrown)){
          console.log("Request Cancelled", thrown.message);
        }
      })
      if(true)
      {
        source.cancel("Request is cancelled now");
      }
    }
    document.getElementById('cancel').addEventListener('click', cancelToken);
  // // Here, we are getting the output when we click on the __________ button on the main screen we will get the output as ;
  // // 
  
  
  
  
  
  // // AXIOS INSTANCES
    
  
    // Show output in browser
    function showOutput(res) {
      document.getElementById('res').innerHTML = `
      <div class="card card-body mb-4">
        <h5>Status: ${res.status}</h5>
      </div>
      <div class="card mt-3">
        <div class="card-header">
          Headers
        </div>
        <div class="card-body">
          <pre>${JSON.stringify(res.headers, null, 2)}</pre>
        </div>
      </div>
      <div class="card mt-3">
        <div class="card-header">
          Data
        </div>
        <div class="card-body">
          <pre>${JSON.stringify(res.data, null, 2)}</pre>
        </div>
      </div>
      <div class="card mt-3">
        <div class="card-header">
          Config
        </div>
        <div class="card-body">
          <pre>${JSON.stringify(res.config, null, 2)}</pre>
        </div>
      </div>
    `;
    }
    
    
  