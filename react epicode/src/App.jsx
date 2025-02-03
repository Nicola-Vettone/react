import Img from "../components/galleria";
import Button from "../components/button";
import "./App.css";

function App() {
  return (
    <>
      <Img></Img>
      <Button className="button" onClick="invia" text="Ciao"></Button>
    </>
  );
}

export default App;
