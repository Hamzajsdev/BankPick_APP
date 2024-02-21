
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
        fontSize:fontSizes.x_medium,
        fontWeight:mediumFont.fontWeight
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
    search:{
        height:48,
        backgroundColor:theme.colors.lightBlack, 
        borderRadius:10, 
        paddingLeft:20, 
        paddingRight:20, 
        marginTop:20
    },
    innerContent:{
        flexDirection:"row", 
        justifyContent:"space-between", 
        alignItems:"center"
    },
    headerSearch:{
        flexDirection:"row", 
        gap:7, 
        alignItems:"center"
    }
})

export default styles