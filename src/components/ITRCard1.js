import { View, Text, SafeAreaView, StatusBar,Image } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ITRCard1 = () => {
  return (
    <View>
        <Image
        style={{height:hp(11),width:wp(29),position:'absolute',zIndex:10}}
        source={require('../../assets/images/Mobile_lamp.png')}/>
      <View style={{width:wp(95),height:hp(8)}} className=' bg-yellow-100 rounded-lg top-2 justify-center items-center shadow-lg shadow-black'>
        <Text className='text-center left-6 font-semibold text-black text-base'>Complete the Details</Text>
      </View>
    </View>
  )
}

export default ITRCard1