//criando as frases que serão manipuladas pelo state
function Despedida() {
    return <h1>Volte sempre!</h1>;
}

function Pergunta() {
    return <h1>Já vai?</h1>;
}

//renderizando as frases
function Frases(props) {
    const clique = props.clique;
    if (clique) {
        return <Despedida />
    } else {
        return <Pergunta />
    }
}

export default Frases;