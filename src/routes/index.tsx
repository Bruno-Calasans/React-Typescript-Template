import React, { FunctionComponent } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'

const Router: FunctionComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
)

export default Router
