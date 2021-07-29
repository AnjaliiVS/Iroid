//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// create a component
const Test = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../src/assets/images/gradient.jpg')}
        resizeMode="cover"
        style={{flex: 1, justifyContent: 'center'}}>
        <ScrollView>
          <View style={{padding: '5%'}}>
            <Image
              style={{
                borderRadius: 10,
                height: 70,
                width: 70,

                marginVertical: '5%',
                marginBottom: '10%',
              }}
              source={require('../../src/assets/images/w.jpg')}
            />
            <Text style={{color: '#fff'}}>Goodmorning</Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
                letterSpacing: 1,
              }}>
              Ananthu M Mohan
            </Text>
          </View>

          <View style={{flexDirection: 'row', padding: '5%'}}>
            <View
              style={{
                height: 180,
                width: 155,
                backgroundColor: '#FFF',
                borderRadius: 13,
                right: '2%',
              }}>
              <View
                style={{
                  backgroundColor: '#00cdac',
                  height: 115,
                  width: 110,
                  borderRadius: 100,
                  opacity: 0.4,
                  top:'7%',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    height: 110,
                    width: 105,
                    alignSelf: 'center',
                  }}
                  source={require('../../src/assets/images/magnet(2).png')}
                />
              </View>
              <Text
                style={styles.txt1}
                onPress={() => navigation.navigate('Success')}>
                Physics
              </Text>
              <Text style={styles.txt2}>15 chapters</Text>
            </View>

            <View
              style={{
                height: 180,
                width: 155,
                backgroundColor: '#FFF',
                borderRadius: 13,
                left: '9%',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#00cdac',
                  height: 115,
                  width: 110,
                  borderRadius: 100,
                  opacity: 0.4,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    height: 90,
                    width: 90,
                    alignSelf: 'center',
                  }}
                  source={require('../../src/assets/images/test.png')}
                />
              </View>
              <Text
                style={styles.txt3}
                onPress={() => navigation.navigate('Success')}>
                Chemistry
              </Text>
              <Text style={styles.txt4}>15 chapters</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', padding: '5%'}}>
            <View
              style={{
                height: 180,
                width: 155,
                backgroundColor: '#FFF',
                borderRadius: 13,
                right: '2%',
              }}>
              <View
                style={{
                  backgroundColor: '#00cdac',
                  height: 115,
                  width: 110,
                  borderRadius: 100,
                  opacity: 0.4,
                  top:'7%',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    height: 88,
                    width: 88,
                    alignSelf: 'center',
                  }}
                  source={require('../../src/assets/images/keys.png')}
                />
              </View>
              <Text
                style={styles.txt1}
                onPress={() => navigation.navigate('Success')}>
                Mathematics
              </Text>
              <Text style={styles.txt2}>15 chapters</Text>
            </View>

            <View
              style={{
                height: 180,
                width: 155,
                backgroundColor: '#FFF',
                borderRadius: 13,
                left: '9%',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#00cdac',
                  height: 115,
                  width: 110,
                  borderRadius: 100,
                  opacity: 0.4,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    height: 98,
                    width: 90,
                    left:'2%',
                   
                  }}
                  source={require('../../src/assets/images/hindi.png')}
                />
              </View>
              <Text
                style={styles.txt3}
                onPress={() => navigation.navigate('Success')}>
                Hindi
              </Text>
              <Text style={styles.txt4}>15 chapters</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', padding: '5%'}}>
            <View
              style={{
                height: 180,
                width: 155,
                backgroundColor: '#FFF',
                borderRadius: 13,
                right: '2%',
              }}>
              <View
                style={{
                  backgroundColor: '#00cdac',
                  height: 115,
                  width: 110,
                  borderRadius: 100,
                  opacity: 0.4,
                  top:'7%',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    height: 95,
                    width: 90,
                    alignSelf: 'center',
                  }}
                  source={require('../../src/assets/images/dna.png')}
                />
              </View>
              <Text
                style={styles.txt1}
                onPress={() => navigation.navigate('Success')}>
                Botany
              </Text>
              <Text style={styles.txt2}>15 chapters</Text>
            </View>

            <View
              style={{
                height: 180,
                width: 155,
                backgroundColor: '#FFF',
                borderRadius: 13,
                left: '9%',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#00cdac',
                  height: 115,
                  width: 110,
                  borderRadius: 100,
                  opacity: 0.4,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    height: 95,
                    width: 90,
                    left:'1%',
                   
                  }}
                  source={require('../../src/assets/images/brain.png')}
                />
              </View>
              <Text
                style={styles.txt3}
                onPress={() => navigation.navigate('Success')}>
                Zoology
              </Text>
              <Text style={styles.txt4}>15 chapters</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', padding: '5%'}}>
            <View
              style={{
                height: 180,
                width: 155,
                backgroundColor: '#FFF',
                borderRadius: 13,
                right: '2%',
              }}>
              <View
                style={{
                  backgroundColor: '#00cdac',
                  height: 115,
                  width: 110,
                  borderRadius: 100,
                  opacity: 0.4,
                  top:'7%',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    height: 90,
                    width: 90,
                    alignSelf: 'center',
                  }}
                  source={require('../../src/assets/images/worldwide.png')}
                />
              </View>
              <Text
                style={styles.txt1}
                onPress={() => navigation.navigate('Success')}>
                English
              </Text>
              <Text style={styles.txt2}>15 chapters</Text>
            </View>
            <View>
              <Image
                style={{
                  height: 155,
                  width: 130,
                  alignSelf: 'flex-end',
                  bottom: '1%',
                  left: '43%',
                }}
                source={require('../../src/assets/images/man.png')}
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  txt1: {
    textAlign: 'center',
    top: '7%',
  },
  txt2: {
    textAlign: 'center',
    top: '7%',
  },
  txt3: {
    textAlign: 'center',
    top: '2%',
  },
  txt4: {
    textAlign: 'center',
    top: '1%',
  },

});

//make this component available to the app
export default Test;
