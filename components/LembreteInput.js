import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LembreteInput = (props) => {
    const [lembrete, setLembrete] = useState('');
    const [numero, setNumero] = useState('');
    //captura o texto digitado
 
    const capturarLembrete = (lembrete) => {
    setLembrete(lembrete)
  };

  const capturarNumero = (numero) => {
    setNumero(numero)
  };

    return (
        <View style={styles.lembreteView}>
            {/*O usuário irá inserir os lembretes aqui*/}
            <TextInput placeholder="Nome..."
                style={styles.lembreteInputText}
                onChangeText={capturarLembrete}
                value={lembrete}
            />

            <TextInput placeholder="Ra..."
                style={styles.lembreteInputText}
                onChangeText={capturarNumero}
                value={numero}
            />

            <Button title="Adicionar Aluno"
                onPress={() => props.onAdicionarLembrete(lembrete,numero)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    lembreteView: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    lembreteInputText: {
      width: '80%',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      padding: 2,
      flexDirection: 'column',
      marginBottom: 8
    }
  });

  export default LembreteInput;