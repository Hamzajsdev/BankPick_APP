import { StyleSheet } from "react-native";
import theme from "../../common/Theme";
import { fontSizes, mediumFont, regularFont } from "../../assets/fonts/font";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.darkBlack
    },
    header: {
        alignItems: 'center',
        marginTop:30
    },
    content: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    innerContent: {
        flexDirection: 'row',
        gap: 10,
        alignItems: "center"
    },
    title: {
        color: theme.colors.gray,
        fontSize: fontSizes.small,
    },
    descrip: {
        color: theme.colors.light,
        fontSize: fontSizes.x_medium,
        fontWeight: regularFont.fontWeight
    },
    circle: {
        width: 50,
        height: 50,
        backgroundColor: theme.colors.lightBlack,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    top:{
        marginTop:40
    },
    tags:{
        flexDirection:"row", 
        justifyContent:"space-between", 
        position:'relative', 
        marginTop:-205
    },
    all:{
        color:theme.colors.primary,
        fontSize:fontSizes.small,
        fontWeight:regularFont.fontWeight
    },
    trasition:{
        flexDirection:"row", 
        justifyContent:"space-between",     
        marginTop:-90
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
        marginTop:-40, 
        gap:15
    }
})

export default styles