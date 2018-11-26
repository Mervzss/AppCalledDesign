import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {DesignText, DesignHeader, DesignButton} from '../../../components/index'

import theme from '../../../../theme/Default_Theme/appColors'
import Icon from 'react-native-vector-icons/FontAwesome5'
class AnnounceDetailsView extends Component {
    
    render() {
        const { navigation } = this.props;
        const heading = navigation.getParam('heading', 'No Value')
        const date = navigation.getParam('date', 'No Value')
        const type = navigation.getParam('type', 'No Value')
        const content = navigation.getParam('content', 'No Value')
        const time = navigation.getParam('time', 'No Value')
        const setting = navigation.getParam('setting', 'No Value')
        const please = navigation.getParam('please', 'No Value')
        const title = navigation.getParam('title', 'Yondu Lounge')
        return (
            <View style={styles.headContainer}>
                        
                        <DesignHeader title={title} onBack ={() => this.props.navigation.goBack()}/>
                        
                        <View style={styles.container}>
                        <View style={styles.mainContent}>
                        <DesignText style={{ fontSize: 28 }}>{heading}</DesignText>
                        
                        <View style={styles.lowerStyle}>
                            <View style={styles.lowerLink}>
                                <Icon name='eye' size={20} color={theme.APP_COLOR} />
                                <Text style={styles.linkTextStyle}>{date}</Text>
                                <Icon name='user' size={20} color={theme.APP_COLOR} />
                                <Text style={styles.linkTextStyle}>{type}</Text>
                            </View>
                            <View style={styles.extraSpace} />
                        </View>
                        <View style={styles.contentTextView}>
                        <Text style={styles.contentText}>{content}</Text>
                        </View>

                        </View>

                        <View style={styles.lowerContent}>
                            <Text style={styles.distrbutionText}>DISTRIBUTION SCHEDULE</Text>
                            <Text style={styles.distcontentText}>{date} - {time}</Text>
                            <Text style={styles.distcontentText}>{setting}</Text>
                            <Text style={styles.distcontentText}>{please}</Text>
                        </View>

                        <View style={styles.buttonSend}>
                        <DesignButton title="Send Feedback" onPress={() => this.props.navigation.navigate('FeedBack',{
                          header: heading,
                          title: title  
                        })}/>
                        </View>
                        
                        
                        </View>
                    </View>
        )
    }
}
export default AnnounceDetailsView;

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
        flex: 2
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
        paddingBottom: 25
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
    }
})