import Navbar from "../components/Navbar";
import img from "../assets/imgs/1662892761900.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Navbar />
      <section className="flex flex-wrap justify-center align-center gap-10  px-5 py-32">
        <Link
          to="/"
          className="select-none rounded-lg bg-yellow-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Torna alla home
        </Link>
        <div className="bg-slate-50 border border-slate-300 p-3 rounded-lg flex">
          <img src={img} alt="img" className="rounded-lg" />
          <div className="p-5">
            <div className="my-5">
              <div className="text-xl font-bold">Salvatore Pitanza</div>
              <div>Età: 37</div>
              <div>Specializzando in: Laravel, Mysql, React</div>
            </div>
            <h2 className="text-2xl font-bold mb-5">Chi Siamo?</h2>
            <p>
              In realtà sono solo io 😄. <br />
              Questa è un applicazione demo realizzata con React da me, mettendo
              in pratica le mie conoscenze da junior full stack web developer.
              Il progetto prende dati da un array interno, non fa uso di
              chiamate esterne, ma nonostante avendo un bagaglio di esperienza
              con Laravel e il back office, sono in grado anche di sviluppare
              secondo le diverse esigenze un front-end e una UX con le più
              moderne tecnologie in uso come Tailwind e Bootstrap.
            </p>
            <p className="mt-5">
              Il codice sorgente di questa demo è disponibile{" "}
              <a
                target="_blank"
                className="font-bold"
                href="https://github.com/Salvo170586SP/EasyPizza.git"
              >
                qui
              </a>{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
