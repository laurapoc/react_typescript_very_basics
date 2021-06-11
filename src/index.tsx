import ReactDOM from "react-dom";
import UserSearch from "./refs/UserSearch";
// import UserSearch from "./classes/UserSearch";
// import EventComponent from "./events/EventComponent";
// import UserSearch from "./state/UserSearch";
// import GuestList from "./state/GuestList";

const App = () => {
  return (
    <div>
      {/* <GuestList /> */}
      {/* <UserSearch /> */}
      {/* <EventComponent /> */}
      {/* <UserSearch users={[]} /> */}
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
