import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Image, Text, TextInput, View } from 'react-native';

function LoginScreen({navigation}) {
  const users= [
    {
      id: 1,
      phone:'0945959741',
      password:'1234'
    },
    {
      id: 2,
      phone:'0326045365',
      password:'4321'
    },
    {
      id: 3,
      phone:'0369890045',
      password:'6789'
    },
  ]

  const [phone, setPhone] = useState('0945959741')
  const [password, setPassWord] = useState('1234')
const [user, setUser] = useState('')
  function checkPhone(phone, password){
    const newUser= users.find(value=> value.phone===phone &&value.password===password)
    if(newUser)
      setUser(newUser)
    navigation.navigate("Home")
  }
  return (
    <View style={{ flex: 1, backgroundColor:'white' }}>
      <View style={{ flex: 0.8 }}>
        <Image
          source={require('../src/assets/images/login.jpg')}
          style={{ height: '100%', width: '100%' }}
        />
      </View>
      <View style={{ flex: 2.5 }}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              color: '#5c5c5c',
              fontSize: 15,
              fontWeight: '500',
              margin: 12,
            }}>
            Chào mừng bạn đến với
          </Text>
          <Image
            source={require('../src/assets/images/logo-black.44900f6.png')}
            style={{ height: 20, width: 270 }}
          />
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <View style={{ flex: 2 }}>
            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#cc0808',
                  borderRadius: 50,
                  width: 19,
                  height: 19,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginLeft: 15,
                  marginTop: 15,
                }}>
                <Entypo
                  name="star"
                  size={11.5}
                  color="yellow"
                  style={{ justifyContent: 'center', alignItems: 'center' }}
                />
              </View>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 15,
                  marginLeft: 3,
                  marginTop: 15,
                }}>
                +84
              </Text>
              <View
                style={{
                  borderWidth: 0.5,
                  height: 27,
                  marginLeft: 15,
                  borderColor: 'gray',
                  marginTop: 12,
                }}
              />
            </View>
            <TextInput
              placeholder="Nhập số điện thoại"
              style={{
                height: 53,
                width: 340,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 15,
                paddingLeft: 100,
                fontSize: 16,
                color: 'gray',
                fontWeight: '400',
              }} value={phone} onChangeText={(text)=> setPhone(text)}
            />
            <TextInput
              placeholder="Mật khẩu"
              style={{
                height: 53,
                width: 340,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 15,
                paddingLeft: 10,
                fontSize: 16,
                color: 'gray',
                fontWeight: '400',
                marginTop: 15,
              }} value={password} onChangeText={(text)=> setPassWord(text)}
            />
          </View>
          <View style={{ flex: 1 , marginTop: 10}}>
            <TouchableOpacity
              style={{
                height: 48,
                width: 340,
                backgroundColor: '#b0b0b0',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }} onPress={()=> checkPhone(phone, password)}>
              <Text style={{ fontSize: 18, color: 'white', fontWeight: '500' }}>
                Đăng nhập
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity onPress={()=> navigation.navigate("SignUp", {users: users})}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '500',
                  color: 'blue',
                  paddingRight: 130,
                }}>
                Đăng ký
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate("ForgotAccount")}>
              <Text style={{ fontSize: 17, fontWeight: '500', color: 'blue' }}>
                Quên mật khẩu
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 0.1,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              bottom: 20,
            }}>
            <View
              style={{
                borderWidth: 0.5,
                width: 138,
                height: 1,
                borderColor: '#adadad',
              }}
            />
            <Text
              style={{
                marginHorizontal: 10,
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#525252',
                fontSize: 12,
              }}>
              HOẶC
            </Text>
            <View
              style={{
                borderWidth: 0.5,
                width: 138,
                height: 1,
                borderColor: '#adadad',
              }}
            />
          </View>
        </View>

        <View
          style={{
            flex: 0.5,
            flexDirection: 'row',
            marginLeft: 40,
          }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#355fde',
                height: 50,
                width: 140,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
              }}>
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 100,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 100,
                  flexDirection: 'row',
                  position: 'absolute',
                }}>
                <Text
                  style={{
                    color: '#355fde',
                    fontSize: 20,
                    fontWeight: 'bold',
                    paddingTop: 5,
                    marginLeft: 2,
                  }}>
                  f
                </Text>
              </View>

              <Text style={{ color: 'white', fontWeight: '400', fontSize: 15 }}>
                Facebook
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                height: 45,
                width: 140,
                borderColor: 'gray',
                borderWidth: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
              }}>
              <Image
                source={require('../src/assets/images/google.jpg')}
                style={{ position: 'absolute', marginRight: 100 }}
              />
              <Text style={{ fontSize: 15.58 }}>Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;
