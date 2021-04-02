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
        <View style={styles.areaFeed}>
            <View style={styles.viewPerfil}>
                <Image 
                    source={{ uri: lista.imgperfil }}
                    style={styles.fotoPerfil}
                />
                <Text style={styles.nomeUsuario}>{lista.nome}</Text>
            </View>

            <Image
            resizeMode="cover"
                style={styles.fotoPublicacao}
                source={{ uri: lista.imgPublicacao }}
            />

            <View style={styles.areaBtn}>
                <TouchableOpacity>
                    <Image
                        source={require('../like.png')}
                        style={styles.iconeLike}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSend}>
                    <Image
                        source={require('../send.png')}
                        style={styles.iconeLike}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.viewRodape}>
                <Text style={styles.nomeRodape} >
                    {lista.nome}
                </Text>
                <Text style={styles.descRodape}>
                    {lista.descricao}
                </Text>
            </View>


        </View>
    );
}
const styles = StyleSheet.create({
    areaFeed: {

    },
    nomeUsuario: {
        fontSize: 22,
        textAlign: 'center',
        color : '#000'
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    fotoPublicacao: {
        flex: 1,
        height: 400,
        alignItems: 'center'
    },
    viewPerfil: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        padding: 8
    },
    areaBtn: {
        flexDirection: 'row',
        padding: 5
    },
    iconeLike: {
        width: 33,
        height: 33
    },
    btnSend: {
        paddingLeft: 8
    },
    viewRodape: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    descRodape: {
        paddingLeft: 5,
        color: '#000',
        fontSize: 15
    },
    nomeRodape: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        paddingLeft: 5
    }


});