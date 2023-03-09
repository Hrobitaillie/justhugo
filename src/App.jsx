import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {

  return (
    <Fragment Fragment >
      <Overlay />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <ReactQueryDevtools initialIsOpen={false} />
    </Fragment>
  )
}

export default App
