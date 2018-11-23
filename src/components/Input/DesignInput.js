import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import theme from '../../../theme/Default_Theme/appColors'

import Icon from 'react-native-vector-icons/FontAwesome5'

export class DesignInput extends React.Component{
    state={
        toggle: this.props.eye || false
    }
    togglePass = () =>{
        this.setState({
            toggle: !this.state.toggle
        })
    }
    render(){return (
        <View style={[styles.viewStyle, this.props.style]}>

            <TextInput style={styles.inputStyle} placeholder={this.props.placeholder} secureTextEntry={this.state.toggle}></TextInput>

            {
                this.props.eye &&
                <TouchableOpacity style={styles.position} onPress={this.togglePass}>
                    <Icon  name="eye" size={25} color='#95989A' />
                </TouchableOpacity>
            }

        </View>

    )
}
}

const styles = StyleSheet.create({
    viewStyle: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: theme.INPUT_BG,
        alignItems: 'center'
    },
    inputStyle: {
        backgroundColor: theme.INPUT_BG,
        flex: 4.6,
        fontWeight: 'bold',
    },
    position: {
        flex: 0.46
    }
})