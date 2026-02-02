import { styles } from "@/components/styles";
import { Text, TouchableOpacity } from "react-native";

type textProp = {
  name: string;
  color: string;
  textColor: string;
};

export default function Btn(Props: textProp) {
  return (
    <TouchableOpacity style={[styles.btn, { backgroundColor: Props.color }]}>
      <Text style={{ fontSize: 20, fontWeight: "600", color: Props.textColor }}>
        {Props.name}
      </Text>
    </TouchableOpacity>
  );
}
