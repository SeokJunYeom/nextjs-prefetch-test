import Nav from '../../components/Nav'

const Layout = ({ foo, bar }) => {

  return (
  <>
    <Nav />
    <>{foo}</>
    <>{bar}</>
  </>
  )
}

export default Layout;