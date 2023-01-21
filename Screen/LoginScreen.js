import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, View, Text, Image} from 'react-native';
import ButtonForm from '../Components/ButtonForm';
import InputForm from '../Components/InputForm';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputBackGcolor, setInputBackGcolor] = useState('#cce6ff');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onPress = () => {
    navigation.navigate('Home');
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
    var regex = /^[\w-\.]+@([\w]+\.)+[\w]{2,4}$/;
    if (!regex.test(e.nativeEvent.text)) {
      setPasswordError('Invalid email.');
    } else {
      setPasswordError('');
    }
  };

  var yourPicture = require('../Images/logo.png');

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={yourPicture} />

      <InputForm
        inputBackgroundColor={inputBackGcolor}
        labelValue={email}
        onChangeText={userEmail => setEmail(userEmail)}
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

      <TouchableOpacity onPress={onPress}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <ButtonForm
        buttonTitle="LOGIN"
        onPress={() => {
          alert('Login');
        }}
      />

      <Text
        style={styles.registerTextStyle}
        onPress={() => navigation.navigate('Register')}>
        Don't have an account yet?{' '}
        <Text
          style={{
            color: '#003366', //'#262626',
            textDecorationLine: 'underline',
            fontWeight: 'bold',
          }}>
          Create Here
        </Text>
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 40,
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
