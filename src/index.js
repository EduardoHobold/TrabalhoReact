import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  StatusBar
} from 'react-native';
import styles from './styles';

export default class App extends React.Component {
  state = {
    numeros: 0,
    indice: 0,
    trocas: 0,
    comparacoes: 0
  };

  maisUm = () => {
    let { numeros, indice, trocas, comparacoes } = this.state;

    let vetor = [];

    numeros.replace(' ', ',');
    numeros.replace('-', ',');
    vetor = numeros.split(',');

    let tamanho = vetor.length - 1;
    let tamanhoB = vetor.length - 1;

    indice = tamanho;

    for (let i = 0; i < tamanho; i++) {
      for (let x = 0; x < tamanhoB; x++) {
        if (vetor[x] > vetor[x + 1]) {
          temp1 = vetor[x];
          temp2 = vetor[x + 1];
          vetor[x] = temp2;
          vetor[x + 1] = temp1;

          comparacoes++;
          trocas++;
        } else {
          comparacoes++;
        }
      }
      tamanhoB--;
    }

    this.setState({
      numeros: numeros,
      indice: indice,
      trocas: trocas,
      comparacoes: comparacoes
    });
  };

  limpar = () => {
    this.setState({
      indice: 0,
      trocas: 0,
      comparacoes: 0,
      numeros: 0
    });
  };

  render() {
    const { numeros } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#6B58DC"
          barStyle="light-content"
          translucent
        />
        <View style={styles.header}>
          <Text style={styles.title}>Trabalho Estrutura de Dados</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            placeholder="Informe os números"
            keyboardType="numeric"
            placeholderTextColor="#AAA"
            style={styles.input}
            value={numeros}
            onChangeText={text => this.setState({ numeros: text })}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={this.maisUm}
            onLongPress={this.limpar}
          >
            <Text style={styles.textButton}>Calcular</Text>
          </TouchableHighlight>

          <View style={styles.containerResults}>
            <View style={styles.resultTitle}>
              <Text style={styles.textButton}>Resultados</Text>
            </View>
            <View style={styles.results}>
              <Text style={styles.resultText}>Índice: {this.state.indice}</Text>
              <Text style={styles.resultText}>Trocas: {this.state.trocas}</Text>
              <Text style={styles.resultText}>
                Comparações: {this.state.comparacoes}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
