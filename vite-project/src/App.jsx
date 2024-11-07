import { Greeting } from "./components/Greeting";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";

const App = () => {
  return (
    <div>
      <Weather />
      <UserStatus loggedIn={true} isAdmin={true} />
      <Greeting timeOfDay={"Moring"} />
    </div>
  )
};

export default App;