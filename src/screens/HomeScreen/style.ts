import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  headerContacts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    paddingBottom: 20,
  },
  searchBar: {
    backgroundColor: 'transparent',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    margin: 2,
  },
  button: {
    margin: 2,
  },
  icon: {
    width: 35,
    height: 35,
  },
  renderItemContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
  },
  containerNames: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  firstName: {
    fontSize: 17,
  },
  lastName: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  sectionListHeader: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 20,
  },
});

export default styles;
