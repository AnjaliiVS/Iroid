import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

const Success = () => {
  return (
    <View style={{flex: 1}}>
      <Image
        style={{
          left: '23%',
          width: '55%',
          height: '35%',
          top: '20%',
        }}
        source={require('../../src/assets/images/success.png')}
      />
      <View>
        <Text
          style={{
            color: 'black',

            fontSize: 20,
            alignSelf: 'center',
            top: '80%',
            paddingTop: 50,
            letterSpacing: 2,
          }}>
          Success!
        </Text>
        <Text
          style={{
            color: 'gray',

            fontSize: 14,
            alignSelf: 'center',
            top: '80%',
            letterSpacing: 1,
          }}>
          Your account has been Created
        </Text>
      </View>

      <View
        style={{
          backgroundColor: '#00cdac',
          height: '6%',
          width: '80%',
          borderRadius: 8,
          top: '25%',
          left: '9%',
        }}>
       
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
            top: '25%',
            letterSpacing: 1,
          }}>
          Login your account
        </Text>
        
      </View>
    </View>
  );
};

export default Success;
