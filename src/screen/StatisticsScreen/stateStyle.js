import { StyleSheet } from "react-native";
import theme from "../../common/Theme";
import { fontSizes, mediumFont, regularFont } from "../../assets/fonts/font";

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:theme.colors.darkBlack,
        alignItems:"center"
    },
    headergroup:{
        flexDirection:"row",
        justifyContent:"space-between",
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
    title:{
        color:theme.colors.light,
        fontSize:fontSizes.large,
        fontWeight:mediumFont.fontWeight
    },
    top:{
        marginTop:30
    },
    all:{
        color:theme.colors.primary,
        fontSize:fontSizes.small,
        fontWeight:regularFont.fontWeight
    },
    trasition:{
        flexDirection:"row", 
        justifyContent:"space-between",     
        marginTop:50
    },
    entertain:{
        fontSize:fontSizes.small,
        color:theme.colors.gray
    },
    digit:{
        color:theme.colors.light,
        fontSize:fontSizes.small,
        fontWeight:mediumFont.fontWeight
    },
    transaction:{
        flexDirection:"row", 
        alignItems:"center", 
        gap:15
    },
    transHeader:{
        flexDirection:"row", 
        justifyContent:"space-between", 
        alignItems:"center"
    },
    head:{
        marginTop:20, 
        gap:15
    },
    descrip: {
        color: theme.colors.light,
        fontSize: fontSizes.x_medium,
        fontWeight: regularFont.fontWeight
    },
})

export default styles