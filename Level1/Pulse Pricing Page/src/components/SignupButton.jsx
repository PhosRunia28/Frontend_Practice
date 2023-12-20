// eslint-disable-next-line react/prop-types
export default function SignupButton({ name, className }) {
  return (
    <div className="relative max-w-fit border">
      <button
        className={
          className +
          ` relative z-20 border-2 border-primary  px-4 py-1 font-bold text-primary transition hover:-translate-y-1 hover:translate-x-1.5`
        }
        type="button"
      >
        {name}
      </button>
      <div className="absolute inset-0 bg-primary"></div>
    </div>
  );
}
