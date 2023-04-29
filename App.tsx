import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import ProductFormScreen from "./src/screens/ProductFormScreen";
import Test from "./src/screens/Test";

export type RootStackParamList = {
  Home: undefined;
  ProductList: undefined;
  NewProductForm: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Test} />
        <Stack.Screen name="NewProductForm" component={ProductFormScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
