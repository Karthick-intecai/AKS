import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const IRTOption = () => {
    const [checkedOptions, setCheckedOptions] = useState({
        q1: 'No',
        q2: 'No',
        q3: 'No',
        q4: 'No',
        q5: 'No',
        q6: 'No',
    });

    const handleOptionChange = (question, value) => {
        setCheckedOptions((prevCheckedOptions) => ({
            ...prevCheckedOptions,
            [question]: value,
        }));
    };

    return (
        <View className='space-y-2'>
            {/* Q1 */}
            <View style={{ width: wp(90), height: hp(8) }} className='border border-gray-400 rounded-md flex justify-center'>
                <View className='flex-row items-center justify-between mx-2'>
                    <Text style={{ fontSize: wp(3.4) }} className='font-medium text-black'>Q1. Income from salary/pension?</Text>
                    <View className='flex-row'>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="Yes"
                                status={checkedOptions.q1 === 'Yes' ? 'checked' : 'unchecked'}
                                onPress={() => handleOptionChange('q1', 'Yes')}
                                color="green"
                            />
                            <Text className='text-black'>Yes</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="No"
                                status={checkedOptions.q1 === 'No' ? 'checked' : 'unchecked'}
                                onPress={() => handleOptionChange('q1', 'No')}
                                color="green"
                            />
                            <Text className='text-black'>No</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Q2 */}
            <View style={{ width: wp(90), height: hp(8) }} className='border border-gray-400 rounded-md flex justify-center'>
                <View className='flex-row items-center justify-between mx-2'>
                    <View className='flex-colom'>
                    <Text style={{ fontSize: wp(3.4) }} className='font-medium text-black'>Q2. Income from Business</Text>
                    <Text style={{ fontSize: wp(3.4) }} className='font-medium text-black'>profession?</Text>
                    </View>
                    <View className='flex-row'>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="Yes"
                                status={checkedOptions.q2 === 'Yes' ? 'checked' : 'unchecked'}
                                onPress={() => handleOptionChange('q2', 'Yes')}
                                color="green"
                            />
                            <Text className='text-black'>Yes</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="No"
                                status={checkedOptions.q2 === 'No' ? 'checked' : 'unchecked'}
                                onPress={() => handleOptionChange('q2', 'No')}
                                color="green"
                            />
                            <Text className='text-black'>No</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Q3 */}
            <View style={{ width: wp(90), height: hp(8) }} className='border border-gray-400 rounded-md flex justify-center'>
                <View className='flex-row items-center justify-between mx-2'>
                    <View className='flex-col'>
                    <Text style={{ fontSize: wp(3.4) }} className='font-medium text-black'>Q3. Income from House property or</Text>
                    <Text style={{ fontSize: wp(3.4) }} className='font-medium text-black'> House loan?</Text>
                    </View>
                    <View className='flex-row'>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="Yes"
                                status={checkedOptions.q3 === 'Yes' ? 'checked' : 'unchecked'}
                                onPress={() => handleOptionChange('q3', 'Yes')}
                                color="green"
                            />
                            <Text className='text-black'>Yes</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="No"
                                status={checkedOptions.q3 === 'No' ? 'checked' : 'unchecked'}
                                onPress={() => handleOptionChange('q3', 'No')}
                                color="green"
                            />
                            <Text className='text-black'>No</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Q4 */}
            <View style={{ width: wp(90), height: hp(8) }} className='border border-gray-400 rounded-md flex justify-center'>
                <View className='flex-row items-center justify-between mx-2'>
                    <Text style={{ fontSize: wp(3.4) }} className='font-medium text-black'>Q4. Income from Capital Gain?</Text>
                    <View className='flex-row'>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="Yes"
                                status={checkedOptions.q4 === 'Yes' ? 'checked' : 'unchecked'}
                                onPress={() => handleOptionChange('q4', 'Yes')}
                                color="green"
                            />
                            <Text className='text-black'>Yes</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="No"
                                status={checkedOptions.q4 === 'No' ? 'checked' : 'unchecked'}
                                onPress={() => handleOptionChange('q4', 'No')}
                                color="green"
                            />
                            <Text className='text-black'>No</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Q5 */}
            <View style={{ width: wp(90), height: hp(8) }} className='border border-gray-400 rounded-md flex justify-center'>
                <View className='flex-row items-center justify-between mx-2'>
                    <Text style={{ fontSize: wp(3.4) }} className='font-medium text-black'>Q5. Incom from other source?</Text>
                    <View className='flex-row'>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="Yes"
                                status={checkedOptions.q5 === 'Yes' ? 'checked' : 'unchecked'}
                                onPress={() => handleOptionChange('q5', 'Yes')}
                                color="green"
                            />
                            <Text className='text-black'>Yes</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="No"
                                status={checkedOptions.q5 === 'No' ? 'checked' : 'unchecked'}
                                onPress={() => handleOptionChange('q5', 'No')}
                                color="green"
                            />
                            <Text className='text-black'>No</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Q6 */}
            <View style={{ width: wp(90), height: hp(8) }} className='border border-gray-400 rounded-md flex justify-center'>
                <View className='flex-row items-center justify-between mx-2'>
                    <Text style={{ fontSize: wp(3.4) }} className='font-medium text-black'>Q6. Income from Foreign source?</Text>
                    <View className='flex-row'>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="Yes"
                                status={checkedOptions.q6 === 'Yes' ? 'checked' : 'unchecked'}
                                onPress={() => handleOptionChange('q6', 'Yes')}
                                color="green"
                            />
                            <Text className='text-black'>Yes</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="No"
                                status={checkedOptions.q6 === 'No' ? 'checked' : 'unchecked'}
                                onPress={() => handleOptionChange('q6', 'No')}
                                color="green"
                            />
                            <Text className='text-black'>No</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default IRTOption;
