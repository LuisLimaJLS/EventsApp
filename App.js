import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//use Navigator
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import Screens
import ListScreen from './screens/ListScreen';
import DateScreen from './screens/DateScreen';
import FormScreen from './screens/FormScreen';
import DistrictScreen from './screens/DistrictScreen';
//Navigator stack type
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DistrictScreen">
        <Stack.Screen name="ListScreen" component={ListScreen} options={{title:"Lista de Eventos"}}/>
        <Stack.Screen name="DateScreen" component={DateScreen} options={{title:"Eventos por fecha"}}/>
        <Stack.Screen name="FormScreen" component={FormScreen} options={{title:"Nuevo evento"}}/>
        <Stack.Screen name="DistrictScreen" component={DistrictScreen} options={{title:"Distrito"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
