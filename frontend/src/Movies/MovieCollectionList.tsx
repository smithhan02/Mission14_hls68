import React, { useEffect } from "react";
import { Movie } from "../types/Movies";
import { useState } from "react";

function MovieCollectionList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const rsp = await fetch("https://localhost:4000/movie");
      const temp = await rsp.json();
      setMovieData(temp);
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div className="row">The Best Movies in the Collection</div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
            <th>LentTo</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {movieData.map((f) => (
            <tr key={f.movieId}>
              <td>{f.category}</td>
              <td>{f.title}</td>
              <td>{f.director}</td>
              <td>{f.rating}</td>
              <td>{f.edited}</td>
              <td>{f.lentTo}</td>
              <td>{f.notes}</td>
            </tr>
          ))}
          ;
        </tbody>
      </table>
    </>
  );
}

export default MovieCollectionList;
