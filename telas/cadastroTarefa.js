import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const CadastroTarefa = ({ navigation }) => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const adicionarTarefa = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título da Tarefa"
        value={titulo}
        onChangeText={text => setTitulo(text)}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descrição da Tarefa"
        multiline={true}
        numberOfLines={4}
        value={descricao}
        onChangeText={text => setDescricao(text)}
      />
      <Button title="Adicionar Tarefa" onPress={adicionarTarefa} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top', // Para alinhar o texto ao topo do TextInput
  },
});

export default CadastroTarefa;