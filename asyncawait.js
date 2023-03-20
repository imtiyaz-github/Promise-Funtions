

console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {

const promiseWifeBringingTicks = new Promise ((resolve,reject) => {
    setTimeout(() => 
        resolve('ticket'),3000);
});


const getPopcorn = new Promise((resolve,reject) => 
    resolve(`popcorn`));
    const addButter = new Promise((resolve,reject) => 
        resolve(`reject`));

const getColdDrinks  = new Promise((resolve,reject) => 
    resolve(`colddrink`));     


 let ticket = await promiseWifeBringingTicks;
     console.log('wife: i have the tics')
     console.log('husband: we should go in');
     console.log('wife: no i am hungry');



let popcorn  = await getPopcorn;
     console.log(`husband: i got some ${popcorn}`);
     console.log('husband: we should go in');
     console.log('wife: i need butter on my popcorn');
     

let ColdDrinks = await getColdDrinks;

 console.log(`husband: i got cold Drinks`);
     
     


  let butter =  await addButter;


  console.log(`husband: i got some ${butter} on popcorn`);
  console.log(`husband: anything else darling`);
  console.log(`wife: lets go we are getting late`);
  console.log(`husband: thank you for the remainder *grins*`);


return ticket;
}


preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');



 async function createPost() {
    return  new Promise((resolve,reject) => {
        setTimeout (() => {
            preMovie({title:'lets goto home now'})
            resolve();
        },3000);
    })
}

function deletePost() {
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            if(preMovie.length >0) {
                const deletePost  = preMovie.pop();
                resolve(deletePost);
            } else {
                reject('error');
            }
        })
    })

}

//call  the function now
createPost().then(() => {
    deletePost().then((promiseWifeBringingTicks) => {
      console.log(promiseWifeBringingTicks);
        deletePost().then((preMovie) => { 
            console.log(preMovie);
            deletePost().catch((error) => 
                console.log(error));
            })
        });

    });

