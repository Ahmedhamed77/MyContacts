import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  label: {
    color: 'black',
    paddingTop: 10,
    paddingBottom: 6,
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  imageUser: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'black',
  },
  button: {
    backgroundColor: 'black',
    borderColor: 'black',
  },

  container: {
    flex: 1,
    padding: 8,
    paddingHorizontal: 17,
  },

  input: {
    borderRadius: 8,
    borderColor: '#BFBFBE',
    marginBottom: 20,
    backgroundColor: 'white',
    height: 40,
    padding: 10,
  },
  Footer: {
    alignItems: 'center',
  },
  Normal: {
    fontSize: 15,
    lineHeight: 25,
  },
  Special: {
    fontSize: 15,
    lineHeight: 25,
    color: '#1554F6',
  },
  errorMsg: {
    paddingBottom: 6,
    color: '#800813',
    fontSize: 12,
  },
});

export default styles;
