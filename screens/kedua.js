import React from 'react';
import { StyleSheet, Text, View, Image ,Platform,TextInput} from 'react-native';
import Judul from '../komponen/Judul';


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Judul mampus="Biodata"/>

        <Image 
            style={{height:200 , width:200}}
            source={require('./1.jpg')}/>
            <Text> Airlangga S D</Text>
            <Text> XI RPL 04</Text>
        
      </View>
    );
  }
}


    


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


