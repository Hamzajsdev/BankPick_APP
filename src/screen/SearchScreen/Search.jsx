import { View, Text, SafeAreaView, ScrollView, StatusBar, useWindowDimensions, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import rightErrow from '../../assets/icons/rightErrow.png'
import search from '../../assets/icons/search.png'
import apple from '../../assets/images/Transaction/apple.png'
import download from '../../assets/images/Transaction/download.png'
import spotify from '../../assets/images/Transaction/spotify.png'
import store from '../../assets/images/Transaction/store.png'
import netflix from '../../assets/images/Transaction/netflix.png'
import cross from '../../assets/images/Transaction/cross.png'
import theme from '../../common/Theme'
import { useNavigation } from '@react-navigation/native'
import styles from './SearchStyle'

const Search = () => {
    const { width } = useWindowDimensions()
    const Navigation = useNavigation()
    const handlePress = () => {
        Navigation.navigate('AllCards')
    }
    const handleSubmit = () => {
        Navigation.navigate('SendMoney')
    }

  return (
    <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={theme.colors.darkBlack} barStyle="light-content" />
            <ScrollView>
                <View>
                    <View>
                        <View style={{ width: width / 1.1, marginTop: 30 }}>
                            <View style={styles.headergroup}>
                                <TouchableOpacity onPress={handlePress}>
                                    <View style={styles.circle}>
                                        <Image source={rightErrow} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleSubmit}>
                                    <Text style={styles.title}>Search</Text>
                                </TouchableOpacity>
                                <View style={styles.circle}>
                                    <Image source={cross} />
                                </View>
                            </View>
                            <View>
                                <View style={styles.search}>
                                    <View style={styles.innerContent}>
                                        <View style={styles.headerSearch}>
                                            <Image source={search} />
                                            <TextInput placeholder='search' placeholderTextColor={theme.colors.gray} />
                                        </View>
                                        <Image source={cross} />
                                    </View>
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

export default Search