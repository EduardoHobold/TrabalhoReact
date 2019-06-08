import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  StatusBar
} from 'react-native';

import DatePicker from 'react-native-datepicker'
import { RadioButton } from 'react-native-paper';
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
    const { checked } = this.state;

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
            style={[styles.DatePicker, styles.input]}
            date={this.state.data}
            mode="date"
            placeholder="Informe a data"
            format="YYYY-MM-DD"
            minDate="2010-01-01"
            maxDate="2050-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(data) => {this.setState({data: data})}}
          />

            <View style={{flex: 1, flexDirection: 'row'}}>
                <View>
                  <RadioButton
                    value="primeiro"
                    status={checked === 'primeiro' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: 'primeiro' }); }}
                  />
                  <Text>Bolha</Text>
                </View> 
                <View>
                  <RadioButton
                    value="segundo"
                    status={checked === 'segundo' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: 'segundo' }); }}
                  />
                  <Text>Seleção</Text>
                </View>
                <View>
                  <RadioButton
                    value="terceiro"
                    status={checked === 'terceiro' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: 'terceiro' }); }}
                  />
                  <Text>Fila</Text>
                </View>
                <View>
                  <RadioButton
                    value="quarto"
                    status={checked === 'quarto' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: 'quarto' }); }}
                  />
                  <Text>QuickSort</Text>
                </View>
              </View>

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
              <Text style={styles.resultText}>Comparações: {this.state.comparacoes}</Text>
              <Text style={styles.resultText}>Data: {this.state.data}</Text>

            </View>
          </View>
        </View>
      </View>
    );
  }
}
