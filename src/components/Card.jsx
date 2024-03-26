import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, size, immagine, nome, descrizione } = props;

  return (
    <>
      <div className=" relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 hover:shadow-lg shadow-md">
        <div className="relative mx-4 -mt-6 h-[200px] overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          {immagine ? (
            <img
              className="w-full h-full object-cover"
              src={immagine}
              alt={nome}
            />
          ) : (
            <img
              className="w-full h-full object-cover"
              src={immagine}
              alt="placheolder"
            />
          )}
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {nome}
          </h5>
          <div className="flex items-end font-sans text-base font-light leading-relaxed text-inherit antialiased text-2xl">
            {size.piccola}€
          </div>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {descrizione}
          </p>
        </div>
        <div className="p-6 pt-0">
          <Link
            to={`pizze/${id}`}
            className="select-none rounded-lg bg-yellow-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            vedi dettagli
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
