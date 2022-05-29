import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
} from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import http from '../../utils/axios';

const useStyles = makeStyles({
  root: {},
  card: {
    marginBottom: '16px',
  },
  details: {
    display: 'flex',
  },
  avatar: {
    marginLeft: 'auto',
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0,
  },
  bio: {
    marginTop: '16px',
    marginBottom: '16px',
  },
  progress: {
    marginTop: '16px',
  },
  uploadButton: {
    marginRight: '16px',
  },
  userInfo: {
    marginBottom: '16px',
  },
});

const AccountProfile = (props) => {
  const { ...rest } = props;
  const classes = useStyles();
  const params = useParams();
  const [user, setUser] = useState([]);
  const currentUser = useSelector((state) => state.account.user);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await http.get(`/api/home/user/${params.username}`);
        setUser(response.data);
      } catch (error) {}
    }
    fetchUser();
  }, [params]);

  const isCurrentUser = currentUser?.id === user?.id;

  return (
    <div {...rest}>
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.details}>
            <div>
              <Typography gutterBottom variant="h5">
                {`@${user.username}`}
              </Typography>
              <div className={classes.userInfo}>
                <Typography
                  className={classes.locationText}
                  color="textSecondary"
                  variant="caption"
                >
                  Posts publicados
                </Typography>
                <Typography
                  className={classes.dateText}
                  color="textSecondary"
                  variant="body1"
                >
                  {user.totalPost}
                </Typography>
              </div>
              <div className={classes.userInfo}>
                <Typography
                  className={classes.locationText}
                  color="textSecondary"
                  variant="caption"
                >
                  Seguidores
                </Typography>
                <Typography
                  className={classes.dateText}
                  color="textSecondary"
                  variant="body1"
                >
                  23.5k
                </Typography>
              </div>
              <div className={classes.userInfo}>
                <Typography
                  className={classes.locationText}
                  color="textSecondary"
                  variant="caption"
                >
                  Seguindo
                </Typography>
                <Typography
                  className={classes.dateText}
                  color="textSecondary"
                  variant="body1"
                >
                  105
                </Typography>
              </div>
              <div className={classes.userInfo}>
                <Typography
                  className={classes.locationText}
                  color="textSecondary"
                  variant="caption"
                >
                  Avaliações recebidas
                </Typography>
                <Typography
                  className={classes.dateText}
                  color="textSecondary"
                  variant="body1"
                >
                  388
                </Typography>
              </div>
            </div>
            <Avatar className={classes.avatar} src={user.avatar} />
          </div>
          {!isCurrentUser && (
            <Button variant="contained" color="primary">
              Seguir
            </Button>
          )}
        </CardContent>
        {isCurrentUser && (
          <>
            <Divider />
            <CardActions>
              <Button
                className={classes.uploadButton}
                color="primary"
                variant="text"
              >
                Alterar foto
              </Button>
              <Button variant="text">Remover foto</Button>
            </CardActions>
          </>
        )}
      </Card>
      <Card>
        <CardContent>
          <div className={classes.userInfo}>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="caption"
            >
              Nome
            </Typography>
            <Typography
              className={classes.dateText}
              variant="body1"
            >
              {user.name}
            </Typography>
          </div>
          <div className={classes.bio}>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="caption"
            >
              Bio
            </Typography>
            <Typography variant="body1">
              Desenvolvedor de software, dando início a carreira, busco entrar no mercado e 
              colocar em pratica tudo o que eu aprendi, e ao mesmo tempo evoluir adquirindo 
              novos conhecimentos, aberto a novas tecnologias e metodologias ágeis do mercado. 
              No momento estou trabalhando em alguns projetos afim de lapidar minhas hard skills 
              e me autoanalisar..
            </Typography>
          </div>
          <div>
            <div className={classes.userInfo}>
              <Typography
                className={classes.locationText}
                color="textSecondary"
                variant="caption"
              >
                Data de registro
              </Typography>
              <Typography
                className={classes.dateText}
                variant="body1"
              >
                {user.joinedIn}
              </Typography>
            </div>
            <div className={classes.userInfo}>
              <Typography
                className={classes.locationText}
                color="textSecondary"
                variant="caption"
              >
                E-mail
              </Typography>
              <Typography
                className={classes.dateText}
                variant="body1"
              >
                {user.email}
              </Typography>
            </div>
            <div className={classes.userInfo}>
              <Typography
                className={classes.locationText}
                color="textSecondary"
                variant="caption"
              >
                Tags
              </Typography>
              <Typography
                className={classes.dateText}
                color="textSecondary"
                variant="body1"
              >
                #reactjs, #dotnetcore, #webdev
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountProfile;