import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  StatusBar
} from 'react-native';

import DatePicker from 'react-native-datepicker'

import styles from './styles';

export default class App extends Component {
  state = {
    numeros: 0,
    indice: 0,
    trocas: 0,
    comparacoes: 0,
    data: ""
  };

  maisUm = () => {
    let { numeros, indice, trocas, comparacoes, data } = this.state;

    let vetor = [];

    vetor = numeros.split(/[,-\s]/);

    vetor = this.converter(vetor);

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
      comparacoes: comparacoes,
      data: data
    });

  };

  limpar = () => {
    this.setState({
      indice: 0,
      trocas: 0,
      comparacoes: 0,
      numeros: 0,
      data: ""
    });
  };

  converter = (lista) => {

    lista.forEach( item => {
      item = parseFloat(item);
    });

    return lista;
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
          <DatePicker
            style={{width: 300}}
            date={this.state.data}
            mode="date"
            placeholder="Informe a data"
            format="YYYY-MM-DD"
            minDate="2010-01-01"
            maxDate="2050-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(data) => {this.setState({data: data})}}
            style={styles.dateIcon}
            
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
              <Text style={styles.resultText}>Comparações: {this.state.comparacoes}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
