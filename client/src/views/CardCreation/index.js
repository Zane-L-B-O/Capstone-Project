//** Import Statements
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import {useState, useEffect, Fragment} from 'react';
import TagsDropdown from './TagsDropdown'
//** Setup (define helper functions and variables here)

function CardCreation(props) {
    //** Destructure Props
    const {
  
    } = props
  
    //** State Variables
    const [formFields, setFormFields] = useState([
        { name: '', description: '' },
      ])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [selectedTags, setSelectedTags] = useState([]); // keeps track of what is selected by the user
    //** Component Logic
    function handleClick() {
        const formOutput = {
            title: title,
            description: description,
            tags: selectedTags,
            flashcards: formFields
        }
        console.log("formOutput: ", formOutput)
        // send a POST request using fetch to the api. 
        // The api will add the set to the database
      }

    const handleFormChange = (event, index) => {
      let data = [...formFields];
      data[index][event.target.name] = event.target.value;
      setFormFields(data);
    }  
    
    const addFields = () => {
        let object = {
          name: '',
          description: ''
        }
    
        setFormFields([...formFields, object])
      }
     
      const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
      }

    //** Return JSX
    return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        gap={2}
      >
      <Typography variant={"h4"}>Flashcard Creation</Typography>
       
       {/* Title */}
       <TextField 
        id="flashcard-set-title" 
        label="Title" 
        variant="outlined" 
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
       {/* Description */}
       <TextField 
        id="flashcard-set-description" 
        label="Description" 
        variant="outlined" 
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
       {/* Image Attachment */}
       {/* Tags dropdown */}
       <TagsDropdown
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
       />
       {/* Flashcard repeating form */}
       <Typography variant={"h5"}>Flashcards</Typography>
       {formFields.map((form, index) => {
          return (
            <div key={index}>
              <TextField
                name='name'
                placeholder='Name'
                onChange={event => handleFormChange(event, index)}
                value={form.name}
                variant="outlined"
              />
              <TextField
                name='description'
                placeholder='Description'
                onChange={event => handleFormChange(event, index)}
                value={form.description}
                variant="outlined"
              />
              <Button onClick={() => removeFields(index)} variant="contained" sx={{height: '56px'}}>Remove</Button>
            </div>
          )
        })}
        <Button onClick={addFields} variant="contained">Add More..</Button>
       {/* Submit Button */}
       <Button onClick={handleClick} variant="contained">Submit</Button>
      </Grid>
    )
  }
  export default CardCreation