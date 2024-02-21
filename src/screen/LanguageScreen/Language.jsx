import { View, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, Image, useWindowDimensions, Switch, TextInput } from 'react-native'
import React from 'react'
import theme from '../../common/Theme'
import search from '../../assets/icons/search.png'
import icon from '../../assets/icons/tick.png'
import flag from '../../assets/images/sendMoney/flag.png'
import flag1 from '../../assets/images/sendMoney/flag1.png'
import rightErrow from '../../assets/icons/rightErrow.png'
import { useNavigation } from '@react-navigation/native'
import styles from './languageStyle'

const Language = () => {
    const { width } = useWindowDimensions()
    const Navigation = useNavigation()
    const handlePress = () => {
        Navigation.navigate('RequestMoney')
    }
    const handleSubmit = () => {
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
                            <TouchableOpacity onPress={handleSubmit}>
                                <Text style={styles.title}>Request Money</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View style={styles.search}>
                                <View style={styles.innerContent}>
                                    <View style={styles.headerSearch}>
                                        <Image source={search} />
                                        <TextInput placeholder='Search Language' placeholderTextColor={theme.colors.gray} />
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={styles.header}>
                                <View style={styles.innercontent}>
                                    <Text style={styles.blankCircle}></Text>
                                    <Text style={styles.heading}>English</Text>
                                </View>
                                <View style={styles.tick}>
                                    <Image source={icon} />
                                </View>
                            </View>
                            <View style={styles.header}>
                                <View style={styles.innercontent}>
                                    <Text style={styles.blankCircle}></Text>
                                    <Text style={styles.heading}>Australia</Text>
                                </View>
                            </View>
                            <View style={styles.header}>
                                <View style={styles.innercontent}>
                                    <Image source={flag} />
                                    <Text style={styles.heading}>Franch</Text>
                                </View>
                            </View>
                            <View style={styles.header}>
                                <View style={styles.innercontent}>
                                    <Text style={styles.blankCircle}></Text>
                                    <Text style={styles.heading}>Spanish</Text>
                                </View>
                            </View>
                            <View style={styles.header}>
                                <View style={styles.innercontent}>
                                    <Text style={styles.blankCircle}></Text>
                                    <Text style={styles.heading}>America</Text>
                                </View>
                            </View>
                            <View style={styles.header}>
                                <View style={styles.innercontent}>
                                    <Image source={flag1} />
                                    <Text style={styles.heading}>Vietnam</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Language