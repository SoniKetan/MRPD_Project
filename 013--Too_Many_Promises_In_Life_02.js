// // Too many promises in life 02 :-



// const posts = [{title : 'Post-01', body : 'This is post first'},
//                 {title : 'Post-02', body : 'This is post second'}];

// const intervalId = 0;

// function getPosts(){
//      clearInterval(intervalId);
//     intervalId = setTimeout(() => {
//         let output = '';
//         for(let i = 0 ; i < posts.length; i++)
//         {
//             output += `<li>${posts[i].title}</li>`;
//         }
//         document.body.innerHTML = output;
//     },1000)
// }
// // getPosts();

// function createPosts(content){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(content);

//             const error = false;
//             if(!error)
//             {
//                 resolve();
//             }
//             else
//             {
//                 reject('Error');
//             }
//         },2000)
//     })
// }

// function deletePosts(){
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if(posts.length > 0)
//             {
//                 res(posts.pop());
//             }
//             else
//             {
//                 rej('Empty Arr');
//             }
//         },1000)
//     })
// }
// createPosts({title : 'Post-03', body : 'This is post three'})
// .then((response)=> {
//     getPosts();
//     console.log(response);
//     deletePosts().then((deletingPosts03) => {
//         getPosts();
//         console.log(deletingPosts03);
//         deletePosts().then((deletingPosts02) => {
//             getPosts();
//             console.log(deletingPosts02);
//         })
//     })
// })
// .catch((error) => {
//     console.log(error);
// })
// // // Here, we getting the output on the main screen :-
// // // Post-01
// // // Post-02
// // // Post-03
// // // And then deleting one by one and the output remains only :-
// // // Post-01
// // // Deleted post can be seen on console screen;






// ////////******************************************************************************************************* */




// const posts = []; // Array to store posts

// // Function to create a post
// function createPost(content) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push({ content, createdAt: new Date() });
//       resolve('Post created successfully!');
//     }, 1000); // 1 second delay
//   });
// }

// // Function to update last user activity time
// function updateLastUserActivityTime() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const lastActivityTime = new Date();
//       resolve(lastActivityTime);
//     }, 1000); // 1 second delay
//   });
// }

// // Function to delete the last post
// function deletePost() {
//   return new Promise((resolve, reject) => {
//     if (posts.length === 0) {
//       reject('No posts to delete!');
//       return;
//     }
//     posts.pop();
//     resolve('Last post deleted successfully!');
//   });
// }

// // Create a post and update last user activity time
// Promise.all([createPost('First post'), updateLastUserActivityTime()])
//   .then((values) => {
//     const [post, lastActivityTime] = values;
//     console.log('Post:', post);
//     console.log('Last Activity Time:', lastActivityTime);

//     // Delete the last post
//     return deletePost();
//   })
//   .then((message) => {
//     console.log('Remaining Posts:', posts);
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });






////////******************************************************************************************************* */









const posts = [{title : "Post-01", creditedAt : new Date().getTime() },
             {title : 'Post-02', creditedAt : new Date().getTime() }];

let intervalId = 0;

function printingPosts(){
    clearInterval(intervalId);
    intervalId = setTimeout(() => {
        let output = '';
        for(let i = 0; i < posts.length; i++)
        {
            output += `<li> ${posts[i].title} -> last updated at ->  ${(new Date().getTime() - posts[i].creditedAt)/1000} </li>`
        }
        document.body.innerHTML = output;
    },2000)
}

function create3rdPost(arr){
    return new Promise((res, rej) => {
        setTimeout(() => {
            // posts.push({title : 'Post-03', creditedAt : new Date().getTime()});
            arr.creditedAt = new Date().getTime();
            posts.push(arr);
            res();
        },2000)
    })
}

function create4thPost(brr){
    return new Promise((res, rej) => {
        setTimeout(() => {
            brr.creditedAt = new Date().getTime();
            posts.push(brr);
            res();
        },2000)
    })
}

function updateLastUserActivityTime(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Last Activity Time -> ', new Date().getTime());
            resolve();
        },1000)
    })
}

function deletePost(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            if(posts.length > 0)
            {
                let popEle = posts.pop();
                res(popEle);
            }
            else
            {
                rej('Array is Empty');
            }
        },1000)
    })
}

Promise.all([create3rdPost({title : 'post-03'}), create4thPost({title : 'post-04'}), updateLastUserActivityTime()])
.then((response) => {
    printingPosts();
    console.log(response);
    deletePost().then((deletingPost04) => {
        printingPosts();
        console.log(deletingPost04);
        deletePost().then((deletingPost03) => {
            printingPosts();
            console.log(deletingPost03);
        })
    })
})


// // // Without the use of Promise.all :-


// create3rdPost({title : 'post-03'}).then(() => {
//     printingPosts();
//     updateLastUserActivityTime().then(() => {
//         deletePost().then((deletingPost04) => {
//             printingPosts();
//             console.log(deletingPost04);
//             updateLastUserActivityTime().then(()=> {
//                 create4thPost({title : 'post-04'}).then(() => {
//                 printingPosts();
//                 deletePost().then((deletingPost03) => {
//                     printingPosts();
//                     console.log(deletingPost03);
//                     updateLastUserActivityTime().then(() => {
//                         printingPosts();
//                     })
    
//                 })
//             })
//             })
            
//         })
//     })
    
    
// })