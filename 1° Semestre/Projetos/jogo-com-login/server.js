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

// Servir apenas arquivos estáticos (JS, CSS, imagens)
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));

// Página de login
app.get('/', (req, res) => {
  if (req.session.logado) {
    res.redirect('/jogo');
  } else {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
  }
});

// Rota de autenticação
app.post('/login', (req, res) => {
  const { usuario, senha } = req.body;
  if (usuario === 'Eric' && senha === 'Meleti') {
    req.session.logado = true;
    res.redirect('/jogo');
  } else {
    res.send('<p>Login inválido. <a href="/">Tentar novamente</a></p>');
  }
});

// Jogo protegido
app.get('/jogo', (req, res) => {
  if (req.session.logado) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  } else {
    res.redirect('/');
  }
});

// Logout
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
