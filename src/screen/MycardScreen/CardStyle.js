import { StyleSheet } from "react-native";
import theme from "../../common/Theme";
import { fontSizes, mediumFont, regularFont } from "../../assets/fonts/font";

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:theme.colors.darkBlack,
        // alignItems:"center"
    },
    header:{
        alignItems:'center'
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
    limit:{
        color:theme.colors.light,
        fontSize:fontSizes.medium,
        fontWeight:mediumFont.fontWeight
    },
    top:{
        marginTop:30
    },
    transaction:{
        flexDirection:"row", 
        alignItems:"center", 
        gap:15
    },
    trasition:{
        flexDirection:"row", 
        justifyContent:"space-between",     
        marginTop:50
    },
    digit:{
        color:theme.colors.light,
        fontSize:fontSizes.small,
        fontWeight:mediumFont.fontWeight
    },
    all:{
        color:theme.colors.primary,
        fontSize:fontSizes.small,
        fontWeight:regularFont.fontWeight
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
    entertain:{
        fontSize:fontSizes.small,
        color:theme.colors.gray
    },
    storeHead:{
        marginTop:-240
    },
    card:{
        height:110,
        backgroundColor:theme.colors.lightBlack,
        borderRadius:10,
        padding:18,
        paddingTop:14
    },
    cardTitle:{
        fontSize:fontSizes.x_small,
        color:theme.colors.light,
    },
    cardHead:{
        gap:20, 
        marginTop:30
    }

})

export default styles