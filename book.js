const mongoose = require('mongoose');


main().then((res) =>{
    console.log("Connection succesful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
     },
     author:{
        type:String,
     },
     price:{
        type:Number,
     },  
     discount:{
        type:Number,
        default:0
     },
});

const Book = mongoose.model('Book', bookSchema);

let book1 = new Book({
    title:"Mathematics",
    author:"RD Sharma",
    price:500
});
book1
.save().then((res) =>{
    console.log(res);
}).catch((err) =>{
    console.log(err);
});