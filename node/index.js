const express = require("express");
const mysql = require('promise-mysql')
var random_name = require('node-random-name');


const app = express();
const port = 4040

const config = {
  host: 'db',
  user: 'root',
  password: '',
  database:'nodedb'
};

const getDbConnection = async() => {
  return await mysql.createConnection(config)   
}

const getPessoas = async() => {
  const select = 'SELECT * FROM Pessoas'
  const db = await getDbConnection()
  const pessoas = await db.query(select)
  await db.end()
  return pessoas
}

const insertPessoa = async() => {
  const sql = `INSERT INTO Pessoas(nome) values('${random_name()}')`
  const db = await getDbConnection()
  await db.query(sql)
  await db.end()
}

app.get("/", async (req, res) => {
  await insertPessoa()

  var pessoasText = "<ul>"
  console.log("================")
  const pessoasRows = await getPessoas()
  pessoasRows.forEach(pessoa => {
    pessoasText += "<li>"+pessoa.nome+"</li>"
    console.log(pessoa.nome)
    });
    
  pessoasText += "</ul>"
  console.log("================")
  
  res.send( "<h1>Full Cycle Rocks!</h1> " + pessoasText );
});

app.listen(port, () => {
  console.log('Node HTTP Server rodando na porta ' + port)
});