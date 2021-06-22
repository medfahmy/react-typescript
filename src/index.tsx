import ReactDOM from "react-dom";
import UserSearch from "./refs/UserSearch";
// import EventComponent from "./events/EventComponent";
// import UserSearch from "./state/UserSearch";

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
