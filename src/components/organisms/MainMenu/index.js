import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MenuFeature from '../../../components/molecules/MenuFeature';
import { withNavigation } from 'react-navigation';

class MainMenu extends Component {
    render() {
        return (
            <View style={styles.mainMenu}>
                <View style={styles.menuColumn}>
                    <MenuFeature onPress={() => this.props.navigation.navigate('ChillerYork')} textMenu="Temperature" imgMenu={require('../../../assets/icon/temperatur.png')} />
                    <MenuFeature onPress={() => this.props.navigation.navigate('IpaSystem')} textMenu="IPA System" imgMenu={require('../../../assets/icon/pressure.png')} />
                    <MenuFeature onPress={() => this.props.navigation.navigate('Nitrogen')} textMenu="Nitrogen" imgMenu={require('../../../assets/icon/nos.png')} />
                    <MenuFeature onPress={() => this.props.navigation.navigate('NitrogenGenarator')} textMenu="N Generator" imgMenu={require('../../../assets/icon/compressor.png')} />
                </View>
                <View style={styles.menuColumn}>
                    <MenuFeature onPress={() => this.props.navigation.navigate('CityWater')} textMenu="City Water" imgMenu={require('../../../assets/icon/water.png')} />
                    <MenuFeature onPress={() => this.props.navigation.navigate('SoftenWater')} textMenu="Warehouse" imgMenu={require('../../../assets/icon/warehouse.png')} />
                    <MenuFeature textMenu="Gas Pump" imgMenu={require('../../../assets/icon/gaspump.png')} />
                    <MenuFeature onPress={() => alert('Bottom Sheet!')} textMenu="More" imgMenu={require('../../../assets/icon/more.png')} />
                </View>
            </View>
        )
    }
}

export default withNavigation(MainMenu);

const styles = StyleSheet.create({
    mainMenu: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 17,
        marginTop: 18
    },
    menuColumn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 18
    }
})