import React from 'react';
import {View, Text, StyleSheet,TextInput}  from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar =(props)=>{
    console.log(props);
    return(
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
             style={styles.inputStyle} 
            placeholder="Search" 
            autoCapitalize="none"
            autoCorrect={false}
            value={props.term} 
            onChangeText={props.onTermChange}
            onEndEditing={props.onTermSubmit}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:'#F0EEEE',
        height:50,
        marginHorizontal:15,
        flexDirection:'row',
        borderRadius:5,
        marginBottom:10
    },
    inputStyle:{
  fontSize:18,
      flex:1,
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }
})
export default SearchBar;