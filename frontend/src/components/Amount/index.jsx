import { useState } from 'react'
import { Container } from './styles'

import { FiMinus, FiPlus } from 'react-icons/fi'

import { TextButton } from '../TextButton'

export function Amount(){
  const [amount, setAmount] = useState(1);

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
      <TextButton onClick={handleDecreaseAmount}>
        <FiMinus color='white' size={24}/>
      </TextButton>
      <span className='amount'>{('0' + amount).slice(-2)}</span>
      <TextButton onClick={handleIncreaseAmount}>
        <FiPlus color='white' size={24}/>
      </TextButton>
    </Container>
  )
}