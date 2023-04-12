import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  
  const searchMonsters = (e) => {
      let searchValue = e.target.value;
      setSearchValue(searchValue);
  };

  useEffect(() => {
    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    setFilteredMonsters(filteredMonster)
  }, [monsters, searchValue]) //So if state is not given to filteredMonsters(it is just a filter assigned to a value), it will keep building the monsters
  // array because the sfc are called for every render. in this approach, we assign filteredmonster state so that it only gets called
  // when the state changes. 
  // give useEffect the dependencies on what will change so it knows when to run
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => setMonsters(users))
  }, []);

  return (
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox
        className='search-box'
        placeHolder="Search monsters..." 
        onChangeHandler={searchMonsters}
      />
      <CardList
      monsters={filteredMonsters}
       />
    </div>
  );
}

export default App;
