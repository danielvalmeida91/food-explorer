import { Routes, Route } from 'react-router-dom'

import { Default } from '../pages/Default'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'

export function AppRoutes(){
  return(
      <Routes>
        <Route path='/' element={<Default Content={<Home />}/>} />
        <Route path='/items/:id' element={<Default Content={<Details />}/>} />
        <Route path='/new' element={<Default Content={<New />}/>} />
        <Route path='/update' element={<Default Content={<UpdateItem />}/>} />

      </Routes>
  );
}