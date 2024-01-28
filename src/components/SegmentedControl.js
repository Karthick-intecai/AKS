import React, { useState } from 'react';
import UserProfile from './UserProfile';
import Account from './Account';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { TouchableOpacity, View, Text } from 'react-native';


const SegementedControl = () => {

    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <View className='flex-1 self-center mt-10'>
            <View style={{ width: wp(80), height: hp(8) }} className=' rounded-xl flex-row items-center justify-center space-x-1'>
                <TouchableOpacity
                    style={{ width: wp(38), height: hp(7), backgroundColor: selectedTab == 0 ? 'white' : '#cccccc' }}
                    className=' border border-gray-300 rounded-2xl justify-center items-centek'
                    onPress={() => {
                        setSelectedTab(0);
                    }}>
                    <Text style={{ fontSize: wp(5), color: selectedTab == 0 ? 'black' : '#666', }} className='font-semibold text-center'>User Profil</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ width: wp(38), height: hp(7), backgroundColor: selectedTab == 1 ? 'white' : '#cccccc' }}
                    className=' border border-gray-300 rounded-2xl justify-center items-center'
                    onPress={() => {
                        setSelectedTab(1);
                    }}>
                    <Text style={{ fontSize: wp(5), color: selectedTab == 1 ? 'black' : '#666' }} className='font-semibold text-center'>Account</Text>
                </TouchableOpacity>
            </View>

            {selectedTab == 0 ? (
                <View className='flex-1 justify-center items-center'>
                    <UserProfile />
                </View>
            ) : (
                <View className='flex-1 justify-center items-center'>
                    <Account />
                </View>
            )}
        </View>
    );
};

export default SegementedControl;