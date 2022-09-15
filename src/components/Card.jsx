import PropTypes from 'prop-types';

function Card({ local, foto }) {
//criando validação de tipos com PropTypes
    Card.propTypes = {
        local: PropTypes.string.isRequired,
        foto: PropTypes.string
    }

//criando um valor default 
    Card.defaultProps = {
        local: "Nome do lugar"
    }

    return (
        <div className="container">
            <div className="card" style={{width: '18rem'}}>
                <img src={foto} className="card-img-top" alt={local} />
                <div className="card-body">
                    <p className="card-text">{local}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;