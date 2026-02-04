import Btn from "@/components/Button";
import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image
        style={{ width: "100%", height: 200 }}
        source={require("@/assets/images/SplashPNG.png")}
      />
      <Text style={{ fontSize: 40, fontWeight: "700" }}>Youll Find</Text>
      <Text
        style={{
          fontSize: 40,
          color: "orange",
          fontWeight: "700",
          textDecorationLine: "underline",
        }}
      >
        All you need
      </Text>
      <Text style={{ fontSize: 40, fontWeight: "700" }}>Here!</Text>
      <Btn
        name="Sign up"
        link={"./signUp"}
        textColor="#ffffff"
        color="#4F63AC"
      ></Btn>
      <Btn link={"./logIn"} name="Log in" textColor="#4F63AC"></Btn>
    </View>
  );
}
