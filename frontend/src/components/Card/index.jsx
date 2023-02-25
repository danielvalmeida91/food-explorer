import { useState } from 'react'
import { Container, Item, Amount, Controls } from './styles'

import { Button } from '../Button'

export function Card({ itemImg, itemName, itemPrice, itemDescription, ...rest}){
  const [amount, setAmount] = useState(1);

  itemPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(itemPrice);

  function handleIncreaseAmount(){
    setAmount(amount+1);
  }

  function handleDecreaseAmount(){
    if((amount - 1) === 0){
      setAmount(1);
    } else{
      setAmount(amount-1)
    }

  }


  return(
    <Container>
      <Item>
        <img src={itemImg}/>
        <p className='itemName'>{itemName}</p>
        <p className='itemDescription'>{itemDescription}</p>
        <span>{itemPrice}</span>
        <Controls>
          <Amount>
            <a href="#" onClick={handleDecreaseAmount}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M4 13C4 12.4477 4.33579 12 4.75 12H21.25C21.6642 12 22 12.4477 22 13C22 13.5523 21.6642 14 21.25 14H4.75C4.33579 14 4 13.5523 4 13Z" fill="white"/>
              </svg>
            </a>
            <span className='amount'>{('0' + amount).slice(-2)}</span>
            <a href="#" onClick={handleIncreaseAmount}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4 13C4 12.5858 4.33579 12.25 4.75 12.25H21.25C21.6642 12.25 22 12.5858 22 13C22 13.4142 21.6642 13.75 21.25 13.75H4.75C4.33579 13.75 4 13.4142 4 13Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M13 4C13.4142 4 13.75 4.33579 13.75 4.75V21.25C13.75 21.6642 13.4142 22 13 22C12.5858 22 12.25 21.6642 12.25 21.25V4.75C12.25 4.33579 12.5858 4 13 4Z" fill="white"/>
              </svg>
            </a>
          </Amount>
          <Button title="incluir"/>
        </Controls>
        <svg className='heartFavorite' width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704V22.704Z" stroke="#E1E1E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Item>
    </Container>
  );
}