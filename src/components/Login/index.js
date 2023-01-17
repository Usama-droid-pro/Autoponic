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
import React, { useState, useRef } from 'react';
import STYLES from '../STYLES';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

// import {useFocusEffect} from '@react-navigation/native';
import { fontFamily } from '../../constants/fonts';
import { appImages } from '../../assets/utilities';
import { MyButton } from '../../component/MyButton';
import Eye from 'react-native-vector-icons/Ionicons';
import { useFormik } from 'formik';
import { login } from '../../api';
// import {useSelector, useDispatch} from 'react-redux';

const Login = ({ navigation, route }) => {

  const [myfocus, setMyfocus] = useState('');
  const [softinput, setSoftinput] = useState(false);
  const [issecure, setIssecure] = useState(true);
  const refpassword = useRef();

  const initialValues = {

    email: "",
    password: "",
  }
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      try {

        console.log("called");
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email))) {
          alert("Invalid Email!!");
        }

        else if (values?.password?.length < 1) {
          alert("Please Enter Password!!")
        }
        else {
          const { data } = await login(values)
          console.log(data);
          if (data.status == "success") {

            // alert("Reg Successfully!");
            // navigate("/authentication/sign-in")
            navigation.navigate("DashBoard");
          }
        }


      }



      catch (e) {

        console.log(e);
        console.log(e?.response?.data?.message);
        alert(e?.response?.data?.message);

        // setError(e?.response?.data?.message)
      }
    }
  })
  console.log(values)



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
          opacity: 20
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
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.txt1}>Sign In</Text>
          <Text style={styles.txt2}>Welcome back!</Text>
          <View
            style={[
              styles.txtinputview,
              { borderColor: myfocus == 'email' ? '#00CE30' : '#D9D9D9' },
            ]}>
            <TextInput

              autoFocus
              keyboardType="email-address"
              placeholder="Email"
              style={styles.txtinputstyle}
              selectionColor={'#00CE30'}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              returnKeyType="next"
            />
          </View>
          <View
            style={[
              styles.txtinputview,
              { borderColor: myfocus == 'password' ? '#00CE30' : '#D9D9D9' },
            ]}>
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
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
            onPress={handleSubmit}
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
