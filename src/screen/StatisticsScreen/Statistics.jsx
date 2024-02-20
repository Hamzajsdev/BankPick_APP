import { View, Text, SafeAreaView, ScrollView, StatusBar, useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import rightErrow from '../../assets/icons/rightErrow.png'
import bell from '../../assets/icons/bell.png'
import state from '../../assets/images/Statistics/state.png'
import apple from '../../assets/images/HomeImg/apple.png'
import download from '../../assets/images/HomeImg/download.png'
import spotify from '../../assets/images/HomeImg/spotify.png'
import store from '../../assets/images/HomeImg/store.png'
import theme from '../../common/Theme'
import styles from './stateStyle'
import { useNavigation } from '@react-navigation/native'

const Statistics = () => {
    const { width } = useWindowDimensions()
    const Navigation=useNavigation()
    const handlePress=()=>{
        Navigation.navigate('Home')
    }
    const handleSubmit=()=>{
        Navigation.navigate('Mycard')
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={theme.colors.darkBlack} barStyle="light-content" />
            <ScrollView>
                <View>
                    <View>
                        <View style={{ width: width / 1.1, marginTop:30 }}>
                            <View style={styles.headergroup}>
                                <TouchableOpacity onPress={handlePress}>
                                <View style={styles.circle}>
                                    <Image source={rightErrow} />
                                </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleSubmit}>
                                <Text style={styles.title}>Statistics</Text>
                                </TouchableOpacity>
                                <View style={styles.circle}>
                                    <Image source={bell} />
                                </View>
                            </View>
                            <View style={styles.top}>
                               <Image source={state} resizeMode='stretch' style={{width:width/1.1}}/>
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
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Statistics