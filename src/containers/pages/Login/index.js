import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import LoginForm from '../../../components/organisms/LoginForm';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logo}>AQS</Text>
                    <Text style={styles.title}>An app made for using React Native</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498bd'
    },
    logoContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center'
    },
    title: {
        color: '#fff',
        marginTop: 10,
        width: 170,
        textAlign: 'center'
    }
})