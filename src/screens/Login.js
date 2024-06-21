import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


const Login = ({ navigation }) => {

    const handle = () => {
        navigation.navigate('First');
    }
    const handle2 = () => {
        navigation.navigate('Main');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Let's get Started</Text>
            <Text style={styles.text2}>Register or login with mobile number</Text>

            <View style={{ width: '90%', paddingLeft: 30 }}>
                <Text style={styles.text3}>Enter mobile number</Text>
                <View style={styles.phoneInputContainer}>
                    <Image
                        source={require('./../images/indianflag.png')}
                        style={styles.flagIcon}
                    />
                    <Text style={styles.countryCode}>+91</Text>
                    <TextInput
                        keyboardType='numeric'
                        placeholder='999-999-9999'
                        style={[styles.textInput, { flex: 1 }]}
                    />
                </View>
            </View>

            <View style={{ width: '90%', paddingLeft: 30 }}>
                <Text style={styles.text3}>Referral code </Text>
                <View style={styles.phoneInputContainer}>
                    <Image
                        source={require('./../images/box.png')}
                        style={styles.flagIcon}
                    />
                    <TextInput
                        placeholder='Enter text here'
                        style={[styles.textInput, { flex: 1 }]}
                    />
                </View>
            </View>

            <View style={styles.descview}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Icon name="lock" size={25} color="white" style={{ marginRight: 10 }} />
                    <Text style={{ color: 'white', fontSize: 15 }}>We ensure your data is securely encrypted with TLS</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
                    <Icon name="check-square" size={20} color="white" style={{ marginRight: 10 }} />
                    <Text style={{ color: 'white' }}>
                        By registering, I agree to Qoneqt's Terms & Conditions{'\n'} and Privacy Policy
                    </Text>
                </View>
            </View>


            <View style={styles.imageview}>
                <Image source={require('./../images/or.png')} style={{ tintColor: 'white', marginBottom: 25 }} />
                <TouchableOpacity onPress={handle}>
                    <Image source={require('./../images/SignG.png')} style={{ marginBottom: 15 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handle2}>
                    <Image source={require('./../images/SignG.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    imageview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
    },
    text1: {
        color: '#fff',
        fontSize: 40,
        paddingLeft: 30,
        paddingTop: 130,
    },
    text2: {
        fontSize: 18,
        paddingLeft: 40,
        color: '#fff',
    },
    text3: {
        fontSize: 20,
        paddingLeft: 20,
        paddingTop: 30,
        marginBottom: 5,
        color: '#fff',
    },
    phoneInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        backgroundColor: '#ab9fcf',
    },
    flagIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    countryCode: {
        fontSize: 16,
        color: '#fff',
        marginRight: 10,
    },
    textInput: {
        fontSize: 16,
        backgroundColor: '#ab9fcf',
        padding: 10,
        color: '#fff',
    },
    reqimage: {
        alignSelf: 'center',
        marginLeft: 33,
        marginTop: 20,
    },
    descview: {
        alignItems: 'center',
        marginVertical: 40,
        marginTop: 100,
        marginRight: 10
    }
});
