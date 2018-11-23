import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

import theme from '../../../theme/Default_Theme/appColors'

export const DesignLink = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text style={styles.passText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    passText:{
        fontSize:16,
        fontWeight:'bold',
        color:theme.APP_COLOR
    },
})