import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import theme from '../../../theme/Default_Theme/appColors'

import { DesignButton, DesignInput, DesignText, AirBNB, Yondu } from '../../components'

class CreateAccountView extends Component {
    render() {
        return (
            <View style={styles.headContainer}>
                <View style={styles.container}>

                    <View style={styles.headLogo}>
                        <AirBNB />
                    </View>

                    <View style={styles.inputView}>
                    <DesignText>Create an Account</DesignText>
                        <View style={styles.mainInputs}>
                            <DesignInput style={styles.inputStyle} placeholder={"Enter Yondu Email"} />
                            <DesignInput style={styles.inputStyle} placeholder={"Password"} eye={true}/>
                            <DesignInput style={styles.inputStyle} placeholder={"Confirm Password"} eye={true}/>
                        </View>
                    </View>

                    <View style={styles.buttons}>

                        <DesignButton title='Submit' onPress={() => this.props.navigation.navigate('Confirm')}/>
                        <DesignButton title='Cancel' inverted={true} onPress={() => this.props.navigation.goBack()}/>

                    </View>

                    <View style={styles.endLogo}>
                        <Yondu />
                    </View>


                </View>
            </View>
        )
    }
}
export default CreateAccountView;

const styles = StyleSheet.create({
    headContainer: {
        flex: 1,
        backgroundColor: theme.APP_BG,
    },
    container: {
        flex: 1,
        backgroundColor: theme.APP_BG,
        paddingHorizontal: 30
    },
    headLogo: {
        flex: 2.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainInputs: {
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between'
    },
    inputStyle: {
        marginVertical: 4,
        backgroundColor: theme.INPUT_BG,
        width: '100%',
        fontWeight: 'bold',
        paddingHorizontal: 15
    },
    inputView: {
        flex: 2.8,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    buttons: {
        flex: 1.8,
        justifyContent: 'space-evenly'
    },
    endLogo: {
        flex: 1.4,
        justifyContent: 'center',
        alignItems: 'center'
    },
})