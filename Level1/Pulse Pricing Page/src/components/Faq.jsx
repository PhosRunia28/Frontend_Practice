import { FAQS } from "../js/faq";
export default function Faq() {
  return (
    <section className="px-6 pb-16 md:pt-9 lg:px-10 xl:px-24">
      <h3 className="py-8 text-4xl font-bold uppercase lg:text-5xl">Faq</h3>
      <div className="flex flex-col gap-10  md:grid md:grid-cols-2">
        {FAQS.map((faq, index) => {
          return (
            <div key={index}>
              <h4 className="text-xl font-bold">{faq.question}</h4>
              <p className="text-lg text-gray-500 ">{faq.answer}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
