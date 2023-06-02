import express from 'express';
const app = express();

// Configuração do servidor e middleware

const port = 3000; // Porta do servidor

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // Host do banco de dados
  user: 'root', // Usuário do banco de dados
  password: '94412210', // Senha do banco de dados
  database: 'to-do' // Nome do banco de dados
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão bem-sucedida com o banco de dados');
    }
});

// Exemplo de rota para buscar dados do banco de dados
app.get('/dados', (req, res) => {
    connection.query('SELECT * FROM user', (err, rows) => {
      if (err) {
        console.error('Erro ao executar a consulta:', err);
        res.status(500).json({ error: 'Erro ao buscar dados' });
      } else {
        res.json(rows);
      }
    });
});