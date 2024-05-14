import Btn from './components/Btn';
import Form from './components/Form';




function App() {


  return (
    <>
      <body>
        <div className="login">
          <div className="form-container">
            <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new passwrd for yue account</p>

            <form action="/" className="form">
              <Form/>
              <Btn/> 
            </form>
          </div>
        </div>
      </body>
    </>
  )
}

export default App
