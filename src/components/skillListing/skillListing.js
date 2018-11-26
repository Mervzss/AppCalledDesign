import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import SampleData from './skillData'
import theme from '../../../theme/Default_Theme/appColors'

import {DesignText} from '../../components/index'

export const SkillListing = props =>{
    return(
        <FlatList
        data={SampleData}
        renderItem={({item}) => (
            <View>
                        <TouchableOpacity style={styles.headStyle} onPress={props.navPress(item)}>
                        <DesignText style={{ fontSize: 28 }}>{item.heading}</DesignText>
                        </TouchableOpacity>

                        <View style={styles.contentTextView}>
                        <Text style={styles.contentText}>{item.content}</Text>
                        </View>
                        <View style={styles.endBorder}/>

            </View>
        )}
        keyExtractor={(index) => index.toString()}
        />
    )
}

const styles = StyleSheet.create({
    contentTextView:{
        paddingBottom: 25
    },
    contentText:{   
        fontSize: 18,
        color:theme.TEXT_LIGHT
    },
    endBorder:{
        borderBottomColor:theme.TEXT_LIGHT,
        borderBottomWidth:1.5
    },
    headStyle:{
        paddingTop:15,
        paddingBottom:8.5
    }

});