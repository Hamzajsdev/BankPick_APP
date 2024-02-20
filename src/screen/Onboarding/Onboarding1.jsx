import React from 'react'
import { View,SafeAreaView, StatusBar,Image, TouchableOpacity } from 'react-native'
import logo from '../../assets/images/onboarding/Logo.png'
import styles from './OnboardStyle'
import theme from '../../common/Theme'
import { useNavigation } from '@react-navigation/native'

const Onboarding1 = () => {
    const Navigation = useNavigation()
    const handlepress=()=>{
        Navigation.navigate('Onboardding2')
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={theme.colors.darkBlack} barStyle="light-content" />
            <View>
                <TouchableOpacity onPress={handlepress}>
                <Image source={logo} resizeMode='cover' />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Onboarding1


