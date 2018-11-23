import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import theme from '../../../theme/Default_Theme/appColors'
import Icons from 'react-native-vector-icons/FontAwesome5'

export const DesignHeader = props => {
    return (
        <View style={styles.customHeader}>

            <View style={styles.inHeader}>
                <TouchableOpacity onPress={props.onBar}>
                    <Icons name='bars' size={30} color={theme.APP_BG} />
                </TouchableOpacity>
                <Text style={styles.inText}>{props.title}</Text>
                <TouchableOpacity onPress={props.onBell}>
                    <Icons name='bell' size={30} color={theme.APP_BG} />
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    customHeader: {
        width: '100%',
        flex: 1,
        maxHeight: 60,
        backgroundColor: theme.APP_COLOR,
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    inHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inText: {
        color: theme.APP_BG,
        fontSize: 20,
        fontWeight: 'bold'
    }
})