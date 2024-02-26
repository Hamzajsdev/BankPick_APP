import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View, useWindowDimensions } from 'react-native';

import theme from '../common/Theme';
import Home from '../screen/HomeScreen/Home';
import Mycard from '../screen/MycardScreen/Mycard';
import Statistics from '../screen/StatisticsScreen/Statistics';
import Setting from '../screen/SettingScreen/Setting';
import Transaction from '../screen/TransactionHistory/Transaction';


const BottomTabs = () => {
    const { width, height } = useWindowDimensions()
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    let iconImage;
                    let ticketImg;
                    let containerStyle;

                    if (route.name === 'Home') {
                        iconImage = require('../assets/icons/BottomTabs/home.png');
                    } else if (route.name === 'Cards') {
                        iconImage = require('../assets/icons/BottomTabs/card.png');
                    } else if (route.name === 'Statistics') {
                        ticketImg = require('../assets/icons/BottomTabs/state.png');
                    } else if (route.name === 'Setting') {
                        iconImage = require('../assets/icons/BottomTabs/setting.png');
                    } else if (route.name === 'Transaction') {
                        iconImage = require('../assets/icons/BottomTabs/card.png');
                    }
                    const tintColor = focused ? theme.colors.primary : theme.colors.gray;
                    return (
                        <View >
                            <View>
                                <Image source={iconImage} style={{tintColor}} />
                            </View>
                            <View style={[containerStyle]}>
                                <Image source={ticketImg}  />
                            </View>
                        </View>
                    )
                },
            
                tabBarStyle: {
                    backgroundColor:theme.colors.lightBlack, 
                    borderColor:0, 
                    height:height/11,
                   
                        
                },
                tabBarLabel: ({ focused }) => {
                    const routeName = route.name;
                    const textColor = focused ? theme.colors.primary : theme.colors.gray;

                    switch (routeName) {
                        case 'Home':
                        case 'Cards':
                        case 'Statistics':
                        case 'Setting':
                        case 'Transaction':
                            return <Text style={{ color: textColor, fontSize: 11, fontWeight: '400', bottom:14 }}>{routeName}</Text>;
                        default:
                            return null;
                    }
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cards" component={Mycard} />
            <Tab.Screen name="Statistics" component={Statistics} />
            <Tab.Screen name="Setting" component={Setting} />
            <Tab.Screen name="Transaction" component={Transaction} />
        </Tab.Navigator>
    )
}
export default BottomTabs