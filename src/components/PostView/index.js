import React from 'react';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Markdown from 'react-markdown';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Quiz } from '../../pages/Quiz';

const useStyles = makeStyles({
  root:{
    width: '50%',
    backgroundColor: '#FFF',
    padding: '40px 40px 40px 40px',
    boxShadow: 'inherit'
  },
  box:{
  },
  imagePreview: {
    width: '100%',
    height: '80%',
  },
  avatar: {
    marginRight: 8,
  },
  avatarBox:{
    flexDirection: 'row'
  },
  markdown: {
    color: 'primary',
    textAlign: 'justify',
    fontFamily: 'roboto'
  },
  title:{
    fontSize: "40px",
    fontWeight: 'bold',
    
  },
  tags:{
    opacity: '0.6',
    fontWeight: 'bold'
  }
});

function PostView({ post }) {
  const classes = useStyles();
  const { image, title, date, author, tags, markdownText } = post;

  return (
    <Container className={classes.root} maxWidth="lg" >
        <Box mb={2}>
          <Typography className={classes.title} variant="h2" color="textPrimary">
            {title}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" mb={2}>
          <Box className={classes.avatarBox}>
            <Avatar className={classes.avatar} src={author?.avatar} />
          </Box>

          <Box>
            <Typography variant="body1" color="textPrimary">
              {author?.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {moment(date).fromNow()}
            </Typography>
          </Box>
        </Box>

        <Box className={classes.tags} mb={2}>
          <Typography variant="body1" color="textPrimary">
            {tags?.map((item) => item).join(', ')}
          </Typography>
        </Box>

        <Box className={classes.box}>
          {image && (
            <Box mb={2}>
              <img className={classes.imagePreview} src={image} alt="background" />
            </Box>
          )}
          <Box>
            <IconButton aria-label="like">
              <FavoriteIcon />
              <Typography
                style={{ cursor: 'pointer' }}
                color="textSecondary"
                variant="body2"
              >
                {post.likes}
              </Typography>
            </IconButton>

            <Quiz/>

          </Box>

          <Divider />

          <Box mb={8}>
            <Markdown source={markdownText} className={classes.markdown} />
          </Box>
        </Box>
    </Container>
  );
}

export default PostView;