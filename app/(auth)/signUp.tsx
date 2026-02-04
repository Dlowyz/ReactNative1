import Btn from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import TextInput from "@/components/TextInputComponent";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <TextInput titleText="Name" innerTxt="Enter your name here" />
        <TextInput titleText="Email" innerTxt="Enter your email here" />
        <TextInput
          secure={true}
          titleText="Password"
          innerTxt="Enter your password here"
        />
        <CheckBox
          customStyle={{}}
          sideTxt="I agree with Terms & Privacy"
          textColor="#4F63AC"
        />
        <Btn
          name="Sign up"
          link={"./signUp"}
          textColor="#ffffff"
          color="#4F63AC"
          customStyle={{ marginTop: 40 }}
        />

        <Text style={{ fontSize: 40, fontWeight: "700" }}>Sign up!</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
