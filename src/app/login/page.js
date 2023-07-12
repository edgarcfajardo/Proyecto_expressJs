'use client'
import React from "react"
import { login } from "../../services/firebase/auth"
import "./login.css"

export default function Login() {

    const [state, setState] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        displayName: ""
    })

    function onChangue(event) {
        const event = event.target.value;
        const name = event.target.name;

        setState ({
            ...state,
            [name]: value
        })
    }

    return (
      <div className="container">
        Soy el login
        <div className="container">
            <form action={onRegister} style={({
                display: "flex",
                flexDirection: "column"
            })}>
                <div>
                    <label for="">Usuario</label>
                    <input required onChange={onChangue} name="email" type="text" value={state.email}/>
                </div>
                <div>
                    <label for="">Contraseña</label>
                    <input required onChange={onChangue} type="password" name="password" id="password" value={state.password}/>
                </div>
                <div>
                    <label for="">Confirmar contraseña</label>
                    <input required onChange={onChangue} type="password" name="confirmPassword" id="confirmPassword" value={state.password}/>
                </div>
                <div>
                    <label for="">Nombre</label>
                    <input required onChange={onChangue} name="displayName" type="text" value={state.displayName}/>
                </div>
                <div>
                    <button type="submit">Registrarse</button>
                </div>                
            </form>
        </div>
      </div>
    )
}