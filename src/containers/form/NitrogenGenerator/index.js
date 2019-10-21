import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import TabNavigation from '../../../components/organisms/TabNavigation';

export default class NitrogenGenarator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputData: {
                purity: '',
                pressure: '',
                dewpoint: '',
                running_hours: '',
                pressure_Tank_5000: '',
                pressure_Tank_2000: '',
                pressure_out_prv: ''
            }
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.logoIcons}>
                        <Image source={require('../../../assets/icon/compressor.png')} />
                        <Text style={styles.title}>Nitrogen Generator</Text>
                    </View>
                    <KeyboardAvoidingView enabled style={styles.container}>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Purity</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Purity"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Pressure</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Pressure"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Dewpoint</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Dewpoint"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Running Hours</Text>

                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Pressure Receiver Tank N2 5000 L</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Pressure Receiver Tank N2 5000 L"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Pressure Receiver Tank N2 3000 L</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Pressure Receiver Tank N2 3000 L"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Pressure output PRV</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Pressure output PRV"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </ScrollView>
                <TabNavigation />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    logoIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 17,
        marginBottom: 12,
        marginHorizontal: 17
    },
    rowColumn: {
        padding: 8
    },
    labelText: {
        fontSize: 12
    },
    inputText: {
        height: 45,
        borderWidth: 0
    },
    button: {
        backgroundColor: '#61A756',
        paddingHorizontal: 12,
        paddingVertical: 11,
        alignSelf: 'flex-end',
        borderRadius: 6,
        marginBottom: 10,
        marginRight: 8
    },
    buttonText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    }
})