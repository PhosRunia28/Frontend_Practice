import subvert from "../img/subvert-avatar.png";
import { basics } from "../js/plancard";
import Card from "./Card";

export default function Main() {
  return (
    <main className="bg-secondary px-6 pb-20 pt-4 lg:px-10 xl:px-24">
      <section className="mt-4 md:mt-6">
        <h2 className="mb-6 text-[2.9rem] font-bold leading-none md:max-w-xl md:text-6xl lg:mx-auto lg:text-center">
          Try Pulse free for 30 days.
        </h2>
        <p className="max-w-prose text-lg text-gray-600 lg:mx-auto lg:mb-20 lg:max-w-xl lg:text-center">
          See why Pulse is the best way to monitor your cash flow. Sign up for
          any plan and try Pulse absolutely free for 30 days.
        </p>
      </section>
      <section className="lg:flex lg:items-center lg:justify-center xl:px-10">
        <div className="lg:px-10">
          <h3 className="ml-2 mt-4 text-xl font-bold text-primary lg:ml-0 lg:text-lg">
            These are what we call the Pulse Basics. They`re what every customer
            gets.
          </h3>
          <ul className="ml-10 mt-3 list-disc space-y-1 text-gray-600 lg:ml-5">
            {basics.map((basic, index) => {
              return <li key={index}>{basic.name}</li>;
            })}
          </ul>
          <div className="my-5">
            <p className="text-gray-600">Just need the Pulse Basics?</p>
            <p className="text-gray-600">
              <a href="#" className="pr-1 underline">
                Get them now
              </a>
              for $29 per month.
            </p>
          </div>
        </div>
        {/* cards */}
        <Card
          title="Small Business Plan"
          price="59"
          btn="Sign Up Now"
          premium={false}
        />
        <Card
          title="Unlock Extra Features"
          price="89"
          btn="Try Premium"
          premium={true}
        />
      </section>
      <section className="mt-24">
        <div className=" mx-auto flex max-w-xl flex-col justify-center text-center lg:max-w-3xl">
          <div className=" w-full">
            <img
              src={subvert}
              alt="Subvert Logo"
              className="mx-auto bg-cover"
            />
          </div>
          <p className="my-6 text-2xl leading-relaxed">
            “Pulse is worth every penny because it empowers business owners with
            critical financial insight and knowledge.”
          </p>
          <small className="text-xs font-bold uppercase text-primary ">
            SUBVERT MARKETING, INC.
          </small>
        </div>
      </section>
    </main>
  );
}
