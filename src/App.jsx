import Layout from './layout/Layout'
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'

function App () {
  return (
    <>
      <Header />
      <Layout>
        <Main />
      </Layout>
      <Footer />
    </>
  )
}

export default App
