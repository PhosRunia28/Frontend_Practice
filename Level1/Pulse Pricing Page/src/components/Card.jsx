import { extra, small } from "../js/plancard";
// eslint-disable-next-line react/prop-types
export default function Card({ title, price, btn, premium }) {
  return (
    <div className="mt-8 rounded-xl lg:w-full xl:max-w-md">
      <a href="#" className="group">
        {premium ? (
          <div className=" border bg-info px-5 py-6 text-center">
            <h3 className="text-sm text-gray-500">
              Complex business with multiple financial accounts, currencies, or
              auditing needs?
            </h3>
          </div>
        ) : (
          <div className="rounded-t-xl bg-primary py-2 text-center">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              recommended
            </h3>
          </div>
        )}
        <div className="border border-primary bg-white px-4 py-3">
          <div className="mb-4 items-center sm:flex lg:block lg:text-center">
            {premium ? (
              <h3 className="text-4xl text-primary lg:mx-auto lg:w-full lg:max-w-xs">
                {title}
              </h3>
            ) : (
              <h3 className="text-4xl font-bold text-primary lg:mx-auto lg:w-full lg:max-w-xs lg:pt-8 lg:text-5xl">
                {title}
              </h3>
            )}
            <p className="ml-2 mt-1 text-2xl text-gray-400">
              ${price} per Month
            </p>
          </div>
          <button
            className="mx-auto hidden max-w-fit bg-green-500 px-8 py-3 text-center text-xl font-bold text-gray-700 transition group-hover:scale-110 group-hover:text-black  lg:block"
            type="button"
          >
            {btn}
          </button>
          <div className="mt-8 lg:mt-12 lg:px-4">
            {premium ? (
              <h4 className="text-xs font-bold uppercase tracking-widest lg:text-center">
                You Get it all, plus :
              </h4>
            ) : (
              <h4 className="text-xs font-bold uppercase tracking-widest lg:text-center">
                You get pulse basics, plus :
              </h4>
            )}

            <ul className="mb-10 mt-8 space-y-3 leading-5 text-gray-500 lg:mt-4 lg:space-y-5">
              {premium
                ? extra.map((extra, index) => {
                    return (
                      <div className="flex" key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-5 w-5 text-primary "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <li className="flex-1">{extra.name}</li>
                      </div>
                    );
                  })
                : small.map((small, index) => {
                    return (
                      <div className="flex" key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-5 w-5 text-primary "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <li className="flex-1">{small.name}</li>
                      </div>
                    );
                  })}
            </ul>
            <button
              className="w-full bg-green-500 px-8 py-3 text-center text-xl font-bold text-gray-700 group-hover:text-black lg:hidden"
              type="button"
            >
              {btn}
            </button>
          </div>
        </div>
      </a>
    </div>
  );
}
