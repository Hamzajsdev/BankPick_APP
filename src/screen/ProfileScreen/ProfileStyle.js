import { StyleSheet } from "react-native";
import { fontSizes, mediumFont, regularFont } from "../../assets/fonts/font";
import theme from "../../common/Theme";

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
    topheader:{
        marginTop:30
    },
  
    common:{
        color:theme.colors.light,
        fontSize:fontSizes.medium,
        fontWeight:regularFont.fontWeight
    },
    des:{
        color:theme.colors.gray,
        fontSize:fontSizes.small,
        fontWeight:regularFont.fontWeight
    },
    profiletabs:{
        gap: 25, 
        marginTop: 25
    },
    innnercontent:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        borderBottomColor: theme.colors.gray, 
        borderBottomWidth: .6, 
        paddingBottom: 10 
    },
    profileTop:{
        marginTop:20
    },
    switch:{
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        marginTop: 30 
    },
    profilehead:{
        color:theme.colors.light,
        fontSize:fontSizes.x_medium,
        fontWeight:mediumFont.fontWeight
    },
    personProfile:{
        flexDirection:'row', 
        alignItems:'center', 
        gap:15,
        marginTop:30
    },
    notification:{
        width:20, 
        height:20, 
        backgroundColor:theme.colors.danger, 
        justifyContent:"center", 
        alignItems:"center", 
        borderRadius:100
    }
})


export default styles 