import React, { useState } from 'react';

const ExoComponent = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [count, setCount] = useState(0);
    const [list, setList] = useState([]);
    const [name, setName] = useState('');

    const handleChangeFirstname = (event) => {
        setFirstname(event.target.value);
    }
    const handleChangeLastname = (event) => {
        setLastname(event.target.value);
    }
    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleChangeItemName = (event) => {
        setName(event.target.value);
    }
    const handleAdd = () => {
        setList(list.concat({ name, id: Date.now() }));
    }

    return (
        <div>
            <input type="text" value={firstname} onChange={handleChangeFirstname} placeholder='Prénom' />
            <input type="text" value={lastname} onChange={handleChangeLastname} placeholder='Nom' />
            <p>Bonjour, {firstname} {lastname}</p>
            <hr />
            <h4>Compteur génial</h4>
            <button onClick={handleIncrement}>Compteur: {count}</button>
            <hr />
            <h4>Ma liste de course</h4>
            <input type="text" value={name} onChange={handleChangeItemName} placeholder='Produit' />
            <button onClick={handleAdd}>Ajouter</button>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExoComponent