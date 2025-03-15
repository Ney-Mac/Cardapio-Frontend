import { useState } from 'react';
import { useFoodDataMutate } from '../../hooks/useFoodDataMutate';
import { FoodData } from '../../interfaces/FoodData';

import './style.sass';

type ValueType = string | number;

interface InputProps {
    label: string;
    value: ValueType;
    updateValue: (value: ValueType) => void;
}

export default () => {
    const [title, setTitle] = useState<ValueType>('');
    const [price, setPrice] = useState<ValueType>(0);
    const [image, setImage] = useState<ValueType>('');

    const { mutate } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title: title as string,
            price: price as number,
            image: image as string
        }
        mutate(foodData)
    }

    return (
        <div className='modal-overlay'>
            <div className="modal-body">
                <h2>Cadastre um novo item no cardapio</h2>

                <form className='input-container'>
                    <Input
                        label='Titulo'
                        value={title}
                        updateValue={setTitle}
                    />

                    <Input
                        label='Preço'
                        value={price}
                        updateValue={setPrice}
                    />

                    <Input
                        label='Imagem (url)'
                        value={image}
                        updateValue={setImage}
                    />
                </form>

                <button onClick={submit} className='button-secondary'>
                    Enviar
                </button>
            </div>
        </div>
    )
}

function Input({ label, value, updateValue }: InputProps) {
    return (
        <>
            <label>{label}</label>
            <input
                value={value}
                onChange={(event) => {
                    updateValue(event.target.value)
                }}
            />
        </>
    )
}