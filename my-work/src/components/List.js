import Item from './Item'

function List() {
    return (
        <>
            <h1>minha lista</h1>
            <ul>
            <Item marca="ferrari" Ano_Lancamento={1985}/>
            <Item marca="lamborghini" Ano_Lancamento={1964}/>
            <Item marca="BYD" Ano_Lancamento={2003}/>
            </ul>
        </>
    )
}
export default List