import React, { useCallback, useContext } from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from "@material-ui/styles";
import { useDropzone } from "react-dropzone";
import { PostContext } from '../../../../context/PostContext';

const useStyles = makeStyles({
  image:{
    height: 100
  },
  button:{
    marginRight: '16px'
  },
  textArea:{
    width: '100%',
    height: '100%',
    resize: 'none',
    border: 'none',
    outline: 'none',
    fontSize: 15
  },
})

const arrayTags = [
  {title: 'Segurança'},
  {title: 'hackers'},
  {title: 'react js'},
  {title: 'front end'},
]

function PostEditor() {
  const classes = useStyles();
  const ctx = useContext(PostContext);
  const {image, setImage, title, setTitle, tags, setTags, markdownText, setMarkdownText} = ctx;

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64data = reader.result;
      setImage(base64data);
    }
  }, [setImage])

  const {getRootProps, getInputProps} = useDropzone({
    onDrop, 
    multiple: false,
    accept: 'image/*'
  });

  return(
    <>
      <Box {...getRootProps()} mb={2}>
        <input {...getInputProps()} />
        <Button>Carregar imagem</Button>
      </Box>

      {image && (
        <Box mb={2}>
          <img className={classes.image} src={image} alt="background"/>
        </Box>
      )}
      <Box mb={2}>
        <TextField id="title" placeholder="Titulo" fullWidth value={title} onChange={setTitle}/>
      </Box>

      <Box mb={2}>
        <Autocomplete
          multiple
          id="tags-standard"
          options={arrayTags}
          getOptionLabel={(option) => option.title}
          value={tags}
          onChange={setTags}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              placeholder="Tags"
            />
          )}
        />
      </Box>
      <textarea onChange={setMarkdownText} value={markdownText} className={classes.textArea}/>
    </>
  )
}

export default PostEditor;