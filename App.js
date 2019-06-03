import React from 'react';
import { Text, TextInput, View, TouchableHighlight} from 'react-native';
import StyleSheet from './src/estilos/Padrao'


export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = { numeros: 0, indice: 0, trocas: 0, comparacoes: 0}
  }

    maisUm = () => {

        var s = this.state

        var vetor = [];
        s.numeros.replace(" ", ",");
        s.numeros.replace("-", ",");
        vetor = s.numeros.split(",")

        var tamanho = vetor.length-1;
        var tamanhoB = vetor.length-1;

        s.indice = tamanho;

      for(let i = 0;i < tamanho;i++){
        for(let x = 0;x < tamanhoB;x++){
            if(vetor[x] > vetor[x+1]){
                temp1 = vetor[x];
                temp2 = vetor[x+1];
                vetor[x] = temp2;
                vetor[x+1] = temp1;
                s.comparacoes++;
                s.trocas++;
            }else{
                s.comparacoes++;
            } 
        }
        tamanhoB--;
      }

      this.setState(s);
  }

  limpar = () => {
      var s = this.state
       
      s.indice = 0;
      s.trocas = 0;
      s.comparacoes = 0;

      this.setState(s);
  }

  render() {
    return (
      <View>
        <View>
          <Text style={StyleSheet.titulo}>Trabalho Estrutura de Dados</Text>
          <TextInput placeholder="Informe os números" keyboardType="numeric" style={StyleSheet.input}
          onChangeText={ (numeros) => this.setState({numeros})}></TextInput>
        </View>

        <View>
          <TouchableHighlight
            onPress={this.maisUm}
            onLongPress={this.limpar}>
            <Text>Calcular</Text>
          </TouchableHighlight>
        </View>

        <View>
          <Text style={StyleSheet.titulo}>{this.state.indice}</Text>
          <Text style={StyleSheet.titulo}>{this.state.trocas}</Text>
          <Text style={StyleSheet.titulo}>{this.state.comparacoes}</Text>
        </View>

     </View>

    )
  }
}

