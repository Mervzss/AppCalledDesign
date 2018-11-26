import React, { Component } from 'react'
import { View, Text, StyleSheet , TouchableOpacity} from 'react-native'

import theme from '../../../theme/Default_Theme/appColors'
import { DesignHeader, DesignText, DesignHeaderText, SkillListing } from '../../components'

class SkillDevView extends Component {
    render() {
        return (
            <View style={styles.headContainer}>
                <DesignHeader title='Yondu Lounge' onBar={() => this.props.navigation.openDrawer()}/>
                <View style={styles.container}>
                <View style={styles.annHeader}>
                    <DesignHeaderText title="Skills Development" />
                    </View>

                    <View style={styles.mainContent}>
                    <SkillListing navPress={(value) => this.props.navigation.navigate.bind(this,'SkillDetails',{
                            ...value,
                            title:"Skill Development"
                            })}/>
                    </View>
                </View>
            </View>
        )
    }
}
export default SkillDevView;

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
    annHeader:{
        flex:.3
    },
    contentTextView:{
        paddingBottom: 25
    },
    contentText:{   
        fontSize: 18,
        color:theme.TEXT_LIGHT
    },
    mainContent:{
        flex:4.7
    }

});