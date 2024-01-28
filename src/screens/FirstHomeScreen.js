import { View, Text, Image, StatusBar, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import IconFether from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';

export default function HomeScreen() {

  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 items-center justify-around'>
      <StatusBar style="black" />
      <ScrollView>
        <View>
          <View style={{ height: hp(98) }} className='flex justify-center items-center -top-16'>
            <Text style={{ fontSize: wp(8.5) }} className='text-black font-bold'>Welcome</Text>

            <View style={{ width: wp(80) }} className='items-center'>
              <Image style={{ width: wp(60), height: hp(35) }} source={require('../../assets/images/home.png')} />
            </View>

            <View style={{ width: wp(95) }}>
              <Text className='text-gray-600 font-medium text-center' style={{ fontSize: wp(3.5) }}>
                AKS Association made Online Income TAX Filing super easy.
              </Text>
            </View>
          </View>

          <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className=' right-2 bottom-0 absolute'>
            <TouchableOpacity
              onPress={() => navigation.navigate('Main')}
              className=' w-16 h-16 bg-black rounded-full items-center flex justify-center'>
              <IconFether
                name="chevron-right"
                color="#fff"
                style={{ fontSize: wp(10) }}
              />
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}