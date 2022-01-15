import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Stars from './Stars';

const ResultItem = (props) => {
  return (
<TouchableOpacity>

    <View style={{marginTop: 12, display: 'flex', flexDirection: 'row'}}>
      <Image 
        source={props.item.image_url}
        style={{width: 100, height: 100, resizeMode: 'cover'}} 
      />

      <View style={{flex: 1, marginLeft: 8, justifyContent: 'space-between'}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}> {props.item.name} </Text>
        <Text style={{letterSpacing: 4, fontSize: 16, color: '#008000'}}> {props.item.price} </Text>
        <Stars value={props.item.rating} />
        <Text>{props.item.is.closed ? 'Fechado' : 'Aberto'}</Text>
      </View>
    </View>
  < /TouchableOpacity>
  )
};