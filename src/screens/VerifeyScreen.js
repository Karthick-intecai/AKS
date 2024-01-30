import { View, Text, StatusBar, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { useRef } from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const VerifeyScreen = ({ route }) => {

  // navigate to the next screen
  const navigation = useNavigation();

  // const { phoneNumber } = route.params;

  const inputRefs = Array(4).fill(0).map((_, i) => useRef(null));

  const handleKeyPress = (index, key) => {
      if (key === 'Backspace' && index > 0) {
          inputRefs[index - 1].current.focus();
      }
  };

  const handleChangeText = (index, text) => {
      if (text.length > 0 && index < 3) {
          inputRefs[index + 1].current.focus();
      }
  };

  return (
    <SafeAreaView className='flex-1 items-center'>
      <StatusBar style="auto" />
      <ScrollView>
        <View className=' space-y-10 mt-12'>
          <View className=''>
            <Animated.Text
              entering={FadeInUp.duration(1000).springify()}
              style={{ fontSize: wp(8) }} className='font-bold text-black'>
              Almost there
            </Animated.Text>
          </View>
          <Animated.View entering={FadeInUp.delay(100).duration(1000).springify()}>
            <Text style={{ fontSize: wp(3.5) }} className='text-gray-600'>Please enter the 4-digit code send to your email</Text>
            <View className='flex-row'>
              {/* phone number */}
              <Text style={{ fontSize: wp(3.5) }} className='text-red-400 mx-1'>aks@gmail.com</Text>
              <Text style={{ fontSize: wp(3.5) }} className='text-gray-600'>for verification.</Text>
            </View>
          </Animated.View>

          {/* Number Input */}
          <Animated.View
            entering={FadeInUp.delay(200).duration(1000).springify()}
            className='flex-row space-x-5 justify-center'>
            {[...Array(4)].map((_, index) => (
              <TextInput
                key={index}
                autoCapitalize='none'
                maxLength={1}
                style={{ width: wp(12) }}
                keyboardType='numeric'
                className='rounded-lg border border-gray-400 text-center text-xl'
                clearButtonMode="always"
                ref={inputRefs[index]}
                onKeyPress={({ nativeEvent }) => handleKeyPress(index, nativeEvent.key)}
                onChangeText={(text) => handleChangeText(index, text)}
              />
            ))}
          </Animated.View>

          <Animated.View entering={FadeInUp.delay(300).duration(1000).springify()}>
            <TouchableOpacity
              onPress={() => navigation.navigate('FirstHome')}
              style={{ height: hp(5), width: wp(90) }} className='flex justify-center rounded-lg bg-green-500'>
              <Text style={{ fontSize: wp(5) }} className='text-center font-semibold text-white pb-1'>Verify</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View entering={FadeInUp.delay(400).duration(1000).springify()} className='flex-row items-center justify-center'>
            <Text style={{ fontSize: wp(3.5) }} className='text-black' >Don't receive any code?</Text>
            <TouchableOpacity>
              <Text style={{ fontSize: wp(3.5) }} className='mx-1 text-red-400'>Resend Code</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default VerifeyScreen