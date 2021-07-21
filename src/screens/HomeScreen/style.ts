import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    flexDirection: 'row',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  headerContacts: {
    backgroundColor: '#F3F3F3',
    flex: 1,
    padding: 10,
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    paddingBottom: 20,
  },
  searchBar: {
    backgroundColor: '#F3F3F3',
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
    paddingRight: 8,
    textTransform: 'uppercase',
  },
  lastName: {
    fontSize: 17,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  sectionListHeader: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',

    flexDirection: 'row',
  },
  sectionHeader: {
    backgroundColor: '#efefef',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  delete: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
  },
});

export default styles;
