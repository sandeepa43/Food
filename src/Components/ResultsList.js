import React from 'react';
import {View,Text, StyleSheet, FlatList} from 'react-native';

const ResultsList = ({title, results}) => {
return <View>
    <Text style={styles.titleStyle}>{title}</Text>
    <Text>Results:{results.length}</Text>
    <FlatList
    horizontal={true}
    data={results}
    showsHorizontalScrollIndicator={false}
    keyExtractor={(result)=>result.restaurant.id}
    renderItem={({item})=>{
      
        return (
            <View>
                
                <Text>{item.restaurant.name}</Text>
            </View>
        );
    }}
    
    />
</View>
};
const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:'bold'
    }
})

export default ResultsList;