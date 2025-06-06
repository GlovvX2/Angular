const express = require('express')
const app = express();
const cors = require('cors');
const fs = require('fs');

const bp = require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({extended: true}));

let users = JSON.parse(fs.readFileSync('user.json'));

//npm install cors
app.use(cors());
app.get('/users',(req,res)=>{

    res.json(users)
});
app.get('/users/:id',(req,res)=>
{
    console.log('Request from users data');
    const id = req.params.id;

    //Wyszukiwanie filterm tablicy pod id (zwraca uzytkownika z danym id)
    const userList = users.filter(user => user.id == id);
    res.json(userList[0]);
});

app.post('/users',(req,res)=>
{
    const user = req.body;

    console.log("post data: " +JSON.stringify(user));
    
    users.push(user);
    fs.writeFileSync('user.json',JSON.stringify(users));
    res.json(user);
});
app.delete('/users/:id',(req,res)=>
{
    const id = req.params.id;
    users = users.filter(user => user.id != id);

    fs.writeFileSync('user.json',JSON.stringify(users));
    res.json(users);
});

port = 3000;
app.listen(port,()=>
{   
    console.log(`Server dziala na ${port}`)
});