import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginHorizontal:16,
    },
    button: {
        
    },
    InputCommon:{
        
        borderRadius:8,
        borderColor:'#BFBFBE',
        marginBottom:20,
    },
    controlContainer: {
      margin: 2,
      padding: 6,
      borderRadius: 8,
      justifyContent: 'center',
      backgroundColor: '#000',
      marginBottom:20
    },
    Footer:{
        alignItems: 'center'
    },
    Normal:{
        fontSize:15,
        lineHeight:25,
    },
    Special: {
        fontSize:15,
        lineHeight:25,
        color: '#1554F6',

    }
  });

export default styles;