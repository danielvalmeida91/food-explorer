import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container, Item, Controls } from './styles'

import { HiOutlinePencilSquare } from 'react-icons/hi2'
import { AiOutlineHeart } from 'react-icons/ai'

import { ButtonSmall } from '../ButtonSmall'
import { Amount } from '../Amount'

export function Card({ itemImg, itemName, itemPrice, itemDescription,itemRoute, userStatus, itemEditRoute, fnShowItem, fnEditItem}){

  itemPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(itemPrice);

  return(
    <Container >
      {userStatus === 'user' &&
        (<Item>
          <Link to={itemRoute} onClick={fnShowItem}>
            <img src={itemImg}/>
          </Link>
          <p className='itemName'>{itemName}</p>
          <p className='itemDescription'>{itemDescription}</p>
          <span>{itemPrice}</span>
          <Controls>
            <Amount/>
            <ButtonSmall title="incluir"/>
          </Controls>

          <AiOutlineHeart className='actionButton'/>
        </Item>)
      }
      {userStatus === 'admin' &&
        (<Item>
          <Link to={itemRoute} onClick={fnShowItem}>
            <img src={itemImg}/>
          </Link>
          <p className='itemName'>{itemName}</p>
          <p className='itemDescription'>{itemDescription}</p>
          <span>{itemPrice}</span>
          <Link to={itemEditRoute}>
            <HiOutlinePencilSquare className='actionButton' onClick={fnEditItem}/>
          </Link>
        </Item>)
      }
    </Container>
  );
}