import { Card, Grid } from '@mui/material'
import {useState, useEffect,} from 'react'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  getFlashcardFkId } from '../../utility/api';
import { useParams } from 'react-router-dom'
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
    <Grid container direction="row" justifyContent="space-around" alignItems="flex-start" >
        {data.map((element) => {
            return (
            <Grid item xs={4}>
                <Card>
                    <CardMedia
                      sx={{ height: 140 }}
                      title={element.name}
                      imaage={element.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                        Id:{element.id}(Set Id:{element.flashcardSetId}) {element.name}
                        </Typography>
                        <Typography>
                            {element.description}
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>
              )
          })}
        </Grid>      
  )
}

export default CardDetails
