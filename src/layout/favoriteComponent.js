
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostFavorite } from '../reducers/store/addFavoriteRducer';

function FavoriteComponent() {

const data=useSelector((state)=>state.Favorite.movies)
const dispatch=useDispatch()

useEffect(()=>{
    // dispatch(PostFavorite)
})

    return ( 
<div>
{
    data.map((movie)=>{
    return <h1>{ movie.id}</h1>
    })
}

</div>

     );
}

export default FavoriteComponent;