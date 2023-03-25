import { Link } from 'react-router-dom'

import { Container } from './styles'

export function SearchCard({ itemRoute, itemImg, itemName, ...rest}){
  return(
    <Container>
      <Link to={itemRoute} {...rest}>
        <img src={itemImg} />
        <span>{itemName}</span>
      </Link>
    </Container>
  );
}