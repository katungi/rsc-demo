import React, {useEffect} from 'react'
import {REMOTE_URL} from '../utils'
import fetch from 'cross-fetch';


const List = () => {
    const [characters, setCharacters] = React.useState([]);

    useEffect(() => {
    (async () => {
      const res = await fetch(`${REMOTE_URL}/characters?limit=50`).then((res) => res.json());
      console.log(res)
      await setCharacters(res.results);
    })();
    }, []);
    console.log(characters)
    return (
      <div>
        <h1>Welcome Dunder Mifflin</h1>
        <p>
          Here are some of our employees
        </p>
        {characters?.length === 0 && <p>Loading...</p>}
        <ul>
          {characters?.map((xter) => (
            <li key={xter}>
              <a href={`/detail?id=${xter.id}`}>{xter.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default List;