import React,{useState} from 'react';
import {View, Text, StyleSheet, ScrollView}  from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../Components/ResultsList';

const SearchScreen =()=>{
    const[term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByprice = (price) =>{
        return results.filter(result =>{
            return result.restaurant.price_range === price;
        });
    };

    return(
        <View style={{flex:1,backgroundColor:'white'}}>
            <SearchBar
             term ={term} 
            onTermChange={setTerm}
            onTermSubmit={()=>searchApi(term)}
            />
          
            {errorMessage ? <Text>{errorMessage} </Text> : null}
 
            <ScrollView>
            <ResultsList results={filterResultsByprice(2)} title="Cost Effective"/>
            <ResultsList results={filterResultsByprice(3)} title="Bit Picer"/>
            <ResultsList results={filterResultsByprice(4)} title="Big Spender"/>
            </ScrollView>
        </View>
    );
}
export default SearchScreen;