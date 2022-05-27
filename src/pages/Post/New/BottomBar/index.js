import React from "react";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root:{

  },
  appBar:{
      top: 'auto',
      bottom: 0,
      alignItems: 'center'
  },
  button:{
    marginRight: '16px'
  }
})

function BottomBar() {
  const classes = useStyles();

  /*
  const ctx = useContext(PostContext);

  const handleSaveDraft = () => {

  }

  const handlePublish = () => {

  }
  */

  return(
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar>
        <Button className={classes.button}>Salvar Rascunho</Button>
        <Button color="secondary" variant="outlined">Publicar</Button>
      </Toolbar>
    </AppBar>
)
}

export default BottomBar;