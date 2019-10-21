import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import NavBarIcons from '../../../components/molecules/NavBarIcons';
import { withNavigation } from 'react-navigation';

class TabNavigation extends Component {
    render() {
        return (
            <View style={styles.columnTabBar}>
                <NavBarIcons onPress={() => this.props.navigation.navigate('Home')} textTab="Home" imgTab={require('../../../assets/icon/home.png')} />
                <NavBarIcons onPress={() => this.props.navigation.navigate('Qrcode')} textTab="Qrcode" imgTab={require('../../../assets/icon/qrcode.png')} />
                <NavBarIcons onPress={() => this.props.navigation.navigate('Settings')} textTab="Settings" imgTab={require('../../../assets/icon/settings.png')} />
            </View>
        )
    }
}

export default withNavigation(TabNavigation);

const styles = StyleSheet.create({
    columnTabBar: {
        height: 54,
        flexDirection: 'row',
        backgroundColor: 'grey',
        opacity: 0.9
    }
})