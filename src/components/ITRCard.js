import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/FontAwesome';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ITRCard = () => {
    return (
        <View style={{ height: hp(37), width: wp(90) }} className='bg-slate-200 rounded-3xl shadow-md shadow-black  space-y-4'>
            <View className='justify-center flex-row items-center py-2'>
                <Image style={{ width: wp(8), height: hp(4.5) }} source={require('../../assets/images/Analayis.png')} />
                <Text style={{ fontSize: wp(3.9) }} className='font-semibold text-black mx-2'>Looking for expert CA For Your Filling ?</Text>
            </View>
            <View className=' flex items-center'>
                <Text style={{fontSize:wp(3.5)}} className='font-medium text-gray-500'>Get Your personal eCA to do tax filing for you it is personal convenient & fast with maximum refund calculated for you </Text>
            </View>
            <View className=' mx-5 space-y-1'>
                <View className='flex-row items-center'>
                    <Icons name="check-circle" size={14} color='#999' />
                    <Text style={{ fontSize: wp(3.5) }} className='text-black font-medium mx-1'>
                        Save time and money
                    </Text>
                </View>

                <View className='flex-row items-center'>
                    <Icons name="check-circle" size={14} color='#999' />
                    <Text style={{ fontSize: wp(3.5) }} className='text-black font-medium mx-1'>
                        Trusted By 1M+ Customer
                    </Text>
                </View>

                <View className='flex-row items-center'>
                    <Icons name="check-circle" size={14} color='#999' />
                    <Text style={{ fontSize: wp(3.5) }} className='text-black font-medium mx-1'>
                        4.8 Service Rating
                    </Text>
                </View>

                <View className='flex-row items-center'>
                    <Icons name="check-circle" size={14} color='#999' />
                    <Text style={{ fontSize: wp(3.5) }} className='text-black font-medium mx-1'>
                        Reliabele and Secure ITR Filing platform
                    </Text>
                </View>
            </View>

            <View className=' left-48'>
                <TouchableOpacity
                    style={{ height: hp(3.8), width: wp(32) }} className='flex justify-center rounded-lg bg-green-500'>
                    <Text style={{ fontSize: wp(3.7) }} className='text-center font-semibold text-white'>Book eCA Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ITRCard