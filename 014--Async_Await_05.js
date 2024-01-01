

// const posts = [];
// let intervalId = 0;


// function printingPosts(){
//     clearInterval(intervalId);
//     intervalId = setTimeout(()=>{
//         let output = '';
//         posts.forEach((keys, values)=>{
//             output = output + `<li>${keys.title}</li>`;
//         })
//         document.body.innerHTML = output;
//     },1000)
// }

// function createPost(title, body){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             posts.push({title, body, creditedAt : new Date() });
//             resolve();
//         },1000)
//     })
// }

// function createPostsData(){
//     createPost('Post One', 'This is a first post');
//     createPost('Post Two', 'This is a second post');
//     createPost('Post Three', 'This is a third post');
//     createPost('Post Four', 'This is a fourth post');
//     createPost('Post Five', 'This is a five post');
// }


// function updateLastUserActivityTime(){
//     return new Promise((res, rej) =>{
//         setTimeout(()=>{
//             let lastActivityTime = new Date();
//             console.log(lastActivityTime);
//         },1000)
//     })

// }

// function deletedPost(){
//     return new Promise((res, rej) =>{
//         setTimeout(()=>{
//             if(posts.length > 0)
//             {
//                 let popElement = posts.pop();
//                 res(popElement);
//             }
//             else
//             {
//                 rej(document.body.innerHTML = `<li> Something Went Wrong </li>`)
//             }
//         },1000)
//     })
// }


// Promise.all([createPostsData()]).then(()=>{
//     printingPosts();
//     updateLastUserActivityTime();
//     deletedPost().then((deletingLastPost)=>{
//         console.log(deletingLastPost);
//         printingPosts();
//     })
    
// });





//////******************************************************************************************************************** */



const posts = [];
let intervalId = 0;


async function printingPosts(){
    clearInterval(intervalId);
    intervalId = setTimeout(()=>{
        let output = '';
        posts.forEach((keys, values)=>{
            output = output + `<li>${keys.title}</li>`;
        })
        document.body.innerHTML = output;
    },1000)
}

async function createPost(title, body){
    await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push({title, body, creditedAt : new Date() });
            resolve();
        },1000)
    })
}

async function createPostsData(){
    await createPost('Post One', 'This is a first post');
    await createPost('Post Two', 'This is a second post');
    await createPost('Post Three', 'This is a third post');
    await createPost('Post Four', 'This is a fourth post');
    await createPost('Post Five', 'This is a five post');
}


async function updateLastUserActivityTime(){
    await new Promise((res, rej) =>{
        setTimeout(()=>{
            let lastActivityTime = new Date();
            console.log(lastActivityTime);
        },1000)
    })

}

async function deletedPost(){
    try
    {
        let deletedPost = await new Promise((res, rej) =>{
            setTimeout(()=>{
                if(posts.length > 0)
                {
                    let popElement = posts.pop();
                    res(popElement);
                }
                else
                {
                    rej(document.body.innerHTML = `<li> Something Went Wrong </li>`)
                }
            },1000)
        })
        return deletedPost;
    }
    catch(error)
    {
        console.error('Error deleting post:', error);
    }
}

async function display(){
    await createPostsData();
    await printingPosts();
    let deletingLastPost = await deletedPost();
    console.log(deletingLastPost);
    await printingPosts();
    await updateLastUserActivityTime();
}
display();

