import moment from 'moment';
import mock from '../utils/mock';

mock.onGet('/api/post/confidencialidade-integridade').reply(200, {
  id: 1,
  title:
    'CONFIDENCIALIDADE E INTEGRIDADE',
  slug: 'confidencialidade-integridade',
  date: moment().subtract(1, 'day').toDate().getTime(),
  author: {
    id: 1,
    name: 'Denilson Silva',
    avatar: '/images/avatars/avatar.jpg',
  },
  markdownText: `
  _Compact style:_
  
  Term 1
    ~ Definition 1
  
  Term 2
    ~ Definition 2a
    ~ Definition 2b`,
  tags: ['segurança', 'testes', 'integridade', 'confidencialidade'],
  image: '/images/posts/post1.png',
  likes: 10,
  comments: 30,
});

mock.onGet('/api/feed').reply(200, {
  posts: [
    {
      id: 1,
      title:
        'CONFIDENCIALIDADE E INTEGRIDADE',
      slug: 'confidencialidade-integridade',
      date: moment().subtract(1, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: 'Denilson Silva',
        avatar: '/images/avatars/avatar.jpg',
      },
      tags: ['segurança', 'testes', 'integridade', 'confidencialidade'],
      image: '/images/posts/post1.png',
      likes: 10,
      comments: 30,
    },
    {
      id: 2,
      title: 'AUTENTICIDADE E DISPONIBILIDADE',
      slug: 'autenticidade-disponibilidade',
      date: moment().subtract(1, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: 'Igor Araujo',
        avatar: '/images/avatars/igor.jpg',
      },
      tags: ['segurança', 'autenticidade'],
      image: '/images/posts/post2.png',
      likes: 5,
      comments: 1,
    },
  ],
});

mock.onGet('/api/posts/user/dennyun').reply(200, {
  posts: [
    {
      id: 1,
      title:
        'CONFIDENCIALIDADE E INTEGRIDADE',
      slug: 'confidencialidade-integridade',
      date: moment().subtract(1, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: 'Denilson Silva',
        avatar: '/images/avatars/avatar.jpg',
      },
      tags: ['segurança', 'testes', 'integridade', 'confidencialidade'],
      image: '/images/posts/post1.png',
      likes: 10,
      comments: 30,
    },
    
  ],
});