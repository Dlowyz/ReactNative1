import Btn from "@/components/Button";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 40, fontWeight: "700" }}>Youll Find</Text>
      <Text style={{ fontSize: 40, color: "orange", fontWeight: "700" }}>
        All you need
      </Text>
      <Text style={{ fontSize: 40, fontWeight: "700" }}>Here!</Text>
      <Btn name="Log in" color="#4F63AC"></Btn>
      <Btn name="Sign in" textColor="#4F63AC"></Btn>
    </View>
  );
}
