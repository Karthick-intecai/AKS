import { Text, View, SafeAreaView, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import React, { Component } from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import ITRCard from '../components/ITRCard';
import IRTOption from '../components/IRTOption';
import ITRCard1 from '../components/ITRCard1';

const ServiceScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className='flex-1 items-center'>
            <StatusBar style="Auto" />
            <ScrollView>
                <View style={{width:wp(100)}} className='space-y-7'>

                    {/* Service */}
                    <View className='flex-row justify-center items-center mt-5'>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon name='arrow-left' size={23} color='black' />
                        </TouchableOpacity>

                        <Text
                            className='font-semibold text-black mx-24'
                            style={{ fontSize: wp(5) }}
                        >File Your ITR</Text>
                    </View> 

                    {/* Card */}
                    <View className='space-y-8'>
                        <View className=' items-center'>
                            <View style={{ height: hp(9), width: wp(90) }} className=' bg-[#9ac195] rounded-lg flex-row items-center justify-evenly'>
                                <Text style={{ fontSize: wp(3.9) }} className='text-center font-medium text-gray-700 px-1'>AKS Association has made Online Incom Tax Filing super easy!</Text>
                            </View>
                        </View>

                        {/* Second Card */}

                        <View className='items-center'>
                            <ITRCard />
                        </View>

                        {/* Second Card */}

                        <View className='items-center'>
                            <ITRCard1/>
                        </View>

                        {/* Option */}

                        <View className='items-center'>
                            <IRTOption />
                        </View>
                        {/* Botton */}
                        <View className=' flex left-56'>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('ITRFiling')}
                                style={{ height: hp(4.6), width: wp(28) }} className='flex justify-center rounded-lg bg-green-500 mb-5 left-8'>
                                <Text style={{ fontSize: wp(4.2) }} className='text-center font-semibold text-white'>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ServiceScreen