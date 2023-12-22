/* eslint-disable react/prop-types */
import { Fragment } from "react";
export default function FooterLink({ title, links }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-xl font-bold text-white">{title}</h4>
      {links.map((link, index) => {
        return (
          // eslint-disable-next-line react/jsx-no-undef
          <Fragment key={index}>
            <ul className="space-y-3 text-primary">
              <li>
                <a
                  href={link.link}
                  className=" inline-block w-full max-w-[8ch] text-lg hover:text-white lg:max-w-none"
                >
                  {link.name}
                </a>
              </li>
            </ul>
          </Fragment>
        );
      })}
    </div>
  );
}
