import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import theme from '../../../theme/Default_Theme/appColors'

import { DesignButton, DesignText, AirBNB, Yondu } from '../../components'

class AccountConfirmedView extends Component {
    render() {
        return (
            <View style={styles.headContainer}>
                <View style={styles.container}>

                    <View style={styles.headLogo}>
                        <AirBNB />
                    </View>

                    <View style={styles.styleText}>

                        <DesignText>Account Confirmed!</DesignText>

                        <View style={styles.response}>
                            <DesignText style={{ textAlign: 'center' }}>You may now login to your account.</DesignText>
                        </View>

                    </View>

                    <View style={styles.buttons}>

                        <DesignButton title='Login' onPress={() => this.props.navigation.navigate('AppDrawer')} />

                    </View>
                    <View style={styles.separator} />

                    <View style={styles.endLogo}>
                        <Yondu />
                    </View>

                </View>
            </View>
        )
    }
}
export default AccountConfirmedView;

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
    styleText: {
        flex: 2,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    buttons: {
        flex: 1.6,
        justifyContent: 'flex-start'
    },
    endLogo: {
        flex: 1.4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    response: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    separator: {
        flex: 1.4,
        backgroundColor: theme.APP_BG
    }
})