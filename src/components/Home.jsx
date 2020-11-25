import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className="Home">
      <header>
        <input type="text" />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </header>
    </div>
  );
}
