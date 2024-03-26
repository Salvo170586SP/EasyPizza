import { Link } from "react-router-dom";

function ErrorPage() {
    return (
      <>
        <section className="flex flex-wrap justify-center align-center gap-10  mx-5 my-20">
          <h2>Error 404 page not found</h2>
          <Link to='/'>Torna alla home</Link>
        </section>
      </>
    );
  }
  
  export default ErrorPage;