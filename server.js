const express = require('express');
const path = require('path');

const app = express();

// Define a porta. O Render usa process.env.PORT
const PORT = process.env.PORT || 3000;

// Serve os arquivos estáticos (HTML, CSS, JS) da pasta atual ('.')
app.use(express.static(path.join(__dirname, '.')));

// Uma rota "catch-all" para garantir que o index.html seja servido
// Isso é útil para single-page applications, mas bom ter aqui.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});