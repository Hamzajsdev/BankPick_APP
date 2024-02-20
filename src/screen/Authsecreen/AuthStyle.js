import { StyleSheet } from "react-native";
import theme from "../../common/Theme";
import { boldFont, fontSizes, mediumFont } from "../../assets/fonts/font";

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:theme.colors.darkBlack
    },
    header:{
        alignItems:"center"
    },
    circle:{
        width:50,
        height:50,
        backgroundColor:theme.colors.lightBlack,
        borderRadius:100,
        display:'flex',
        justifyContent:"center",
        alignItems:"center"
    },
    signin:{
        color:theme.colors.light,
        fontSize:fontSizes.x_large,
        fontWeight:boldFont.fontWeight,
        marginTop:50
    },
    title:{
        color:theme.colors.gray,
        fontSize:fontSizes.small,
        marginTop:50
    },
    emailcontent:{
        flexDirection:'row', 
        gap:10, 
        alignItems:"center", 
        borderBottomColor:theme.colors.gray, 
        borderBottomWidth:.8,
        marginTop:8
        
    },
    passwordtitle:{
        color:theme.colors.gray,
        fontSize:fontSizes.small,
        marginTop:20
    },
    btn:{
        backgroundColor:theme.colors.primary,
        borderRadius:12,
        height:48,
        alignItems:'center',
        justifyContent:"center",
        display:'flex',
       marginTop:50
    },
    txt:{
        color:theme.colors.light,
        fontSize:fontSizes.x_medium,
        fontWeight:mediumFont.fontWeight,
        marginBottom:4
    },
    description:{
        color:theme.colors.gray,
        fontSize:fontSizes.small,
        textAlign:'center',
        marginTop:15
    },
    Emailtitle:{
        color:theme.colors.gray,
        fontSize:fontSizes.small,
        marginTop:30
    }
})

export default styles