import { Routes, Route } from 'react-router-dom'

import { Default } from '../pages/Default'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { New } from '../pages/New'
import { UpdateItem } from '../pages/UpdateItem'

export function AppRoutes(){
  return(
      <Routes>
        <Route path='/' element={<Default Content={<Home />}/>} />
        <Route path='/items/:id' element={<Default Content={<Details />}/>} />
        <Route path='/new' element={<Default Content={<New />}/>} />
        <Route path='/updateItem/:id' element={<Default Content={<UpdateItem />}/>} />

      </Routes>
  );
}