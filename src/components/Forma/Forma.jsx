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
    <form onSubmit={handleSubmit}>
      <input name="search" required autoFocus />
      <button type="submit">Search</button>
    </form>
  );
};

export default Forma;
