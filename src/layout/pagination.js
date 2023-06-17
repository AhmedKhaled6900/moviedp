
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { FetchPopularPages } from '../reducers/store/popularreducer';
import ReactPaginate from 'react-paginate';

function Paginationcomponent() {

   const data=useSelector((state)=>state.pagination.movies)
   const pages= useSelector ((state)=>state.Pagination.totalPages )
const dispatch=useDispatch()
   const getpage=(page)=>{
    dispatch(FetchPopularPages (page))
  }
   const handlePageChange = (data)=>{

    
        getpage(data.selected+1)
          // dispatch(fetchsearch())
      
        

    
   }
    return ( 

        <div className="col ">
        <ReactPaginate
          breakLabel="...."
          nextLabel="next >"
          onPageChange={handlePageChange()}
          pageRangeDisplayed={1}
          pageCount={pages}
          previousLabel="< previous"
          containerClassName='pagination justify-content-center mt-5'
          pageClassName='page-item'
          pageLinkClassName='page-link'
          nextClassName='page-item'
          previousClassName='page-item'
          previousLinkClassName='page-link'
          nextLinkClassName='page-link'
          breakClassName='page-item'
          breakLinkClassName='page-link'
          activeClassName='active'
          // initialPage={5}
          disableInitialCallback={true}

        />
      </div>     );
}

export default Paginationcomponent;

