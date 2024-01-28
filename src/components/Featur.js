import { View, Text } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/FontAwesome';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const Featur = () => {
    return (
        <View className='space-y-3 mx-5'>
            <Text
                className='font-bold text-black'
                style={{ fontSize: wp(4.5) }}>Features</Text>
            <View className=' flex-row items-center'>
                <Icons name="check-circle" size={18} color='#00cb87' />
                <Text style={{ fontSize: wp(3.8) }} className=' font-medium text-gray-700 mx-2'>
                    Convenience
                </Text>
            </View>
            <View className=' flex-row items-center'>
                <Icons name="check-circle" size={18} color='#00cb87' />
                <Text style={{ fontSize: wp(3.8) }} className=' font-medium text-gray-700 mx-2'>
                    User-Friendly Information
                </Text>
            </View>
            <View className=' flex-row items-center'>
                <Icons name="check-circle" size={18} color='#00cb87' />
                <Text style={{ fontSize: wp(3.8) }} className=' font-medium text-gray-700 mx-2'>
                    Automated Calculation
                </Text>
            </View>
            <View className=' flex-row items-center'>
                <Icons name="check-circle" size={18} color='#00cb87' />
                <Text style={{ fontSize: wp(3.8) }} className=' font-medium text-gray-700 mx-2'>
                    Data import and pre-Filing
                </Text>
            </View>
            <View className=' flex-row items-center'>
                <Icons name="check-circle" size={18} color='#00cb87' />
                <Text style={{ fontSize: wp(3.8) }} className=' font-medium text-gray-700 mx-2'>
                    Instant Acknowledgment and Tracking
                </Text>
            </View>
            <View className=' flex-row items-center'>
                <Icons name="check-circle" size={18} color='#00cb87' />
                <Text style={{ fontSize: wp(3.8) }} className=' font-medium text-gray-700 mx-2'>
                    Electronic Verification (e-Verification)
                </Text>
            </View>
        </View>
    )
}

export default Featur