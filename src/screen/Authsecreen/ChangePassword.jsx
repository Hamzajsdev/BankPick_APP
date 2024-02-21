import { View, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, Image, useWindowDimensions, Switch, TextInput } from 'react-native'
import React from 'react'
import theme from '../../common/Theme'
import rightErrow from '../../assets/icons/rightErrow.png'
import lock from '../../assets/icons/lock.png'
import styles from './AuthStyle'
import { useNavigation } from '@react-navigation/native'

const ChangePassword = () => {
    const { width } = useWindowDimensions()
    const Navigation = useNavigation()
    const handlePress = () => {
        Navigation.navigate('SendMoneys')
    }
    const handleSubmit = () => {
        Navigation.navigate('TermCondition')
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
                                <Text style={styles.Subtitle}>Change Password</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={{ width: width / 1.1 }}>
                            <Text style={styles.subtitle}>Current Password</Text>
                            <View style={styles.emailcontent}>
                                <Image source={lock} />
                                <TextInput placeholder='••••••••••' placeholderTextColor={theme.colors.gray}  />
                            </View>
                            <Text style={styles.passwordtitle}>New Password</Text>
                            <View style={styles.emailcontent}>
                                <Image source={lock} />
                                <TextInput placeholder='123456' placeholderTextColor={theme.colors.gray} style={theme.colors.gray} />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.Emailtitle}>Cofirm New Password</Text>
                            <View style={styles.emailcontent}>
                                <Image source={lock} />
                                <TextInput placeholder='••••••••••' placeholderTextColor={theme.colors.gray} style={theme.colors.gray} />
                            </View>
                            <Text style={styles.matchPassword}>Both Passwords Must Match</Text>
                        </View>

                        <View style={styles.topheader}>
                            <View style={{ width: width / 1.1 }}>
                                <View style={styles.btnHeader}>
                                    <Text style={styles.btn1}>Change Password</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ChangePassword