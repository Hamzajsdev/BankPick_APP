import { View, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, Image, useWindowDimensions, Switch, TextInput } from 'react-native'
import React from 'react'
import theme from '../../common/Theme'
import rightErrow from '../../assets/icons/rightErrow.png'
import card from '../../assets/images/Statistics/Cards.png'
import noCard from '../../assets/images/Statistics/noCard.png'
import sectionclr from '../../assets/images/Statistics/sectionclr.png'
import user from '../../assets/images/profile/user.png'
import { useNavigation } from '@react-navigation/native'
import styles from './CardStyle'

const NewCard = () => {
    const { width } = useWindowDimensions()
    const Navigation = useNavigation()
    const handlePress = () => {
        Navigation.navigate('EditProfile')
    }
    const handleSubmit = () => {
        Navigation.navigate('AllCards')
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
                                <Text style={styles.title}>Add New Card</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.top}>
                            <Image source={card} resizeMode='stretch' style={{ width: width / 1.05 }} />
                        </View>
                        <View style={styles.ntop}>
                            <View>
                                <Text style={styles.heading}>Cardholder Name</Text>
                                <View style={styles.cardholder}>
                                    <Image source={user} />
                                    <Text style={styles.deccrip}>Tanya Myroniuk</Text>
                                </View>
                            </View>
                            <View style={styles.headerDate}>
                                <View style={styles.datehead}>
                                    <Text style={styles.text_sm}>Expiry Date</Text>
                                    <Text style={styles.text_sm}>Expiry Date</Text>
                                </View>
                                <View style={[styles.datehead, { paddingRight: 40 }]}>
                                    <Text style={styles.text_md}>09/06/2024</Text>
                                    <Text style={styles.text_md}>6986</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={styles.heading}>Card Number</Text>
                                <View style={styles.circleclr}>
                                    <View style={styles.cardholders}>
                                        <Image source={noCard} />
                                        <Text style={styles.deccrip}>4562 1122 4595 7852</Text>
                                    </View>
                                    <Image source={sectionclr} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default NewCard