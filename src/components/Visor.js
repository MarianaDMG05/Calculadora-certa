import{
    View,Text,StyleSheet
} from "react-native"

export default props => {
    return(
        <View style={estilos.visor}>
            <Text style={estilos.valorVisor}>{props.valor}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    visor: { 
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor: "#c6f1f5"
    },
    valorVisor: { 
        fontSize: 60,
        color: "#020303"
    }

})