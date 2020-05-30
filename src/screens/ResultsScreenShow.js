import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, FlatList,Image } from 'react-native';
import zomato from '../api/zomato';
import { ScrollView } from 'react-native-gesture-handler';

const ResultsScreenShow =({navigation})=>{
    const [result, setResults] = useState(null);
     const id = navigation.getParam('id');
  

const getResult = async(id)=>{
    const response = await zomato.get(`/restaurant?res_id=${id}`);
    setResults(response.data);
}
useEffect(()=>{
    getResult(id);
},[]);
if(!result){
    return null;
}
console.log(result,'nv');
    return(
        <View style={styles.container}>
            <ScrollView>
            <Text>{result.name}</Text>
           <Image source={{uri:result.thumb}} style={styles.image}/>
            <Text style={styles.title}>{result.name}</Text>
            <Text style={styles.name}>Average cost for two</Text>
            <Text >{result.currency} {result.average_cost_for_two}</Text>
            <Text style={styles.cuisines}>Cuisines</Text>
            <Text style={styles.name}>Timings</Text>
            <Text style={styles.name}>highlights</Text>
            <FlatList
      
            data={result.highlights} keyExtractor={id=>id}
            renderItem={({item})=>{
                return <Text style={styles.highlights}>{item}</Text>
            }}
            />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:15,
    },
image:{
    height:120,
    width:'auto',
    borderRadius:4,
    marginVertical:5
},
name:{
    fontWeight:'bold',
    marginTop:5
},
title:{
    fontWeight:'bold',
    fontSize:20,
    color:'salmon'
},
highlights:{
 color:'green',
 marginVertical:5,

}
});
export default ResultsScreenShow;