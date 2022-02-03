import {useState} from 'react'
import './app.css'

export default function App(){

  function darkModeStart(){
    let btnDark = document.querySelectorAll('.ball, .dark, .app, h1, h2, input, button, span')
    btnDark.forEach((item)=>{
      item.classList.toggle('active')
    })
  }
  

  const [peso, setPeso] = useState("")
  const [altura, setAltura] = useState("")
  const [mensagem, setMensagem] = useState("")
  const [dark, setDark] = useState("")

  function calcularIMC() {
    const alt = altura/100
    const imc = peso /(alt * alt)
    const imcFinal = imc.toFixed(1)

   if(imc < 18.6){
      setMensagem(`Seu IMC é ${imcFinal}! Você está abaixo do peso ideal.`)
    } else if (imc >= 18.8 && imc <24.9){
      setMensagem(`Seu IMC é ${imcFinal}! Você está com o peso ideal.`)
    } else if (imc >= 24.9 && imc <34.9){
      setMensagem(`Seu IMC é ${imcFinal}! Você está acima do peso ideal.`)
    } else if (imc > 34-9){
      setMensagem(`Seu IMC és ${imcFinal}! Você está em estado de obesidade!`)
    }
  }


  return(
    <div className="app">
        <div className="darkModeArea">
          <div className="light"> 
                <picture>☀️</picture>
          </div>
          <div className="dark"> 
                <div className="ball" onClick={darkModeStart}></div>
          </div>
          <div className="moon"> 
                <picture>🌛</picture>
          </div>
        </div>

        <h1>Calculadora IMC</h1>
        <span>Vamos calcular o seu IMC</span>

        <div className="area-input">
        <input 
        type="text" 
        keyboardType = 'numeric'
        placeholder="Peso em kg (Ex: 90)"
        value={peso}
        onChange={(e)=> setPeso(e.target.value)}
        />
        <input 
        type="text" 
        placeholder="Altura em cm (Ex: 180)"
        value={altura}
        onChange={(e)=> setAltura(e.target.value)}
        />

        <button onClick={calcularIMC}>
          Calcular
        </button>

        <h2>
          {mensagem}
        </h2>

       
        <span className="aboutMe">
          About me:
        </span>
        <div className="social">
          <a href="https://github.com/juliomacedo89" className="img-socialNone">
            <img src="img/github.png" alt="Github"  />
          </a>
          <a href="https://www.linkedin.com/in/j%C3%BAlio-macedo-6ab034180/">
            <img src="img/linkedin.png" alt="Linkedin" className="img-social" />
          </a>
        </div>
      </div>
    
    
    
    
    
    
    
    
    </div>

    
    
  )
}
