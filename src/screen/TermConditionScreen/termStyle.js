import { StyleSheet } from "react-native"
import theme from "../../common/Theme"
import { fontSizes, mediumFont } from "../../assets/fonts/font"

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
        gap: 50,
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
    description:{
        color:theme.colors.gray,
        fontSize:fontSizes.small,
        marginTop:50,
        lineHeight:22
    }
})
export default styles