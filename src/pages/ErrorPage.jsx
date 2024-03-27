import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function ErrorPage() {
  return (
    <>
    <Navbar />
      <section className="flex flex-col  justify-center items-center py-20">
        <div className="flex flex-col justify-center  items-center my-10 border-2 border-slate-200 rounded-lg px-5 py-2">
          <h2 className="text-5xl font-bold">Error 404</h2>
          <p className="text-lg font-bold">Page not found</p>
        </div>
        <Link
          to="/"
          className="select-none rounded-lg bg-yellow-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Torna alla home
        </Link>
      </section>
    </>
  );
}

export default ErrorPage;
