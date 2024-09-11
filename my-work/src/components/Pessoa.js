function Pessoa({nome, idade, profissão, foto}) {
    return (
    <div>
        <img src={foto} alt={nome}/>
        <h2>nome: {nome}</h2>
        <p>idade: {idade}</p>
        <p>profissão: {profissão}</p>
    </div>
    )
}
export default Pessoa