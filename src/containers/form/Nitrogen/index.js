import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import TabNavigation from '../../../components/organisms/TabNavigation';

export default class Nitrogen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputData: {
                nitrogen_level: '',
                tank_pressure: '',
                outlet_pressure: '',
                flowrate_production: '',
                totalizer_production: '',
                cek_kebocoran: '',
                supply_nitrogen_qc: ''
            }
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.logoIcons}>
                        <Image source={require('../../../assets/icon/nos.png')} />
                        <Text style={styles.title}>Nitrogen</Text>
                    </View>
                    <KeyboardAvoidingView enabled style={styles.container}>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Nitrogen Level</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Nitrogen Level"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Tank Pressure</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Tank Pressure"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Outlet Pressure</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Outlet Pressure"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>FlowRate Production</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="FlowRate Production"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Totalizer Production</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Totalizer Production"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Cek kebocoran</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Cek kebocoran"
                                keyboardType="default"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Supply Nitrogen QC</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Supply Nitrogen QC"
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
        marginHorizontal: 20,
        //borderWidth: 1,
        //borderColor: 'black',
        //borderRadius: 8
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