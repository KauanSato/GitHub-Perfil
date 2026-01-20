import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Perfil/Formulario/index2";
import ReposList from "./components/RepoList";

function App() {
  const [formVisible, setFormVisible] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('');
  return(
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>

      {nomeUsuario.length > 4 && (
        <>
        <Perfil nomeUsuario={nomeUsuario} />
        <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}

      {/* {formVisible && (
        <Formulario/>
      )}

      <button onClick={() => setFormVisible(!formVisible)} type="button">toggle form</button> */}
    </>
  )
}

export default App
