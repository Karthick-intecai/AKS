import { Text, View, SafeAreaView, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import React, { Component } from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import FeaturesScree from '../components/FeaturesScreen'

const ServiceScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className='flex-1 items-center space-y-5'>
      <StatusBar style="Auto" />
      <ScrollView>
        <View style={{ width: wp(100) }} className='space-y-5'>
          {/* Top Contant */}
          <View className='flex-row justify-between mx-5 items-center'>
            <Image
              style={{ height: hp(4), width: wp(15) }}
              source={require('../../assets/images/AKS_Logo_2.png')} />
            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
              <Icon
                name='bell'
                size={21}
                color='#444' />
            </TouchableOpacity>
          </View>

          {/* Service */}
          <View className='flex-row items-center mx-6'>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon name='arrow-left' size={23} color='black' />
            </TouchableOpacity>
            <Text
              className='font-semibold text-black ml-2'
              style={{ fontSize: wp(5) }}
            >Service</Text>
          </View>

          {/* Card */}
          <View className=' items-center'>
            <View style={{ height: hp(12), width: wp(95) }} className=' bg-slate-200 rounded-lg flex-row items-center justify-evenly'>
              <Image
                style={{ width: wp(18), height: hp(9) }}
                source={require('../../assets/images/Note.png')} />
              <View className=' items-center space-y-1'>
                <Text style={{ fontSize: wp(4.5) }} className='font-semibold text-black'>IT Filing</Text>
                <Text style={{ fontSize: wp(3.1) }} className=' font-medium underline text-gray-500'>Effortless e-filing Excellence</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Features')}>
                  <Text style={{ fontSize: wp(3.1) }} className='font-medium underline text-gray-500'>View Features</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('ITR')}
                style={{ height: hp(4), width: wp(18) }} className='flex justify-center rounded-lg bg-green-500'>
                <Text style={{ fontSize: wp(3.5) }} className='text-center font-semibold text-white'>File ITR</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ServiceScreen