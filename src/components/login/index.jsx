import { Boton } from "../Boton"
import { IconEmail } from "../Icon-Email"
import { Logo } from "../Logo"

export const Login = () => {
    return (
        <div className="login">
            <div className="form-container">
                <Logo/>

                <h1 className="title">Email has been sent!</h1>
                <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>

                    <IconEmail/>
                    <Boton/>
                <p className="resend">
                    <span>Didn't receive the email?</span>
                    <a href="/">Resend</a>
                </p>
            </div>
        </div>

    )

}