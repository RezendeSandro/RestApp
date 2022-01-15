import React from 'react';
import {FontAwesome} from '@expo/vector-icons';
import {View} from 'react-native';

const Stars = (props) => {
  const response = [];

  for (let i = 1; i <= 5; i++) {
    let type = props.value >= i ? 'star' : 'star-o'

    if (props.value - i === 0.5) {
      type = 'star-half-empty'
    }


    response.push(<FontAwesome name={type} size={20} style={{color: "#f58931"}} />);
  }

  return <View style={{flexDirection: 'row'}}>{response}</View>;
};


export default Stars;