import Button from './Button'

function Evento() {
    function meuEvento() {
        console.log('ativando primeiro evento')
    }

    function segundoEvento() {
        console.log('ativando o segundo evento')
    }


    return (
        <div>
            <p>clique para disparar um evento:</p>
            <Button event={meuEvento} text="primeiro evento"/>
            <Button event={segundoEvento} text="segundo evento"/>
        </div>
    )
}
export default Evento