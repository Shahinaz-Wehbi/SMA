import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const InputForm = ({
  labelValue,
  placeholderText,
  inputBackgroundColor,
  ...rest
}) => {
  return (
    <View
      style={[styles.inputContainer, {backgroundColor: inputBackgroundColor}]}>
      {/* <View style={styles.iconStyle}>
        <AntDesign name={iconType} size={25} color="#666" />
      </View> */}
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  inputContainer: {
    //marginTop: 5,
    //marginBottom: 10,
    //width: '100%',
    // height: windowHeight / 15,
    //borderColor: '#ccc',
    //borderRadius: 3,
    //borderWidth: 1,
    flexDirection: 'row',
    //alignItems: 'center',
    // backgroundColor: '#fff',
    //backgroundColor: '#cce6ff', //#FFC0CB',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 5,
    alignItems: 'center',
  },
  input: {
    // padding: 10,
    // flex: 1,
    fontSize: 16,
    // fontFamily: 'Lato-Regular',
    // color: '#333',
    justifyContent: 'center',
    alignItems: 'center',

    height: 50,
    flex: 1,
    padding: 10,
  },
});

// const InputForm = ({
//   labelValue,
//   placeholderText,
//   inputBackGcolor,
//   ...others
// }) => {
//   return (
//     <View style={[styles.inputView, {backgroundColor: {inputBackGcolor}}]}>
//       <TextInput
//         style={styles.TextInput}
//         value={labelValue}
//         placeholder={placeholderText}
//         placeholderTextColor="#003366"
//         {...others}
//       />
//     </View>
//   );
// };

// export default InputForm;

// const styles = StyleSheet.create({
//   inputView: {
//     backgroundColor: '#cce6ff', //#FFC0CB',
//     borderRadius: 30,
//     width: '70%',
//     height: 45,
//     marginBottom: 5,
//     alignItems: 'center',
//   },
//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
//   },
// });
