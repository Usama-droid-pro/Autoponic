import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TextInput,
  BackHandler,
} from 'react-native';
import React, {useState, useRef} from 'react';
import STYLES from '../STYLES';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
// import {useFocusEffect} from '@react-navigation/native';
import {fontFamily} from '../../constants/fonts';
import {appImages} from '../../assets/utilities';
import {MyButton} from '../../component/MyButton';
import Eye from 'react-native-vector-icons/Ionicons';
// import {useSelector, useDispatch} from 'react-redux';

const Login = ({navigation, route}) => {

  const [myfocus, setMyfocus] = useState('');
  const [softinput, setSoftinput] = useState(false);
  const [issecure, setIssecure] = useState(true);
  const refpassword = useRef();
  return (
    <SafeAreaView style={STYLES.container}>
      <StatusBar
        barStyle={'dark-content'}
        hidden={false}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <Image
        source={require('../../../new.jpg')}
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(100),
          position: 'absolute',
          opacity:20
        }}
        resizeMode="cover"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.txt1}>Sign In</Text>
          <Text style={styles.txt2}>Welcome back!</Text>
          <View
            style={[
              styles.txtinputview,
              {borderColor: myfocus == 'email' ? '#00CE30' : '#D9D9D9'},
            ]}>
            <TextInput
              showSoftInputOnFocus={softinput}
              autoFocus
              keyboardType="email-address"
              placeholder="Email"
              style={styles.txtinputstyle}
              selectionColor={'#00CE30'}
              onFocus={() => setMyfocus('email')}
              onBlur={() => setMyfocus('')}
              blurOnSubmit={false}
              onSubmitEditing={() => {
                refpassword.current.focus();
              }}
              returnKeyType="next"
            />
          </View>
          <View
            style={[
              styles.txtinputview,
              {borderColor: myfocus == 'password' ? '#00CE30' : '#D9D9D9'},
            ]}>
            <TextInput
              onFocus={() => setMyfocus('password')}
              onBlur={() => setMyfocus('')}
              placeholder="Password"
              style={styles.txtinputstyle2}
              secureTextEntry={issecure}
              selectionColor={'#00CE30'}
              ref={refpassword}
            />
            <Eye
              color={'#00CE30'}
              size={responsiveFontSize(3.3)}
              name={issecure ? 'eye-off-outline' : 'eye-outline'}
              onPress={() => setIssecure(!issecure)}
            />
          </View>
          <TouchableOpacity
            style={styles.forgotview}
            activeOpacity={0.6}
            onPress={() => {
              navigation.navigate('ForgotPassword'), setMyfocus('');
            }}>
            <Text style={styles.forgottxt}>FORGOT PASSWORD?</Text>
          </TouchableOpacity>
          <MyButton
            title={'SIGN IN'}
            onPress={() => {
              navigation.navigate("DashBoard");
            }}
          />
        </View>
        <View style={styles.fixedfooter}>
          <Text style={styles.ftxt1}>Don't have and account? </Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.ftxt2}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  txt1: {
    marginTop: responsiveHeight(9),
    fontFamily: fontFamily.Calibri_Regular,
    color: '#3B3E51',
    fontSize: responsiveFontSize(3.9),
  },
  txt2: {
    marginTop: responsiveHeight(1),
    fontFamily: fontFamily.BioSans_Regular,
    color: '#2F363D',
    fontSize: responsiveFontSize(2.3),
    marginBottom: responsiveHeight(4.5),
  },
  txtinputview: {
    width: responsiveWidth(86),
    marginTop: responsiveHeight(3.2),
    borderWidth: responsiveWidth(0.2),
    borderRadius: responsiveWidth(100),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  txtinputstyle: {
    paddingVertical: responsiveHeight(2.2),
    fontFamily: fontFamily.BioSans_Regular,
    color: '#2F363D',
    fontSize: responsiveFontSize(2),
    width: responsiveWidth(86),
    paddingHorizontal: responsiveWidth(5),
  },
  txtinputstyle2: {
    paddingVertical: responsiveHeight(2.2),
    fontFamily: fontFamily.BioSans_Regular,
    color: '#2F363D',
    fontSize: responsiveFontSize(2),
    width: responsiveWidth(72),
    paddingLeft: responsiveWidth(5),
    marginRight: responsiveWidth(2),
  },
  fixedfooter: {
    marginBottom: responsiveHeight(2.5),
    marginTop: responsiveHeight(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgotview: {
    marginTop: responsiveHeight(2.5),
    marginBottom: responsiveHeight(4),
  },
  forgottxt: {
    fontFamily: fontFamily.BioSans_SemiBold,
    color: '#2F363D',
    fontSize: responsiveFontSize(2.1),
  },
  ftxt1: {
    fontFamily: fontFamily.BioSans_Regular,
    color: '#2F363D',
    fontSize: responsiveFontSize(2.1),
  },
  ftxt2: {
    fontFamily: fontFamily.BioSans_SemiBold,
    color: '#2F363D',
    fontSize: responsiveFontSize(2.1),
    textDecorationLine: 'underline',
  },
});
