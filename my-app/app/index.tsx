import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";
import Card from "./src/components/Card";
export default function Index() {
  const router = useRouter();
  let autenticado = false;
  function handleButtonPress() {
    alert("Botão pressionado!");
    router.push("/login");
  }

  React.useEffect(() => {}, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Card text="Cartão 1" background="red" />
      <Card text="Cartão 2" background="green" />
      <Card text="Cartão 3" background="yellow" />

      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button
        title="Botao Simples"
        color={"blue"}
        onPress={handleButtonPress}
      />
    </View>
  );
}
