import React from 'react'
import { Text, StyleSheet } from 'react-native'

import theme from '../../../theme/Default_Theme/appColors'

export const DesignText = props =>{
    return(
        <Text style={[styles.userLogText, props.style]}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    userLogText:{
        fontSize:22,
        fontWeight:'bold',
        color:theme.TEXT_MEDIUM
    },
})