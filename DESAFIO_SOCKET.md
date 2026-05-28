# Chat em Tempo Real com Socket.IO 🚀

## Objetivo

Criar uma aplicação de chat em tempo real utilizando:

* **Node.js**
* **Express**
* **Socket.IO**
* **HTML**
* **CSS**
* **JavaScript Vanilla**

O objetivo é entender como funciona comunicação em tempo real entre cliente e servidor utilizando WebSockets.

---

# 🧩 Desafio: Criando um Chat em Tempo Real

## 📚 Requisitos do Projeto

O sistema deve permitir:

✅ Conectar múltiplos usuários
✅ Enviar mensagens em tempo real
✅ Exibir mensagens para todos os usuários conectados
✅ Informar quando um usuário entrou no chat
✅ Informar quando um usuário saiu do chat
✅ Exibir horário da mensagem
✅ Diferenciar visualmente mensagens do próprio usuário

---

# 🛠️ Tecnologias Utilizadas

* Node.js
* Express
* Socket.IO
* HTML5
* CSS3
* JavaScript

---

# 📁 Estrutura Esperada do Projeto

```bash
chat-socketio/
│
├── server.js
├── package.json
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
```

---

# 🚀 Etapa 1 — Inicializando o Projeto

## Criar projeto Node

```bash
mkdir chat-socketio
cd chat-socketio
npm init -y
```

---

## Instalar Dependências

```bash
npm install express socket.io
```

---

# 🚀 Etapa 2 — Criar o Servidor

## Arquivo: `server.js`

O servidor deve:

* Criar um servidor HTTP
* Configurar o Express
* Configurar o Socket.IO
* Escutar conexões
* Receber mensagens
* Reenviar mensagens para todos os clientes

---

# 🚀 Etapa 3 — Criar Interface HTML

## Arquivo: `public/index.html`

A interface deve possuir:

* Campo para digitar nome
* Campo para mensagem
* Botão enviar
* Área de mensagens

---

# 🚀 Etapa 4 — Estilização

## Arquivo: `public/style.css`

Criar:

* Layout centralizado
* Área de mensagens com scroll
* Mensagens estilizadas
* Responsividade

---

# 🚀 Etapa 5 — Comunicação em Tempo Real

## Arquivo: `public/script.js`

O cliente deve:

* Conectar no servidor Socket.IO
* Escutar novas mensagens
* Enviar mensagens
* Atualizar o chat dinamicamente

---

# 📡 Eventos Esperados

## Cliente → Servidor

| Evento         | Descrição      |
| -------------- | -------------- |
| `chat message` | Envia mensagem |
| `user joined`  | Usuário entrou |

---

## Servidor → Clientes

| Evento         | Descrição      |
| -------------- | -------------- |
| `chat message` | Nova mensagem  |
| `user joined`  | Usuário entrou |
| `user left`    | Usuário saiu   |

---

# 🎯 Regras do Desafio

## Obrigatório

* Não usar frameworks frontend
* Utilizar apenas HTML/CSS/JS puro
* Utilizar Socket.IO
* Mensagens em tempo real

---

## Diferenciais

⭐ Mostrar quantidade de usuários online
⭐ Mostrar digitando...
⭐ Emojis
⭐ Mensagens privadas
⭐ Tema dark/light
⭐ Persistência com banco de dados

---

# ▶️ Executando o Projeto

## Rodar servidor

```bash
node server.js
```

---

## Acessar no navegador

```bash
http://localhost:3000
```

---

# 🧠 Conceitos Trabalhados

* WebSocket
* Comunicação em tempo real
* Eventos
* Broadcast
* Cliente x Servidor
* Node.js
* Programação assíncrona

---

# 📌 Exemplo Esperado

```text
[10:30] João: Olá pessoal!
[10:31] Maria: Oi João!
```

---

# 🔥 Desafio Extra

Implemente:

* Salas de chat
* Login simples
* Histórico de mensagens
* Upload de imagens
* Notificações sonoras

---

# 📖 Dicas

## Emitindo evento no servidor

```js
io.emit('chat message', data)
```

---

## Escutando evento no cliente

```js
socket.on('chat message', (data) => {
  console.log(data)
})
```

---

# 🏁 Resultado Esperado

Ao finalizar, o aluno deverá possuir:

✅ Um chat funcional em tempo real
✅ Conhecimento básico de WebSocket
✅ Entendimento do fluxo cliente-servidor
✅ Conhecimento inicial em Socket.IO

---

# 👨‍💻 Autor

Desafio desenvolvido para estudos de Socket.IO com Node.js e HTML.
