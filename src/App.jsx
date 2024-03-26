import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import data from "./Api/dataPizza";
import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [dataPizza, setDataPizza] = useState(data);
  const [name, setName] = useState("");

 
  const pizzeFiltrate =  dataPizza.filter(item => item.nome.toLowerCase().includes(name.toLowerCase()))
 
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="flex flex-col   justify-center items-center  px-5 py-10">
        <div className="flex  flex-col   justify-center items-center ">
          <input
            className="shadow-lg px-10 py-5 border-2 border-yellow-500 rounded-lg text-3xl h-[80px] focus:outline-none   focus-visible:border-yellow-400 "
            type="text"
            value={name}
            placeholder="cerca pizza..."
            onChange={(e) => setName(e.target.value)}
          />
          <div className="my-3">Risultati di ricerca: {pizzeFiltrate.length} pizze in lista</div>
         </div>
        <div className="flex flex-wrap justify-center align-center gap-10  px-5 py-20">
          {pizzeFiltrate.length > 0 ? pizzeFiltrate.map((item, id) => (
            <Card key={id} {...item} />
          )) : <div className="text-base font-light leading-relaxed text-inherit antialiased">La pizza che cerchi non è al momento disponibile</div> 
          
          }
        </div>
      </div>
    </>
  );
}

export default App;
