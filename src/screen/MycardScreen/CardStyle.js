import { StyleSheet } from "react-native";
import theme from "../../common/Theme";
import { fontSizes, mediumFont, regularFont } from "../../assets/fonts/font";

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:theme.colors.darkBlack,
    },
    header:{
        alignItems:'center',
        marginBottom:40,

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
    heading:{
        color:theme.colors.gray,
        fontSize:fontSizes.medium,
    },
    deccrip:{
        color:theme.colors.light,
        fontSize:fontSizes.small,
    },
    cardholder:{
        flexDirection:"row", 
        gap:15, 
        borderBottomColor:theme.colors.lightBlack, 
        borderBottomWidth:2, 
        paddingBottom:10, 
        marginTop:20
    },
    text_sm:{
        color:theme.colors.gray,
        fontSize:fontSizes.small
    },
    text_md:{
        color:theme.colors.light,
        fontSize:fontSizes.medium,
        borderBottomColor:theme.colors.lightBlack,
        borderBottomWidth:1.5,
        width:90,
        paddingBottom:5
    },
    datehead:{
        flexDirection:"row", 
        justifyContent:"space-between", 
        paddingRight:60
    },
    headerDate:{
        gap:7, 
        marginTop:20
    },
    circleclr:{
        flexDirection:"row", 
        justifyContent:"space-between", 
        alignItems:"center",
        borderBottomColor:theme.colors.lightBlack,
        borderBottomWidth:2,
    },
    cardholders:{
        flexDirection:"row", 
        gap:15, 
        paddingBottom:10, 
        marginTop:20
    },
    ntop:{
        marginTop:-220
    },
    visaCard:{
        marginTop:-220
    }

})

export default styles