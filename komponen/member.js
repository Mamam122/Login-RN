import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar, TouchableHighlight} from 'react-native';


export default class Memberr extends Component{
		constructor(props){
			super (props) ;
			this.state={text : ''};
			this.state ={password :''};
		}


	render(){
		return(
			<View style ={styles.container}>
				<StatusBar
					barStyle="light-content"
					/>
				<TextInput 
					placeholder="username or email"
					placeholderTextColor="#2c3e50"
					returnKeyType="next"
					onSubmitEditing={() => this.passwordInput.focus()}
					keyboardType="email-address"
					autoCapitalize="none"
					autoCorrect={false}
					valeu = {this.state.text}
					style={styles.input}

					/>
				<TextInput 
					placeholder="password"
					style={styles.input}
					placeholderTextColor="#2c3e50"
					returnKeyType="go"
					secureTextEntry
					style={styles.input}
					ref={(input) => this.passwordInput = input}
					
					/>

					<TouchableOpacity style={styles.buttonContainer}>
					<Text style={styles.buttonText}>LOGIN</Text>
					</TouchableOpacity>
			</View>
		); 
	}
}

const styles = StyleSheet.create({
	container:{
		padding : 20
	},
	input: { 
		height : 40,
		backgroundColor: 'rgba(255,255,255,0.7)',
		marginBottom: 10,
		color:'#fff',
		paddingHorizontal:10,
		borderRadius :10
	},
	buttonContainer:{
		backgroundColor:'#fff',
		paddingVertical: 15,
		borderRadius :10
	},
	buttonText:{
		textAlign:'center',
		color: '#f00',
		fontWeight: '700'
	}
});
