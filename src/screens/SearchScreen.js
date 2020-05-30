import React,{useState} from 'react';
import {View, Text, StyleSheet}  from 'react-native';
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
        <View>
            <SearchBar
             term ={term} 
            onTermChange={setTerm}
            onTermSubmit={()=>searchApi(term)}
            />
            <Text>search Screen </Text>
            {errorMessage ? <Text>{errorMessage} </Text> : null}
            <Text>We have found {results.length} results</Text>
            <ResultsList results={filterResultsByprice(2)} title="Cost Effective"/>
            <ResultsList results={filterResultsByprice(3)} title="Bit Picer"/>
            <ResultsList results={filterResultsByprice(4)} title="Big Spender"/>
    
        </View>
    );
}
export default SearchScreen;