import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import theme from '../../../theme/Default_Theme/appColors'

export const DesignButton = props => {
    return (

        <TouchableOpacity onPress={props.onPress}>
            <View style={[styles.pressButton, (props.inverted && styles.invertedButton)]}>
                <Text style={[styles.pressButtonText, (props.inverted && styles.invertedButtonText)]}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    pressButton:{
        width:'100%',
        height:55,
        borderRadius:25,
        // borderLeftRadius:10,
        // borderRightRadius:10,
        backgroundColor:theme.APP_COLOR,
        justifyContent:'center',
        alignItems:'center'
    },
    invertedButton:{
        width:'100%',
        height:55,
        borderRadius:25,
        // borderLeftRadius:10,
        // borderRightRadius:10,
        backgroundColor:theme.APP_BG,
        borderColor:theme.APP_COLOR,
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center'
    },
    pressButtonText:{
        color:theme.APP_BG,
        fontWeight:'bold',
        fontSize:18
    },
    invertedButtonText:{
        color:theme.APP_COLOR,
        fontWeight:'bold',
        fontSize:18
    },
})