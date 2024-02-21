import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding1 from '../screen/Onboarding/Onboarding1';
import Onboardding2 from '../screen/Onboarding/Onboardding2';
import Onboarding3 from '../screen/Onboarding/Onboarding3';
import Onboarding4 from '../screen/Onboarding/Onboarding4';
import Signin from '../screen/Authsecreen/Signin';
import SignUp from '../screen/Authsecreen/SignUp';
import Home from '../screen/HomeScreen/Home';
import Statistics from '../screen/StatisticsScreen/Statistics';
import Mycard from '../screen/MycardScreen/Mycard';
import Setting from '../screen/SettingScreen/Setting';
import Profile from '../screen/ProfileScreen/Profile';
import EditProfile from '../screen/ProfileScreen/EditProfile';
import NewCard from '../screen/MycardScreen/NewCard';
import AllCards from '../screen/MycardScreen/AllCards';
import Transaction from '../screen/TransactionHistory/Transaction';
import Search from '../screen/SearchScreen/Search';
import SendMoneys from '../screen/SendMoneyScreen/SendMoneys';
import RequestMoney from '../screen/SendMoneyScreen/RequestMoney';
import Language from '../screen/LanguageScreen/Language';
import ChangePassword from '../screen/Authsecreen/ChangePassword';
import TermCondition from '../screen/TermConditionScreen/TermCondition';
import BottomTabs from '../components/BottomTabs';




const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Onboarding1' component={Onboarding1} />
                <Stack.Screen name='Onboardding2' component={Onboardding2} />
                <Stack.Screen name='Onboarding3' component={Onboarding3} />
                <Stack.Screen name='Onboarding4' component={Onboarding4} />
                <Stack.Screen name='Signin' component={Signin} />
                <Stack.Screen name='SignUp' component={SignUp} />
                <Stack.Screen name='ChangePassword' component={ChangePassword} />
                <Stack.Screen name='BottomTabs' component={BottomTabs} />

                {/* <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Statistics' component={Statistics} />
                <Stack.Screen name='Mycard' component={Mycard} />
                <Stack.Screen name='Setting' component={Setting} />
                <Stack.Screen name='Transaction' component={Transaction} /> */}

                <Stack.Screen name='Profile' component={Profile} />
                <Stack.Screen name='EditProfile' component={EditProfile} />
                <Stack.Screen name='NewCard' component={NewCard} />
                <Stack.Screen name='AllCards' component={AllCards} />
                <Stack.Screen name='Search' component={Search} />
                <Stack.Screen name='SendMoneys' component={SendMoneys} />
                <Stack.Screen name='RequestMoney' component={RequestMoney} />
                <Stack.Screen name='Language' component={Language} />
                <Stack.Screen name='TermCondition' component={TermCondition} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation