import { View, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, Image, useWindowDimensions, Switch, TextInput } from 'react-native'
import React from 'react'
import theme from '../../common/Theme'
import rightErrow from '../../assets/icons/rightErrow.png'
import slideCard from '../../assets/images/sendMoney/slideCard.png'
import add from '../../assets/images/sendMoney/add.png'
import img1 from '../../assets/images/sendMoney/img1.png'
import img2 from '../../assets/images/sendMoney/img2.png'
import img3 from '../../assets/images/sendMoney/img3.png'
import img4 from '../../assets/images/sendMoney/img4.png'
import { useNavigation } from '@react-navigation/native'
import styles from './MoneyStyle'

const SendMoneys = () => {
    const { width } = useWindowDimensions()
    const Navigation = useNavigation()
    const handlePress = () => {
        Navigation.navigate('Search')
    }
    const handleSubmit = () => {
        Navigation.navigate('RequestMoney')
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={theme.colors.darkBlack} barStyle="light-content" />
            <ScrollView>
                <View style={{ width: width / 1 }}>
                    <View style={styles.topheader}>
                        <View style={{ width: width / 1.1 }}>
                            <View style={styles.backerrow}>
                                <TouchableOpacity onPress={handlePress}>
                                    <View style={styles.circle}>
                                        <Image source={rightErrow} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleSubmit}>
                                    <Text style={styles.title}>Send Money</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.top}>
                        <Image source={slideCard} resizeMode='stretch' style={{ width: width / 1 }} />
                    </View>
                    <View>
                        <View style={[styles.topheader, { marginTop: -215 }]}>
                            <View style={{ width: width / 1.1 }}>
                                <View style={styles.tabsHeader}>
                                    <Text style={styles.text_sm}>Send to</Text>
                                    <View style={styles.tabshead}>
                                        <Image source={add} />
                                        <Image source={img1} />
                                        <Image source={img2} />
                                        <Image source={img3} />
                                        <Image source={img4} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={[styles.topheader, { marginTop: -50 }]}>
                            <View style={{ width: width / 1.1 }}>
                                <View style={styles.tabsHeader}>
                                    <View style={styles.USDHead}>
                                        <View style={styles.content}>
                                            <Text style={styles.cardText}>Enter Your Amount</Text>
                                            <Text style={styles.cardTexts}>Change Currency?</Text>
                                        </View>
                                        <View style={styles.nmbr}>
                                            <Text style={styles.usd}>USD</Text>
                                            <Text style={styles.usds}>36.00</Text>
                                        </View>
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
            </ScrollView>
        </SafeAreaView>
    )
}

export default SendMoneys