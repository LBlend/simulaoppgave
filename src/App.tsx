import './App.css';

import Header from './components/Header';
import Card from './components/Card';

import jsonData from './data/data.json';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {jsonData.data.map((entry) => (
          <Card key={entry.id} {...entry} />
        ))}
      </main>
    </div>
  );
}

export default App;
