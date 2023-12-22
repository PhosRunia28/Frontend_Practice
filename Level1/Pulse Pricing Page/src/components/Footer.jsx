import pulseLogo from "../img/pulse-logo.svg";
import { COMPANY, PRODUCT, RESOURCES } from "../js/links";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <footer className="bg-footer px-6 pb-20 pt-14 lg:px-10 lg:py-20 xl:px-24">
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
        <div className="mb-6 flex flex-col">
          <div className="mb-8">
            <img
              src={pulseLogo}
              alt="Pulse Logo"
              className="mx-auto bg-cover lg:mx-0"
            />
          </div>
          <div className="relative md:mx-auto md:max-w-fit">
            <button
              className={`relative z-20 mx-auto w-full border border-primary bg-primary px-8 py-4 font-bold text-white transition hover:-translate-y-1  hover:translate-x-1.5`}
              type="button"
            >
              Sign Up for a Free 30-Day Trial
            </button>
            <div className="absolute inset-0 bg-info"></div>
          </div>
        </div>
        <div className="flex gap-16 sm:justify-center sm:gap-24 md:gap-32 lg:gap-24">
          <FooterLink title="Product" links={PRODUCT} />
          <FooterLink title="Company" links={COMPANY} />
          <FooterLink title="Resources" links={RESOURCES} />
        </div>
      </div>
    </footer>
  );
}
