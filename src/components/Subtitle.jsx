//criação com uma estrutura básica de props
function Subtitle (props) {
    return (
        <div className="subtitle">
            <h2>{props.subtitle}</h2>
        </div>
    )
}

export default Subtitle;