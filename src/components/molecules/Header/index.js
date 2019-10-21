import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Header = () => {
    return (
        <View style={styles.headerBar}>
            <View>
                <Text style={styles.logoText}>Qcode Scan</Text>
            </View>
            <TouchableOpacity>
                <Image source={require('../../../assets/icon/shutdown.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    headerBar: {
        height: 60,
        backgroundColor: 'white',
        opacity: 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    logoText: {
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 20,
        color: 'blue'
    },
    logoImg: {
        width: 48,
        height: 48
    }
})