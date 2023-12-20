import { linkHeadersMobile } from "../links";
import SignupButton from "./SignupButton";
export default function NavHeaderMobile() {
  return (
    <div className="navMobile absolute inset-x-0 top-20 -z-10 block h-[90vh] w-full bg-secondary md:hidden">
      <nav>
        <ul className="mt-10 flex flex-col gap-4  px-8">
          {linkHeadersMobile.map((link, index) => {
            return (
              <li key={index}>
                <a
                  href={link.link}
                  className="text-xl font-bold text-primary hover:text-black"
                >
                  {link.name}
                </a>
              </li>
            );
          })}
          <SignupButton
            name="Sign Up for a Free 30-Day Trial"
            className="inline-block bg-secondary py-3 text-black"
          />
        </ul>
      </nav>
    </div>
  );
}
