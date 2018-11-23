import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import SampleData from './annData'
import theme from '../../../theme/Default_Theme/appColors'

import {DesignText} from '../../components/index'

export const AnnListing = props =>{
    return(
        <FlatList
        data={SampleData}
        renderItem={({item}) => (
            <View>
                        <DesignText style={{ fontSize: 28 }}>{item.heading}</DesignText>

                        <View style={styles.lowerStyle}>
                            <View style={styles.lowerLink}>
                                <Icon name='eye' size={20} color={theme.APP_COLOR} />
                                <Text style={styles.linkTextStyle}>{item.date}</Text>
                                <Icon name='user' size={20} color={theme.APP_COLOR} />
                                <Text style={styles.linkTextStyle}>{item.type}</Text>
                            </View>
                            <View style={styles.extraSpace} />
                        </View>
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
    lowerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15

    },
    lowerLink: {
        flex: 4.2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    extraSpace: {
        flex: .8
    },
    linkTextStyle: {
        color: theme.APP_COLOR
    },
    contentText:{   
        fontSize: 18,
        color:theme.TEXT_LIGHT
    },
    endBorder:{
        borderBottomColor:theme.TEXT_LIGHT,
        borderBottomWidth:1.5
    },
    contentTextView:{
        paddingBottom: 25
    }
})