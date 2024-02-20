import { StyleSheet } from "react-native";
import theme from "../../common/Theme";
import {fontSizes, mediumFont, regularFont } from "../../assets/fonts/font";

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:theme.colors.darkBlack
    },
    headerContent:{
        alignItems: "center", 
    },
    text_lg:{
        color:theme.colors.light,
        fontSize:fontSizes.large,
        fontWeight:mediumFont.fontWeight,
        textAlign:'center'
    },
    description:{
        color:theme.colors.gray,
        fontSize:fontSizes.small,
        textAlign:'center',
        fontWeight:regularFont.fontWeight,
    },
    btn:{
        backgroundColor:theme.colors.primary,
        borderRadius:12,
        height:48,
        alignItems:'center',
        justifyContent:"center",
        display:'flex',
       
    },
    txt:{
        color:theme.colors.light,
        fontSize:fontSizes.x_medium,
        fontWeight:mediumFont.fontWeight,
        marginBottom:4

    }

})

export default styles