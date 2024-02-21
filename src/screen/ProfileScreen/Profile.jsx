import { View, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, Image, useWindowDimensions, Switch } from 'react-native'
import React from 'react'
import theme from '../../common/Theme'
import rightErrow from '../../assets/icons/rightErrow.png'
import dropIcon from '../../assets/icons/dropIcon.png'
import person from '../../assets/images/profile/person.png'
import user from '../../assets/images/profile/user.png'
import payment from '../../assets/images/profile/payment.png'
import bank from '../../assets/images/profile/bank.png'
import notification from '../../assets/images/profile/notification.png'
import chat from '../../assets/images/profile/chat.png'
import location from '../../assets/images/profile/location.png'
import setting from '../../assets/images/profile/setting.png'
import { useNavigation } from '@react-navigation/native'
import styles from './ProfileStyle'
import { fontSizes } from '../../assets/fonts/font'

const Profile = () => {
    const { width } = useWindowDimensions()
    const Navigation = useNavigation()
    const handlePress = () => {
        Navigation.navigate('Setting')
    }
    const handleSubmit = () => {
        Navigation.navigate('EditProfile')
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={theme.colors.darkBlack} barStyle="light-content" />
            <ScrollView>
                <View style={styles.topheader}>
                    <View style={{ width: width / 1.1 }}>
                        <View style={styles.headergroup}>
                            <TouchableOpacity onPress={handlePress}>
                                <View style={styles.circle}>
                                    <Image source={rightErrow} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleSubmit}>
                                <Text style={styles.title}>Profile</Text>
                            </TouchableOpacity>
                            <View style={styles.circle}>
                                <Image source={user} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.personProfile}>
                        <Image source={person} resizeMode='cover' />
                        <Text style={styles.profilehead}>Tanya Myroniuk {'\n'}<Text style={{ color: theme.colors.gray, fontSize: fontSizes.small }}>Senior Designer</Text></Text>
                    </View>

                    <View>
                        <View style={styles.profiletabs}>
                            <View style={styles.innnercontent}>
                                <View style={{ flexDirection: 'row', gap: 15 }}>
                                    <Image source={user} />
                                    <Text style={styles.common}>Language</Text>
                                </View>
                                <Image source={dropIcon} />
                            </View>
                            <View style={styles.innnercontent}>
                                <View style={{ flexDirection: 'row', gap: 15 }}>
                                    <Image source={payment} />
                                    <Text style={styles.common}>Payment Preferences</Text>
                                </View>
                                <Image source={dropIcon} />
                            </View>
                            <View style={styles.innnercontent}>
                                <View style={{ flexDirection: 'row', gap: 15 }}>
                                    <Image source={bank} />
                                    <Text style={styles.common}>Banks and Cards</Text>
                                </View>
                                <Image source={dropIcon} />
                            </View>
                            <View style={styles.innnercontent}>
                                <View style={{ flexDirection: 'row', gap: 15 }}>
                                    <Image source={notification} />
                                    <Text style={styles.common}>Notifications</Text>
                                </View>
                                <View style={styles.notification}>
                                    <Text style={{color:theme.colors.light}}>2</Text>
                                </View>
                            </View>
                            <View style={styles.innnercontent}>
                                <View style={{ flexDirection: 'row', gap: 15 }}>
                                    <Image source={chat} />
                                    <Text style={styles.common}>Message Center</Text>
                                </View>
                                <Image source={dropIcon} />
                            </View>
                            <View style={styles.innnercontent}>
                                <View style={{ flexDirection: 'row', gap: 15 }}>
                                    <Image source={location} />
                                    <Text style={styles.common}>Address</Text>
                                </View>
                                <Image source={dropIcon} />
                            </View>
                            <View style={styles.innnercontent}>
                                <View style={{ flexDirection: 'row', gap: 15 }}>
                                    <Image source={setting} />
                                    <Text style={styles.common}>Settings</Text>
                                </View>
                                <Image source={dropIcon} />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile