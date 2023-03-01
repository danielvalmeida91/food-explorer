import { useState } from 'react'
import { Container } from './styles'

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
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M4 13.3664C4 12.8141 4.33579 12.3664 4.75 12.3664H21.25C21.6642 12.3664 22 12.8141 22 13.3664C22 13.9187 21.6642 14.3664 21.25 14.3664H4.75C4.33579 14.3664 4 13.9187 4 13.3664Z" fill="white"/>
        </svg>
      </TextButton>
      <span className='amount'>{('0' + amount).slice(-2)}</span>
      <TextButton onClick={handleIncreaseAmount}>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M4 13.3664C4 12.9522 4.33579 12.6164 4.75 12.6164H21.25C21.6642 12.6164 22 12.9522 22 13.3664C22 13.7806 21.6642 14.1164 21.25 14.1164H4.75C4.33579 14.1164 4 13.7806 4 13.3664Z" fill="white"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M13 4.36639C13.4142 4.36639 13.75 4.70218 13.75 5.11639V21.6164C13.75 22.0306 13.4142 22.3664 13 22.3664C12.5858 22.3664 12.25 22.0306 12.25 21.6164V5.11639C12.25 4.70218 12.5858 4.36639 13 4.36639Z" fill="white"/>
        </svg>
      </TextButton>
    </Container>
  )
}