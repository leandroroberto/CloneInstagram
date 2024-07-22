import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function List(props) {

    function carregaIcone(likeada){
        return likeada ? require('../../img/likeada.png') : require('../../img/like.png')
    }

    function mostraLikes(likers){
        if(likers == 0){
            return
        }

        return(
            <Text style={{fontSize: 18, marginLeft: 10, fontWeight: 'bold'}}>{likers} {likers > 1 ? 'Curtidas' : 'Curtida'}</Text>
        )
    }

    return (
        <View>
            <View style={styles.viewPerfil}>
                <Image
                    source={{uri: props.data.imgperfil}}
                    style={styles.fotoPerfil}
                />
                <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
            </View>

            <Image
            resizeMode="cover"
            style={styles.imgPublicacao}
            source={{uri: props.data.imgPublicacao}}
            />

            <View style={styles.areaBtn}>

                <TouchableOpacity>
                    <Image
                    source={carregaIcone(props.data.likeada)}
                    style={styles.iconeLike}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                    source={require('../../img/comment.png')}
                    style={[styles.iconeLike, {marginLeft: 5}]}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                    source={require('../../img/send.png')}
                    style={[styles.iconeLike, {marginLeft: 10}]}
                    />
                </TouchableOpacity>

            </View>

            {mostraLikes(props.data.likers)}

            <Text style={styles.nomeRodape}>
                {props.data.nome}
            </Text>

            <Text style={styles.descRodape}>
                {props.data.descricao}
            </Text>

        </View>
    );
}


const styles = StyleSheet.create({
    viewPerfil:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 8,
        paddingLeft: 3,
        paddingBottom: 8
    },

    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    nomeUsuario:{
        paddingLeft: 5,
        fontSize: 22,
        color: "#000"
    },

    imgPublicacao:{
        height: 400,
        alignItems: 'center'
    },

    areaBtn:{
        padding: 8,
        flexDirection: 'row'
    },

    iconeLike:{
        width: 25,
        height: 25,
    },

    nomeRodape:{
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 8
    },

    descRodape:{
        paddingLeft: 8,
        paddingBottom: 10,
        fontSize: 15
    }

})