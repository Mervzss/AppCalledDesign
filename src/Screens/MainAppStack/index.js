import React from 'react'
import { ScrollView, Text, SafeAreaView, View, } from 'react-native'
import { createDrawerNavigator, DrawerItems } from 'react-navigation'

import AnnouncementView from './AnnouncementView'
import AttendanceView from './AttendanceView'
import CompBenefitesView from './CompBenefitesView'
import CompPolicyView from './CompPolicyView'
import ConditionsView from './ConditionsView'
import SkillDevView from './SkillDevView'
import NotificationsView from './NotificationsView'

import theme from '../../../theme/Default_Theme/appColors'

export default class TheMainDrawer extends React.Component {
    render() {
        return <MainStack />
    }
}


export const MainStack = createDrawerNavigator(
    {
        Announcement: AnnouncementView,
        Attendace: AttendanceView,
        CompBenifit: CompBenefitesView,
        CompPolicy: CompPolicyView,
        Conditions: ConditionsView,
        SkillDev: SkillDevView,
        Notifications: NotificationsView
    },
    {
        initialRouteName: 'Announcement',
        contentComponent: props => (

            <SafeAreaView style={{ flex: 1 }}>

                <ScrollView style={{ flex: 1, backgroundColor: 'white', width: '100%' }}>
                    <DrawerItems {...props} />
                </ScrollView>

            </SafeAreaView>

        ),
        contentOptions:{
         activeBackgroundColor: theme.APP_BG,
         activeTintColor: theme.APP_COLOR,
         inactiveBackgroundColor:theme.APP_BG,
         inactiveTintColor:theme.TEXT_MEDIUM,
         labelStyle:{
             fontSize:20
         }
        },
        drawerBackgroundColor:theme.APP_BG
        
    }
)

