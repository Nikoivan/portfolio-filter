import Masonry from "react-responsive-masonry";

export default function ProjectList({ props }) {
  return (
    <Masonry columnsCount={3} gutter="10px">
      {props.map((el, idx) => (
        <img
          src={el.img}
          alt={el.category}
          key={idx}
          style={{ width: "100%", display: "block" }}
        />
      ))}
    </Masonry>
  );
}
