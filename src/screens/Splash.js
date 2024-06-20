import { View, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('First')
        }, 2000);
    }, [])
    return (
        <View style={styles.vw}>
            <Image source={require('./../images/Logos.png')} style={styles.image} />
        </View>
    )
}

export default Splash;
const styles = StyleSheet.create({
    vw: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    txt: {
        color: '#fff',
        fontSize: 40,
        fontWeight: '800',
        padding: 30
    },
    image: {
        width: 425,
        height: 900,
        // borderRadius: 600
    }
})