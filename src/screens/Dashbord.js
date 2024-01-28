import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Dashbord = () => {

    const navigation = useNavigation();
    return (
        <SafeAreaView className='flex-1  items-center'>
            <StatusBar style="black" />

            <View style={{ width: wp(100) }} className='flex px-5' >

                <View style={{ height: hp(7) }} className='flex-row justify-center items-center mt-5'>

                    <Image source={require('../../assets/images/Leaf.png')}
                        style={{ width: wp(100), position: 'absolute' }}
                    />

                    <View className='flex-row items-center mt-5 justify-around w-full'>

                        <TouchableOpacity onPress={() => navigation.goBack()} className='left-1'>
                            <Icon name='arrow-left' size={23} color='black' />
                        </TouchableOpacity>

                        <View className='w-11/12'>
                            <Text
                                className='font-semibold text-black text-center'
                                style={{ fontSize: wp(5) }}
                            >Dashboard</Text>
                        </View>
                    </View>

                    <Text className='absolute text-black right-1 top-[76] font-semibold '>emmathomson@gmail.com</Text>

                </View>

                <View className='mt-16'>
                    <Text style={{ fontSize: wp(4.5) }} className='font-semibold text-black'>Hi Emma Thomson</Text>
                </View>

                <View className='mt-5 bg-green-100 h-24 flex flex-row items-center justify-center rounded-xl shadow-md shadow-green-500'>

                    <Image source={require('../../assets/images/Book_Pen.png')}
                        style={{ width: wp(15), height: wp(15) }}
                    />

                    <Text className='mx-2 text-black font-semibold' style={{fontSize:wp(4)}}>Self Filing</Text>

                </View>

                <View className='w-0 h-0 self-center' style={{borderLeftWidth:23,borderRightWidth:23,borderTopWidth:23,borderTopColor:'#6ccd28', borderLeftColor:'transparent', borderRightColor:'transparent'}}/>

                <View className='flex items-end'>
                    <TouchableOpacity style={{ height: hp(5), width: wp(33) }} className='flex justify-center rounded-lg my-5 bg-green-500'>
                        <Text style={{ fontSize: wp(3.5) }} className='text-center font-semibold text-white'>+ Start New ITR</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: hp(35), width: wp(90) }} className='flex bg-white px-5 py-5 rounded-2xl shadow-md shadow-black'>

                    <View className='flex flex-row justify-between'>
                        <Text className='text-green-400 font-semibold'>ITR ID : 1976843</Text>
                        <View className='flex flex-row justify-between'>
                            <Text className='text-center bg-indigo-100 px-3 rounded-full mr-3 text-black py-1' style={{fontSize:wp(3.5)}}>
                                Incomplete
                            </Text>
                            <MaterialCommunityIcons name='dots-vertical' size={23} color='black' />
                        </View>
                    </View>

                    <View style={{ height: hp(0.15), width: wp(85) }} className='bg-green-400 self-center my-3'/>

                    <Text className='text-black my-3' style={{fontSize:wp(3.3)}}>
                        You are just a few steps away in completing your ITR, Click Continue Now button to resume filing of your ITR from where you left of.
                    </Text>

                    <View>
                        <Text className='text-black' style={{fontSize:wp(3.3)}}><Text className='text-black font-semibold' style={{fontSize:wp(3.3)}}>Name : </Text>N/A</Text>
                        <Text className='text-black' style={{fontSize:wp(3.3)}}><Text className='text-black font-semibold' style={{fontSize:wp(3.3)}}>PAN Number : </Text>N/A</Text>
                        <Text className='text-black' style={{fontSize:wp(3.3)}}><Text className='text-black font-semibold' style={{fontSize:wp(3.3)}}>Financial Year : </Text>2022 - 23</Text>
                        <Text className='text-black' style={{fontSize:wp(3.3)}}><Text className='text-black font-semibold' style={{fontSize:wp(3.3)}}>Last Updated On : </Text>09-01-2024</Text>
                    </View>
                    
                </View>

                <View className='flex items-center'>
                <TouchableOpacity style={{ height: hp(5), width: wp(40) }} className='flex justify-center rounded-lg my-5 bg-green-500'>
                        <Text style={{ fontSize: wp(3.5) }} className='text-center font-semibold text-white'>Complete Now</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </SafeAreaView>
    )
}

export default Dashbord