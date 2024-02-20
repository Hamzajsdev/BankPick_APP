import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, useWindowDimensions, Button } from 'react-native'
import React from 'react'
import onboard2 from '../../assets/images/onboarding/onboard2.png'
import styles from './OnboardStyle'
import theme from '../../common/Theme'
import { useNavigation } from '@react-navigation/native'

const Onboardding2 = () => {
    const Navigation=useNavigation()
    const handlesubmit=()=>{
        Navigation.navigate('Onboarding3')
    }
    const { width } = useWindowDimensions()
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={theme.colors.darkBlack} barStyle="light-content" />
            <View style={{gap:20}}>
                <View style={{ width: width / 1.1 }}>
                    <Image source={onboard2} resizeMode='stretch' />
                </View>
                <View>
                    <View style={[styles.headerContent,{marginTop:30}]}>
                        <View style={{ width: width / 1.5}}>
                            <Text style={styles.text_lg}>Fastest Payment in the world</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.headerContent}>
                    <View style={{ width: width / 1.6 }}>
                        <Text style={styles.description}>Integrate multiple payment methoods to help you up the process quickly</Text>
                    </View>
                </View>

                <View>
                    <TouchableOpacity onPress={handlesubmit}>
                    <View  style={[styles.btn,{marginTop:70}]}>
                       <Text style={styles.txt}>Next</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Onboardding2