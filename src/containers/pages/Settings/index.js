import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TabNavigation from '../../../components/organisms/TabNavigation'

class Settings extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Form Settings</Text>
                </View>

                <TabNavigation />
            </View>
        )
    }
}

export default Settings;