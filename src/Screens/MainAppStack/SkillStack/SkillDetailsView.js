import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {DesignText, DesignHeader, DesignButton} from '../../../components/index'

import theme from '../../../../theme/Default_Theme/appColors'
import Icon from 'react-native-vector-icons/FontAwesome5'
class SkillDetailsView extends Component {
    
    render() {
        const { navigation } = this.props;
        const heading = navigation.getParam('heading', 'No Value')
        const content = navigation.getParam('content', 'No Value')
        const when = navigation.getParam('when', 'No Value')
        const where = navigation.getParam('where', 'No Value')
        const who = navigation.getParam('who', 'No Value')
        const slots = navigation.getParam('slots', 'No Value')
        const murmur = navigation.getParam('murmur', 'No Value')
        const email = navigation.getParam('email', 'No Value')
        const title = navigation.getParam("title", "Yondu Lounge")
        return (
            <View style={styles.headContainer}>
                        
                        <DesignHeader title={title} onBack ={() => this.props.navigation.goBack()}/>
                        
                        <View style={styles.container}>
                        <View style={styles.mainContent}>
                        <DesignText style={{ fontSize: 28 }}>{heading}</DesignText>
                        
                        <View style={styles.contentTextView}>
                        <Text style={styles.contentText}>{content}</Text>
                        </View>

                         <View style={{flexDirection:'row', justifyContent:'flex-start',width:'90%'}}>
                            <Text style={styles.distUpcontentText}>When: </Text>
                            <Text style={styles.distcontentText}>{when}</Text>
                            </View>

                            <View style={{flexDirection:'row', justifyContent:'flex-start', width:'90%'}}>
                            <Text style={styles.distUpcontentText}>Where: </Text>
                            <Text style={styles.distcontentText}>{where}</Text>
                            </View>

                            <View style={{flexDirection:'row', justifyContent:'flex-start', width:'90%'}}>
                            <Text style={styles.distUpcontentText}>Who: </Text>
                            <Text style={styles.distcontentText}>{who}</Text>
                            </View>

                            
                            <View style={{flexDirection:'row', justifyContent:'flex-start', width:'90%'}}>
                            <Text style={styles.distUpcontentText}>Remaining Slots: </Text>
                            <Text style={styles.distcontentText}>{slots}</Text>
                            </View>
                            
                            <Text style={styles.distcontentText}>{murmur}</Text>

                            <Text style={styles.distcontentText}>{email}</Text>

                        </View>


                        <View style={styles.buttonSend}>
                        <DesignButton title="Join" onPress={() => this.props.navigation.navigate('Announcement')}/>
                        </View>
                        
                        
                        </View>
                    </View>
        )
    }
}
export default SkillDetailsView;

const styles = StyleSheet.create({
    headContainer: {
        flex: 1,
        backgroundColor: theme.APP_BG,
    },
    container: {
        flex: 1,
        backgroundColor: theme.APP_BG,
        paddingHorizontal: 15,
        paddingTop: 20
    },
    mainContent:{
        width:'100%',
        flex: 6
    },
    lowerContent:{
        width:'100%',
        flex: 4,

    },
    buttonSend:{
        width:'100%',
        flex: 1,
        justifyContent:'center'
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
        paddingVertical: 20
    },
    distrbutionText:{
        fontSize:16,
        fontWeight:'bold',
        color:theme.TEXT_DARK,
        paddingVertical:10
    },
    distcontentText:{
        fontSize: 18,
        color:theme.TEXT_LIGHT,
        paddingVertical:10
    },
    distUpcontentText:{
        fontSize: 18,
        color:theme.TEXT_DARK,
        paddingVertical:10
    }
})