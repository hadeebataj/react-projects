import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data)
  return (
  <main>
    <section classname="container">
      <h3>{people.length} Bithdays Today</h3>
      <List people={people}/>
      <button onClick={() => setPeople([])}>Clear All</button>
      </section>
  </main>
  );
}

export default App;
