import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const MainAccounts = () => {
    return (
        <View style={styles.accountBox}>
            <View style={styles.accountStyle}>
                <Image source={require('../../../assets/icon/person.png')} />
                <Text style={styles.textAccount}>Administrator</Text>
            </View>
            <View style={{ backgroundColor: '#2C5F', padding: 24, justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={{ fontSize: 14, color: 'white' }}>NIM : 1156401038</Text>
                <Text style={{ fontSize: 14, color: 'white' }}>Status : Active</Text>
            </View>
        </View>
    )
}

export default MainAccounts;

const styles = StyleSheet.create({
    accountBox: {
        marginHorizontal: 17,
        marginTop: 8
    },
    accountStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#2C5FBB',
        alignItems: 'center',
        padding: 14,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    textAccount: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff'
    }
})