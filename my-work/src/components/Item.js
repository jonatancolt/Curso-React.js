import PropTypes from 'prop-types'
function Item({marca, Ano_Lancamento}) {
    return (
        <>
        <li>{marca} - {Ano_Lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    Ano_Lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'faltou a marca',
    Ano_Lancamento: 0,
}

export default Item