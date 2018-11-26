import React, { Component } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'

import { DesignHeader, DesignHeaderText, DesignButton, DesignInput } from '../../components/index'
import theme from '../../../theme/Default_Theme/appColors'
let head = null
class SendFeedBackView extends Component {
    componentDidUpdate() {
        head = null
    }

    submitIt = () =>{
        Alert.alert(
            'FeedBack Sent',
            'Your feedback has been sent. You will be notified once the recepient replied',
            [
              {text: 'OK', onPress: () => this.props.navigation.navigate("AnnView")},
            ],
            { cancelable: false }
          )
    }
    render() {
        let head = this.props.navigation.getParam('header', null)
        let title = this.props.navigation.getParam('title', 'Yondu Lounge')

        return (
            <View style={styles.headContainer}>

                 {head !== null ?<DesignHeader title={title} onBack={() => this.props.navigation.goBack()}/> 
                 : <DesignHeader title='Yondu Lounge' onBar={() => this.props.navigation.openDrawer()}/>}
                <View style={styles.container}>
                    <View style={styles.annHeader}>
                        <DesignHeaderText title="Send FeedBack" />
                    </View>





                    {head !== null ?
                        (<View style={styles.inputContainer}>
                            <View style={{ justifyContent: 'flex-start', paddingBottom: 10 }}>
                                <Text style={{ fontSize: 35, color: theme.TEXT_MEDIUM, fontWeight: 'bold' }}>RE: {head}</Text>
                            </View>

                            <View>
                                <DesignInput placeholder="Enter FeedBack" multiline={true} inputStyle={{ padding: 15, color: theme.TEXT_LIGHT, fontSize: 16 }} />
                            </View>

                        </View>) :

                        (<View style={styles.inputContainer}>
                            <View style={{paddingVertical:10}}>
                                <DesignInput drop={true} placeholder="Select Subject" inputStyle={{paddingLeft: 15, color: theme.TEXT_LIGHT, fontSize: 16 }} />
                            </View>

                            <View>
                                <DesignInput placeholder="Enter Feed Back" multiline={true} inputStyle={{ padding: 15, color: theme.TEXT_LIGHT, fontSize: 16 }} />
                            </View>

                        </View>)}




                    {/* <View style={styles.inputContainer}>
                    <View style={{justifyContent:'flex-start', paddingBottom:10}}>
                    <Text style={{fontSize:35, color:theme.TEXT_MEDIUM, fontWeight:'bold'}}>RE: sad LIFE</Text>
                    </View>
                    
                    <View>
                    <DesignInput placeholder="Enter Feed Back" multiline={true} inputStyle={{padding:15, color:theme.TEXT_LIGHT, fontSize: 16}}/>
                    </View>
                    
                    </View> */}


                    <View style={styles.buttonContainer}>
                        <DesignButton title='Submit' onPress={this.submitIt} />
                        <DesignButton title='Cancel' inverted={true} onPress={() => this.props.navigation.goBack()} />
                    </View>


                </View>

            </View>
        )
    }
}
export default SendFeedBackView;

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
    annHeader: {
        flex: .3
    },
    title: {
        width: '100%',
        paddingTop: 15,
        backgroundColor: 'yellow'
    },
    inputContainer: {
        flex: 4,
        paddingTop: 10,
        justifyContent: 'flex-start'
    },
    buttonContainer: {
        flex: 1.2,
        justifyContent: 'space-evenly',
        paddingBottom: 10
    }



});