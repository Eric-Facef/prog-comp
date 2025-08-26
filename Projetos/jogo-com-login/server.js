const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(session({
  secret: 'segredo-super-secreto',
  resave: false,
  saveUninitialized: true
}));

app.use(express.urlencoded({ extended: true }));

app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));

app.get('/', (req, res) => {
  if (req.session.logado) {
    res.redirect('/jogo');
  } else {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
  }
});

app.post('/login', (req, res) => {
  const { usuario, senha } = req.body;
  if (usuario === 'Eric' && senha === 'Meleti') {
    req.session.logado = true;
    res.redirect('/jogo');
  } else {
    res.send('<p>Login inválido. <a href="/">Tentar novamente</a></p>');
  }
});

app.get('/jogo', (req, res) => {
  if (req.session.logado) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  } else {
    res.redirect('/');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
