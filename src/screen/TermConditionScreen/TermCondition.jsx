import { View, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, Image, useWindowDimensions, Switch, TextInput } from 'react-native'
import React from 'react'
import theme from '../../common/Theme'
import search from '../../assets/icons/search.png'
import icon from '../../assets/icons/tick.png'
import flag from '../../assets/images/sendMoney/flag.png'
import flag1 from '../../assets/images/sendMoney/flag1.png'
import rightErrow from '../../assets/icons/rightErrow.png'
import { useNavigation } from '@react-navigation/native'
import styles from './termStyle'

const TermCondition = () => {
    const { width } = useWindowDimensions()
    const Navigation = useNavigation()
    const handlePress = () => {
        Navigation.navigate('ChangePassword')
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={theme.colors.darkBlack} barStyle="light-content" />
            <ScrollView>
                <View style={styles.topheader}>
                    <View style={{ width: width / 1.1 }}>
                        <View style={styles.backerrow}>
                            <TouchableOpacity onPress={handlePress}>
                                <View style={styles.circle}>
                                    <Image source={rightErrow} />
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.title}>Terms & Condition</Text>
                        </View>
                        <View>
                            <Text style={styles.description}>L15.1 Thank you for visiting our Application Doctor 24×7 and enrolling as a member. {'\n'}{'\n'}
                                15.2 Your privacy is important to us. To better protect your privacy, we are providing this notice explaining our policy with regards to the information you share with us. This privacy policy related to the information we collect, online from Application, received through the email, by fax or telephone, or in person or in any other way and retain and use for the purpose of providing you services. If you do not agree to the terms in this Policy, we kindly ask you not to use these portals and/or sign the contract document.{'\n'}{'\n'}
                                15.3 In order to use the services of this Application, You are required to register yourself by verifying the authorised device. This Privacy Policy applies to your information that we collect and receive on and through Doctor 24×7; it does not apply to practices of businesses that we do not own or control or people we do not employ.{'\n'}{'\n'}
                                15.4 By using this Application, you agree to the terms of this Privacy Policy.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TermCondition