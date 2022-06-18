import { useParams } from "react-router-dom";

const WelcomePage = () => {
  const { name } = useParams();

  return <div>안녕하세요, {name}님!</div>;
};

export default WelcomePage;
