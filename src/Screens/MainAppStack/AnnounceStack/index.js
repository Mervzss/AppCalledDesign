import React from 'react'
import {createStackNavigator} from 'react-navigation'

import AnnouncementView from '../AnnouncementView'
import AnnounceDetailsView from './AnnounceDetailsView'

export default AnnounceStack = createStackNavigator(
    {
        AnnView: AnnouncementView,
        AnnDetails: AnnounceDetailsView
    },
    {
        initialRouteName:'AnnView',
        navigationOptions:{
            header: null,
        }
    }
)