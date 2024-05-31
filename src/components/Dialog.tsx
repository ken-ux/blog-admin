export default function Dialog({ clickHandler }: { clickHandler: () => void }) {
  return (
    <dialog className="shadow-xl rounded p-4 min-w-96">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            className="border px-2 py-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="text">Text:</label>
          <textarea id="text" name="text" className="border px-2 py-1" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="timestamp">Timestamp:</label>
          <input
            type="date"
            id="timestamp"
            name="timestamp"
            className="border px-2 py-1"
          />
        </div>
        <div className="flex gap-2 items-center">
          <legend>Publish:</legend>
          <input
            type="radio"
            id="published_true"
            name="published"
            value="true"
            className="border"
          />
          <label htmlFor="published_true">True</label>
          <input
            type="radio"
            id="published_false"
            name="published"
            value="false"
            className="border"
          />
          <label htmlFor="published_false">False</label>
        </div>

        <div className="self-end">
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
        </div>
      </form>
    </dialog>
  );
}
