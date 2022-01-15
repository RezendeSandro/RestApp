import React from 'react';
import { View, Text, Switch, TextInput} from 'react-native';

const SearchForm = () => {
  return(
    <View>
      <View 
      style={{
        backgroundColor: '#f0f0f0',
        marginBottom: 20,
        borderRadius: 99,
        }}>
        
        <TextInput 
        style={{
          fontSize: 16,
          lineHeight: 25,
          padding: 10
          }}
          
          placeholder='Pesquisar Estabelecimento' />
      </View>


      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text> Aberto Agora? </Text>
        <Switch 
        value={true}
        onTintColor='#7bbdd1'
        thumbColor='#6ca8ba'
        thumbTintColor='#7bbdd1'  />
      </View>
    </View>
  );
};

export default SearchForm;