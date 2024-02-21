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
    },

    // Edit Profile CSS
    subtitle:{
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
    Emailtitle:{
        color:theme.colors.gray,
        fontSize:fontSizes.small,
        marginTop:30
    },
    birthHeader:{
        flexDirection: 'row', 
        justifyContent: "space-between", 
        marginTop:15
    },
    birthContent:{
        borderBottomColor:theme.colors.gray, 
        borderBottomWidth:.6, 
        paddingBottom:6
    },
    birthDec:{
        color: theme.colors.light, 
        fontSize: fontSizes.small, 
        marginLeft:25 
    },
    backerrow:{
        flexDirection: 'row', 
        gap: 65,
        alignItems: "center" 
    },
    tanyaProfile:{
        justifyContent: "center", 
        alignItems: "center", 
        gap: 3
    },
    bottomContent:{
        alignItems:"center",
        marginTop:70
    },
    innertabs:{
        color:theme.colors.gray, 
        fontSize:fontSizes.small, 
        fontWeight:regularFont.fontWeight
    }
})


export default styles 