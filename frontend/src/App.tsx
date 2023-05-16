import "./App.css";
import { AnnouncementBar } from "./layout/AnnouncementBar";
import { Container } from "./layout/Container";
import { CopyRightsFooter } from "./layout/CopyRightsFooter";

function App() {
  return (
      <Container>
          <AnnouncementBar message="Hello World" />
          <CopyRightsFooter message="© 2023 powered by LetsDoIt" />
      </Container>
  );
}

export default App;
