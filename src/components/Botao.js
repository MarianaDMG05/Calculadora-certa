import{Text, 
    TouchableHighlight, StyleSheet, Dimensions} from "react-native"

    const{width, height} = Dimensions.get("window")


export default props => {

    const estilosBotao = [estilos.botao]
    if(props.duplo) estilosBotao.push(estilos.botaoDuplo)
    if(props.triplo) estilosBotao.push(estilos.botaoTriplo) /* chama o botao e adiciona o estilo */
    if(props.dir) estilosBotao.push(estilos.botaoDir) /* chama os botoes da direita e deixa com a cor diferente */

    return(
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={estilosBotao}>{props.label}</Text>
        </TouchableHighlight>
        
    )
}

const estilos = StyleSheet.create({
    botao: {
        fontSize:40,
        width: width /4,
        height: width/4,
        padding: 20,
        backgroundColor: "#f0f0f0",
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#C71585"

    },
     botaoDuplo: {
        width: width /4 *2    
      }, 
      botaoTriplo: {
        width: width /4 *3
      },
    botaoDir: {
        backgroundColor: "#DA70D6",
    }
})