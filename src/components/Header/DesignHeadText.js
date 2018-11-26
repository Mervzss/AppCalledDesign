import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { DesignText } from '../index'

export const DesignHeaderText = props => {
    return (
        <View style={styles.upperText}>
            <DesignText style={props.style}>{props.title}</DesignText>
        </View>
    )
}

const styles = StyleSheet.create({
    upperText:{
        justifyContent:'center',
        alignItems:'flex-start',
        paddingHorizontal:7.5,
        flex:1,
        maxHeight:40
    }
})