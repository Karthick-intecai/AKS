import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Notification = () => {
  return (
    <SafeAreaView className='flex-1'>
      <StatusBar style="black"/>
      <View className='justify-center items-center'>
        <View style={{width:wp(95),height:hp(14)}} className='bg-slate-200 rounded-xl mt-2 p-2'>
          <Text className='font-semibold text-lg text-black px-2'>Notification</Text>
          <View style={{width:wp(80)}} className='bg-white h-5 rounded-full mb-2 '/>
          <View style={{width:wp(90)}} className='bg-white h-5 rounded-full '/>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default Notification