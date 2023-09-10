import "./css/toolbar.css";

export default function Toolbar({ props }) {
  const { filters, selected, onSelectFilter } = props;

  return (
    <ul className="filter-list">
      {filters.map((el, idx) => (
        <li
          onClick={() => onSelectFilter(el)}
          className={el === selected ? "filter-item selected" : "filter-item"}
          key={idx}
        >
          {el}
        </li>
      ))}
    </ul>
  );
}
