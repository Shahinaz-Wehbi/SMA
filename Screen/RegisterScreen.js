import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Switch,
  StyleSheet,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import ButtonForm from '../Components/ButtonForm';
import InputForm from '../Components/InputForm';

const RegisterScreen = ({navigation}) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [inputBackGcolor, setInputBackGcolor] = useState('#cce6ff');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const emailOnEndEditing = e => {
    var regex = /^[\w-\.]+@([\w]+\.)+[\w]{2,4}$/;
    if (!regex.test(e.nativeEvent.text)) {
      setEmailError('Invalid email.');
    } else {
      setEmailError('');
    }
  };

  const passwordOnEndEditing = e => {
    // var regex =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    var min8Char = /.{8,}/;
    var upperCase = /(?=.*?[A-Z])/;
    var lowerCase = /(?=.*?[a-z])/;
    var digit = /(?=.*?[0-9])/;
    var specialChar = /(?=.*?[#?!@$%^&*-])/;
    if (!min8Char.test(e.nativeEvent.text)) {
      setPasswordError('At Least 8 characters');
    } else if (!upperCase.test(e.nativeEvent.text)) {
      setPasswordError('At Least 1 upper case lettre ');
    } else if (!lowerCase.test(e.nativeEvent.text)) {
      setPasswordError('At Least 1 upper case lettre ');
    } else if (!digit.test(e.nativeEvent.text)) {
      setPasswordError('At Least 1 upper case lettre ');
    } else if (!specialChar.test(e.nativeEvent.text)) {
      setPasswordError('At Least 1 upper case lettre ');
    } else {
      setPasswordError('');
    }
    // if (!regex.test(e.nativeEvent.text)) {
    //   setPasswordError('Invalid email.');
    // }
  };

  const toggleRememberMe = value => {
    console.log('3-hello: on change ', value);
    setRememberMe(value);
    //this.setState({rememberMe: value});
    if (value === true) {
      //user wants to be remembered
      console.log('4-from if: ', value);
      rememberUser();
    } else {
      forgetUser();
    }
  };

  const rememberUser = async () => {
    console.log('5- from rememberUSer hello');
    try {
      const key = email + '';
      await AsyncStorage.setItem(key, password + '');
      console.log('6- email from rememberUser: ');
      console.log('7- key: ', key);
      const pass = await AsyncStorage.getItem(key);
      console.log('getItem: ', pass);
    } catch (error) {}
  };
  const getRememberedUser = async () => {
    try {
      console.log('email: ', email);
      const key = email;
      console.log('email from getRememberedUser key: ', key);
      const email = await AsyncStorage.getItem(key + '');
      if (email !== null) {
        console.log('dans if email from getRememberedUser key: ', key);
        return email;
      }
    } catch (error) {}
  };
  const forgetUser = async () => {
    try {
      const key = email + '';
      await AsyncStorage.removeItem(key);
    } catch (error) {}
  };

  useEffect(() => {
    console.log('1-hello');
    const fetchRemember = async () => {
      const email = await getRememberedUser();
      setPassword(email);
      //setRegisterForm(prev => ({...prev, [prev.email]: email}));
      setRememberMe(email ? true : false);
      console.log('hello nb 2', email);
    };
    fetchRemember();
    //console.log(registerform);
  }, [email]);

  var yourPicture = require('../Images/logo.png');

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image style={styles.image} source={yourPicture} />
      <InputForm
        inputBackgroundColor={inputBackGcolor}
        labelValue={email}
        onChangeText={userEmail => {
          setEmail(userEmail);
          console.log('handleEmailChange: ', {email});
        }}
        placeholderText="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onFocus={() => setInputBackGcolor('#b3daff')} //e6f3ff
        onBlur={() => setInputBackGcolor('#cce6ff')}
        onEndEditing={emailOnEndEditing}
      />
      <View>
        <Text style={styles.TextError}>{emailError}</Text>
      </View>
      <InputForm
        inputBackgroundColor={inputBackGcolor}
        labelValue={password}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholderText="Password"
        secureTextEntry={true}
        onFocus={() => setInputBackGcolor('#b3daff')} //e6f3ff
        onBlur={() => setInputBackGcolor('#cce6ff')}
        onEndEditing={passwordOnEndEditing}
      />
      <Text style={styles.TextPassword}>{passwordError}</Text>
      <InputForm
        inputBackgroundColor={inputBackGcolor}
        labelValue={confirmPassword}
        onChangeText={userPassword => setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        secureTextEntry={true}
        onFocus={() => setInputBackGcolor('#b3daff')} //e6f3ff
        onBlur={() => setInputBackGcolor('#cce6ff')}
        onEndEditing={passwordOnEndEditing}
      />
      {/* <Text style={styles.TextPassword}>{passwordError}</Text> */}
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Switch
          value={rememberMe}
          onValueChange={value => toggleRememberMe(value)}
          style={{}}
        />
        <Text
          style={{
            color: '#003366', //'#262626',
          }}>
          Remember Me
        </Text>
      </View>
      <ButtonForm
        buttonTitle="Register"
        onPress={() => {
          alert('Register');
        }}
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 50,
  },
  TextError: {
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  forgot_button: {
    color: '#a6a6a6', //'#2e64e5'
    //marginBottom: 30,
    //fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Lato-Regular',
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#4da6ff', //'#FF1493',
  },
  loginText: {
    color: '#003366',
    fontWeight: 'bold',
  },
  registerTextStyle: {
    color: '#a6a6a6',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
    marginTop: 10,
  },
});
