import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    StatusBar,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const YourComponent = () => {
    const [editMode, setEditMode] = useState(false);
    const [profileImage, setProfileImage] = useState(require('../../assets/images/User.png'));
    const [name, setName] = useState('User');
    const [email, setEmail] = useState('user@example.com');
    const [phoneNumber, setPhoneNumber] = useState('1234567890');

    const selectImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setProfileImage({ uri: image.path, isStatic: true });
        }).catch(error => {
            console.log(error);
        });
    };

    const saveChanges = () => {
        // Implement logic to save changes
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone Number:', phoneNumber);
        console.log('Profile Image URI:', profileImage.uri);

        setEditMode(false);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style="auto" />
            <ScrollView>
                <View style={{ width: wp(90) }} className='flex-1 justify-center'>
                    <View className=' w-auto mt-5'>
                        <View>
                            <Image
                                style={{ width: wp(13), height: hp(6) }}
                                source={require('../../assets/images/blob_2.png')} />
                        </View>

                        <View className='-top-10'>
                            <View className='flex self-center'>
                                <Image
                                    style={{ width: wp(64), height: hp(24), }}
                                    source={require('../../assets/images/blob_1.png')}
                                />
                            </View>
                            {/* UserProfile */}
                            <TouchableOpacity onPress={editMode ? selectImage : null} className='flex items-center justify-center absolute self-center'>
                                <Image
                                    style={{ width: wp(47.6), height: hp(24), borderRadius: 100 }}
                                    source={profileImage}
                                />
                            </TouchableOpacity>
                        </View>
                        <View className='left-64 absolute top-52'>
                            <Image
                                style={{ width: wp(19), height: hp(18) }}
                                source={require('../../assets/images/blob_3.png')}
                            />
                        </View>
                    </View>

                    <View className='space-y-3'>
                        <View className='space-y-1'>
                            <Text style={{ fontSize: wp(4.2) }} className='text-gray-400 font-semibold'>Name</Text>
                            {editMode ? (
                                <TextInput
                                    style={{ fontSize: wp(4.5), height: hp(5), width: wp(90), color: '#000' }}
                                    className='border border-gray-300 p-2 rounded-lg bg-white'
                                    value={name}
                                    onChangeText={(text) => setName(text)}
                                />
                            ) : (
                                <Text className='text-black mx-2' style={{ fontSize: wp(4.8) }}>{name}</Text>
                            )}
                        </View>

                        <View className='space-y-1'>
                            <Text style={{ fontSize: wp(4.2), }} className='text-gray-400 font-semibold'>Email</Text>
                            {editMode ? (
                                <TextInput
                                    style={{ fontSize: wp(4.5), height: hp(5), width: wp(90), color: '#000' }}
                                    className='border border-gray-300 p-2 rounded-lg bg-white'
                                    value={email}
                                    onChangeText={(text) => setEmail(text)}
                                />
                            ) : (
                                <Text className='text-black mx-2' style={{ fontSize: wp(4.8), }}>{email}</Text>
                            )}
                        </View>

                        <View className='space-y-1'>
                            <Text style={{ fontSize: wp(4.2) }} className='text-gray-400 font-semibold'>Phone Number</Text>
                            {editMode ? (
                                <TextInput
                                    style={{ fontSize: wp(4.5), height: hp(5), width: wp(90), color: '#000' }}
                                    className='border border-gray-300 p-2 rounded-lg bg-white'
                                    value={phoneNumber}
                                    onChangeText={(text) => setPhoneNumber(text)}
                                />
                            ) : (
                                <Text className='text-black mx-2' style={{ fontSize: wp(4.8) }}>{phoneNumber}</Text>
                            )}
                        </View>
                    </View>

                    <View className='flex-row justify-center space-x-4 mt-20 mb-2'>
                        <TouchableOpacity
                            onPress={() => setEditMode(!editMode)}
                            style={{ width: wp(36), height: hp(5.5) }} className='bg-white justify-center items-center border border-green-400 rounded-md'
                        >
                            <Text style={{ fontSize: wp(3.7), color: 'green' }}>{editMode ? 'Cancel' : 'Edit Profile'}</Text>
                        </TouchableOpacity>

                        {editMode && (
                            <TouchableOpacity
                                onPress={saveChanges}
                                style={{ width: wp(36), height: hp(5.5) }} className='bg-green-400 justify-center items-center border border-white rounded-md'
                            >
                                <Text style={{ fontSize: wp(3.7), color: 'white' }}>Save Changes</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default YourComponent;
