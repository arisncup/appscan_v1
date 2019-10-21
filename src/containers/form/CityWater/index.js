import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import TabNavigation from '../../../components/organisms/TabNavigation';

export default class CityWater extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputData: {
                meter_stand: '',
                pressure: '',
                mtr_stand_in_warehouse: '',
                mtr_stand_in_qc: '',
                mtr_stand_in_tmnoffice: '',
                mtr_stand_in_toilet: '',
                mtr_stand_in_canteen: '',
                mtr_stand_eye_shower: '',
                mtr_stand_in_toilet_utility: ''
            }
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.logoIcons}>
                        <Image source={require('../../../assets/icon/water.png')} />
                        <Text style={styles.title}>KIIC / City Water</Text>
                    </View>
                    <KeyboardAvoidingView enabled style={styles.container}>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Meter Stand from KIIC/PDAM</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Meter Stand from KIIC/PDAM"
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
                            <Text style={styles.labelText}>Meter Stand input area warehouse</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Meter Stand input area warehouse"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Meter Stand in QC warehouse</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Meter Stand in QC & Eye shower warehouse"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Meter Stand in siram taman office</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Meter Stand in siram taman office & warehouse"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Meter Stand in toilet warehouse</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Meter Stand in toilet warehouse"
                                keyboardType="default"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Meter Stand in New Canteen</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Meter Stand in New Canteen"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Meter Stand Eye Shower N2, Gasoline, CNG</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Meter Stand Eye Shower N2, Gasoline, CNG"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Meter Stand in toilet Utility</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Meter Stand in toilet Utility"
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