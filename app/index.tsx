import { Link } from "expo-router";
import { Text, View } from "react-native";
import "../global.css";

const Index = () => {
  return (
    <View
      style={{
        backgroundColor: "beige",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 25, fontWeight: 700 }}> Hello </Text>
      <Link href={"/about"}> About</Link>
    </View>
  );
};

export default Index;
