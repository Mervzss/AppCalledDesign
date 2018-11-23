import {createStackNavigator} from 'react-navigation'

import UserLoginView from './UserLoginView'
import CreateAccountView from './CreateAccountView'
import AccountConfirmed from './AccountConfirmedView'

export default InitialLogStack = createStackNavigator(
    {
        Login: UserLoginView,
        Create: CreateAccountView,
        Confirm: AccountConfirmed,
    },
    {
        initialRouteName:'Login',
        navigationOptions:{
            header:null
        }
    }
)