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
  );
};

export default App;
