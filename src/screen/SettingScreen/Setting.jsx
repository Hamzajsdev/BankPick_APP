import { View, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, Image, useWindowDimensions, Switch } from 'react-native'
import React, { useState } from 'react'
import theme from '../../common/Theme'
import rightErrow from '../../assets/icons/rightErrow.png'
import dropIcon from '../../assets/icons/dropIcon.png'
import rape from '../../assets/icons/rape.png'
import styles from './SettingStyle'
import { useNavigation } from '@react-navigation/native'

const Setting = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const { width } = useWindowDimensions()
    const Navigation=useNavigation()
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };
    const handlePress = () => {
        Navigation.navigate('Mycard')
    }
    const handleSubmit = () => {
        Navigation.navigate('Profile')
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
                            <Text style={styles.title}>Setting</Text>
                            </TouchableOpacity>
                            <View style={styles.circle}>
                                <Image source={rape} />
                            </View>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text style={styles.titlehead}>General</Text>
                        </View>
                        <View style={styles.profiletabs}>
                            <View style={styles.innnercontent}>
                                <Text style={styles.common}>Language</Text>
                                <View style={{ flexDirection: 'row', gap: 20 }}>
                                    <Text style={styles.des}>English</Text>
                                    <Image source={dropIcon} />
                                </View>
                            </View>
                            <View style={styles.innnercontent}>
                                <Text style={styles.common}>My Profile</Text>
                                <View style={{ flexDirection: 'row', gap: 20 }}>
                                    <Image source={dropIcon} />
                                </View>
                            </View>
                            <View style={styles.innnercontent}>
                                <Text style={styles.common}>Contact Us</Text>
                                <View style={{ flexDirection: 'row', gap: 20 }}>
                                    <Image source={dropIcon} />
                                </View>
                            </View>
                        </View>

                    </View>

                    <View style={styles.profileTop}>
                        <View>
                            <Text style={styles.titlehead}>Security</Text>
                        </View>
                        <View style={styles.profiletabs}>
                            <View style={styles.innnercontent}>
                                <Text style={styles.common}>Change Password</Text>
                                <View style={{ flexDirection: 'row', gap: 20 }}>
                                    <Image source={dropIcon} />
                                </View>
                            </View>
                            <View style={styles.innnercontent}>
                                <Text style={styles.common}>Privacy Policy</Text>
                                <View style={{ flexDirection: 'row', gap: 20 }}>
                                    <Image source={dropIcon} />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.des}>Choose what data you share with us</Text>
                            </View>
                        </View>
                    </View>

                    <View style={ styles.switch}>
                        <Text style={styles.common}>Biometric</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: theme.colors.primary }}
                            thumbColor={isEnabled ? theme.colors.light : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Setting