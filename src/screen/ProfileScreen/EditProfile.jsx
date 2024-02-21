import { View, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, Image, useWindowDimensions, Switch, TextInput } from 'react-native'
import React from 'react'
import theme from '../../common/Theme'
import rightErrow from '../../assets/icons/rightErrow.png'
import person from '../../assets/images/profile/person.png'
import user from '../../assets/images/profile/user.png'
import email from '../../assets/icons/email.png'
import phone from '../../assets/icons/phone.png'
import { useNavigation } from '@react-navigation/native'
import styles from './ProfileStyle'
import { fontSizes} from '../../assets/fonts/font'

const EditProfile = () => {
    const { width } = useWindowDimensions()
    const Navigation = useNavigation()
    const handlePress = () => {
        Navigation.navigate('Profile')
    }
    const handleSubmit = () => {
        Navigation.navigate('NewCard')
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
                                <Text style={styles.title}> Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.tanyaProfile}>
                        <Image source={person} resizeMode='cover' style={{ marginTop: 30 }} />
                        <Text style={[styles.profilehead, { marginTop: 10 }]}>Tanya Myroniuk</Text>
                        <Text style={{ color: theme.colors.gray, fontSize: fontSizes.small }}>Senior Designer</Text>
                    </View>
                    <View>
                        <View>
                            <Text style={styles.subtitle}>Full Name</Text>
                            <View style={styles.emailcontent}>
                                <Image source={user} />
                                <TextInput placeholder='Tanya Myroniuk' placeholderTextColor={theme.colors.gray} style={theme.colors.gray} />
                            </View>
                            <Text style={styles.passwordtitle}>Phone Number</Text>
                            <View style={styles.emailcontent}>
                                <Image source={phone} />
                                <TextInput placeholder='+8801712663389' placeholderTextColor={theme.colors.gray} style={theme.colors.gray} />
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
                                    <Text style={styles.birthDec}>July</Text>
                                </View>
                                <View style={[styles.birthContent, { width: width / 5 }]}>
                                    <Text style={styles.birthDec}>2000</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.bottomContent}>
                            <Text style={styles.innertabs}>Joined 28 Jan 2021</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default EditProfile