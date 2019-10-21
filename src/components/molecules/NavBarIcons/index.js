import React from 'react';
import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NavBarIcons = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.columnIcon}>
            <Image style={styles.icons} source={props.imgTab} />
            <Text style={styles.textIcon}>{props.textTab}</Text>
        </TouchableOpacity>
    )
}

export default NavBarIcons;

const styles = StyleSheet.create({
    columnIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icons: {
        width: 26,
        height: 26
    },
    textIcon: {
        fontSize: 10,
        color: '#545454',
        marginTop: 4
    }
})