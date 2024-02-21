import { StyleSheet } from "react-native";
import theme from "../../common/Theme";
import { fontSizes, mediumFont, regularFont } from "../../assets/fonts/font";

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:theme.colors.darkBlack,
        alignItems:"center"
    },
    topheader:{
        marginTop:30,
        alignItems:'center'
    },
    backerrow:{
        flexDirection: 'row', 
        gap: 65,
        alignItems: "center" 
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
    search:{
        height:48,
        backgroundColor:theme.colors.lightBlack, 
        borderRadius:10, 
        paddingLeft:20, 
        paddingRight:20, 
        marginTop:30
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
    },
    header:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:"center", 
        borderBottomColor:theme.colors.lightBlack, 
        borderBottomWidth:1.5, 
        paddingBottom:10, 
        marginTop:30
    },
    innercontent:{
        flexDirection:"row", 
        alignItems:"center", 
        gap:15
    },
    blankCircle:{
        width: 50, 
        height: 50, 
        backgroundColor: theme.colors.lightBlack, 
        borderRadius: 100 
    },
    heading:{
        color: theme.colors.light, 
        fontSize: fontSizes.medium, 
        fontWeight: regularFont.fontWeight
    },
    tick:{
        backgroundColor:theme.colors.primary, 
        width:20, 
        height:20, 
        borderRadius:100, 
        justifyContent:'center', 
        alignItems:"center"
    }
})

export default styles