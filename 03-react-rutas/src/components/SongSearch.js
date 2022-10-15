import React, { useState, useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import Error404 from "../pages/Error404";
import Loader from "./Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import SongTable from "./SongTable";

let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [];

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mySongs, setMySongs] = useState(mySongsInit);

  useEffect(() => {
    //if(search === null) return;
    if (search !== null){

    const fetchData = async () => {
        const {artist, song} = search;

        let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;        
        //let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
        let songUrl = `https://pokeapi.co/api/v2/pokemon/${song}`;

        //console.log(artistUrl, songUrl);

        setLoading(true);

        const[artistRes, songRes] = await Promise.all([
            helpHttp().get(artistUrl), 
            helpHttp().get(songUrl),
        ]);

        //console.log("Search", artistRes, songRes);

        setBio(artistRes);
        setLyric(songRes);
        setLoading(false);

    };

    fetchData();

    //console.log("mySongs", mySongs);

    localStorage.setItem("mySongs", JSON.stringify(mySongs));
  }
  }, [search, mySongs]);

  const handleSearch = (data) => {
    //console.log(data);
    setSearch(data);
  };

  const handleSaveSong = () => {
    alert("Canción Agregada a Favoritos");
    let currentSong = {
      search, lyric, bio
    }

    //console.log("currentSong", currentSong);
    //console.log("search",search, "lyric",lyric, "bio",bio);

    setMySongs((mySongs) => [...mySongs, currentSong]);   
    setSearch(null);
  };

  const handleDeleteSong = (id) => {
    alert(`Eliminando Canción con el Id ${id}`);
  };

  return (
    <div>      
      <header>
      <h2>Song Search</h2>
      <NavLink to="/" activeclassname="active">Home</NavLink>
      </header>
      {loading && <Loader />}
      <article className="grid-1-2">
        <Routes>
          <Route exact path="/" element={
          <>
          <br />
          <SongForm handleSearch={handleSearch} handleSaveSong={handleSaveSong}/>
          <SongTable mySongs={mySongs} handleDeleteSong={handleDeleteSong}/>
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
