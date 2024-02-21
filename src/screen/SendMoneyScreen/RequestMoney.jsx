import { View, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, Image, useWindowDimensions, Switch, TextInput } from 'react-native'
import React from 'react'
import theme from '../../common/Theme'
import rightErrow from '../../assets/icons/rightErrow.png'
import user from '../../assets/images/profile/user.png'
import email from '../../assets/icons/email.png'
import { useNavigation } from '@react-navigation/native'
import styles from './MoneyStyle'

const RequestMoney = () => {
    const { width } = useWindowDimensions()
    const Navigation = useNavigation()
    const handlePress = () => {
        Navigation.navigate('SendMoneys')
    }
    const handleSubmit = () => {
        Navigation.navigate('Language')
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
                            <TouchableOpacity onPress={handleSubmit}>
                                <Text style={styles.title}>Request Money</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={{width:width/1.1}}>
                            <Text style={styles.subtitle}>Full Name</Text>
                            <View style={styles.emailcontent}>
                                <Image source={user} />
                                <TextInput placeholder='Tanya Myroniuk' placeholderTextColor={theme.colors.gray} style={theme.colors.gray} />
                            </View>
                            <Text style={styles.passwordtitle}>Description</Text>
                            <View style={styles.emailcontent}>
                                <Image source={user} />
                                <TextInput placeholder='Tanya Myroniuk' placeholderTextColor={theme.colors.gray} style={theme.colors.gray} />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.Emailtitle}>Email Address</Text>
                            <View style={styles.emailcontent}>
                                <Image source={email} />
                                <TextInput placeholder='abc@gmail.com' placeholderTextColor={theme.colors.gray} style={theme.colors.gray} />
                            </View>
                            <Text style={styles.passwordtitle}>Birth Date</Text>
                            <View style={styles.birthHeader}>
                                <View style={[styles.birthContent, { width: width / 5 }]}>
                                    <Text style={styles.birthDec}>28</Text>
                                </View>
                                <View style={[styles.birthContent, { width: width / 5 }]}>
                                    <Text style={styles.birthDec}>09</Text>
                                </View>
                                <View style={[styles.birthContent, { width: width / 5 }]}>
                                    <Text style={styles.birthDec}>2000</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                        <View style={[styles.topheader]}>
                            <View style={{ width: width / 1.1 }}>
                                <View style={styles.tabsHeader}>
                                    <View style={styles.USDHead}>
                                        <View style={styles.content}>
                                            <Text style={styles.cardText}>Enter Your Amount</Text>
                                            <Text style={styles.cardTexts}>Change Currency?</Text>
                                        </View>
                                        <View style={styles.nmbr}>
                                            <Text style={styles.usd}>USD</Text>
                                            <Text style={styles.usds}>26.00.00</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                        <View style={styles.topheader}>
                            <View style={{ width: width / 1.1 }}>
                                <View style={styles.btnHeader}>
                                    <Text style={styles.btn}>Send Money</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
  )
}

export default RequestMoney