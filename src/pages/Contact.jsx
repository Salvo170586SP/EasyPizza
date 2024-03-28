import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const isSend = (e) => {
    e.preventDefault();

    if (email !== "" && description !== "") {
      setLoading(true);
    }

    setEmail("");
    setDescription("");

    if (email == "" && email !== "@" && description == "") {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };

  const isClose = () => {
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <section className="flex flex-col flex-wrap justify-center items-center w-full px-5 py-32">
        <Link
          to="/"
          className="select-none rounded-lg bg-yellow-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Torna alla home
        </Link>
        <h2 className="font-bold text-2xl my-3">Prenota</h2>
        <p className="mb-5">
          Inviaci una mail elecando le tue pizze che desideri, ti risponderemo
          il prima possibile
        </p>

        <div className=" w-full ">
          <form onSubmit={isSend} className="w-full md:px-40">
            <div className="flex flex-col mb-3 w-full">
              <label htmlFor="mail">La tua email:</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="mail"
                className={`${error == true ? "border-red-500" : ""}  shadow-md p-2 border-2 border-yellow-500 rounded-lg focus:outline-none focus-visible:border-yellow-400 w-full `}
              />
              <span className="text-red-500 font-bold mt-1">{error == true ? "la mail è obbligatoria" : ""}</span>
            </div>

            <div className="flex flex-col">
              <label htmlFor="description">Testo:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={10}
                className={`${error == true ? "border-red-500" : ""}  shadow-md border-2 p-2 border-yellow-500 rounded-lg focus:outline-none focus-visible:border-yellow-400 `} 
                id="description"
              ></textarea>
              <span className="text-red-500 font-bold mt-1">{error == true ? "il testo è obbligatorio" : ""}</span>
            </div>

            <button className="select-none mt-5 rounded-lg bg-yellow-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              invia
            </button>
          </form>
          <div
            className={`${
              loading == true ? "block" : "hidden"
            } md:mx-40 p-2 rounded-lg border-2 border-yellow-500 bg-yellow-400 flex justify-between items-center mt-5`}
          >
            <span className="font-bold w-full text-center">
              {loading == true ? "EMAIL INVIATA" : ""}
            </span>
            <button
              className="bg-gray-600 text-white rounded-md p-4 flex items-center justify-center h-[20px] w-[20px]"
              onClick={isClose}
            >
              X
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
