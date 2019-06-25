import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  StatusBar,
  Keyboard
} from 'react-native';
import DatePicker from './componentes/DatePicker';
import { RadioButton } from 'react-native-paper';

import styles from './styles';

export default class App extends Component {
  state = {
    numeros: 0,
    indice: 0,
    trocas: 0,
    checked: 'primeiro',
    comparacoes: 0,
    data: '',
    dataResult: ''
  };
  

  maisUm = () => {
    let { numeros, indice, trocas, comparacoes, data } = this.state;

    let vetor = [];

    if(!numeros) {
      this.inputNumeros.focus();
      return;
    }

    // Esconde o teclado caso ele esteje aberto
    Keyboard.dismiss();

    vetor = numeros.split(/[,-\s]/);

    vetor = this.converter(vetor);

    let tamanho = vetor.length - 1;
    let tamanhoB = vetor.length - 1;

    if(checked = "primeiro"){
      
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

    }else if(checked == "segundo"){

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
      data: '',
      dataResult: '',
      checked: 'primeiro'
    });
  };

  converter = (lista) => {
      lista.forEach( item => {
      item = parseFloat(item);
    });

    return lista;
  };

  _formatData = _prData => {
    if (_prData === '') return;

    _prData = _prData.split('/');

    this.setState({ data: `${_prData[2]}/${_prData[1]}/${_prData[0]}`, dataResult: `${_prData[0]}/${_prData[1]}/${_prData[2]}` });
  }

  render() {
    const { numeros, checked, data } = this.state;

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
            ref={input => this.inputNumeros = input}
            placeholder="Informe os números"
            keyboardType="numeric"
            maxLength={30}
            placeholderTextColor="#AAA"
            style={styles.input}
            value={numeros}
            onChangeText={text => this.setState({ numeros: text })}
          />

          <DatePicker
            style={styles.datePicker}
            date={data}
            mode="date"
            placeholder="Informe uma data"
            format="YYYY-MM-DD"
            minDate="2010-01-01"
            maxDate="2050-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={data => this._formatData(data)}
          />

          <View style={styles.containerRadioButtons}>
            <View style={styles.radioButton}>
              <RadioButton
                value="primeiro"
                color="#8B78DC"
                status={checked === 'primeiro' ? 'checked' : 'unchecked'}
                onPressIn={() => this.setState({ checked: 'primeiro' })}
              />
              <Text>Bolha</Text>
            </View> 
            <View style={styles.radioButton}>
              <RadioButton
                value="segundo"
                color="#8B78DC"
                status={checked === 'segundo' ? 'checked' : 'unchecked'}
                onPressIn={() => this.setState({ checked: 'segundo' })}
              />
              <Text>Seleção</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton
                value="terceiro"
                color="#8B78DC"
                status={checked === 'terceiro' ? 'checked' : 'unchecked'}
                onPressIn={() => this.setState({ checked: 'terceiro' })}
              />
              <Text>Fila</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton
                value="quarto"
                color="#8B78DC"
                status={checked === 'quarto' ? 'checked' : 'unchecked'}
                onPressIn={() => this.setState({ checked: 'quarto' })}
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
              <Text style={styles.resultText}>Data: {this.state.dataResult}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
