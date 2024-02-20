import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, useWindowDimensions, Button } from 'react-native'
import React from 'react'
import onboard4 from '../../assets/images/onboarding/onboard4.png'
import styles from './OnboardStyle'
import theme from '../../common/Theme'
import { useNavigation } from '@react-navigation/native'

const Onboarding4 = () => {
    const { width } = useWindowDimensions()
    const Navigation = useNavigation()
    const handlesubmit = () => {
        Navigation.navigate('Signin')
    }
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor={theme.colors.darkBlack} barStyle="light-content" />
    <View style={{ gap: 20 }}>
        <View style={{ width: width / 1.1 }}>
            <Image source={onboard4} resizeMode='stretch' />
        </View>
        <View>
            <View style={[styles.headerContent, { marginTop: 30 }]}>
                <View style={{ width: width / 1.3 }}>
                    <Text style={styles.text_lg}>Paying for Everything is Easy and Convenient</Text>
                </View>
            </View>
        </View>
        <View style={styles.headerContent}>
            <View style={{ width: width / 1.4 }}>
                <Text style={styles.description}>Built-in Fingerprint, face recognition and more, keeping you completely safe</Text>
            </View>
        </View>

        <View>
            <TouchableOpacity onPress={handlesubmit}>
                <View style={[styles.btn, { marginTop: 60 }]}>
                    <Text style={styles.txt}>Next</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
</SafeAreaView>
  )
}

export default Onboarding4