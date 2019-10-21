import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import TabNavigation from '../../../components/organisms/TabNavigation'

class Qrcode extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ marginBottom: 12, fontSize: 14, color: 'white' }}>Please Scan your Qr Code</Text>
                    <View style={{ width: 200, height: 200 }}>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/dummy/qrcode-temp.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TabNavigation />
            </View>
        )
    }
}

export default Qrcode;