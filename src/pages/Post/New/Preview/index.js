import React, {useContext} from "react";
import { Box, Typography, Avatar, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Markdown from 'react-markdown';
import { useSelector } from "react-redux";
import { PostContext } from '../../../../context/PostContext'

const useStyles = makeStyles({
  imagePreview:{
    width: '100%'
  },
  avatar:{
    marginRight: '8px'
  }
})

function PostPreview() {
  const classes = useStyles();
  const ctx = useContext(PostContext);
  const {image, title, tags, markdownText} = ctx;
  const account = useSelector((state) => state.account);
  

  return(
    <>
      <Box mb={2}>
        {image && (<img className={classes.imagePreview} src={image} alt="background"/>)}
      </Box>

      <Box mb={2}>
        <Typography variant="h3">{title}</Typography>
      </Box>

      <Box display='flex' alignItems='center' mb={2}>
        <Box>
          <Avatar className={classes.avatar} src={account.user?.avatar}/>
        </Box>
        <Box>
          <Typography variant="body1">{account.user?.name}</Typography>
          <Typography variant="body2" color="textSecondary">5 dias atrás</Typography>
        </Box>
      </Box>
      
      <Box mb={2}>
        <Typography variant="body1">{tags?.map(item => item.title).join(', ')}</Typography>
      </Box>

      <Divider></Divider>

      <Markdown source={markdownText}></Markdown>
    </>
  )
}

export default PostPreview;