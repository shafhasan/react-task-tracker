import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      {/* use 'Link to' instead of 'a href' to not reload the page when the page changes */}
      <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer
