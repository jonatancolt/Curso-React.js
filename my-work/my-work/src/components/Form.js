import { useState } from 'react'


function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(name)
        console.log("cadastrado com sucesso")
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">nome:</label><br></br>
                    <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="digite seu nome"
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">senha:</label><br></br>
                    <input 
                    type="password"
                    id="password"
                    name="name" 
                    placeholder="digite a sua senha"/>
                </div>
                <div>
                    <input type="submit" value="cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form