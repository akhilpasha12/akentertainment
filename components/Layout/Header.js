import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function MobileNav({ open, setOpen }) {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <div
      className={`absolute top-0 right-0 lg:h-[300px] md:h-[300px] h-screen lg:w-[20%] md:w-[20%] w-[100%] bg-[#000]  transform ${
        open ? "-translate-y-0 " : "-translate-y-full "
      } transition-transform duration-300 ease-in-out  zindexT 
        `}
    >
      <div className="flex flex-col justify-center items-center mt-24 lg:mt-20 md:mt-20 ">
        <div className="">
          <ul className="flex flex-col gap-6 tracking-wide lg:flex-col lg:gap-4 lg:text-base md:flex-col md:gap-4 md:text-base astro-ES6RJE63">
            <p className="astro-ES6RJE63">
              <Link href={"/"} legacyBehavior>
                <a
                  className={` block transition md:px-4 astro-ES6RJE63 ${
                    currentRoute === "#"
                      ? "text-[#ff0000] "
                      : "  text-[#ff0000]"
                  }`}
                >
                  <span className="astro-ES6RJE63  text-base font-bold uppercase">
                    Home
                  </span>
                </a>
              </Link>
            </p>
            <p className="astro-ES6RJE63">
              <Link href={"#"} legacyBehavior>
                <a
                  className={` block transition md:px-4 astro-ES6RJE63 ${
                    currentRoute === "#" ? " text-[#ff0000] " : " text-[#fff]"
                  }`}
                >
                  <span className="astro-ES6RJE63 text-base  font-bold uppercase">
                    Services
                  </span>
                </a>
              </Link>
            </p>
            <p className="astro-ES6RJE63">
              <Link href={"#"} legacyBehavior>
                <a
                  className={` block transition md:px-4 astro-ES6RJE63 ${
                    currentRoute === "#" ? " text-[#ff0000] " : "  text-[#fff]"
                  }`}
                >
                  <span className="astro-ES6RJE63  text-base font-bold uppercase">
                    Gallery
                  </span>
                </a>
              </Link>
            </p>
            <p className="astro-ES6RJE63">
              <Link href={"#"} legacyBehavior>
                <a
                  className={` block transition md:px-4 astro-ES6RJE63 ${
                    currentRoute === "#" ? " text-[#ff0000] " : "  text-[#fff]"
                  }`}
                >
                  <span className="astro-ES6RJE63  text-base font-bold uppercase">
                    Events
                  </span>
                </a>
              </Link>
            </p>
            <p className="astro-ES6RJE63">
              <Link href={"#"} legacyBehavior>
                <a
                  className={` md:px-4 astro-ES6RJE63 ${
                    currentRoute === "#" ? " text-[#ff0000] " : "  text-[#fff]"
                  }`}
                >
                  <span className="astro-ES6RJE63 text-base  font-bold uppercase">
                    Contact
                  </span>
                </a>
              </Link>
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="lg:px-24 px-8 py-5 bg-[#000] ">
      <div className="grid grid-cols-7   ">
        <div className=" flex justify-center col-span-6 ">
          <a href="/" aria-label="logo">
            <span className="text-xl  lg:text-2xl md:text-2xl  text-white uppercase  logoText">
              AK Entertainments
            </span>
          </a>
        </div>

        <div className="flex justify-end col-span-1 ">
          <MobileNav open={open} setOpen={setOpen} />
          <div className="flex items-center">
            <div
              className="group z-20 relative w-6 h-6 cursor-pointer flex-col justify-between items-center flex"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {/* hamburger button */}
              <span
                className={`h-1 w-full bg-[#fff] rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
                  open ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`h-1  bg-[#fff] rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
                  open ? "w-0" : "w-full"
                }`}
              />
              <span
                className={`h-1 w-full bg-[#fff] rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
                  open ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
