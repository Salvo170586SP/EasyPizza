const Jumbotron = () => {
  return (
    <>
      <section
        className="w-full h-[350px] relative text-gray-700 bg-no-repeat	bg-cover bg-center "
        style={{
          backgroundImage:
            "url(https://www.marcobianchi.blog/wp-content/uploads/2023/01/pizza-2048x1365.jpg)",
        }}
      >
        <div
          className="absolute w-full h-full  top-0 bottom-0 left-0 right-0 z-0"
          style={{ backgroundColor: "#00000091" }}
        ></div>
        <div className="flex justify-center items-center text-white  w-full h-full">
          <h1 className="z-10 text-4xl text-bold">Le nostre specialità</h1>
        </div>
      </section>
    </>
  );
};

export default Jumbotron;
