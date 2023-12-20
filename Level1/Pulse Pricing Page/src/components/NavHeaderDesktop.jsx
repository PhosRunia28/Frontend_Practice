import { linkHeadersDesktop } from "../links";
import SignupButton from "./SignupButton";
export default function NavHeaderDesktop() {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-10">
        {linkHeadersDesktop.map((link, index) => {
          return (
            <li key={index}>
              <a
                href={link.link}
                className="font-bold text-primary hover:text-black"
              >
                {link.name}
              </a>
            </li>
          );
        })}
        <SignupButton name="Sign Up" className="bg-secondary text-primary" />
      </ul>
    </nav>
  );
}
