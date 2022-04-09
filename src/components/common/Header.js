import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h3>Bren's Experiments Inc.</h3>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/article'>Article</Link>
        <Link to='/video'>Video</Link>
        <Link to='/course'>Course</Link>
      </nav>
      <button />
    </header>
  );
}

export default Header;