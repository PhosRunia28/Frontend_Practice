import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import ButtonDownload from "./ButtonDownload";
export default function NavBar() {
  const container = useRef();
  const hamburgerRef = useRef(null);
  const tl = useRef(
    gsap.timeline({ defaults: { duration: 0.4, ease: "power1.inOut" } })
  );
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navLink = [
    {
      href: "#",
      title: "Overview",
    },
    {
      href: "#",
      title: "Example",
    },
    {
      href: "#",
      title: "Tour",
    },
    {
      href: "#",
      title: "Blog",
    },
    {
      href: "#",
      title: "Help",
    },
  ];
  useEffect(() => {
    const openNav = () => {
      hamburgerRef.current.classList.toggle("open");
    };
    const hamburger = hamburgerRef.current;

    if (hamburger) {
      hamburger.addEventListener("click", openNav);
      return () => {
        hamburger.removeEventListener("click", openNav);
      };
    }
  }, [isNavOpen]);
  const { contextSafe } = useGSAP(
    () => {
      tl.current.to(".navMobile", {
        y: -200,
        opacity: 0,
      });
    },
    { scope: container }
  );

  const openNavMobile = contextSafe(() => {
    tl.current.reversed(!tl.current.reversed());
    setIsNavOpen(!isNavOpen);
  });
  return (
    <div ref={container}>
      <div className="fixed top-0 inset-x-0 justify-between items-center flex py-4 px-8 lg:px-14 z-40 bg-white/60 backdrop-blur-lg">
        <h2 className="font-bold text-3xl">lobe</h2>
        <div className="bg-gray-200 block md:hidden px-3 py-2 pt-3">
          <div
            className="hamburger cursor-pointer"
            ref={hamburgerRef}
            onClick={openNavMobile}
          >
            <div className="top line"></div>
            <div className="center line"></div>
            <div className="bottom line"></div>
          </div>
        </div>
        <div className="gap-12 hidden md:flex ml-14 ">
          {navLink.map((nav, index) => {
            return (
              <a
                href={nav.href}
                key={index}
                className="text-gray-500 hover:text-black hover:scale-105 transition"
              >
                {nav.title}
              </a>
            );
          })}
        </div>
        <ButtonDownload className="hidden md:inline-block" />
      </div>
      <div className="fixed top-16 inset-x-0 px-9 py-10 bottom-0 md:hidden block navMobile bg-white z-10">
        <div className="flex flex-col gap-10 ">
          {navLink.map((nav, index) => {
            return (
              <a
                href={nav.href}
                key={index}
                className="text-gray-500 text-xl hover:text-black"
              >
                {nav.title}
              </a>
            );
          })}
          <ButtonDownload />
        </div>
      </div>
    </div>
  );
}
