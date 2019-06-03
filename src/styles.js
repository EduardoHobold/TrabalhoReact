import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FEFF'
  },
  header: {
    height: 60 + 24,
    backgroundColor: '#6B78DC',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 15
  },
  title: {
    fontSize: 24,
    color: 'white'
  },
  form: {
    flex: 1,
    alignItems: 'center'
  },
  button: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8B78DC',
    borderRadius: 50,
    width: Dimensions.get('screen').width - 50,
    height: 48
  },
  textButton: {
    color: 'white',
    fontSize: 18
  },
  input: {
    height: 50,
    borderColor: '#707070',
    color: '#808080',
    borderRadius: 10,
    padding: 10,
    width: Dimensions.get('screen').width - 50,
    fontSize: 17,
    marginTop: 10,
    borderWidth: 0.5
  },
  containerResults: {
    borderColor: '#888',
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: 25,
    borderRadius: 5,
    width: Dimensions.get('screen').width - 50
  },
  resultTitle: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#808080'
  },
  results: {
    padding: 17
  },
  resultText: {
    fontSize: 17,
    padding: 1
  }
});
