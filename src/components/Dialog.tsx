export default function Dialog({ clickHandler }: { clickHandler: () => void }) {
  return (
    <dialog className="shadow-xl rounded">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="h-64 w-64"></div>
        <button
          onClick={clickHandler}
          className="bg-slate-600 text-white px-2 py-1 rounded"
        >
          Cancel
        </button>
        <button
          onClick={clickHandler}
          className="bg-sky-600 text-white px-2 py-1 rounded"
        >
          Submit
        </button>
      </form>
    </dialog>
  );
}
