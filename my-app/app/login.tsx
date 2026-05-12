import axios from "axios";
import { useRouter } from "expo-router";
import React from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
const image = {
  uri: "https://image.slidesdocs.com/responsive-images/background/science-and-technology-earth-city-blue-technology-simple-atmosphere-future-technology-powerpoint-background_78b666c04f__960_540.jpg",
};

export default function Login() {
  const router = useRouter();

  const [login, setLogin] = React.useState("");
  const [senha, setSenha] = React.useState("");

  async function handleLogin() {
    if (login === "") {
      alert("Login obrigatório.");
      return false;
    }
    if (senha === "") {
      alert("Senha obrigatória.");
      return false;
    }

    try {
      const response = await axios.post(`http://localhost:3000/login`, {
        login,
        senha,
      });
      const user = response.data;
      if (user) {
        router.push("/");
      } else {
        alert("Login ou senha incorreto!");
      }
    } catch (e) {
      alert(e);
    }

    //
  }

  function esqueceuSenha() {
    alert("Redirecionando para a recuperação de senha...");
  }

  return (
    <>
      <ImageBackground
        resizeMode="cover"
        source={image}
        style={{
          flex: 1,
          flexDirection: "column",
          gap: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "90%",
            padding: 20,
            borderRadius: 10,
            backgroundColor: "white",
            gap: 20,
          }}
        >
          <Text style={{ color: "black" }}>Autenticacao</Text>
          <Text style={{ color: "black" }}>Login - {login}</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu login"
            onChangeText={(value) => {
              setLogin(value);
            }}
          />
          <Text style={{ color: "black" }}>Senha - {senha}</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua Senha"
            secureTextEntry
            onChangeText={(value) => {
              setSenha(value);
            }}
          />
          <Button onPress={handleLogin} title="Login" color="blue" />

          <Text style={{ color: "black" }}>Login Screen</Text>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});
