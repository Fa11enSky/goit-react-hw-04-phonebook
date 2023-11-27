import css from './filter.module.css';
const Filter = ({ handleInput }) => {
  return (
    <label className={css.filter_label}>
      Find Your contacts by name
      <input
        type="text"
        name="filter"
        placeholder="Search"
        onInput={handleInput}
      />
    </label>
  );
};

export default Filter;
