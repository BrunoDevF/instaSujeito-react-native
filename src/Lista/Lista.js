import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList
  } from 'react-native';

export default function Lista(props){

    const [lista,setLista] = useState(props.data)

    return(
        <View>
            <Text>{lista.nome}</Text>
        </View>
    );
}