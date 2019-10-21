import React, { Component } from 'react';
import {
    StyleSheet, View, Text, Image, TextInput, TouchableOpacity,
    ScrollView
} from 'react-native';
import TabNavigation from '../../../components/organisms/TabNavigation';

export default class IpaSystem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputData: {
                fresh_ethanol_in: '',
                fresh_ethanol_out: '',
                fresh_ethanol_level: '',
                spent_ethanol_in: '',
                spent_ethanol_out: '',
                spent_ethanol_level: '',
                leakage: ''
            }
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ padding: 17 }}>
                        <View style={styles.logoIcons}>
                            <Image source={require('../../../assets/icon/pressure.png')} />
                            <Text style={styles.title}>IPA System</Text>
                        </View>
                        <View style={styles.wrapper}>
                            <View style={{ padding: 8 }}>
                                <View>
                                    <Text style={styles.titleInput}>Nitrogen Pressure (In)</Text>
                                    <TextInput
                                        style={styles.inputText}
                                        placeholder="Nitrogen Pressure fresh ethanol tank (In)"
                                        keyboardType="number-pad"
                                    />
                                </View>
                                <View>
                                    <Text style={styles.titleInput}>Nitrogen Pressure (In)</Text>
                                    <TextInput
                                        style={styles.inputText}
                                        placeholder="Nitrogen Pressure fresh ethanol tank (Out)"
                                        keyboardType="number-pad"
                                    />
                                </View>
                                <View>
                                    <Text style={styles.titleInput}>Fresh Ethanol Level</Text>
                                    <TextInput
                                        style={styles.inputText}
                                        placeholder="Fresh Ethanol Level"
                                        keyboardType="number-pad"
                                    />
                                </View>
                                <View>
                                    <Text style={styles.titleInput}>Nitrogen Pressure (In)</Text>
                                    <TextInput
                                        style={styles.inputText}
                                        placeholder="Nitrogen Pressure spent ethanol tank (In)"
                                        keyboardType="number-pad"
                                    />
                                </View>
                                <View>
                                    <Text style={styles.titleInput}>Nitrogen Pressure (Out)</Text>
                                    <TextInput
                                        style={styles.inputText}
                                        placeholder="Nitrogen Pressure spent ethanol tank (Out)"
                                        keyboardType="number-pad"
                                    />
                                </View>
                                <View>
                                    <Text style={styles.titleInput}>Spent Ehanol Level</Text>
                                    <TextInput
                                        style={styles.inputText}
                                        placeholder="Spent Ehanol Level"
                                        keyboardType="number-pad"
                                    />
                                </View>
                                <View>
                                    <Text style={styles.titleInput}>Leakage</Text>
                                    <TextInput
                                        style={styles.inputText}
                                        placeholder="Leakage"
                                        keyboardType="default"
                                    />
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <TabNavigation />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logoIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8
    },
    wrapper: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8
    },
    titleInput: {
        fontSize: 10,
        marginBottom: 6,
        alignSelf: 'flex-end'
    },
    inputText: {
        height: 45,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 8,
        paddingHorizontal: 8
    },
    button: {
        backgroundColor: '#61A756',
        paddingHorizontal: 12,
        paddingVertical: 11,
        alignSelf: 'flex-end',
        borderRadius: 6,
        marginTop: 10
    },
    buttonText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    }
})