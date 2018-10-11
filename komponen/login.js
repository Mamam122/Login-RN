import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, KeyboardAvoidingView } from 'react-native';
import Memberr from './member';


export default class Login extends Component {
	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<View style={styles.logoContainer}>
					<Image style={styles.logo} source={require('./logo.png')}/>					
					<Text style={styles.title}></Text>
				</View>
				<View style ={styles.formContainer}>
					<Memberr/>  
			 	</View>
			</KeyboardAvoidingView>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex : 1,
		backgroundColor: '#f00'
	},
	logoContainer:{
		alignItems :'center',
		flexGrow : 100,
		justifyContent:'center'
	},
	title:{
		color:'#fff',
		marginTop: 12,
		width:170,
		textAlign: 'center'
	},
	logo:{
		width: 130,
		height:130
	}
});
