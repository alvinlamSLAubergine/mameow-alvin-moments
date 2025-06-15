import "./App.css";
import {
  Divider,
  Gallery,
  Header,
  Intro,
  Location,
  Schedule,
} from "./components";
import { Title } from "./components/title/Title";

const App = () => {
  return (
    <div className="app">
      <div className="app__content">
        <Title />
        <Header />
        <Divider />
        <Intro />
        <Schedule />
        <Divider />
        <Location />
        <Divider />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
