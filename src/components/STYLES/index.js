import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const STYLES = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerJustify: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  containerWidth: {
    flex: 1,
    backgroundColor: '#fff',
    width: responsiveWidth(90),
  },
  containerJustifyWidth: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
  },
  scrollview: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  subcontainer: {
    paddingHorizontal: responsiveWidth(5),
    // alignSelf: 'center',
    // alignItems: 'center',
  },
  subcontainerJustify: {
    width: responsiveWidth(90),
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  scrollviewJustify: {
    flexGrow: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  scrollviewJustifyPadding: {
    flexGrow: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
  },
  headerfontsize: responsiveFontSize(2.3),
};

export default STYLES;
