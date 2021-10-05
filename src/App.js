import './App.css';
import Conversor from './components/Conversor';

function App() {
  return (


    <div className="App">

      <h1>Conversor de Moedas</h1>

      <div className="conversor-field">

        <div className="linha">
          <Conversor moedaA="USD" moedaB="BRL" resultSymbol="R$" id="teste"></Conversor>
          <Conversor moedaA="BRL" moedaB="USD" resultSymbol="U$" id="teste"></Conversor>
        </div>

        <div className="linha">
          <Conversor moedaA="CAD" moedaB="BRL" resultSymbol="C$" id="teste"></Conversor>
          <Conversor moedaA="BRL" moedaB="CAD" resultSymbol="C$" id="teste"></Conversor>
        </div>

        <div className="linha">
          <Conversor moedaA="JPY" moedaB="BRL" resultSymbol="R$" id="teste"></Conversor>
          <Conversor moedaA="BRL" moedaB="JPY" resultSymbol="JP$" id="teste"></Conversor>
        </div>

        <div className="linha">
          <Conversor moedaA="EUR" moedaB="BRL" resultSymbol="R$" id="teste"></Conversor>
          <Conversor moedaA="BRL" moedaB="EUR" resultSymbol="€" id="teste"></Conversor>
        </div>


      </div>



    </div>
  );
}

export default App;
