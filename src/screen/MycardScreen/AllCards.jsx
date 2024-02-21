import { View, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, Image, useWindowDimensions, Switch, TextInput } from 'react-native'
import React from 'react'
import theme from '../../common/Theme'
import rightErrow from '../../assets/icons/rightErrow.png'
import card from '../../assets/images/Statistics/Cards.png'
import visaCard from '../../assets/images/Statistics/visaCard.png'

import { useNavigation } from '@react-navigation/native'
import styles from './CardStyle'

const AllCards = () => {
    const { width } = useWindowDimensions()
    const Navigation = useNavigation()
    const handlePress = () => {
        Navigation.navigate('NewCard')
    }
    const handleSubmit = () => {
        Navigation.navigate('Transaction')
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
                                <Text style={styles.title}>All Cards</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.top}>
                            <Image source={card} resizeMode='stretch' style={{ width: width / 1.05 }} />
                        </View>
                        <View style={styles.visaCard}>
                            <Image source={visaCard} resizeMode='stretch' style={{ width: width / 1.1 }} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AllCards