import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import cadastroTarefa from './telas/cadastroTarefa';
import listaTarefa from './telas/listaTarefa';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Lista de tarefas' component={listaTarefa} />
        <Stack.Screen name='Cadastro de tarefas' component={cadastroTarefa} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();