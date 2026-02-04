import { styles } from "@/components/styles";
import { useRouter } from "expo-router";
import { StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";

type textProp = {
  name: string;
  color?: string;
  textColor?: string;
  link: string;
  customStyle?: StyleProp<ViewStyle>;
};

export default function Btn(Props: textProp) {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.navigate(Props.link)}
      style={[
        styles.btn,
        Props.customStyle,
        {
          backgroundColor: Props.color,
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          color: Props.textColor,
        }}
      >
        {Props.name}
      </Text>
    </TouchableOpacity>
  );
}
