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
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [inputBackGcolor, setInputBackGcolor] = useState('#cce6ff');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const usernameOnEndEditing = e => {
    var regex = /^(?=.{8,20}$)(?!.*[_.-]{2})[a-z]+[_\.\-]*[a-z]+[0-9]{0,3}$/;
    if (!regex.test(e.nativeEvent.text)) {
      setUsernameError('Invalid.');
    } else {
      setUsernameError('');
    }
  };

  const emailOnEndEditing = e => {
    var regex = /^[\w-\.]+@([\w]+\.)+[\w]{2,4}$/;
    if (!regex.test(e.nativeEvent.text)) {
      setEmailError('Invalid email.');
    } else {
      setEmailError('');
    }
  };

  const passwordOnEndEditing = e => {
    var regex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!regex.test(e.nativeEvent.text)) {
      setPasswordError(
        'A password contains at least eight characters, including at least one number and includes both lower and uppercase letters and special characters.',
      );
    } else {
      setPasswordError('');
    }
  };

  const confirmPassword_OnEndEditing = e => {
    if (confirmPassword !== password) {
      setConfirmPasswordError('Please make sure your passwords match');
    } else {
      setConfirmPasswordError('');
    }
  };

  var yourPicture = require('../Images/logo.png');

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image style={styles.image} source={yourPicture} />

      <InputForm
        inputBackgroundColor={inputBackGcolor}
        labelValue={username}
        onChangeText={userusername => setUsername(userusername)}
        placeholderText="Username"
        returnKeyType="next"
        onFocus={() => setInputBackGcolor('#b3daff')} //e6f3ff
        onBlur={() => setInputBackGcolor('#cce6ff')}
        onEndEditing={usernameOnEndEditing}
      />

      <View>
        <Text style={styles.TextError}>{usernameError}</Text>
      </View>

      <InputForm
        inputBackgroundColor={inputBackGcolor}
        labelValue={email}
        onChangeText={userEmail => {
          setEmail(userEmail);
          console.log('handleEmailChange: ', {email});
        }}
        placeholderText="Email"
        keyboardType="email-address"
        returnKeyType="next"
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
        returnKeyType="next"
        onFocus={() => setInputBackGcolor('#b3daff')} //e6f3ff
        onBlur={() => setInputBackGcolor('#cce6ff')}
        onEndEditing={passwordOnEndEditing}
      />

      <Text style={styles.TextError} />

      <InputForm
        inputBackgroundColor={inputBackGcolor}
        labelValue={confirmPassword}
        onChangeText={userPassword => setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        secureTextEntry={true}
        returnKeyType="done"
        onFocus={() => setInputBackGcolor('#b3daff')} //e6f3ff
        onBlur={() => setInputBackGcolor('#cce6ff')}
        onEndEditing={confirmPassword_OnEndEditing}
      />

      <Text style={styles.TextError}>{confirmPasswordError}</Text>

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
    marginBottom: 30,
  },
  TextError: {
    paddingBottom: 5,
    fontWeight: 'bold',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgot_button: {
    color: '#a6a6a6', //'#2e64e5'
    //marginBottom: 30,
    //fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Lato-Regular',
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
