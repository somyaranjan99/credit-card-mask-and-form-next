import "./styles.css";
import { maskCreditcard } from "./Maskcreditcardconvert";
import Multistepform from "./Multistepform";
export default function App() {
  return (
    <div className="App">
      {maskCreditcard("566727727277ddd888")}
      <Multistepform />
    </div>
  );
}
