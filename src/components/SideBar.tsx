import { useContext, useEffect, useState } from "react";
import { Button } from "./Button";

import "../styles/sidebar.scss";
import { ContextoMovies } from "../context/ContextoMovies";

export function SideBar() {
  const { genres, selectedGenreId, setSelectedGenreId } = useContext(
    ContextoMovies
  );

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres &&
          genres.map((genre) => (
            <Button
              key={genre?.title}
              title={genre?.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
      </div>
    </nav>
  );
}
