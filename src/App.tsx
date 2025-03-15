import { useState } from 'react';

import Card from './components/Card';
import CreateModal from './components/CreateModal';

import { useFoodData } from './hooks/useFoodData';

import './App.sass';

function App() {
    const { data } = useFoodData();

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(!showModal);
    }

    return (
        <div className="container">
            <h1>Cardapio</h1>

            {!data && <h2 className='empty-text'>Nada no cardapio</h2>}

            <div className="card-grid">
                {data?.map(foodData => (
                    <Card
                        price={foodData.price}
                        title={foodData.title}
                        image={foodData.image}
                        key={foodData.id}
                    />
                ))}
            </div>

            {showModal && <CreateModal />}

            <button
                className={!showModal ? 'button-primary' : 'button-cancel'}
                onClick={handleOpenModal}
            >
                {showModal ? 'Cancelar' : 'Novo'}
            </button>
        </div>
    )
}

export default App
