import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';


export default function Header() {
 return (
   <View style={styles.header}>

    <TouchableOpacity>
        <Image
        style={styles.logo}
        source={require('../../img/logo.png')}
        />
    </TouchableOpacity>

    <TouchableOpacity>
        <Image
        style={styles.enviar}
        source={require('../../img/send.png')}
        />
    </TouchableOpacity>

   </View>
  );
}

const styles = StyleSheet.create({
    header: {
        height: 55,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 0.2,
        shadowColor: '#000',
        elevation: 2 
    },

    enviar: {
        width: 23,
        height: 23
    }
})