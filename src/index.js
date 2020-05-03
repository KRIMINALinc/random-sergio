const messages = ["Oscar","Ana", "Sergio", "Andres", "Laura", "Paulina", "Mariana", "MOnica"];

const randomMsg = () =>{
    const message = messages[Math.floor(Math.random()* messages.length)];
    console.log(message);
}


module.exports = { randomMsg };