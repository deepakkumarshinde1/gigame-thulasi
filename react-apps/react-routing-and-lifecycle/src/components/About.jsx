import { Link, useNavigate } from "react-router-dom";

function About() {
  let navigate = useNavigate();
  return (
    <div>
      About <Link to="/">Home</Link>
      <button onClick={() => navigate("/contact")}>Contact</button>
    </div>
  );
}

export default About;
