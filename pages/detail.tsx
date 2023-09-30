import React, { useEffect, useState } from "react";
import { REMOTE_URL } from "../utils";
import fetch from 'cross-fetch'

const Detail = ({ id }) => {
    console.log("characterID", id);
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${REMOTE_URL}/character/${id}`)
            const data = await res.json()
            console.log(data)
            await setCharacter(data);
        })();
    }, []);

  return (
    <div>
        {character ? (
            <div>
                <h1>{character.name}</h1>
                <h2>Roles</h2>
                <ul style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                }}>
                    {character?.job?.map((role) => (
                        <li key={role}>
                            <h4>{role}</h4>
                        </li>
                    ))}
                </ul>
            </div>
        ) :
            <p>Loading...</p>
        }

    </div>
  );
};

export default Detail;
