function Footer() {
  return (
    <>
      <section className="bg-black ">
        <div className="lg:px-6 lg:py-20 md:px-6 md:py-20 px-10 py-10">
          <div className="">
            <div>
              <h1 className="lg:text-6xl md:text-6xl text-3xl text-center text-white font-bold">Footer</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#000] border-t border-[#ff0000]">
        <div className="lg:px-20 lg:py-4 px-6 py-4">
          <div className="flex justify-center items-center">
            <p className="text-[#fff] font-medium text-sm lg:text-base md:text-base">
              © 2023 Ak Entertainments.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
