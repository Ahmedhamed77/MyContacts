import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  header: {
    paddingTop: 8,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  input: {
    borderRadius: 8,
    borderColor: '#BFBFBE',
    marginBottom: 20,
    borderWidth: 1,
    width: 200,
  },
  InputCommon: {
    borderRadius: 8,
    borderColor: '#BFBFBE',
    marginBottom: 20,
  },
  detailsHeader: {
    display: 'flex',
    paddingBottom: 10,
  },
  contactName: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'RobotoMono-Regular',
  },
  textArea: {
    display: 'flex',
    margin: 10,
  },
  phoneNumber: {
    color: '#0000FF',
    fontFamily: 'Poppins-Regular',
    letterSpacing: 2,
  },
  textCommon: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
});

export default styles;
