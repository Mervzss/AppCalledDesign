import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import theme from '../../../theme/Default_Theme/appColors'
import { DesignHeader, DesignText, DesignHeaderText, AnnListing } from '../../components'

import Icon from 'react-native-vector-icons/FontAwesome5'

class AnnouncementView extends Component {
    static contentOptions = {
        title: 'Home Page',  
        drawerLabel: 'Home',
      }
    render() {
        return (

            <View style={styles.headContainer}>

                <DesignHeader title='Yondu Lounge' onBar={() => this.props.navigation.openDrawer()}/>

                <View style={styles.container}>
                    <View style={styles.annHeader}>
                    <DesignHeaderText title="Announcements" />
                    </View>

                    <View style={styles.mainContent}>
                        <AnnListing headPress={(value) => this.props.navigation.navigate.bind(this,'AnnDetails',{
                            ...value,
                            title:"Announcements"
                            })}/>
                    </View>



                </View>
            </View>
        )
    }
}
export default AnnouncementView;

const styles = StyleSheet.create({
    headContainer: {
        flex: 1,
        backgroundColor: theme.APP_BG,
    },
    container: {
        flex: 1,
        backgroundColor: theme.APP_BG,
        paddingHorizontal: 15
    },
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
    },
    annHeader:{
        flex:.3
    },
   mainContent:{
        flex:4.7
    }


});