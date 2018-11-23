import React from 'react'
import { Image, StyleSheet} from 'react-native'

import airbnb from '../../../assets/airbnb_logo.png'

export const AirBNB = props =>{
    return(
        <Image source={airbnb} style={[styles.logoImage, props.style]} resizeMode='contain'/>
    )
}

const styles = StyleSheet.create({
    logoImage:{
        width:250,
        height:80
    },
})