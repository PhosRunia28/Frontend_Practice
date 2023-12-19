// eslint-disable-next-line react/prop-types
export default function ButtonDownload({ className }) {
  return (
    <button
      type="button"
      className={
        className +
        ` rounded-full font-bold bg-green-500 text-white py-2 px-8 text-xl hover:scale-105 transition`
      }
    >
      Download
    </button>
  );
}
