import "./App.css";
import { useState } from "react"

function App() {

  const [clickCount, setClickCount] = useState(0)
  const [enableBtn, setEnableBtn] = useState(true)
  const [data, setData] = useState([])
  const [heroes, setHeroes] = useState([])

  function addHero(heroObj) {
    setHeroes(heroes.concat(heroObj))
  }

  function handleClick() {
    if (data.length === 0) {
      fetch('http://localhost:4000/api/users')
      .then(res => res.json())
      .then(json => {
        addHero(json.user[clickCount])
        return setData(json.user)
      })
      .catch(error => console.error("Erro: ", error))
      
      setClickCount(clickCount+1)
    }
    else {
      addHero(data[clickCount])
      setClickCount(clickCount+1)
      if (heroes.length === data.length - 1) setEnableBtn(false)
    }
  }

  return (
    <div className="App">
      <h2>Me contrata :D</h2>
      <button className="fetchBtn" onClick={handleClick} disabled={!enableBtn}>Fetch</button>
      <div className="result">
        {
        heroes.map(hero => {
            return <div key={hero.id} className="heroCard">
                      <img className="heroImg" src={hero.image} alt="" />
                      <h3 className="heroTitle">{hero.name}</h3>
                   </div>
          })
        }     
      </div>
    </div>
  );
}

export default App;
