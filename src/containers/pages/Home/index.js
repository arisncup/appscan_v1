import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Header from '../../../components/molecules/Header';
import MainAccounts from '../../../components/molecules/MainAccounts';
import MainMenu from '../../../components/organisms/MainMenu';
import TabNavigation from '../../../components/organisms/TabNavigation';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* Body or Content */}
                <View style={styles.body}>
                    {/* Header */}
                    <Header />
                    <View style={styles.line}></View>
                    <ScrollView>
                        {/* Account */}
                        <MainAccounts />
                        <View style={{ marginHorizontal: 17, backgroundColor: 'yellow', height: 2 }}></View>
                        {/* Main Menu */}
                        <MainMenu />
                        {/* Line Abu-Abu */}
                        <View style={{ height: 15, backgroundColor: '#F2F2F4' }}></View>
                    </ScrollView>
                </View>

                {/* TabNavigation */}
                <TabNavigation />
            </View>
        )
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        flex: 1,
        backgroundColor: 'white'
    },
    line: {
        height: 2,
        backgroundColor: 'yellow'
    }
})
