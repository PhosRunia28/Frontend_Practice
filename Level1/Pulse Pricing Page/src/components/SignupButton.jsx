// eslint-disable-next-line react/prop-types
export default function SignupButton({ name, className, back, fit }) {
  return (
    <div className={fit ? `relative max-w-fit` : `relative`}>
      <button
        className={
          `relative z-20 border-2 border-primary px-4 py-1 font-bold text-primary transition hover:-translate-y-1 hover:translate-x-1.5 ` +
          className
        }
        type="button"
      >
        {name}
      </button>
      <div className={`absolute inset-0 ` + back}></div>
    </div>
  );
}
