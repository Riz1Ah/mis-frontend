import './AppV5.css';
import Navbar from './components/NavBarV2';
import TokenTable from './components/TokenTable';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5">
        <TokenTable />
      </div>
    </div>
  );
}

export default App;
