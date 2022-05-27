import React from "react";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Box, Button, Toolbar } from "@material-ui/core";

import PostEditor from "./Editor";
import PostPreview from "./Preview";
import { PostProvider } from "../../../context/PostContext";

const useStyles = makeStyles({
    root:{
  
    },
    appBar:{
        top: 'auto',
        bottom: 0,
        alignItems: 'center'
    },
})

function NewPost() {
    const classes = useStyles();

    return (
      <PostProvider>
        <Box display='flex' height='calc(100% - 70px)' overflow='scroll' className={classes.root}>
            <Box width='50%' height='100%' padding={2} borderRight='1px solid #ddd'>
              <PostEditor/>
            </Box>

            <Box width='50%' height='100%' padding={2}>
              <PostPreview/>
            </Box>

            <Box>
                <AppBar position="fixed" color="inherit" className={classes.appBar}>
                  <Toolbar>
                    <Button className={classes.button}>Salvar Rascunho</Button>
                    <Button color="secondary" variant="outlined">Publicar</Button>
                  </Toolbar>
                </AppBar>
            </Box>
        </Box>
      </PostProvider>
    )
}

export default NewPost;