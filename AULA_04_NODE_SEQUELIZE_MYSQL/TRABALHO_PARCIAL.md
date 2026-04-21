# 🚀 Desafio Prático: CRUD com Node.js + Sequelize + MySQL

## 📌 Objetivo

Desenvolver uma API utilizando **Node.js**, **Sequelize** e **MySQL**, implementando **3 CRUDs completos**.

O projeto deve ser feito **em dupla**, simulando um ambiente real de desenvolvimento colaborativo.

---

## 👥 Formação

* Trabalho em **dupla**
* Ambos devem contribuir com código
* Utilize Git (commits organizados serão avaliados)

---

## 🧰 Tecnologias Obrigatórias

* Node.js
* Express
* Sequelize
* MySQL
* dotenv (para variáveis de ambiente)

---

## ⚙️ Configuração do Ambiente

### 1. Criar o projeto

```bash
mkdir desafio-sequelize
cd desafio-sequelize
npm init -y
```

### 2. Instalar dependências

```bash
npm install express sequelize mysql2 dotenv
npm install --save-dev nodemon
```

### 3. Estrutura sugerida

```
/src
  /config
  /models
  /controllers
  /routes
  app.js
.env
```

---

## 🔌 Configuração do Banco de Dados

### 1. Criar banco no MySQL

```sql
CREATE DATABASE desafio_sequelize;
```

### 2. Arquivo `.env`

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=desafio_sequelize
DB_DIALECT=mysql
PORT=3000
```

### 3. Conexão com Sequelize

Crie um arquivo `/src/config/database.js`

```js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
);

module.exports = sequelize;
```

---

## 📦 Entidades do Sistema

Você deverá implementar **3 CRUDs completos**:

### 1. 👤 Usuários

* id
* nome
* email
* senha

### 2. 📦 Produtos

* id
* nome
* preço
* estoque

### 3. 🧾 Pedidos

* id
* usuario_id
* produto_id
* quantidade

---

## 🔁 Funcionalidades (CRUD)

Para **cada entidade**, implementar:

* ✅ Criar (POST)
* 📄 Listar todos (GET)
* 🔍 Buscar por ID (GET)
* ✏️ Atualizar (PUT)
* ❌ Deletar (DELETE)

---

## 🔗 Rotas esperadas (exemplo)

### Usuários

```
POST   /usuarios
GET    /usuarios
GET    /usuarios/:id
PUT    /usuarios/:id
DELETE /usuarios/:id
```

(repita o padrão para produtos e pedidos)

---

## 🧠 Regras de Negócio

* Pedido deve estar vinculado a um usuário existente
* Pedido deve estar vinculado a um produto existente
* Não permitir criar pedido com quantidade maior que o estoque
* Atualizar estoque ao criar pedido

---

## 🧪 Testes

Utilize:

* Postman ou Insomnia

---

## ⭐ Extras (diferencial)

* Relacionamentos com Sequelize (`belongsTo`, `hasMany`)
* Validações de dados
* Tratamento de erros
* Organização em camadas (Controller, Model, Route)
* Uso de migrations (Sequelize CLI)

---

## 📤 Entrega

* Repositório no GitHub
* README com instruções para rodar o projeto
* Código funcionando

---

## 🎯 Critérios de Avaliação

| Critério                 | Peso  |
| ------------------------ | ----- |
| Funcionalidade dos CRUDs | ⭐⭐⭐⭐⭐ |
| Organização do código    | ⭐⭐⭐⭐  |
| Uso correto do Sequelize | ⭐⭐⭐⭐  |
| Regras de negócio        | ⭐⭐⭐   |
| Trabalho em equipe       | ⭐⭐⭐   |

---

## 💡 Dica

Dividam o trabalho:

* Pessoa A: Usuários + estrutura base
* Pessoa B: Produtos + Pedidos
* Ambos: Integração final e testes
