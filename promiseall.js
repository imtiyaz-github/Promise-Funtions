
const users = [{title:'User one', body:'this is user one',lastActivity:"6th Sepetember 2022"},

 { title:'User two', body:'this is user two', lastActivity:'23rd Februaty 2023 03:15 PM (Indian Standard Time)'}
]

//create new user funtion 

function createUser(user) {
   return new Promise((resolve,rejecet) => {
      setTimeout(() => {
         users.push({...user,lastActivity:new Date().toString() })
      })
   });
}

//creating function updateLastUserActivtiyTime

function updateLastUserActivtiyTime() {
   return new Promise((resolve,rejcet) => {
      setTimeout((user) => {
         users.forEach((user) => {
            //user lastactivity  = new date().string
            console.log('Before Creating'+user.title+',User last acitvity time= '+user.lastActivity);
            console.log('adter creating>>>'+user.title);
         })
         console.log(users);
         console.log('User last activty'+new Date().getTime())
         resolve();

      },1000)
   })
}

//callin the function by promise all


Promise.all([createUser({title:"user three, body:This is user Three"}),updateLastUserActivtiyTime()]);git 