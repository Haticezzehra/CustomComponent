 import { StyleSheet } from "react-native"
 export default StyleSheet.create(
    {
       
      card_container:{
        textColor:'black',
        borderWidth:1,
        borderColor:'gray',
        borderRadius:10,
        margin:10,
        backgroundColor:'white'
      }
      ,card_body:{
        padding:10
      },
      card_title: {
        color:'black',
        fontSize:20,
        fontWeight:'bold',
        margin:10,
        marginBottom:3
      },  
      card_text: {
        
        color:'black',
        fontSize:10,
        fontWeight:'bold',
        margin:10,
        marginTop:3
      
    },
    card_button_container:{
      backgroundColor:'#00C2FF',
      padding:10,
      alignItems:'center',
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10
    },
    card_button_title:{
      fontSize:20,
      fontWeight:'bold',
      color:'white'
    }
  }
 )