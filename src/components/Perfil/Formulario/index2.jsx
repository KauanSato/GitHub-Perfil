import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("o componente iniciou");

        return () => {
            console.log("o componente finalizou")
        }
    }, []);

    useEffect(() => {
        console.log("o estado mudou");
    }, [nome]);

    useEffect(() => {
        console.log("materia A mmudou para" + materiaA)
    }, [materiaA]);

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            console.log(estadoAnterior);

            return evento.target.value;
        })
    }

    const renderResult = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if(media >= 7) {
            return (
                <p>{nome}, você foi aprovado</p>
            )
        } else {
            return(
                <p>{nome}, você não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            {[1,2,3,4,5] .map(item => (
                    <li key={item}> {item} </li>
                ))}

            <input type="text" placeholder="Seu Nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderResult()}
        </form>
    )
}

export default Formulario