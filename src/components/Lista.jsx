//array de elementos
const lista = [
    {
        id: 1,
        lugar: "Noruega",
        imagem: "https://www.mapadeviajante.com.br/wp-content/uploads/2020/09/2020.02-Aurora-Capa-3.jpg",
    },
    {
        id: 2,
        lugar: "Noruega",
        imagem: require("../img/aurora-boreal.jpg"),
    },
    {
        id: 3,
        lugar: "Noruega",
        imagem: require("../img/aurora-boreal.jpg"),
    },
    {
        id: 4,
        lugar: "Noruega",
        imagem: "https://www.mapadeviajante.com.br/wp-content/uploads/2020/09/2020.02-Aurora-Capa-3.jpg",
    },
    {
        id: 5,
        lugar: "Noruega",
        imagem: require("../img/aurora-boreal.jpg"),
    },
    {
        id: 6,
        lugar: "Noruega",
        imagem: require("../img/aurora-boreal.jpg"),
    }
];

//criando a função para o item
function Item(props) {
    const indice = props.indice;

    const item = lista [ indice ];

    return (
        <div className="item">
            <h1 className="item_title">{item.lugar}</h1>
            <img src={item.imagem} alt={item.lugar} width="400"/>
        </div>
    )
}

//criando a lista, utilizando map
export default function Lista() {
    return (
        <div className="lista">
            <div className="card">
                {lista.map ((item, index) => (
                    <Item indice={index} key={index} />
                ))}
            </div>
        </div>
    )
}