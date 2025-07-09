import Router from './components/Router';
import { routes, pages } from './consts';

function App() {
  return (
    <>
      <Router 
        routes={routes}
        pages={pages}
      />
    </>
  )
}

export default App
