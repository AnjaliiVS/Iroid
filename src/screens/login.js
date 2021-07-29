import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import {Searchbar, Button, Card, Title, Divider} from 'react-native-paper';
const Login = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity>
        <Image
          style={{
            left: '30%',
            width: '70%',
            height: '45%',
            // resizeMode='cover'
          }}
          source={require('../../src/assets/images/book.png')}
        />

        <View>
          <Image
            style={{
              borderRadius: 9,
              width: '20%',
              height: '28%',
              top: '3%',
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
            }}
            source={require('../../src/assets/images/w.jpg')}
          />
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 18,
              alignSelf: 'center',
              top: '8%',
              letterSpacing: 1,
            }}>
            WELCOME BACK
          </Text>
          <Text
            style={{
              color: 'gray',
              fontSize: 12,
              alignSelf: 'center',
              top: '9%',
            }}>
            Login to your Account
          </Text>
        </View>

        <View style={{bottom: '10%'}}>
          <TextInput
            style={styles.textInput}
            placeholder="Mobile Number"
            placeholderTextColor="grey"
            underlineColorAndroid="transparent"></TextInput>
        </View>

        <View
          style={{
            backgroundColor: '#00cdac',
            height: '6%',
            width: '80%',
            borderRadius: 8,
            bottom: '7%',
            left: '9%',
          }}>
          <Text
            onPress={() => navigation.navigate('Test')}
            style={{
              alignSelf: 'center',
              fontSize: 16,
              fontWeight: 'bold',
              color: 'white',
              top: '25%',
            }}>
            Login
          </Text>
        </View>

        <View>
          <Text
            style={{
              color: 'gray',
              textAlign: 'auto',
              fontSize: 15,
              bottom: '17%',
              left: '20%',
            }}>
            Don't have an account?
          </Text>

          <Text
            style={{
              fontSize: 14,
              textAlign: 'auto',
              color: '#00cdac',
              left: '64%',
              bottom: '67%',
              fontWeight: 'bold',
            }}>
            Sign up
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '80%',
    height: 40,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'rgba(51, 52, 88, 0.06)',
    left: '9%',
  },
});
export default Login;
