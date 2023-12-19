import { Card } from '@mui/material'
import {useState} from 'react'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// ** Material UI


function Flashcard (props) {
  const {
    name,
    description,
    image
  } = props
  
  const [flip, setFlip] = useState(false)

      //component logic
  return (
    <Card onClick={() => {setFlip(!flip)}} transform >
      <CardMedia
        sx={{ height: 140 }}
        title={name}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {flip ? description : name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Flashcard