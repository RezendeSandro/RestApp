import React from 'react';
import {Text, FlatList, RefreshControl} from 'react-native';
import ResultItem from './ResultItem';

const ResultsList = props => {
  if (props.data.total === 0) {
    return (
      <Text style={{alignSelf: 'center', fontSize: 18, marginTop: 20}}>
        Nenhum Estabelecimento Encontrado.
      </Text>
    );
  }
  return ( 
    <FlatList 
      data={props.data.businesses}
      renderItem={ResultItem}
      refreshControl={<RefreshControl refreshing={props.isRefreshing} onRefresh={props.onRefreshSearch}  tintColor='#ff63b3' />}
      />
  );
};

export default ResultsList;