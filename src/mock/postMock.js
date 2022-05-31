import moment from 'moment';
import mock from '../utils/mock';

mock.onGet('/api/post/pilares-da-segurança').reply(200, {
  id: 1,
  title:
    'Os pilares da Segurança da Informação: Confidencialidade, Integridade, Disponibilidade ',
  slug: 'pilares-da-seguranca',
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
}
);

mock.onGet('/api/post/tipos-de-hackers').reply(200, {
  id: 2,
  title:'Os tipos de hackers',
  slug: 'tipos-de-hackers',
  date: moment().subtract(1, 'day').toDate().getTime(),
  author: {
    id: 2,
    name: 'Igor Araujo',
    avatar: '/images/avatars/avatar.jpg',
  },
  markdownText: `

  ## Quais são os principais tipos de hackers?
  Embora o termo seja bem abrangente, é possível dividir os hackers em diferentes tipos e categorias.

  ## White Hats
  Traduzido como “chapéus brancos”, são os profissionais honestos, pesquisadores e operadores do ramo da segurança digital (ou segurança cibernética) que trabalham para descobrir brechas de segurança e melhorar a integridade de programas, sistemas e redes, ajudando a proteger usuários e seus dados. Eles trabalham tanto para empresas privadas quanto para órgãos de governo.

  Kevin Poulsen é um exemplo de White hat: ele ajudou a tornar as comunicações entre jornalistas e suas fontes mais segura e confiável.

  ## Black Hats
  Ou “chapéus pretos” em português, são o oposto dos White Hats. Também possuem muito conhecimento sobre tecnologia, mas usam malwares (programas, códigos maliciosos) para invadir sistemas, roubar informações ou executar ações independentemente da vontade das vítimas; eles praticam crimes contra pessoas, empresas e até mesmo órgãos de governo, e são muito usados em ações de espionagem industrial ou guerra cibernética entre países.

  Kevin Mitnick invadiu as redes da Pacific Bell e da Digital Equipment Corporation, o que o torna um exemplo de black hat – apesar de, depois de cumprir pena, ter se tornado um White hacker, ajudando a melhorar a segurança dos sistemas.

  ## Red Hats
  Também chamados de hackativistas, eles realizam ataques por motivações políticas, ideológicas, sociais e/ou religiosas. Eles também expõem informações confidenciais por várias razões (como defender a liberdade de informação, a transparência dos governos diante dos cidadãos, o combate aos abusos econômicos de empresas, dentre outras). Esta é a principal diferença entre eles e outros tipos de hackers, já que suas motivações não são primariamente para ganhos pessoais e financeiros.

  O exemplo mais significativo é o de Julian Assange, com o WikiLeaks (que conta com vários ativistas ao redor do mundo), além de Jude Milhon, que luta pelos direitos das mulheres ao redor do mundo através do grupo Cypherpunks.

  ## Gray Hats
  São profissionais que usam falhas de segurança em redes, programas ou sistemas e, com isto, tentam exigir das empresas a realização de melhorias e soluções para estes problemas. O que difere os Gray Hats (“chapéus cinza”) dos White Hats é que, diferente destes últimos, eles divulgam estas falhas de segurança para o público em geral.

  Em 2013, Khalil Shreateh, um pesquisador de segurança computacional, hackeou a página do perfil oficial de Mark Zuckerberg no Facebook para, assim, exigir a correção de um bug na rede social que ele havia descoberto, que permitia a terceiros postar conteúdo nas páginas invadidas sem o consentimento das vítimas (depois de tentar alertar o Facebook sobre o perigo e ser ignorado pela equipe da rede social).

  ## Script Kiddies
  Este grupo inclui criminosos que não se importam com nenhum tipo de ética profissional. A diferença entre estes e os outros tipos de hackers é que os script kiddies não são especialistas nem possuem grandes conhecimentos. Eles preferem seguir métodos que outros hackers criaram e ferramentas desenvolvidas por outras pessoas – são a categoria mais baixa dos hackers. Também são chamados de lammers.

  Apesar do termo, eles podem realizar grandes ataques e causar muitos danos, como um garoto de 15 anos que foi detido no Reino Unido em 2015 por roubar dados da TalkTalk Telecom Group PLC.

  ## Crackers
  São pessoas que também possuem muito conhecimento em informática e tecnologia, mas que usam este conhecimento para invadir sistemas e obter ganhos pessoais (como os Black Hats).

  Jonathan James, ainda no início dos anos 2000, havia invadido computadores da Defense Threat Reduction Agency (Agência de Defesa de Redução de Ameaças), coletando dados de empregados, senhas e credenciais do sistema – posteriormente, ele foi detido e sentenciado a seis meses de prisão aos 16 anos de idade.

  ## Hackers governamentais
  Há vários países ao redor do mundo que compreendem a necessidade de se preparar para guerras cibernéticas. Eles treinam e pagam para que hackers possam atuar em nome dos interesses nacionais, especialmente no meio virtual. Seus principais alvos são governos inimigos, além de oposicionistas internos aos governos aos quais eles servem.

  O exemplo mais recente de guerra cibernética foi a invasão contra websites de defesa e das forças armadas da Ucrânia, provavelmente realizada por hackers russos a serviço do governo.

  ## Hackers de corporações
  São parecidos com os hackers pagos por governos, mas os hackers de corporações (ou corporativos) servem empresas e grupos privados. O principal objetivo deles é o de invadir, roubar e prejudicar sistemas, dispositivos, redes e servidores de empresas concorrentes.

  Em 1997 a Gillette sofreu com espionagem corporativa depois que Steven Louis Davis, um de seus engenheiros, vazou informações confidenciais via e-mail para as principais concorrentes da marca. Ele foi condenado por espionagem industrial e sentenciado a 27 meses de prisão.

  ## Terroristas cibernéticos
  Também chamados de ciberterroristas, atuam por motivações ideológicas, políticas e religiosas, com o objetivo de disseminar caos e desordem. São responsáveis por prejudicar o fornecimento de serviços, prejudicar a infraestrutura, desabilitar sistemas inteiros e outros recursos de organizações e sistemas inimigos.

  Em 2015, um dos casos mais dramáticos foi o da propaganda terrorista difundida pelo Estado Islâmico, que fazia ameaças, invadia sistemas e recrutava novos adeptos através de meios digitais (inclusive através de contas de WhatsApp).

  ## Whistleblowers
  São hackers que vazam informações internamente, favorecendo concorrentes ou usando dados roubados para benefícios pessoais. Eles também podem se encaixar como hackers corporativos ou hackers governamentais que, ao invés de atacar alvos de “fora para dentro”, fazem os ataques de maneira interna.

  Em 2019, a gigante de telecomunicações AT&T foi vítima de um ataque interno. Um homem paquistanês subornou vários empregados da empresa e, pelo acesso interno, eles expuseram mais de 2 milhões de telefones celulares, vazando informações confidenciais.


  `,
  tags: ['segurança', 'hackers', 'black hast', 'white hast'],
  image: '/images/posts/post2.png',
  likes: 10,
  comments: 30,
});

mock.onGet('/api/feed').reply(200, {
  posts: [
    {
      id: 1,
      title:'Os pilares da Segurança da Informação: Confidencialidade, Integridade, Disponibilidade',
      slug: 'pilares-da-segurança',
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
      title: 'Os tipos de hackers',
      slug: 'tipos-de-hackers',
      date: moment().subtract(1, 'day').toDate().getTime(),
      author: {
        id: 2,
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
      title:'Os pilares da Segurança da Informação: Confidencialidade, Integridade, Disponibilidade',
      slug: 'pilares-da-seguranca',
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
    
  ],
});