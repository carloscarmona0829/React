import { useNavigate } from "react-router-dom";

const SongTableRow = ({id, el, handleDeleteSong}) => {
    console.log("Elemento",el);
     let {bio, search} = el;
     let avatar = bio.artists[0].strArtistThumb;  
     let avatarStyles = {
        width: "auto",
        height: "40px",
      };  

    let navegate = useNavigate();

    return ( 
        <tr>
            <td><img style={avatarStyles} src={avatar} alt={search.artist} /></td>
            <td>{search.artist}</td>
            <td>{search.song}</td>
            <td>
                <button onClick={() => navegate(`/canciones/${id}`)}>Ver</button>
                <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
            </td>
        </tr>
     );
}
 
export default SongTableRow;