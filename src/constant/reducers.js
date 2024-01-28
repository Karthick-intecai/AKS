// reducers.js
const initialState = {
    userProfile: {
      editMode: false,
      profileImage: require('../../assets/images/User.png'),
      name: 'User',
      email: 'user@example.com',
      phoneNumber: '1234567890',
    },
    account: {
      editMode: false,
      profileImage: require('../../assets/images/User.png'),
      panNumber: 'ABCD234R',
      accountHolder: 'User Name',
      accountNumber: '132113657898',
      bankName: 'Bank Name',
      branch: 'Branch',
      ifscNumber: 'IFSC Number',
      accountType: 'Salary',
      userName: 'User Name',
      password: '12345678',
    },
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_USER_PROFILE':
        return {
          ...state,
          userProfile: {
            ...state.userProfile,
            ...action.payload,
          },
        };
  
      case 'UPDATE_ACCOUNT':
        return {
          ...state,
          account: {
            ...state.account,
            ...action.payload,
          },
        };
  
      default:
        return state;
    }
  };
  
  export default rootReducer;
  