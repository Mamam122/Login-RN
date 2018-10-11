import React from 'react';
import {Text} from 'react-native';
class Judul extends React.Component{
	render(){
		return(
			
			<Text style ={salon.judul}>{this.props.mampus}</Text>
			
			)
	}
}
const salon ={
	judul:{
		color:'white',
		fontSize :60


	}
}
export default Judul;
