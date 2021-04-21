import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      {/* use 'Link to' instead of 'a href' to not reload the page when the page changes */}
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default About
