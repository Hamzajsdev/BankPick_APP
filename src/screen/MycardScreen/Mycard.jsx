import { View, Text, useWindowDimensions, SafeAreaView, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import rightErrow from '../../assets/icons/rightErrow.png'
import card from '../../assets/images/Statistics/Cards.png'
import plus from '../../assets/icons/plus.png'
import apple from '../../assets/images/HomeImg/apple.png'
import download from '../../assets/images/HomeImg/download.png'
import spotify from '../../assets/images/HomeImg/spotify.png'
import styles from './CardStyle'
import theme from '../../common/Theme'
import { useNavigation } from '@react-navigation/native'
import Slider from 'react-native-slider';


const Mycard = () => {
    const [rangeValues, setRangeValues] = useState([0, 25, 50, 75, 100]);
    const handleSliderChange = values => {
        setRangeValues(values);
    };
    const { width } = useWindowDimensions()
    const Navigation = useNavigation()
    const handlePress = () => {
        Navigation.navigate('Statistics')
    }
    const handlesubmit = () => {
        Navigation.navigate('Setting')
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={theme.colors.darkBlack} barStyle="light-content" />
            <ScrollView>
                <View>
                    <View style={styles.header}>
                        <View style={{ width: width / 1.1, marginTop: 30 }}>
                            <View style={styles.headergroup}>
                                <TouchableOpacity onPress={handlePress}>
                                    <View style={styles.circle}>
                                        <Image source={rightErrow} />
                                    </View>
                                </TouchableOpacity>
                                <Text style={styles.title}>My Cards</Text>
                                <TouchableOpacity onPress={handlesubmit}>
                                    <View style={styles.circle}>
                                        <Image source={plus} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.top}>
                                <Image source={card} resizeMode='stretch' style={{ width: width / 1.05 }} />
                            </View>
                            <View style={styles.storeHead}>
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
                                </View>
                            </View>

                            <View style={styles.cardHead}>
                                <View>
                                    <Text style={styles.limit}>Monthly spending limit</Text>
                                </View>
                                <View style={styles.card}>
                                    <Text style={styles.cardTitle}>Amount: $8,545.00</Text>
                                    <View >
                                        <Slider
                                            min={0}
                                            max={100}
                                            values={rangeValues}
                                            onValuesChange={handleSliderChange}
                                            thumbStyle={{ backgroundColor: theme.colors.primary, width: 18, height: 18, }}
                                            trackStyle={{ height: 8, backgroundColor: theme.colors.light, borderRadius: 10, }}
                                        />
                                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                            <Text style={styles.entertain}>$0</Text>
                                            <Text style={styles.entertain}>$4,600</Text>
                                            <Text style={styles.entertain}>$10,000</Text>
                                        </View>
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

export default Mycard