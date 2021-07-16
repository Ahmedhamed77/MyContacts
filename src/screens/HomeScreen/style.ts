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
  containerList: {
    paddingHorizontal: 6,
  },
  renderItemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingVertical: 12,
    marginVertical: 10,
  },
  containerNames: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowNames: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingLeft: 7,
  },

  firstName: {
    fontSize: 17,
  },
  lastName: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  rowFavorite: {
    paddingHorizontal: 10,
  },
  sectionListHeader: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 20,
  },
});

export default styles;
