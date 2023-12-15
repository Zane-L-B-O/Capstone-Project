import { Card, Grid } from '@mui/material'
import { Link } from "react-router-dom"
import {useState, useEffect, Fragment} from 'react'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { getAllCards, getAllFlashcardSets } from '../../utility/api';
import Pagination from '@mui/material/Pagination';
// ** Material UI


function Home (props) {
  
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(20);
  const handleChange = (event, value) => {
    setPage(value);
  };  

  useEffect(() => {
    getAllFlashcardSets({page: page, limit: limit})
      .then((result) => {
        console.log(result)
        setData(result.data)
        setTotal(parseInt(result.total))
      }) // set state when the data received
      .catch((err) => err) // return the error
    }, [page]) //replace dependencies with the state variable names you want to trigger a re-run
  
    // console.log(data)
    console.log(page)
      //component logic
  if (!data) { // guard clause to prevent runtime errors
    return ( 
      <div>
        <h1>Getting Flashcard Set Data</h1>
        <div>Loading...</div>
      </div>
      )
  }
  
  return (
    <Fragment>
       <Grid container direction="row" justifyContent="space-around" alignItems="flex-start" >
          {data.map((element) => {
              return (
                <Grid item xs={4}>
                  <Link to={`/set-details/${element.id}`}>  
                    <Card>
                        <CardMedia
                      sx={{ height: 140 }}
                      title={element.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {element.title} ({element.id})
                      </Typography>
                      <Typography>
                        {element.description}
                      </Typography>
                    </CardContent>
                    </Card>
                  </Link>
                </Grid>
              )
          })}
        </Grid>         
        <Pagination count={Math.ceil(total/limit)} page={page} onChange={handleChange} />
    </Fragment>
  )
}

export default Home
