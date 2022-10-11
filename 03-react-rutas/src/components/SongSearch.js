import React, { useState, useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import Error404 from "../pages/Error404";
import Loader from "./Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(search === null) return;

    const fetchData = async () => {
        const {artist, song} = search;

        let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;        
        //let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
        let songUrl = `https://pokeapi.co/api/v2/pokemon/${song}`;

        console.log(artistUrl, songUrl);

        setLoading(true);

        const[artistRes, songRes] = await Promise.all([
            helpHttp().get(artistUrl), 
            helpHttp().get(songUrl),
        ]);

        console.log(artistRes, songRes);

        setBio(artistRes);
        setLyric(songRes);
        setLoading(false);

    };

    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    console.log(data);
    setSearch(data);
  };

  return (
    <div>      
      <header>
      <h2>Song Search</h2>
      <NavLink to="/" activeclassname="active">Home</NavLink>
      </header>
      {loading && <Loader />}
      <article className="grid-1-3">
        <Routes>
          <Route exact path="/" element={
          <>
          <br />
          <SongForm handleSearch={handleSearch} />
          <h2>Tabla de Canciones</h2>
          {search && !loading && (
          <SongDetails search={search} lyric={lyric} bio={bio} />
        )}
          </>
        }>          
        </Route>
        <Route exact path="/canciones/:id" element={
          <>
          <h2>Página de la Canción</h2>
          </>
        }>
        </Route>
        <Route path="*" element={<Error404 />} />
        </Routes>        
      </article>
    </div>
  );
};

export default SongSearch;
