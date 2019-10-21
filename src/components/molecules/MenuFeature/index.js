import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MenuFeature = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.menuBox}>
                <Image style={styles.menuIcons} source={props.imgMenu} />
            </View>
            <Text style={styles.menuText}>{props.textMenu}</Text>
        </TouchableOpacity>
    )
}

export default MenuFeature;

const styles = StyleSheet.create({
    menuBox: {
        width: 68,
        height: 68,
        borderWidth: 1,
        borderRadius: 18,
        borderColor: '#EFEFEF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuIcons: {
        width: 58,
        height: 58
    },
    menuText: {
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 6
    }
})