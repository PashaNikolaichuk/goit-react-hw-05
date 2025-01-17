import s from "./Forma.module.css";

const Forma = ({ addNewMovies }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const searchValue = event.target.elements.search.value.trim();

    if (searchValue) {
      addNewMovies(searchValue);
    }

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={s.forma}>
      <input
        name="search"
        required
        autoFocus
        className={s.formaInput}
        placeholder="Enter movie which you want find"
      />
      <button className={s.formaBtn} type="submit">
        Search
      </button>
    </form>
  );
};

export default Forma;
