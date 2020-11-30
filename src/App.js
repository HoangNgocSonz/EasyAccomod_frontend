import Navbar from "./component/Navbar";
import Register from "./component/register";
import Login from "./component/login";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Login></Login>
      <Register></Register>
    </div>
  );
}

export default App;
