import { StyleSheet } from "react-native";
import theme from "../../common/Theme";
import { boldFont, fontSizes, mediumFont, regularFont } from "../../assets/fonts/font";

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
    top:{
        marginTop:30
    },
    text_sm:{
        color:theme.colors.light,
        fontSize:fontSizes.small
    },
    tabsHeader:{
        backgroundColor:'rgba(0, 102, 255, 0.10)',  
        height:120, 
        borderRadius:10, 
        paddingLeft:15,
        paddingRight:15, 
        paddingTop:10
    },
    tabshead:{
        flexDirection:"row", 
        justifyContent:'space-between',
        marginTop:9
    },
    cardText:{
        color:'#9CB1D1',
        fontSize:fontSizes.small    
    },
    cardTexts:{
        color:theme.colors.danger,
        fontSize:fontSizes.small  
    },
    usd:{
        color:'#9CB1D1',
        fontSize:fontSizes.medium ,
        fontWeight:boldFont.fontWeight 
    },
    usds:{
        color:theme.colors.light,
        fontSize:fontSizes.medium,
        fontWeight:boldFont.fontWeight 
    },
    USDHead:{
        marginTop:20, 
        gap:20
    },
    content:{
        flexDirection:"row", 
        justifyContent:"space-between"
    },
    nmbr:{
        flexDirection:"row",
        gap:20
    },
    btn:{
        color:theme.colors.light,
        fontSize:fontSizes.medium,
        fontWeight:mediumFont.fontWeight
    },
    btnHeader:{
        backgroundColor:theme.colors.primary, 
        borderRadius:10, 
        height:48, 
        justifyContent:"center", 
        alignItems:"center",
        marginTop:30
    },

    // Request Money
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