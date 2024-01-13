import Card from "./components/Card";
import NavBar from "./components/Nav_bar";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App" style={{fontFamily: 'Poppins',}}>
      <NavBar />
      <Card/>
    </div>
  );
}

export default App;
