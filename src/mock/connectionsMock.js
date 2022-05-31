import mock from '../utils/mock';

mock.onGet('/api/connections/followers/dennyun').reply(200, {
  followers: [
    {
      id: 1,
      user: {
        id: 1,
        name: 'Fernanda Souza',
        username: 'fersouza10',
        avatar: '/images/avatars/cris.jpg',
      },
      following: false,
    },
    {
      id: 2,
      user: {
        id: 2,
        name: 'Lucas Fernando',
        username: 'lucfernando',
        avatar: '/images/avatars/vini.jpg',
      },
      following: true,
    },
    {
      id: 3,
      user: {
        id: 3,
        name: 'Matheus Henrique',
        username: 'm_henriques',
        avatar: '/images/avatars/naruto.jpg',
      },
      following: false,
    },
    {
      id: 4,
      user: {
        id: 4,
        name: 'Cleber Henrique',
        username: 'cleberh_11',
        avatar: '/images/avatars/avatar_7.png',
      },
      following: false,
    },
  ],
});

mock.onGet('/api/connections/following/dennyun').reply(200, {
  following: [
    {
      id: 1,
      user: {
        id: 1,
        name: 'Fernanda Souza',
        username: 'fersouza10',
        avatar: '/images/avatars/cris.jpg',
      },
    },
    {
      id: 2,
      user: {
        id: 2,
        name: 'Lucas Fernando',
        username: 'lucfernando',
        avatar: '/images/avatars/vini.jpg',
      },
    },
    {
      id: 3,
      user: {
        id: 3,
        name: 'Matheus Henrique',
        username: 'm_henriques',
        avatar: '/images/avatars/naruto.jpg',
      },
    },
    {
      id: 4,
      user: {
        id: 4,
        name: 'Cleber Henrique',
        username: 'cleberh_11',
        avatar: '/images/avatars/avatar_7.png',
      },
    },
  ],
});