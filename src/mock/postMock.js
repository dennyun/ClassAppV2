import moment from 'moment';
import mock from '../utils/mock';

mock.onGet('/api/post/confidencialidade-integridade').reply(200, {
  id: 1,
  title:
    'Os pilares da Segurança da Informação: Confidencialidade, Integridade, Disponibilidade ',
  slug: 'confidencialidade-integridade',
  date: moment().subtract(1, 'day').toDate().getTime(),
  author: {
    id: 1,
    name: 'Denilson Silva',
    avatar: '/images/avatars/avatar.jpg',
  },
  markdownText: `

  Para proteger as informações, a segurança da informação se baseia em três pilares: Confidencialidade, Integridade e Disponibilidade.

  **Confidencialidade** é o que garante o acesso à informação exclusivamente às pessoas autorizadas, ou seja, a informação não está disponível ou é revelada a indivíduos, entidades ou processos sem autorização.

  **Integridade** é que garante a veracidade da informação. A integridade indica que os dados não podem ser alterados sem autorização. Se alguma alteração indevida, não prevista ou planejada for realizada nos dados, a informação poderá ser afetada, ficando incorreta e comprometendo sua integridade (veracidade).

  **Disponibilidade** é o que garante que dados e sistemas poderão ser acessados por indivíduos, entidades ou processos autorizados quando o acesso a informação for necessário.
  Em outras palavras, você precisa guardar um segredo (informação confidencial) que só pode ser conhecido por determinadas pessoas (confidencialidade), sem aumentar, diminuir ou distorcer o fato (integridade) e pode ser consultado quando for necessário (disponibilidade).

  # Como reforçar os pilares de segurança dentro da estrutura de sua empresa

  Para garantir que a informação esteja protegida e ter uma Segurança da Informação efetiva, além de investir em tecnologia, é essencial também trabalhar com alinhamento de processos e conscientização de pessoas de toda a organização.

  Primeiramente, é necessário entender o contexto da organização e o risco associado às suas informações para então direcionar o tratamento adequado para cada tipo de informação, seja ela comercial, financeira, política ou até mesmo legal, fornecendo confiança para as partes interessadas de que os riscos são adequadamente gerenciados.

  Com este direcionamento, trabalha-se nas frentes de Processos, Tecnologia e Pessoas, construindo as Políticas de Segurança da Informação, alinhando os processos organizacionais, e direcionando a utilização adequada de tecnologia, além de conscientizar as pessoas em como lidar com as informações e recursos corporativos, reforçando os três pilares da segurança da informação.

  ## Confidencialidade
  De acordo com o nível de confidencialidade da informação, a empresa pode estabelecer controles mais ou menos rígidos para proteger a informação.

  Para isto, é essencial definir-se quem pode ter acesso a cada tipo de informação da empresa, o que pode ser feito através de mapeamento de acesso por área, cargo e função ou fluxo de autorização do acesso.

  Por exemplo, é possível restringir o acesso a um diretório da rede para a área comercial e outro para a área de recursos humanos, ou garantir que toda solicitação de acesso passe por uma aprovação específica, como a do gestor da área.

  Adicionalmente, é indicado treinar os colaboradores que possuem acesso aos dados e sistemas da empresa, principalmente aos conteúdos mais críticos, para que eles tenham consciência sobre o risco associado e então possam utilizar as informações adequadamente.

  Em tecnologia, é indicado a utilização de criptografia de dados e e-mail, autenticação de múltiplos fatores, com a utilização de token, ferramenta de Governança e Administração de Identidade (IGA), de gestão de acesso Mobile, de classificação de dados e de Prevenção de Perda de Dados (DLP/CASB), por exemplo, garantindo que a pessoa destinada a acessar a informação seja de fato uma pessoa autorizada.

  ## Integridade
  Para garantir a integridade da informação, é necessário definir quem pode manipular cada tipo de informação. Nem todos os colaboradores que podem consultar a informação, podem de fato alterá-la ou deletá-la, por exemplo.

  Sendo assim, os papéis e responsabilidades dos colaboradores devem estar claros com relação as informações. Precisa-se distinguir as informações manipuladas por uma pessoa de compras e outra de contas a pagar, por exemplo, evitando que uma pessoa que compre o material, autorize o pagamento. Este é um exemplo de um risco claro que poderia ser explorado para obter vantagens pessoais, em caso de não mapeamento e restrição das funções e acessos.

  Vale lembrar que a todas as mudanças em sistemas e infraestrutura de tecnologia também devem ser controladas para que não haja desvio das informações e dos processos.

  Além disso, os colaboradores precisam ser orientados quanto da correta manipulação dos sistemas e dados, conhecendo os riscos associados e então possam manipular as informações adequadamente.

  De forma a garantir que todos estes controles estão devidamente implementados, a organização deve planejar a execução de auditorias periódicas, diagnosticando os pontos falhos, trabalhando na melhoria contínua da segurança da informação, e então garantindo que as informações não sofreram violações.

  Em tecnologia, é indicada a utilização de cofre de senhas, dando rastreabilidade principalmente para acessos administrativos, AntiSpam, evitando que e-mails propagando informações não-íntegras cheguem até os colaboradores, ferramentas de Governança e Administração de Identidade (IGA), de governança de dados, de segurança no desenvolvimento de aplicações, de versionamento e backup, entre outras.

  ## Disponibilidade
  Para uma maior eficiência ao tratar da disponibilidade da informação, é necessário investimento e principalmente forte atuação em tecnologia. O que se justifica, uma vez que a indisponibilidade de sistemas de informação por vezes ocasiona enormes prejuízos as organizações.

  Através dos riscos associados a informação mapeados, a organização deve criar um plano de recuperação de dados, com um Plano de Continuidade de Negócios e recuperação de desastres (Disaster Recover), que serão colocados em prática de forma reativa a um incidente de segurança da informação. Lembrando que estes planos muito provavelmente resultarão em ações e investimento em tecnologia.

  De forma proativa, evitando incidentes com indisponibilidade, é essencial fazer a devida gestão da infraestrutura de tecnologia, dimensionando corretamente a capacidade do ambiente tecnológico, com a correta definição de largura de banda, redundância de link e realizando a manutenção preventiva, como a aplicação de patches de segurança no sistema operacional dos computadores e servidores. Além disso, é indicado a implementação das ferramentas de Firewall, Proxy, Antivírus, Backup, entre outras.

  `,
  tags: ['segurança', 'pilares', 'integridade', 'confidencialidade'],
  image: '/images/posts/post1.png',
  likes: 10,
  comments: 30,
});

mock.onGet('/api/feed').reply(200, {
  posts: [
    {
      id: 1,
      title:
        'Os pilares da Segurança da Informação: Confidencialidade, Integridade, Disponibilidade',
      slug: 'confidencialidade-integridade',
      date: moment().subtract(1, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: 'Denilson Silva',
        avatar: '/images/avatars/avatar.jpg',
      },
      tags: ['segurança', 'pilares', 'integridade', 'confidencialidade'],
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