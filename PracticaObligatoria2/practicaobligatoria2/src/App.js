import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table/Table";

const netIncomes = [
  { brand: "McDonalds", income: 1291283 },
  { brand: "Burger King", income: 1927361 },
  { brand: "KFC", income: 1098463 },
];

const App = () => {
  return (
    <div className="App">
      <Table servicios={netIncomes} />
    </div>
  );
};

export default App;
