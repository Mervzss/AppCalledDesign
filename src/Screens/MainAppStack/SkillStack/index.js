import React from 'react'
import {createStackNavigator} from 'react-navigation'

import SkillDevView from '../SkillDevView'
import SkillDetailsView from './SkillDetailsView'

export default SkillStack = createStackNavigator(
    {
        SkillView: SkillDevView,
        SkillDetails: SkillDetailsView
    },
    {
        initialRouteName:'SkillView',
        navigationOptions:{
            header: null
        }
    }
)