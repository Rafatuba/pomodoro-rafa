import Container from "./components/Container";
import Heading from "./components/Heading";
import "./styles/global.css";
import "./styles/theme.css";

export default function App() {
  return (
    <>
      <Container>
        <Heading>MENU</Heading>
      </Container>
      <Container>
        <Heading>OPÇÕES</Heading>
      </Container>
    </>
  );
}
