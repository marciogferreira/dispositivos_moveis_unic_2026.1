# 📚 Revisão – Expo e React Native


O Expo é uma ferramenta que simplifica o desenvolvimento de aplicativos com React Native. Ele elimina a necessidade de configurar manualmente ambientes nativos como Android Studio ou Xcode, permitindo que o desenvolvedor foque diretamente no código.

A criação de um projeto com Expo é feita por meio de um comando executado no terminal utilizando Node.js, que gera automaticamente toda a estrutura inicial do aplicativo.

Uma das principais vantagens do Expo é a possibilidade de testar o aplicativo diretamente no celular, sem a necessidade de gerar uma build nativa. Isso é feito através de um QR Code que pode ser escaneado com o aplicativo Expo Go.

Para iniciar um projeto já criado, é necessário executar um comando que inicia o servidor de desenvolvimento. Esse processo disponibiliza uma interface no navegador e o QR Code para testes.

A instalação de bibliotecas em projetos Expo é feita com um comando próprio, que garante compatibilidade entre as dependências e o ambiente do projeto.

O aplicativo pode ser executado diretamente no celular utilizando o Expo Go, que se conecta ao projeto em execução por meio do QR Code.

Existem diferenças importantes entre o Expo e o React Native CLI. O Expo é mais simples de usar e não exige configuração inicial, sendo ideal para iniciantes e projetos rápidos. Já o React Native CLI oferece maior controle e flexibilidade, permitindo acesso direto ao código nativo, mas exige mais configuração.

O processo de publicação de um aplicativo envolve a criação de contas nas lojas (Google Play e App Store), configuração das informações do aplicativo, geração da build e envio para as respectivas plataformas.

---

# 📘 README — Expo + React Native

# 📱 Guia: Expo + React Native

## 🚀 O que é React Native?

React Native é um framework que permite criar aplicativos mobile utilizando JavaScript.

---

## ⚡ O que é Expo?

Expo é uma ferramenta que facilita o desenvolvimento com React Native, eliminando configurações complexas.

---

## 🛠️ Pré-requisitos

* Node.js instalado
* npm ou yarn
* Aplicativo Expo Go no celular

---

## 📦 Criando um projeto

npx create-expo-app myApp
cd myApp

---

## ▶️ Rodando o projeto

npx expo start

---

## 📱 Testando no celular

* Instale o Expo Go
* Escaneie o QR Code exibido no terminal ou navegador

---

## 📚 Instalando bibliotecas

npx expo install nome-da-biblioteca

---

## 📁 Estrutura básica

* App.js → arquivo principal
* components/ → componentes reutilizáveis
* assets/ → imagens e recursos

---

## 📱 Exemplo simples

import { Text, View } from 'react-native';

export default function App() {
return ( <View> <Text>Hello World</Text> </View>
);
}

---

## 🔄 Expo vs React Native CLI

Expo:

* Mais simples de configurar
* Ideal para iniciantes
* Não exige código nativo no início

React Native CLI:

* Maior controle sobre o projeto
* Permite customizações nativas
* Exige configuração mais avançada

---

## 📦 Build do aplicativo

npm install -g eas-cli
eas login
eas build

---

## 🚀 Publicação

Android:

* Gerar arquivo APK ou AAB
* Enviar para Google Play

iOS:

* Gerar build
* Enviar via App Store Connect

---

## 📌 Conclusão

Expo é uma excelente escolha para quem está começando ou deseja desenvolver aplicativos rapidamente.

