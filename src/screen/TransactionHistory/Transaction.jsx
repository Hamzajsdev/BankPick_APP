import { View, Text, SafeAreaView, ScrollView, StatusBar, useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import rightErrow from '../../assets/icons/rightErrow.png'
import bell from '../../assets/icons/bell.png'
import apple from '../../assets/images/Transaction/apple.png'
import download from '../../assets/images/Transaction/download.png'
import spotify from '../../assets/images/Transaction/spotify.png'
import store from '../../assets/images/Transaction/store.png'
import netflix from '../../assets/images/Transaction/netflix.png'
import theme from '../../common/Theme'
import { useNavigation } from '@react-navigation/native'
import styles from './TransactionStyle'

const Transaction = () => {
    const { width } = useWindowDimensions()
    const Navigation = useNavigation()
    const handlePress = () => {
        Navigation.navigate('AllCards')
    }
    const handleSubmit = () => {
        Navigation.navigate('Search')
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={theme.colors.darkBlack} barStyle="light-content" />
            <ScrollView>
                <View>
                    <View style={styles.mb}>
                        <View style={{ width: width / 1.1, marginTop: 30 }}>
                            <View style={styles.headergroup}>
                                <TouchableOpacity onPress={handlePress}>
                                    <View style={styles.circle}>
                                        <Image source={rightErrow} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleSubmit}>
                                    <Text style={styles.title}>Transaction History</Text>
                                </TouchableOpacity>
                                <View style={styles.circle}>
                                    <Image source={bell} />
                                </View>
                            </View>

                            <View>
                                <View style={styles.trasition}>
                                    <Text style={styles.descrip}>Today</Text>
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
                                        <Text style={[styles.digit, { color: theme.colors.primary }]}>$300</Text>
                                    </View>
                                </View>
                                <View style={styles.transHeader}>
                                    <View style={styles.transaction}>
                                        <View style={styles.circle}>
                                            <Image source={store} resizeMode='cover' />
                                        </View>
                                        <Text style={styles.descrip}>Grocery {'\n'}<Text style={styles.entertain}>Shopping</Text></Text>
                                    </View>
                                    <View>
                                        <Text style={styles.digit}>- $ 88</Text>
                                    </View>
                                </View>
                                <View style={styles.transHeader}>
                                    <View style={styles.transaction}>
                                        <View style={styles.circle}>
                                            <Image source={netflix} resizeMode='cover' />
                                        </View>
                                        <Text style={styles.descrip}>Apple Store {'\n'}<Text style={styles.entertain}>Entertainment</Text></Text>
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
                                        <Text style={[styles.digit, { color: theme.colors.primary }]}>$300</Text>
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
                                            <Image source={store} resizeMode='cover' />
                                        </View>
                                        <Text style={styles.descrip}>Grocery {'\n'}<Text style={styles.entertain}>Shopping</Text></Text>
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

export default Transaction