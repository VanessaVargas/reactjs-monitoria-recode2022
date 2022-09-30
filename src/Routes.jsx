

function App() {
    return (
      <Router>
      <div className='Rotas'>
        <ul>
          <li> <Link to='/'>Home</Link> </li>
          <li> <Link to='/sobre'>Sobre</Link> </li>  </ul>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='sobre' element={<Sobre />} />
        </Routes>
      </div>
      </Router>
    );
  }