import { Fragment, useState } from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Layout from './components/layout/Layout'
import Home from './components/pages/Home'


function App() {

  return (
    <Fragment >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
