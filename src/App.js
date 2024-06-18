
import "./App.css";
import BarChart from "./Charts/BarChart";
import PieChart from "./Charts/PieChart";
import LineChart from "./Charts/LineChart";


function App() {
  return (
    <div className="App">
      <h1>
        Paridad peso/dolar
      </h1>
      <BarChart />
      <h1>Indicadores mas importantes de la bolsa de valores</h1>
      <PieChart />
      <h1>Comparativa entre la bolsa de valores mexicana y la bolsa de valores estadounidense</h1>
      <LineChart />
  
    </div>
  );
}

export default App;
