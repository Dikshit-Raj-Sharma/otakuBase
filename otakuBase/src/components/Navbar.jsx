import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="flex gap-4 p-4 bg-blue-900">
      <Link to="/home">Home</Link>
      <Link to="/favourite">Favourites</Link>
      <Link to="/top">Top Anime</Link>
    </nav>
  );
};

export default Navbar;
