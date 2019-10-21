import React, { Component } from 'react';
import {
    StyleSheet, View, Text, Image, TextInput, TouchableOpacity,
    ScrollView, Picker
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import TabNavigation from '../../../components/organisms/TabNavigation';

export default class ChillerYork extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkCoil: '',
            pickerHiller: '',
            pickerTankHiller: '',
            date: new Date(),
            inputData: {
                temp_leaving: '',
                temp_entering: '',
                pressure_circulation: '',
                pressure_distribution: '',
                ampere_compressor_1: '',
                ampere_compressor_2: '',
                check_condenser_coils: '',
                cleaning_chiller: '',
                auto_fill_tank: '',
                running_hours: '',
                temp_chiller_tank: '',
                temp_base_t1: '',
                temp_base_t2: ''
            }
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ padding: 17 }}>
                        <View style={styles.logoIcons}>
                            <Image source={require('../../../assets/icon/temperatur.png')} />
                            <Text style={styles.title}>ChillerYork</Text>
                        </View>
                        <View style={styles.wrapper}>
                            <View style={{ padding: 8 }}>
                                <View>
                                    <Text style={styles.titleInput}>Temperature Leaving</Text>
                                    <TextInput
                                        style={styles.inputText}
                                        placeholder="Temperature Leaving"
                                        keyboardType="number-pad"
                                        onChangeText={(temp_leaving) => this.setState({ temp_leaving })}
                                        value={this.state.temp_leaving}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.titleInput}>Temperature Entering</Text>
                                    <TextInput
                                        style={styles.inputText}
                                        placeholder="Temperature Entering"
                                        keyboardType="number-pad"
                                        onChangeText={(temp_entering) => this.setState({ temp_entering })}
                                        value={this.state.temp_entering}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.titleInput}>Pressure Circulation</Text>
                                    <TextInput
                                        style={styles.inputText}
                                        placeholder="Pressure Circulation"
                                        keyboardType="number-pad"
                                        onChangeText={(pressure_circulation) => this.setState({ pressure_circulation })}
                                        value={this.state.pressure_circulation}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.titleInput}>Pressure Distribution</Text>
                                    <TextInput
                                        style={styles.inputText}
                                        placeholder="Pressure Distribution"
                                        keyboardType="number-pad"
                                        onChangeText={(pressure_distribution) => this.setState({ pressure_distribution })}
                                        value={this.state.pressure_distribution}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.titleInput}>Ampere Chiller Compressor 1</Text>
                                    <TextInput
                                        style={styles.inputText}
                                        placeholder="Ampere Chiller Compressor 1"
                                        keyboardType="number-pad"
                                        onChangeText={(ampere_compressor_1) => this.setState({ ampere_compressor_1 })}
                                        value={this.state.ampere_compressor_1}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.titleInput}>Ampere Chiller Compressor 2</Text>
                                    <TextInput
                                        style={styles.inputText}
                                        placeholder="Ampere Chiller Compressor 2"
                                        keyboardType="number-pad"
                                        onChangeText={(ampere_compressor_2) => this.setState({ ampere_compressor_2 })}
                                        value={this.state.ampere_compressor_2}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.titleInput}>Check Condenser coils </Text>
                                    <Picker
                                        selectedValue={this.state.checkCoil}
                                        style={{ height: 50 }}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.setState({ checkCoil: itemValue })
                                        }>
                                        <Picker.Item label="Clean" value="clean" />
                                        <Picker.Item label="Not Clean" value="not_clen" />
                                    </Picker>
                                </View>
                                <View>
                                    <Text style={styles.titleInput}>Cleaning Chiller</Text>
                                    <Picker
                                        selectedValue={this.state.pickerHiller}
                                        style={{ height: 50 }}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.setState({ pickerHiller: itemValue })
                                        }>
                                        <Picker.Item label="Clean" value="clean" />
                                        <Picker.Item label="Not Clean" value="not_clen" />
                                    </Picker>
                                </View>
                                <View>
                                    <Text style={styles.titleInput}>Auto fill tank Chillereith</Text>
                                    <Picker
                                        selectedValue={this.state.pickerTankHiller}
                                        style={{ height: 50 }}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.setState({ pickerTankHiller: itemValue })
                                        }>
                                        <Picker.Item label="Work" value="work" />
                                        <Picker.Item label="Not Work" value="not_work" />
                                    </Picker>
                                </View>
                                <View>
                                    <Text style={styles.titleInput}>Running hours machine</Text>
                                    <DatePicker
                                        date={this.state.date}
                                        onDateChange={date => this.setState({ date })}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.titleInput}>Temperature Chiller Tank</Text>
                                    <TextInput
                                        style={styles.inputText}
                                        placeholder="Temperature Chiller Tank"
                                        keyboardType="number-pad"
                                        onChangeText={(temp_chiller_tank) => this.setState({ temp_chiller_tank })}
                                        value={this.state.temp_chiller_tank}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.titleInput}>Temperature VSD IGBT Base Plat T1</Text>
                                    <TextInput
                                        style={styles.inputText}
                                        placeholder="Temperature VSD IGBT Base Plat T1"
                                        keyboardType="number-pad"
                                        onChangeText={(temp_base_t1) => this.setState({ temp_base_t1 })}
                                        value={this.state.temp_base_t1}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.titleInput}>Temperature VSD IGBT Base Plat T2</Text>
                                    <TextInput
                                        style={styles.inputText}
                                        onChangeText={(temp_base_t2) => this.setState({ temp_base_t2 })}
                                        value={this.state.temp_base_t2}
                                    />
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={this._saveData}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <TabNavigation />
            </View>
        )
    }

    _saveData = async () => {
        alert('Belum di Coding!');
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