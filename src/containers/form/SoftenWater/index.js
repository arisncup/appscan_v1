import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity, Picker } from 'react-native';
import DatePicker from 'react-native-date-picker';
import TabNavigation from '../../../components/organisms/TabNavigation';

export default class SoftenWater extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pickerEmergency: '',
            date: new Date(),
            inputData: {
                mtr_std_in_acid: '',
                mtr_std_in_caustic: '',
                mtr_std_in_hotwaterGen: '',
                mtr_std_on_hotwaterGen: '',
                mtr_std_reject_onWtrGen: '',
                mtr_std_back_washSoften: '',
                mtr_std_on_waterSealTank: '',
                regenerator: '',
                level_soften_water: '',
                flow: '',
                pres_input_rawWater: '',
                pres_send_filter: '',
                pres_carbon_filter: '',
                pres_softener_lama: '',
                pres_input_softenerBaru: '',
                pres_filter_softenTank: '',
                check_level_chlorine: '',
                check_level_garam: '',
                check_hsl_hardness: '',
                check_hsl_chlorine: '',
                check_level_flowChlorine: '',
                check_hasil_conductivity: '',
                check_kadaluarsa: '',
                check_regeneration_newSoftener: '',
                leaking_test: '',
                pres_pump_production: '',
                colour_water_tankRawWater: '',
                autofill_raw_water: '',
                pump_feed_transfer: '',
                emergency_eye_doorWorkshop: ''
            }
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.logoIcons}>
                        <Image source={require('../../../assets/icon/water.png')} />
                        <Text style={styles.title}>Soften Water</Text>
                    </View>
                    <KeyboardAvoidingView enabled style={styles.container}>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Meter Stand in Acid Tank CDL3</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Meter Stand in Acid Tank CDL3"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Meter Stand in Caustic Tank CDL3</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Meter Stand in Caustic Tank CDL3"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Meter Stand in Hot Water Generator CDL3</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Meter Stand in Hot Water Generator CDL3"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Meter Stand DI Water Generator (Osmotron)</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Meter Stand DI Water Generator (Osmotron)"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Meter Stand Reject DI Water Generator</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Meter Stand Reject DI Water Generator"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Meter Stand Back wash soften</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Meter Stand Back wash soften"
                                keyboardType="default"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Meter Stand DI Water seal Tank Generator</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Meter Stand DI Water seal Tank Generator"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Regeneration (OBR)</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Regeneration (OBR)"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Level soften water</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Level soften water"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Flow</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Flow"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Pressure input from raw water</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Pressure input from raw water"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Pressure sand filter</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Pressure sand filter"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Pressure carbon filter</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Pressure carbon filter"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Pressure softener lama</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Pressure softener lama"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Pressure input softener baru</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Pressure input softener baru"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Pressure Filter soften tank</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Pressure Filter soften tank"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Check level chlorine</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Check level chlorine"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Check level garam</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Check level garam"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Check hasil hardness</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Check hasil hardness"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Check hasil chlorine</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Check hasil chlorine"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Check level flow chlorine</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Check level flow chlorine"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Check hasil conductivity</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Check hasil conductivity"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Check kadaluarsa & Level testomat 2000</Text>
                            <DatePicker
                                date={this.state.date}
                                onDateChange={date => this.setState({ date })}
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Check regeneration new softener</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Check regeneration new softener"
                                keyboardType="default"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Leaking test</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Leaking test"
                                keyboardType="default"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Pressure Pump to Production</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Pressure Pump to Production"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Colour water tank raw water</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Colour water tank raw water"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Autofill from raw water</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Autofill from raw water"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Pump feed transfer to WWTP</Text>
                            <TextInput
                                style={styles.inputText}
                                underlineColorAndroid="blue"
                                placeholder="Pump feed transfer to WWTP"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.rowColumn}>
                            <Text style={styles.labelText}>Emergency mata kucing pintu workshop</Text>
                            <Picker
                                selectedValue={this.state.pickerEmergency}
                                style={{ height: 50 }}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ pickerEmergency: itemValue })
                                }>
                                <Picker.Item label="Aktif" value="active" />
                                <Picker.Item label="Tidak Aktif" value="tidak_active" />
                            </Picker>
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