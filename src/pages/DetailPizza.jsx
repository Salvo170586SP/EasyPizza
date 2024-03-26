import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import data from "../Api/dataPizza";
import { useState } from "react";

function DetailPizza() {
  const { pizzaID } = useParams();
  const pizze = data.filter((pizza) => pizza.id == pizzaID.toString());

  const [selectedSize, setSelectedSize] = useState(pizze[0].size.piccola);  

  const handleChange = (event) => {
    setSelectedSize(event.target.value);  
  };

  const StarRating = (rec) => {
    const stars = [];
    for (let i = 0; i < rec; i++) {
      stars.push(
        <svg
          key={i}
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 text-red-500"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      );
    }

    return <>{stars}</>;
  };

  return (
    <>
      <Navbar />

      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="w-full my-10 lg:w-4/5 mx-auto">
            <Link
              to="/"
              className="select-none rounded-lg bg-yellow-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Torna alla home
            </Link>
          </div>
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded-lg border border-gray-200"
              src={pizze[0].immagine}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {pizze[0].nome}
              </h1>
              <div className="flex  mb-4">
                {StarRating(pizze[0].recensione)}
              </div>
              <span className="font-bold">
                {pizze[0].disponibilità == true
                  ? "Disponibile"
                  : "non disponibile"}
              </span>
              <p className="leading-relaxed mt-3">{pizze[0].descrizione}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex   items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select
                      value={selectedSize}
                      onChange={handleChange}
                      className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10"
                    >
                      <option value={pizze[0].size.piccola}>Piccola</option>
                      <option value={pizze[0].size.familiare}>Familiare</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {selectedSize}€
                </span>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  aggingi al carrello
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailPizza;
