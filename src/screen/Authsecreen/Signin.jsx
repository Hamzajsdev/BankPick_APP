import { View, Text, SafeAreaView, StatusBar, useWindowDimensions, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import rightErrow from '../../assets/icons/rightErrow.png'
import email from '../../assets/icons/email.png'
import lock from '../../assets/icons/lock.png'
import theme from '../../common/Theme'
import styles from './AuthStyle'
import { useNavigation } from '@react-navigation/native'

const Signin = () => {
    const { width } = useWindowDimensions()
    const Navigation=useNavigation()
    const handlesubmit=()=>{
        Navigation.navigate('SignUp')
    }
    const handlePress=()=>{
        Navigation.navigate('Onboarding4')
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={theme.colors.darkBlack} barStyle="light-content" />
            <View>
                <View style={[styles.header, { marginTop: 30 }]}>
                    <View style={{ width: width / 1.1 }}>
                        <TouchableOpacity onPress={handlePress}>
                        <View style={styles.circle}>
                            <Image source={rightErrow} />
                        </View>
                        </TouchableOpacity>
                        <Text style={styles.signin}>Sign In</Text>
                        <View>
                            <Text style={styles.title}>Email Address</Text>
                            <View style={styles.emailcontent}>
                                <Image source={email} />
                                <TextInput placeholder='abc@gmail.com' placeholderTextColor={theme.colors.gray} style={theme.colors.gray} />
                            </View>
                            <Text style={styles.passwordtitle}>Password</Text>
                            <View style={styles.emailcontent}>
                                <Image source={lock} />
                                <TextInput placeholder='123456' placeholderTextColor={theme.colors.gray} style={theme.colors.gray} />
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={handlesubmit}>
                                <View style={styles.btn}>
                                    <Text style={styles.txt}>Sign In</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.description}>I’m a new user. <Text style={{color:theme.colors.primary}}>Sign In</Text></Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Signin


