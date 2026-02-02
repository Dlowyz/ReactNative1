import { Tabs } from "expo-router";
import { Text } from "react-native";
export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Text>HELLOOO</Text>,
        }}
      />
      <Tabs.Screen
        name="splashScreen"
        options={{
          title: "splash",
          tabBarIcon: ({ color }) => <Text>HELLOOO</Text>,
        }}
      />
    </Tabs>
  );
}
