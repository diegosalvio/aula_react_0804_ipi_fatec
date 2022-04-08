import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react'

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      texto: "Texto inicial",
      contador: 0
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>{this.state.contador}</Text>
        <Button
          title="OK"
          onPress={() => {this.setState({contador: this.state.contador + 1})}}
        />
      </View> 
    )
  }
}

/*export default function App() {
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
