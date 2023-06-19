import { useDispatch, useSelector } from "react-redux";
import { Favorite } from "../reducers/store/addFavoriteRducer";
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';


function Helper(movie) {
 
 const dispatch=useDispatch()
const navigate = useNavigate()

 const theFavorite=useSelector((state)=>state.Favorite.movies)
    const handleaddtofav = (movie) => {
        dispatch(Favorite(movie))

    }

    console.log(movie)

    return ( 

<div>
{


     theFavorite.find(element => element.id === movie.id) ?
                <Button onClick={() => { navigate(`/favorite`) }}
                > fav </Button>
                :
                <Button onClick={() => {
                    handleaddtofav(movie)
                }}  > add to fav </Button>



// theFavorite.find(element => element.id === movie.id) ?
//                 <Button onClick={() => { navigate(`/favorite`) }}
//                 > fav </Button>
//                 :
//                 <Button onClick={() => {
//                     handleaddtofav(movie)
//                 }}  > add to fav </Button>
                
            
                
                }
     
</div>
      
       

     );
}

export default Helper;