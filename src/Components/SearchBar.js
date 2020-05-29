import React from 'react';
import {View, Text, StyleSheet}  from 'react-native';
import {Feather} from '@expo/vector-icons';
const SearchBar =()=>{
    return(
        <View style={styles.background}>
            <Feather name="search" size={20} />
            <Text>search</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    background:{
        backgroundColor:'#F0EEEE',
        height:50,
        marginHorizontal:15,
        flexDirection:'row',
        borderRadius:5,
    }
})
export default SearchBar;