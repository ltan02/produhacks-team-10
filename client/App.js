import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FamilyHomeScreen from "./pages/FamilyHomeScreen";
import { Text, Image } from "react-native-elements";
import FamilyHistoryScreen from "./pages/FamilyHistoryScreen";
import FamilyProfileScreen from "./pages/FamilyProfileScreen";
import FamilyInputScreen from "./pages/FamilyInputScreen";
import StandaloneInputScreen from "./pages/StandaloneInputScreen";
import GlobalFont from "react-native-global-font";
import NurseRecordScreen from "./pages/NurseRecordScreen";
import GiveMedicineScreen from "./pages/GiveMedicineScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#F2FFFD",
            height: 85,
            elevation: 8,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: -1,
            },
            shadowOpacity: 0.06,
            shadowRadius: 20,
            elevation: 1,
          },
          tabBarLabel: ({ focused }) => {
            const fontWeight = focused ? "bold" : "normal";
            const textDecorationLine = focused ? "underline" : "none";
            return (
              <Text style={{ fontWeight, textDecorationLine }}>
                {route.name}
              </Text>
            );
          },
          tabBarItemStyle: { paddingTop: 10 },
        })}
      >
        <Tab.Screen
          name="Dashboard"
          component={FamilyHomeScreen}
          options={{
            tabBarIcon: () => (
              <Image
                style={{ width: 30, height: 30 }}
                source={require("./assets/checklist.png")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Message"
          component={FamilyHistoryScreen}
          options={{
            tabBarIcon: () => (
              <Image
                style={{ width: 30, height: 30 }}
                source={require("./assets/chat.png")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={NurseRecordScreen}
          options={{
            tabBarIcon: () => (
              <Image
                style={{ width: 30, height: 30 }}
                source={require("./assets/user.png")}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

    
  );
}
