import { useState } from "react"

function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
    e.preventDefault()
    setUserEmail(email)
    }

    function limparEmail(e){
    e.preventDefault()
    setUserEmail('')
    }

    return (
        <div>
            <h2>cadastre seu email</h2>
            <form>
                <input type="email"
                 placeholder="digite seu email..."
                 onChange={(e) => setEmail(e.target.value)}
                 />
                <button type="submit" onClick={enviarEmail}>enviar email</button>
                {userEmail && (
                    <div>
                        <p>o email do usuario é: {userEmail}</p>
                        <button onClick={limparEmail}>limpar email</button>
                    </div>
                )}
            </form>
        </div>
    )

}

export default Condicional