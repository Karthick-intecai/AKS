import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, StatusBar, SafeAreaView, ImageBackground, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const Form = () => {

  const navigation = useNavigation();

  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    financialYear: '',
    panNumber: '',
    dob: '',
    preFillData: 'No',
    firstName: '',
    lastName: '',
    fatherName: '',
    mobileNumber: '',
    email: '',
    gender: '',
    aadharCard: null,
    panCard: null,
    form16: null,
    annualInfoStatement: null,
    foreignAssetsDetails: null,
    form26AS: null,
  });

  const [completedSteps, setCompletedSteps] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (value, fieldName) => {
    setData({
      ...data,
      [fieldName]: value,
    });
  };

  const handleRadioButtonChange = (value, fieldName) => {
    setData({
      ...data,
      [fieldName]: value,
    });
  };

  const [uploadSuccess, setUploadSuccess] = useState(false);
  const MAX_FILE_SIZE_MB = 3;

  const handleFileUpload = async (fieldName) => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });

      console.log(result);

      const fileSizeInBytes = result.size;
      const fileSizeInMB = fileSizeInBytes / (1024 * 1024);
  
      if (fileSizeInMB > MAX_FILE_SIZE_MB) {
        Alert.alert('File Size Limit Exceeded', `Please select a file smaller than ${MAX_FILE_SIZE_MB}MB.`);
      } else {
        setData((prevData) => ({
          ...prevData,
          [fieldName]: true,
        }));
      }
    } 
    catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Please select the fill',err);
      }
      else {
        Alert.alert('User cancelled',err);
      }
    }
  };

  const validateStep = () => {
    return true;
  };

  const handleNext = () => {
    setCompletedSteps([...completedSteps, step]);
    setStep((prevStep) => prevStep + 1);
  };

  const handleSubmit = () => {
    setLoading(true);

    // Simulate form submission, you can replace this with actual API call
    setTimeout(() => {
      setData({
        financialYear: '',
        panNumber: '',
        dob: '',
        preFillData: 'No',
        firstName: '',
        lastName: '',
        fatherName: '',
        mobileNumber: '',
        email: '',
        gender: '',
        aadharCard: null,
        panCard: null,
        form16: null,
        annualInfoStatement: null,
        foreignAssetsDetails: null,
        form26AS: null,
      });


      setStep(1);
      setCompletedSteps([]);
      setLoading(false);

      // Alert that form submitted successfully
      Alert.alert('Form submitted', 'Form submitted successfully!');

      navigation.replace('Dashbord');
    }, 1000);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <ImageBackground
            source={require('../../assets/images/Background.jpg')}
            style={styles.formDesign}>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
              <TouchableOpacity style={styles.goBackButton} onPress={goBack}>
                <MaterialIcons name="arrow-back" size={24} color="#6ccd28" />
              </TouchableOpacity>
              <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Enter Your Pan Details</Text>
                <Text style={{ fontSize: 13, color: '#fff' }}>let us do the paperwork</Text>
              </View>
            </View>

            <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
              <Text style={styles.inputHeading}>Financial Year</Text>
              <View style={styles.inputDesign}>
                <TextInput
                  style={styles.input}
                  value={data.financialYear}
                  onChangeText={(value) => handleInputChange(value, 'financialYear')}
                />
              </View>
              <Text style={styles.inputHeading}>Pan Number</Text>
              <View style={styles.inputDesign}>
                <TextInput
                  style={styles.input}
                  value={data.panNumber}
                  onChangeText={(value) => handleInputChange(value, 'panNumber')}
                />
              </View>
              <Text style={styles.inputHeading}>Date of Birth</Text>
              <View style={styles.inputDesign}>
                <TextInput
                  style={styles.input}
                  value={data.dob}
                  onChangeText={(value) => handleInputChange(value, 'dob')}
                />
              </View>

              <View style={styles.radioButtonContainer}>
                <Text style={styles.radioContent}>Do you want to pre-fill the data?</Text>
                <RadioButton.Group
                  onValueChange={(value) => handleRadioButtonChange(value, 'preFillData')}
                  value={data.preFillData}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <View style={styles.radioButton}>
                      <RadioButton color='green' value="Yes" />
                      <Text style={styles.radioTxt}>Yes</Text>
                    </View>
                    <View style={styles.radioButton}>
                      <RadioButton color='green' value="No" />
                      <Text style={styles.radioTxt}>No</Text>
                    </View>
                  </View>
                </RadioButton.Group>
              </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              {step === 1 || step === 2 ? (
                <TouchableOpacity style={styles.caAssistsButton} onPress={() => alert('Get CA Assists')}>
                  <Text style={styles.buttons1}>Get CA Assists</Text>
                </TouchableOpacity>
              ) : null}

              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttons2}>{step < 3 ? 'Continue' : 'Submit'}</Text>
              </TouchableOpacity>

            </View>

          </ImageBackground>
        );
      case 2:
        return (
          <SafeAreaView style={styles.flexView}>
            <ImageBackground
              source={require('../../assets/images/Background.jpg')}
              style={styles.formDesign1}
            >
              <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                <TouchableOpacity style={styles.goBackButton} onPress={goBack}>
                  <MaterialIcons name="arrow-back" size={24} color="#6ccd28" />
                </TouchableOpacity>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                  <Text style={{ fontSize: 20, color: '#fff' }}>Some Basic information</Text>
                  <Text style={{ fontSize: 13, color: '#fff' }}>let us do the paperwork</Text>
                </View>
              </View>

              <View style={{}}>
                <Text style={styles.inputHeading}>First Name</Text>
                <View style={styles.inputDesign}>
                  <TextInput
                    style={styles.input}
                    value={data.firstName}
                    onChangeText={(value) => handleInputChange(value, 'firstName')}
                  />
                </View>
                <Text style={styles.inputHeading}>Last Name</Text>
                <View style={styles.inputDesign}>
                  <TextInput
                    style={styles.input}
                    value={data.lastName}
                    onChangeText={(value) => handleInputChange(value, 'lastName')}
                  />
                </View>
                <Text style={styles.inputHeading}>Father's Name</Text>
                <View style={styles.inputDesign}>
                  <TextInput
                    style={styles.input}
                    value={data.fatherName}
                    onChangeText={(value) => handleInputChange(value, 'fatherName')}
                  />
                </View>
                <Text style={styles.inputHeading}>Mobile Number</Text>
                <View style={styles.inputDesign}>
                  <TextInput
                    style={styles.input}
                    value={data.mobileNumber}
                    onChangeText={(value) => handleInputChange(value, 'mobileNumber')}
                    keyboardType="numeric"
                  />
                </View>
                <Text style={styles.inputHeading}>Email</Text>
                <View style={styles.inputDesign}>
                  <TextInput
                    style={styles.input}
                    value={data.email}
                    onChangeText={(value) => handleInputChange(value, 'email')}
                    keyboardType="email-address"
                  />
                </View>
              </View>

              <View style={styles.radioButtonContainer}>
                <Text style={styles.radioContent}>Gender:</Text>
                <RadioButton.Group
                  onValueChange={(value) => handleRadioButtonChange(value, 'gender')}
                  value={data.gender}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <View style={styles.radioButton}>
                      <RadioButton color='green' value="Male" />
                      <Text style={styles.radioTxt}>Male</Text>
                    </View>
                    <View style={styles.radioButton}>
                      <RadioButton color='green' value="Female" />
                      <Text style={styles.radioTxt}>Female</Text>
                    </View>
                    <View style={styles.radioButton}>
                      <RadioButton color='green' value="Others" />
                      <Text style={styles.radioTxt}>Others</Text>
                    </View>
                  </View>
                </RadioButton.Group>
              </View>

              <View style={{ backgroundColor: '#d4e6c7', marginBottom: 8 }}>
                <Text style={{ fontSize: 10, padding: 2, color: '#000' }}>Note #: Please enter above mentioned details as mentioned on your pancard</Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                {step === 1 || step === 2 ? (
                  <TouchableOpacity style={styles.caAssistsButton} onPress={() => alert('Get CA Assists')}>
                    <Text style={styles.buttons1}>Get CA Assists</Text>
                  </TouchableOpacity>
                ) : null}

                <TouchableOpacity style={styles.button} onPress={handleNext}>
                  <Text style={styles.buttons2}>{step < 3 ? 'Continue' : 'Submit'}</Text>
                </TouchableOpacity>

              </View>
            </ImageBackground>
          </SafeAreaView>
        );
      case 3:
        return (
          <SafeAreaView>
            <View style={{ flexDirection: 'row', marginBottom: 20, justifyContent: 'center' }}>
              <TouchableOpacity style={styles.goBackButton} onPress={goBack}>
                <MaterialIcons name="arrow-back" size={24} color="#6ccd28" />
              </TouchableOpacity>
              <View style={{ alignItems: 'center' }} >
                <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold' }}>Upload Your Document</Text>
                <Text style={{ fontSize: 13, color: '#555',marginBottom:4 }}>let us do the paperwork</Text>
              </View>
            </View>

            <ScrollView>
              <View>
                <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold' }}>Aadhar Card</Text>
                <Text style={{ fontSize: 12, color: '#555', marginBottom:4 }}>Please upload Aadhar Card</Text>
                <TouchableOpacity style={styles.fileUploadButton} onPress={() => handleFileUpload('aadharCard')}>
                  <Text style={styles.uploadText}>{data.aadharCard ? 'Aadhar Card Uploaded' : 'Chose files or Drop File'}</Text>
                </TouchableOpacity>
              </View>

              <View>
                <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold' }}>PAN Card</Text>
                <Text style={{ fontSize: 12, color: '#555',marginBottom:4 }}>Please upload PAN Card</Text>
                <TouchableOpacity style={styles.fileUploadButton} onPress={() => handleFileUpload('panCard')}>
                  <Text style={styles.uploadText}>{data.panCard ? 'PAN Card Uploaded' : 'Chose files or Drop File'}</Text>
                </TouchableOpacity>
              </View>

              <View>
                <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold' }}>Form 16</Text>
                <Text style={{ fontSize: 12, color: '#555',marginBottom:4 }}>Please upload Form 16</Text>
                <TouchableOpacity style={styles.fileUploadButton} onPress={() => handleFileUpload('form16')}>
                  <Text style={styles.uploadText}>{data.form16 ? 'Form 16 Uploaded' : 'Chose files or Drop File'}</Text>
                </TouchableOpacity>
              </View>

              <View>
                <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold' }}>Annual Information States</Text>
                <Text style={{ fontSize: 12, color: '#555',marginBottom:4 }}>Please upload Annual Information States</Text>
                <TouchableOpacity
                  style={styles.fileUploadButton}
                  onPress={() => handleFileUpload('annualInfoStatement')}
                >
                  <Text style={styles.uploadText}>
                    {data.annualInfoStatement ? 'Annual Information Statement Uploaded' : 'Chose files or Drop File'}
                  </Text>
                </TouchableOpacity>
              </View>

              <View>
                <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold' }}>Details of Foreign Assets</Text>
                <Text style={{ fontSize: 12, color: '#555',marginBottom:4 }}>Please upload Foreign Assets</Text>
                <TouchableOpacity
                  style={styles.fileUploadButton}
                  onPress={() => handleFileUpload('foreignAssetsDetails')}
                >
                  <Text style={styles.uploadText}>
                    {data.foreignAssetsDetails ? 'Foreign Assets Details Uploaded' : 'Chose files or Drop File'}
                  </Text>
                </TouchableOpacity>
              </View>

              <View>
                <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold' }}>Form 26AS</Text>
                <Text style={{ fontSize: 12, color: '#555',marginBottom:4 }}>Please upload Form 26AS</Text>
                <TouchableOpacity style={styles.fileUploadButton} onPress={() => handleFileUpload('form26AS')}>
                  <Text style={styles.uploadText}>{data.form26AS ? 'Form 26AS Uploaded' : 'Chose files or Drop File'}</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                {step === 1 || step === 2 ? (
                  <TouchableOpacity style={styles.caAssistsButton} onPress={() => Alert.alert('Get CA Assists')}>
                    <Text style={styles.buttons1}>Get CA Assists</Text>
                  </TouchableOpacity>
                ) : null}

                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 5 }}>
                  <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttons2}>{step < 3 ? 'Continue' : 'Submit'}</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </ScrollView>
          </SafeAreaView>
        );
      default:
        return null;
    }
  };

  const goBack = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <SafeAreaView className='flex-1 space-y-10 items-center'>
      <ScrollView>
        <View className='space-y-10'>
          <View className=' border-b border-gray-400'>
            <View style={{ width: wp(100), height: (100) }} className='flex-row space-x-10 justify-center items-center'>
              <View style={[styles.stepIndicator, completedSteps.includes(1) && styles.stepComplete]}>
                {completedSteps.includes(1) && <FontAwesome name="check" size={15} color="#FFF" />}
                {!completedSteps.includes(1) && <Text style={styles.stepText}>1</Text>}
              </View>
              <View style={[styles.stepIndicator, completedSteps.includes(2) && styles.stepComplete]}>
                {completedSteps.includes(2) && <FontAwesome name="check" size={15} color="#FFF" />}
                {!completedSteps.includes(2) && <Text style={styles.stepText}>2</Text>}
              </View>
              <View style={[styles.stepIndicator, completedSteps.includes(3) && styles.stepComplete]}>
                {completedSteps.includes(3) && <FontAwesome name="check" size={15} color="#FFF" />}
                {!completedSteps.includes(3) && <Text style={styles.stepText}>3</Text>}
              </View>
            </View>
          </View>

          <View className=' justify-center flex rounded-full flex-row'>
            <View style={styles.formContainer}>{renderStep()}</View>
          </View>

          {loading && (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}

          {uploadSuccess && (
            <View style={styles.uploadSuccess}>
              <Text style={{ fontSize: wp(4.5), color: '#2ecc71' }}>File uploaded successfully!</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  stepIndicators: {
    height: hp(10),
    width: wp(80),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '10px',
  },
  stepIndicator: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#6ccd28',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepComplete: {
    backgroundColor: '#2ecc71',
  },
  stepText: {
    fontSize: wp(4.5),
    color: '#FFF',
  },
  formContainer: {
    overflow: 'auto',
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    fontSize: wp(4.5),
    color: '#000'
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
  },
  fileUploadButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    marginBottom: 10,
    height: hp(6.5),
    width: wp(90)
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#6ccd28',
    borderRadius: 8,
    justifyContent: 'center',
    alignSelf: 'center',
    width: wp(37),
    height: hp(5.8),
    borderWidth: 1,
    borderColor: '#fff',
    outline: '1',
    marginLeft: 30,
  },
  caAssistsButton: {
    width: wp(37),
    height: hp(5.8),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#6ccd28',
  },
  loading: {
    marginTop: 20,
  },
  goBackButton: {
    right: 40,
  },
  formDesign: {
    width: wp(95),
    height: hp(70),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#666',
    borderRadius: 20,
    borderWidth: 0,
  },
  formDesign1: {
    width: wp(95),
    height: hp(80),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderRadius: 20,
  },
  inputDesign: {
    width: wp(90),
    height: hp(5),
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 10,
    borderColor: '#666',
  },
  inputHeading: {
    fontSize: wp(4.8),
    marginLeft: 10,
    marginBottom: 5,
    color: '#fff',
  },
  radioContent: {
    fontSize: 15,
    color: '#fff',
  },
  buttons1: {
    fontSize: wp(4.2),
    display: 'flex',
    textAlign: 'center',
    color: '#6ccd28',
  },
  buttons2: {
    fontSize: wp(4.2),
    display: 'flex',
    textAlign: 'center',
    color: '#fff'
  },
  radioTxt: {
    fontSize: wp(3.7),
    color: '#fff',
  },
  flexView: {
    flex: 1,
  },


  //for the file uploading

  uploadText:{
    color:'#555'
  },

  uploadSuccess: {
    backgroundColor: '#2ecc71', // Green color
    padding: 10,
    borderRadius: 8,
    margin: 10,
    alignItems: 'center',
  },
  uploadSuccessText: {
    fontSize: wp(4.5),
    color: '#fff',
  },
});

export default Form;
