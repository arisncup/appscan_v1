import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
    Home, Qrcode, Settings, ChillerYork, Nitrogen, NitrogenGenarator, IpaSystem,
    CityWater, SoftenWater
} from '../../containers/pages';

const HomeStack = createStackNavigator(
    {
        Home,
        ChillerYork,
        Nitrogen,
        NitrogenGenarator,
        IpaSystem,
        CityWater,
        SoftenWater
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home'
    }
)

const QrcodeStack = createStackNavigator(
    {
        Qrcode
    },
    {
        headerMode: 'none',
        initialRouteName: 'Qrcode'
    }
)

const SettingsStack = createStackNavigator(
    {
        Settings
    },
    {
        //headerMode: 'none',
        initialRouteName: 'Settings'
    }
)


const Router = createSwitchNavigator(
    {
        HomeStack,
        QrcodeStack,
        SettingsStack
    },
    {
        headerMode: 'none',
        initialRouteName: 'HomeStack'
    }
);

export default createAppContainer(Router);