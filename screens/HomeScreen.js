import React, {useState} from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import SearchForm from '../components/SearchForm';
import ResultsList from '../components/ResultsList';

const API_KEY = 'v-Q2MkO_Q5T0GGRWwOe4CwohuNUNoV1yo6t05QEo5YjOsycDNDZwAtDfohjQ9tg_y-FLZYNQMulOVsCTNmlMZlm2khu01ZoJGiDO7nruVG8oH7TH6KcdWMJ5g6nTYXYx';

const HomeScreen = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isRefreshing, setRefreshing] = useState(false);
  const [lastSearchParams, setSearchParams] = useState({});

  const onStartSearch = async (searchTerm, isOpenOnly) => {
    setLoading(true);
    setSearchParams({searchTerm, isOpenOnly});

    const location = encodeURIComponent('Fortaleza');
    const term = encodeURIComponent('searchTerm');
    
    const query = `location=${location}&term=${term}&oen_now=${isOpenOnly}`;

    const response = await fetch(`https://api.yelp.com/v3/businesses/search?${query}`, {
      headers: {
        'Authorization':  `Bearer ${API_KEY}`
      },
    });
    setResults(await response.json());
    setLoading(false);
  };

  const onRefreshSearch = async () => {
    setRefreshing(true);
    await onStartSearch(lastSearchParams.searchTerm, lastSearchParams.isOpenOnly);
  };

  return(
    <View style={{flex: 1}}>
      <SearchForm />

      {isLoading && !isRefreshing && <ActivityIndicator size='large' color='#ff63b3' />}
      
      <ResultsList
       data={results}
       isRefreshing={isRefreshing}
       onRefreshSearch={onRefreshSearch}
       /> 
    </View>
  );
};

export default HomeScreen;