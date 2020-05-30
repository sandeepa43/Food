import React from 'react';
import {View,Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';
import {withNavigation} from 'react-navigation';


const ResultsList = ({title, results, navigation}) => {
    if(!results.length){
        return null;
    }
return <View>
    <Text style={styles.titleStyle}>{title}</Text>
  
    <FlatList
    horizontal={true}
    data={results}
    showsHorizontalScrollIndicator={false}
    keyExtractor={(result)=>result.restaurant.id}
    renderItem={({item})=>{
        return (
        <TouchableOpacity onPress={()=>navigation.navigate('ResultsShow',{id: item.restaurant.id})}>
            <ResultsDetail result={item.restaurant}/>
          
        </TouchableOpacity>
        );
    }}
    
    />
</View>
};
const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5
    }
})

export default withNavigation(ResultsList);