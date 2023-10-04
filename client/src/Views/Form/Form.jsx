import React from "react"
import { useHistory } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"
import { getTypes,postPokemon } from "../../Components/Redux/Actions"
import Stile from "./Form.module.css"




const Form = ()=>{

    const dispatch = useDispatch();
    const history = useHistory();
    const tipos = useSelector((state)=>state.types)

    const [form, setForm] = useState({
        nombre:"",
        imagen:"",
        vida:"",
        ataque:"",
        defensa:"",
        velocidad:"",
        altura:"",
        peso:"",
        tipo:[]
        
    })

    const [errors, setErrores] = useState({
        nombre:"",
        imagen:"",
        vida:"",
        ataque:"",
        defensa:"",
        velocidad:"",
        altura:"",
        peso:"",
        tipo:[]
        
    })



    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])



    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        const newErrors = validate({ ...form, [property]: value });
        setErrores(newErrors);
        setForm({ ...form, [property]: value });
    };
    
    const handlerSubmit = (e) => {
        e.preventDefault()
        if ( !form.nombre){
            return alert ("No se puede crear un pokemon sin nombre")
        }

        dispatch(postPokemon(form))
        setForm({
            nombre: "",
            vida: 50,
            ataque: 50,
            defensa: 50,
            velocidad: 50,
            altura: 50,
            peso: 50,
            imagen:"",
            tipo: []
        })
        history.push('/home')
        
    }
    
    const typeSelect = (e) => {
        if (form.tipo.length < 2) {
            setForm({
                ...form,
                tipo: [...form.tipo, e.target.value]
            })
        }
    }

    function resetTipos(e) {
        setForm({
            tipo: []
        })
    }

    function validate(form) {
        const newErrors = {
          nombre: "",
          imagen: "",
          vida: "",
          ataque: "",
          defensa: "",
          velocidad: "",
          altura: "",
          peso: "",
          tipo: [],
        };

        if (!form.nombre) {newErrors.nombre = "Se requiere ingresar un nombre";} 
        if (form.nombre.search("[0-9]") !== -1) {newErrors.nombre = "El nombre no debe contener números";}
        if (!/^\d+$/.test(form.vida)){newErrors.vida = "Vida debe ser un valor numerico"}
        if (parseInt(form.vida) > 150 || parseInt(form.vida) < 1) {newErrors.vida = "El valor de vida debe ser entre 1 y 150";}
        if (!/^\d+$/.test(form.ataque)){newErrors.ataque = "Ataque debe ser un valor numerico"}
        if (parseInt(form.ataque) > 150 || parseInt(form.ataque) < 1) {newErrors.ataque = "El ataque debe ser entre 1 y 150";}
        if (!/^\d+$/.test(form.defensa)){newErrors.defensa = "Defensa debe ser un valor numerico"}
        if (parseInt(form.defensa) > 150 || parseInt(form.defensa) < 1) {newErrors.defensa = "La defensa debe ser entre 1 y 150";}
        if (!/^\d+$/.test(form.velocidad)){newErrors.velocidad = "Velocidad debe ser un valor numerico"}
        if (parseInt(form.velocidad) > 150 || parseInt(form.velocidad) < 1) {newErrors.velocidad = "La velocidad debe ser entre 1 y 150";}
        if (form.tipo.length > 2) {newErrors.tipo = "Solo puede seleccionar 2 tipos";}
        if (!/^\d+$/.test(form.altura)){newErrors.altura = "Altura debe ser un valor numerico"}
        if (parseInt(form.altura) > 10 || parseInt(form.altura) < 1) {newErrors.altura = "La Altura debe ser entre 1 y 10 mts";}
        if (!/^\d+$/.test(form.peso)){newErrors.peso = "Peso debe ser un valor numerico"}
        if (parseInt(form.peso) > 100 || parseInt(form.peso) < 1) {newErrors.peso = "El peso debe ser entre 1 y 100 Kgs.";}
        
        return newErrors;
    }



    return(
        <form class={Stile.formulario} onSubmit={(e)=> handlerSubmit(e)}>
            <div id="nombre">
                <label class={Stile.titulo} >Nombre: </label>
                <input 
                    class={Stile.placeholder}
                    placeholder="Nombre del Pokemon"
                    name="nombre"
                    key="nombre"
                    type="text" 
                    valule={form.nombre} 
                    onChange={(e) => changeHandler(e)}     
                />
                {errors.nombre && <p class={Stile.error}>{errors.nombre}</p>}
            </div>
            


            <div>
                <label>Vida: </label>
                <input 
                    class={Stile.placeholder}
                    placeholder="1-150"
                    name="vida"
                    key="vida"
                    type="text"
                    min="0"
                    max="150"
                    valule={form.vida} 
                    onChange={changeHandler} 
                />
                {errors.vida &&<p class={Stile.error}>{errors.vida}</p>}
            </div>


            <div>
                <label>Ataque: </label>
                <input 
                    class={Stile.placeholder}
                    name="ataque"
                    key="ataque"
                    placeholder="1-150"
                    type="text" 
                    min="0"
                    max="150"
                    valule={form.ataque} 
                    onChange={changeHandler} 
                />
                {errors.ataque && <p class={Stile.error}>{errors.ataque}</p>}
            </div>


            <div>
                <label>Defensa: </label>
                <input 
                    class={Stile.placeholder}
                    name="defensa"
                    key="defensa"
                    placeholder="1-150"
                    type="text" 
                    min="0"
                    max="150"
                    valule={form.defensa} 
                    onChange={changeHandler} 
                />
                {errors.defensa && <p class={Stile.error}>{errors.defensa}</p>}
            </div>


            <div>
                <label>Velocidad: </label>
                <input 
                    class={Stile.placeholder}
                    name="velocidad"
                    key="velocidad"
                    placeholder="1-150"
                    min="0"
                    max="150"
                    type="text" 
                    valule={form.velocidad} 
                    onChange={changeHandler} 
                />
                {errors.velocidad && <p class={Stile.error}>{errors.velocidad}</p>}
            </div>

            <div>
                <label>Altura: </label>
                <input 
                    class={Stile.placeholder}
                    name="altura"
                    key="altura"
                    placeholder="Entre 1 y 10 mts"
                    type="text" 
                    min="0"
                    max="10"
                    valule={form.altura} 
                    onChange={changeHandler} 
                />
                {errors.altura && <p class={Stile.error}>{errors.altura}</p>}
            </div>

            <div>
                <label>Peso: </label>
                <input 
                    class={Stile.placeholder}
                    name="peso"
                    key="peso"
                    placeholder="Entre 1 y 100 kgs"
                    type="text"
                    min="0"
                    max="100"
                    valule={form.peso} 
                    onChange={changeHandler} 
                />
                {errors.peso && <p class={Stile.error}>{errors.peso}</p>}
            </div>

            <div>
                <label>Tipo: <select onChange={(e) => typeSelect(e)}>
                        {tipos?.map(type => {
                            return (
                               <option key={type.id} value={type.nombre}>{type.nombre}</option>
                        )
                            })}
                    </select></label>
                <section>               
                    
                    <button onClick={resetTipos} type='button'>Reset Tipos</button>                 
                       
                </section>
                <section>
                          {form.tipo?.map(tipo => {
                            return (
                                <p>{tipo}</p>
                            )
                        })}
                </section>
                <span>{errors.tipo}</span>
            </div>

            <div>
                <label>Imagen</label>
                <input 
                    class={Stile.placeholder}
                    name="imagen"
                    key="imagen"
                    placeholder="Ingresa la Url de tu imagen"
                    type="text"
                    valule={form.imagen} 
                    onChange={(e) => changeHandler(e)} 
                />
                
            </div>
            <button 
                type="submit"
                disabled={
                            errors.altura || 
                            errors.ataque || 
                            errors.imagen || 
                            errors.defensa || 
                            errors.nombre || 
                            errors.peso || 
                            //errors.tipo || 
                            errors.velocidad || errors.vida}
                
                
                >Crear Pokemon</button>
            
        </form>
    )
}

export default Form;