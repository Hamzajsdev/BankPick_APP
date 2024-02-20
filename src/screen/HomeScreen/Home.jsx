import { View, Text, SafeAreaView, StatusBar, ScrollView, useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '../../common/Theme'
import profile from '../../assets/images/HomeImg/profile.png'
import card from '../../assets/images/HomeImg/Card.png'
import errowUp from '../../assets/images/HomeImg/errowUp.png'
import apple from '../../assets/images/HomeImg/apple.png'
import errowDown from '../../assets/images/HomeImg/errowDown.png'
import doller from '../../assets/images/HomeImg/doller.png'
import spotify from '../../assets/images/HomeImg/spotify.png'
import download from '../../assets/images/HomeImg/download.png'
import popup from '../../assets/images/HomeImg/popup.png'
import store from '../../assets/images/HomeImg/store.png'

import search from '../../assets/icons/search.png'
import styles from './HomeStyle'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const { width } = useWindowDimensions()
    const Navigation=useNavigation()
    const handlepress=()=>{
        Navigation.navigate('Statistics')
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={theme.colors.darkBlack} barStyle="light-content" />
            <ScrollView>
                <View>
                    <View style={styles.header}>
                        <View style={{ width: width / 1.1 }}>
                            <View style={styles.content}>
                                <View style={styles.innerContent}>
                                    <Image source={profile} resizeMode='cover' />
                                    <View>
                                        <Text style={styles.title}>Welcome back,</Text>
                                        <Text style={styles.descrip}>Tanya Myroniuk</Text>
                                    </View>
                                </View>
                                <View style={styles.circle}>
                                    <Image source={search} resizeMode='cover' />
                                </View>
                            </View>
                            <View style={styles.top}>
                                <Image source={card} resizeMode='stretch' style={{ width: width / 1.05 }} />
                            </View>
                            <View>
                                <View style={styles.tags}>
                                    <View style={{ gap: 8 }}>
                                        <TouchableOpacity onPress={handlepress}>
                                        <View style={styles.circle}>
                                            <Image source={errowUp} />
                                        </View>
                                        </TouchableOpacity>
                                        <Text style={[styles.title, { marginLeft: 10 }]}>Sent</Text>
                                    </View>
                                    <View style={{ gap: 8 }}>
                                        <View style={styles.circle}>
                                            <Image source={errowDown} />
                                        </View>
                                        <Text style={[styles.title, { marginLeft: 4 }]}>Receive</Text>
                                    </View>
                                    <View style={{ gap: 8 }}>
                                        <View style={styles.circle}>
                                            <Image source={doller} />
                                        </View>
                                        <Text style={[styles.title, { marginLeft: 10 }]}>Loan</Text>
                                    </View>
                                    <View style={{ gap: 8 }}>
                                        <View style={styles.circle}>
                                            <Image source={popup} />
                                        </View>
                                        <Text style={[styles.title, { marginLeft: 10 }]}>Topup</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={styles.trasition}>
                                    <Text style={styles.descrip}>Transaction</Text>
                                    <Text style={styles.all}>Sell All</Text>
                                </View>
                            </View>
                            <View style={styles.head}>
                                <View style={styles.transHeader}>
                                    <View style={styles.transaction}>
                                        <View style={styles.circle}>
                                            <Image source={apple} resizeMode='cover' />
                                        </View>
                                        <Text style={styles.descrip}>Apply Store {'\n'}<Text style={styles.entertain}>Entertainment</Text></Text>
                                    </View>
                                    <View>
                                        <Text style={styles.digit}>- $5,99</Text>
                                    </View>
                                </View>
                                <View style={styles.transHeader}>
                                    <View style={styles.transaction}>
                                        <View style={styles.circle}>
                                            <Image source={spotify} resizeMode='cover' />
                                        </View>
                                        <Text style={styles.descrip}>Spotify {'\n'}<Text style={styles.entertain}>Music</Text></Text>
                                    </View>
                                    <View>
                                        <Text style={styles.digit}>- $12,99</Text>
                                    </View>
                                </View>
                                <View style={styles.transHeader}>
                                    <View style={styles.transaction}>
                                        <View style={styles.circle}>
                                            <Image source={download} resizeMode='cover' />
                                        </View>
                                        <Text style={styles.descrip}>Money Transfer {'\n'}<Text style={styles.entertain}>Transaction</Text></Text>
                                    </View>
                                    <View>
                                        <Text style={[styles.digit,{color:theme.colors.primary}]}>$300</Text>
                                    </View>
                                </View>
                                <View style={styles.transHeader}>
                                    <View style={styles.transaction}>
                                        <View style={styles.circle}>
                                            <Image source={store} resizeMode='cover' />
                                        </View>
                                        <Text style={styles.descrip}>Grocery {'\n'}<Text style={styles.entertain}>shopping</Text></Text>
                                    </View>
                                    <View>
                                        <Text style={styles.digit}>- $ 88</Text>
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

export default Home