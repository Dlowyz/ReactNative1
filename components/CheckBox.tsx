import { useRouter } from "expo-router";
import {
  Pressable,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

type textProp = {
  customStyle?: StyleProp<ViewStyle>;
  sideTxt: string;
  textColor: string;
};

export default function Btn(Props: textProp) {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={{
        width: "80%",
        height: "5%",
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginTop: 20,
      }}
    >
      <Pressable
        style={[
          Props.customStyle,
          {
            borderWidth: 1,
            backgroundColor: "gray",
            borderRadius: 5,
            width: 30,
            height: 30,
            flex: 0,
          },
        ]}
      ></Pressable>
      <Text style={{ color: Props.textColor }}>{Props.sideTxt}</Text>
    </TouchableOpacity>
  );
}
