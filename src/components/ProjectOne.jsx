import { NavLink } from "react-router-dom";

export default function ProjectOne(props) {
  return (
    <li className="project">
      <NavLink to={`/project/` + props.id}>
        <img src={props.img} alt={props.title} className="project__img" />
        <h3 className="project__title">{props.title}</h3>
      </NavLink>
    </li>
  );
}
