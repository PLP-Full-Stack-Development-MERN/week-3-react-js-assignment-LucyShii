import React from 'react';

function Header({ title }) {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    </header>
  );
}

export default Header;