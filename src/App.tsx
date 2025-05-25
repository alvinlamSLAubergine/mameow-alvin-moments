import "./App.css";
import {
  Divider,
  Gallery,
  Header,
  Intro,
  Location,
  Schedule,
} from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="app__content">
        <Header />
        <Divider />
        <Intro />
        <Divider />
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
