import { Text, View } from "react-native";

export default function Card(props: any) {
  const styles = {
    container: {
      backgroundColor: props.background || "blue",
      borderRadius: 10,
      padding: 20,
      margin: 10,
      width: "90%",
      height: 200,
    },
    text: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    },
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}
