import React from 'react'
import { Image, StyleSheet} from 'react-native'

import yondu from '../../../assets/yondu_logo.png'

export const Yondu = props =>{
    return(
        <Image source={yondu} style={[styles.logoImageEnd, props.style]} resizeMode='contain'/>
    )
}

const styles = StyleSheet.create({
    logoImageEnd:{
        width:150,
        height:90
    }
})