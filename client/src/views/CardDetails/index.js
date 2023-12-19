import { Grid } from '@mui/material'
import {useState, useEffect, Fragment,} from 'react'
import { getFlashcardFkId } from '../../utility/api';
import Typography from '@mui/material/Typography';
import { useParams, Link } from 'react-router-dom'
import Flashcard from './Flashcard';
// ** Material UI


function CardDetails (props) {
  const [data, setData] = useState(null);
  const {id} = useParams()
 

  useEffect(() => {
    getFlashcardFkId(id)
      .then((result) => {
        console.log(result)
        setData(result.data)
      }) // set state when the data received
      .catch((err) => err) // return the error
    }, []) //replace dependencies with the state variable names you want to trigger a re-run
  
    // console.log(data)
      //component logic
  if (!data) { // guard clause to prevent runtime errors
    return ( 
      <div>
        <h1>Getting Flashcard Data</h1>
        <div>Loading...</div>
      </div>
      )
  }
  return (
    <Fragment>
    <Link to="/" className="home-button">Home</Link>
    <br/>
    <Link to="/card-creation" className="card-creation-button">Create</Link>
    <Typography variant={"h4"}>Flashcards</Typography>
    <br/>
    <Grid container direction="row" justifyContent="space-around" alignItems="flex-start" gap={2} >
        {data.map((element) => {
            return (
            <Grid item xs={4}>
              <Flashcard
              name={element.name}
              description={element.description}
              image={element.image}
              />  
            </Grid>
          )
          })}
        </Grid> 
        </Fragment>     
  )
}

export default CardDetails
