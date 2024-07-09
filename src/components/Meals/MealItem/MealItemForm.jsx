import React from 'react';
import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';

const MealItemForm = (props) => {
  const [isAmountIsValid, setIsAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const inputAmount = amountInputRef.current.value;
    if (
      inputAmount.trim().length === 0 ||
      +inputAmount < 1 ||
      +inputAmount > 15
    ) {
      setIsAmountIsValid(false);
      return;
    }
    props.onAddToCart(+inputAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Количество"
        input={{
          id: props.id,
          type: 'number',
          min: '1',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Добавить </button>
      {!isAmountIsValid && <p> Укажите количество от 1 до 15</p>}
    </form>
  );
};

export default MealItemForm;
