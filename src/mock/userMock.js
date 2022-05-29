import mock from '../utils/mock';

mock.onPost('/api/home/me').reply(200,{
    user:{
        'id': 1,
        'name': 'Denilson Silva',
        'username': 'dennyun',
        'email': 'test@gmail.com',
        'avatar': '/images/avatars/avatar.jpg'
    }
});

mock.onPost('/api/home/login').reply((config) => {
    const {email, password} = JSON.parse(config.data)

    if(email !== 'test@gmail.com' || password !== 'admin'){
        return [400, {message: 'Seu email ou senha estão incorretos'}]
    }

    const user = {
        id: 1,
        name: 'denilson',
        username: 'dennyun',
        email: 'test@gmail.com',
        avatar: '/images/avatars/avatar.jpg'
    }

    return [200,{user}]
})

mock.onGet('/api/home/user/dennyun').reply(200, {
  id: 1,
  name: 'Denilson Silva',
  username: 'dennyun',
  email: 'test@gmail.com',
  accessToken: 'dadadadadadadad',
  avatar: '/images/avatars/avatar.jpg',
  joinedIn: '09 de janeiro, 2022',
  work: 'Front End Developer',
  totalPost: '388',
});