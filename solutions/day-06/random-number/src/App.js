
import './App.css';
import population from './components/population'
import Header from './components/header'
import React, { useEffect, useState} from 'react'

function App() {

  const [handlerMenu, setHandlerMenu] = useState('');
  const [theme, setTheme] = useState('light');
  function numberGenerator() {
    const numbers = [];
    for (let index = 0; index < 30; index++) {
      const element = Math.floor(Math.random() * 10);
      // console.log(element);
      numbers.push(element);
    }
    // console.log(numbers)
    return(
      <div className="numbers">
        {
          
        numbers.map((num) => <div className="numberContainer" data-numbers= {(num % 2 === 0)? "even":   "odd" }  >{num}</div>)
        
        }
      </div>
    )
  }
  const colorGenerator = () => {
    function paletteGenerator() {
      let colors = []
      let characters = '0123456789ABCDEF';
      var color = '#';
      for (var x = 0; x < 32; x++) {
          for (var i = 0; i < 6; i++) {
              color += characters[Math.floor(Math.random() * 16)];
          }
          colors.push(color);
          var color = '#';
          console.log(colors)
      }
      return colors;
   }
   paletteGenerator();
    return(
      <div className='colorsContainer'>
        {
          paletteGenerator().map((palette) => <div style={{backgroundColor: palette}}>{palette}</div>)
        }
      </div>
    )
  }
  const worldPopulations = () => {
    return(
      <div className="countryList">
       {population.map((country) => <div className="country__"><h1>{
        (country.country !== "United States of America")
        ? country.country 
        : (country.country === "Russian Federation")
        ? "Russian"  
        : "América"
        
        } </h1> 
        <div className="population__bar">
          <div className="progress__population" style={{width:( 100 * country.population / 7693165599) + "%"}}></div>
        </div> 
        <p>{country.population}</p></div> )}
        
      </div>
    )
  }

  const ModalContainer = (props) => {
    return (
      <div id="modalContainer" ><h1 className="title">{props.handlerMenu}</h1>
       {(props.handlerMenu === "number generator")
       ? numberGenerator()
       : null
       }
       {(props.handlerMenu === "color randomizer")
       ? colorGenerator()
       : null
       }
       {(props.handlerMenu === "world populations")
       ? worldPopulations()
       : null
       }
      </div>
     
    )
  }
  useEffect(() => {

  }, [])
  return (
    <div className="App" style={(theme === 'light')? {backgroundColor: "#f2f2f2"  } : {backgroundColor: "#1E2140" , color : "white"}}>
      <Header
        handlerMenu = {handlerMenu}
        setHandlerMenu = {setHandlerMenu}
        theme = {theme}
        changeTheme = {setTheme}
      />
      <ModalContainer 
        handlerMenu= {handlerMenu}
      />
    </div>
  );
}

export default App;
