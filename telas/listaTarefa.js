import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button, CheckBox } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import * as SQLite from 'expo-sqlite';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Tarefa 1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Tarefa 2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Tarefa 3',
  },
];

const Item = ({ title }) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.item}>
      <CheckBox
        value={checked}
        onValueChange={setChecked}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const ListaTarefas = () => {
  const navigation = useNavigation();

  const cadastroTarefa = () => {
    navigation.navigate('Cadastro de tarefas');
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.buttonContainer}>
        <Button title="Cadastrar nova tarefa" onPress={cadastroTarefa} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
  },
  buttonContainer: {
    margin: 20,
  },
});

export default ListaTarefas;
