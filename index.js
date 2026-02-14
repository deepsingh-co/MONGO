const mongoose = require('mongoose');


main().then((res) =>{
    console.log("Connection succesful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model('User', userSchema);

/**const user2 = new User({
    name: "Deep",
    email: "deep@example.com",
    age: 21
});

user2.save().then((res) => {
    console.log(res);
})
 .catch((err) =>{
    console.log(err);
});
**/



//const Employee = mongoose.model("Employee" , userSchema);


/**User.insertMany([
    {
    name: "anshika",
    email: "anshika@example.com",
    age: 21
},
{
    name: "komal",
    email: "komal@example.com",
    age: 25
},{
    name: "Jane",
    email: "jane@example.com",
    age: 28
}
    
]).then((res) =>{
    console.log(res)
});
**/

/** 
User.findOne({age: {$gte: 25}})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});
**/


