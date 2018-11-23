import React, { Component } from 'react'
import { View, StyleSheet,} from 'react-native'

import theme from '../../../theme/Default_Theme/appColors'

import { DesignButton, DesignInput, DesignLink, DesignText, AirBNB, Yondu } from '../../components'

class UseerLoginView extends Component {
    render() {
        return (
            <View style={styles.headContainer}>
                <View style={styles.container}>

                    <View style={styles.headLogo}>
                        <AirBNB />
                    </View>

                    <View style={styles.inputView}>

                        <DesignText>User Login</DesignText>

                        <View style={styles.mainInputs}>
                            <DesignInput style={styles.inputStyle} placeholder={"Username"} />
                            <DesignInput style={styles.inputStyle} placeholder={"Password"} eye={true} />
                        </View>

                        <DesignLink title='Forgot Password?' />
                    </View>

                    <View style={styles.buttons}>

                        <DesignButton title='Login' onPress={() => this.props.navigation.navigate('AppDrawer')}/>
                        <DesignButton title='Create Account' inverted={true} onPress={() => this.props.navigation.navigate('Create')}/>

                    </View>

                    <View style={styles.endLogo}>
                        <Yondu />
                    </View>
                </View>
            </View>
        )
    }
}

export default UseerLoginView;

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

    inputView: {
        flex: 2.8,
        justifyContent: 'space-around',
        alignItems: 'center'
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
    buttons: {
        flex: 1.8,
        justifyContent: 'space-evenly'
    },
    endLogo: {
        flex: 1.4,
        justifyContent: 'center',
        alignItems: 'center'
    },

});