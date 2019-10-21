import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Text style={styles.logoText}>AQC</Text>
                </View>
                <Text style={styles.powered}>Powered by haris 1156401038</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#27ae60'
    },
    logo: {
        flex: 1,
        justifyContent: 'center'
    },
    logoText: {
        marginBottom: 10,
        fontSize: 100,
        color: 'white'
    },
    powered: {
        color: '#fff',
        fontWeight: '100',
        paddingBottom: 20
    }
})