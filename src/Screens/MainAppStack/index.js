import React from 'react'
import { ScrollView, Text, SafeAreaView, View, StyleSheet, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import { createDrawerNavigator, DrawerItems } from 'react-navigation'

import AnnouncementView from './AnnounceStack/index'
import AttendanceView from './AttendanceView'
import CompBenefitesView from './CompBenefitesView'
import CompPolicyView from './CompPolicyView'
import ConditionsView from './ConditionsView'
import SkillDevView from './SkillStack/index'
import NotificationsView from './NotificationsView'
import SendFeedBackView from './SendFeedBackView'

import theme from '../../../theme/Default_Theme/appColors'
import data from './drawerData'

const drawerItem = (props) => data.map((val, index) => {
    return(
        <TouchableOpacity onPress={() => props.navigation.navigate(val.route.toString())} key={index}>
        <View style={{backgroundColor:theme.backgroundColor}}>
        <Text style={{
             fontSize:20,
             padding: 15,
             paddingVertical:8,
            margin:0,
            fontWeight:'bold',
            color:theme.TEXT_MEDIUM
             
         }}>{val.name}</Text>
        </View>
        </TouchableOpacity>
    )
})

export default MainStack = createDrawerNavigator(
    {
        Announcement: AnnouncementView,
        Attendance: AttendanceView,
        CompPolicy: CompPolicyView,
        CompBenifit: CompBenefitesView,
        Conditions: ConditionsView,
        SkillDev: SkillDevView,
        Notifications: NotificationsView,
        FeedBack: SendFeedBackView
    },
    {
        initialRouteName: 'Announcement',

        drawerWidth: Dimensions.get('window').width *.8,

        contentComponent: props => (

            <SafeAreaView style={{ flex: 1, width:'100%' }}>

                <View style={styles.headView}>
                    <Text style={styles.headText}>Welcome, Fritz!</Text>
                </View>
                
                <ScrollView style={styles.middleView} contentContainerStyle={{flexDirection:'column'}}>

                {/* <DrawerItems  {...props} /> */}
                
                {drawerItem(props)}

                <View style={{height:60}}/>

                <View style={styles.footView}>
                    
                <TouchableOpacity onPress={() => props.navigation.navigate('FeedBack',{
                    header: null,
                    title:"Yondu Lounge"
                })}> 
                <Text style={styles.footText}>Send Feedback</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => props.navigation.navigate('Initial')}>
                <Text style={styles.footText}>Logout</Text>
                </TouchableOpacity>
                    
                </View>

                </ScrollView>


            </SafeAreaView>

        ),
        contentOptions:{
         activeBackgroundColor: theme.APP_BG,
         activeTintColor: theme.APP_COLOR,
         inactiveBackgroundColor:theme.APP_BG,
         inactiveTintColor:theme.TEXT_MEDIUM,
         labelStyle:{
             fontSize:20,
             padding: 15,
             paddingVertical:8,
            margin:0
             
         },
        },
        drawerBackgroundColor:theme.APP_BG
        
    }
)

const styles = StyleSheet.create({
    headView:{
        flex: 2,
        maxHeight: 60,
        borderBottomColor: theme.TEXT_LIGHT,
        borderBottomWidth: 1,
        width:'100%',
        justifyContent:'center',
        alignSelf:'center',
    },
    headText:{
        padding: 15,
        color:theme.TEXT_LIGHT,
        fontSize: 16,
        fontWeight: 'bold'
    },
    middleView:{
        flex: 5,
        borderBottomColor: theme.TEXT_LIGHT,
        borderBottomWidth: 1,
        width:'100%',
        alignSelf:'center',
    },
    footView:{
        paddingTop:15,
        borderTopColor: theme.TEXT_LIGHT,
        borderTopWidth: 1,
        width:'100%',
        alignSelf:'center',
    },
    footText:{
        paddingLeft: 15,
        paddingTop: 7,
        color:theme.TEXT_LIGHT,
        fontSize: 16,
        fontWeight: 'bold'
    }

})

