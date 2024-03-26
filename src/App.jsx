import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import data from "./Api/dataPizza";
import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [dataPizza, setDataPizza] = useState(data);
  const [name, setName] = useState("");

  const pizzeFiltrate = dataPizza.filter((item) =>
    item.nome.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Jumbotron />
      <div
        className="w-full flex  flex-col sticky top-[60px] bg-white  justify-center items-center   py-6 border border-slate-100"
        style={{ zIndex: "3" }}
      >
        <input
          className="shadow-lg px-10 py-6 border-2 border-yellow-500 rounded-lg text-3xl h-[70px] focus:outline-none   focus-visible:border-yellow-400 "
          type="text"
          value={name}
          placeholder="cerca pizza..."
          onChange={(e) => setName(e.target.value)}
        />
        <div className="my-3">
          Risultati di ricerca: {pizzeFiltrate.length} pizze in lista
        </div>
      </div>
      <div className="flex flex-wrap justify-center align-center gap-10  px-5 py-20">
        {pizzeFiltrate.length > 0 ? (
          pizzeFiltrate.map((item, id) => <Card key={id} {...item} />)
        ) : (
          <div className="text-base font-light leading-relaxed text-inherit antialiased">
            La pizza che cerchi non è al momento disponibile
          </div>
        )}
      </div>
    </>
  );
}

export default App;
