import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

const UserInfo = { username: 'admin', password: '12345' }

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <TextInput
                    style={styles.input}
                    placeholder="Username or email"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCorrect={false}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    returnKeyType="go"
                    ref={(input) => this.passwordInput = input}
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />
                <TouchableOpacity style={styles.buttonLogin} onPress={this._login}>
                    <Text style={styles.textLogin}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _login = async () => {
        if (UserInfo.username === this.state.username && UserInfo.password === this.state.password) {
            alert('Logged In');
        } else {
            alert('Username or Password not found');
        }
    }

}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#fff',
        marginBottom: 10,
        paddingHorizontal: 10
    },
    buttonLogin: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    textLogin: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700'
    }
})

export default LoginForm;