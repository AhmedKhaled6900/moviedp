
import  FormControl, { FormLabel }  from "@mui/material";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import  search  from "../reducers/store/searchReducer";
const SearchPage = (keyword) => {
const dispatch=useDispatch()
const data=useSelector((state)=>state.search.movies)
console.log(data)
 const handlesearch=()=>{
dispatch(search(keyword))
    }
  return (
    <div>
  <Form className="d-flex">
            <Form.Control onChange={()=>handlesearch(keyword)}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
    </div>

  );
}

export default SearchPage;