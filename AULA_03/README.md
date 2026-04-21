 # 📘 Aula de Node.js — Guia Completo para Iniciantes


## 🚀 O que é Node.js?

O **Node.js** é um ambiente de execução que permite rodar JavaScript fora do navegador, usando o motor V8 (do Chrome). Ele é muito utilizado para construir APIs, servidores web e aplicações escaláveis.

---

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado:

* Node.js (versão LTS recomendada)
* npm (gerenciador de pacotes, já vem com o Node)

Verifique a instalação:

```bash
node -v
npm -v
```

---

## 📁 Criando seu primeiro projeto

```bash
mkdir meu-projeto-node
cd meu-projeto-node
npm init -y
```

Isso criará um arquivo `package.json`.

---

## ✨ Primeiro script

Crie um arquivo chamado `index.js`:

```js
console.log("Olá, Node.js!");
```

Execute:

```bash
node index.js
```

---

## 🌐 Criando um servidor simples

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Servidor rodando!");
  res.end();
});

server.listen(3000, () => {
  console.log("Servidor em http://localhost:3000");
});
```

---

## 📦 Instalando pacotes

Use o npm para instalar bibliotecas:

```bash
npm install express
```

---

## ⚡ Criando API com Express

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World com Express!");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
```

---

## 🔁 Hot Reload com Nodemon

Instale o nodemon para reiniciar o servidor automaticamente:

```bash
npm install -D nodemon
```

No `package.json`:

```json
"scripts": {
  "dev": "nodemon index.js"
}
```

Execute:

```bash
npm run dev
```

---

## 📚 Conceitos importantes

* **Event Loop**: Responsável por gerenciar operações assíncronas
* **Callbacks / Promises / Async-Await**
* **Módulos (require / import)**
* **Middleware (no Express)**

---

## 🧪 Próximos passos

* Criar rotas com parâmetros
* Conectar com banco de dados (MongoDB ou PostgreSQL)
* Criar autenticação (JWT)
* Estruturar projeto (MVC)

---

## 📌 Conclusão

Você agora tem uma base sólida para começar com Node.js! Continue praticando e explorando novos conceitos.

---

## 💡 Dica

Pratique criando pequenos projetos, como:

* API de tarefas (To-do)
* Sistema de login
* CRUD simples

---

Boa sorte nos estudos! 🚀
