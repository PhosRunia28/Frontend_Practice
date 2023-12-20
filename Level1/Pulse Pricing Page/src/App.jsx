import { useGSAP } from "@gsap/react";
import gsap from "gsap/gsap-core";
import { useEffect, useRef, useState } from "react";
import NavHeaderDesktop from "./components/NavHeaderDesktop";
import NavHeaderMobile from "./components/NavHeaderMobile";
import pulseLogo from "./img/pulse-logo.svg";
function App() {
  const container = useRef();
  const tl = useRef();
  const hamburger = useRef();
  useEffect(() => {
    function disableScroll() {
      window.scroll(0, 0);
    }
    function removeScroll() {
      const isBarClick = hamburger.current.classList.toggle("active");
      if (isBarClick) {
        document.body.classList.add("active");
        window.addEventListener("scroll", disableScroll);
      } else {
        document.body.classList.remove("active");
        window.removeEventListener("scroll", disableScroll);
      }
    }
    hamburger.current.addEventListener("click", removeScroll);
    return () => {
      hamburger.current.removeEventListener("click", removeScroll);
    };
  }, []);
  const { contextSafe } = useGSAP(
    () => {
      tl.current = gsap
        .timeline({ defaults: { duration: 0.5, ease: "power1.inOut" } })
        .to(".navMobile", {
          y: -200,
          opacity: 0,
        });
    },
    {
      scope: container,
    },
  );
  const openNavMobile = contextSafe(() => {
    tl.current.reversed(!tl.current.reversed());
  });
  return (
    <div className="font-workSans">
      <header ref={container}>
        <nav className="relative z-30 flex items-center justify-between border-b bg-white px-8 py-4 md:bg-secondary md:pt-9 lg:px-24">
          {/* logo */}
          <div className="">
            <img src={pulseLogo} alt="pulse Logo" className="bg-cover" />
          </div>
          {/* bars 3 */}
          <button
            type="button"
            ref={hamburger}
            onClick={openNavMobile}
            className=" flex flex-col justify-center border py-2 md:hidden"
          >
            <span className="mb-1.5 block h-[3px] w-[2rem] bg-primary"></span>
            <span className="mb-1.5 block h-[3px] w-[2rem] bg-primary"></span>
            <span className="mb-1.5 block h-[3px] w-[2rem] bg-primary"></span>
          </button>
          <NavHeaderDesktop />
          <NavHeaderMobile />
        </nav>
      </header>
    </div>
  );
}

export default App;
