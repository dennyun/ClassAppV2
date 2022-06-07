mock.onGet('/api/quiz/pilares-da-segurança').reply(200, {
  questions: [
    {
      id: 1,
      questionText: "Quais são os três pilares da segurança da informação?",
      answerOptions: [
        { answerText: "Confidencialidade, Portabilidade, Segurança", isCorrect: false },
        { answerText: "Segurança, Integridade, Funcionalidade", isCorrect: false },
        { answerText: "Confidencialidade, Integridade, Disponibilidade", isCorrect: true },
        { answerText: "Backup, Integridade, Segurança", isCorrect: false },
        { answerText: "Jogo virtual", isCorrect: false }
      ],
      questionText:
        "Qual a importância de ter um serviço de proteção e backup ?",
      answerOptions: [
        { answerText: "Impede o Hacker de roubar seus dados", isCorrect: false },
        { answerText: "Evita sites maliciosos de forma automática", isCorrect: false },
        { answerText: "É um antivírus, e impede um ataque cibernético", isCorrect: false },
        { answerText: "Permite maior segurança, no caso de um ciberataque, pois vai estar com todas as informações salvas e poderá recuperar tudo de novo", isCorrect: true },
        { answerText: "Aumenta a integridade das informações de uma empresa aumente é necessário fortalecer a infraestrutura da proteção dos dados.", isCorrect: false }
      ],
      questionText: "Sobre a Confidencialidade é correto afirmar :",
      answerOptions: [
        { answerText: " Ter um backup", isCorrect: false },
        { answerText: "Conhecer os três pilares da segurança da informação", isCorrect: true },
        { answerText: "Ter um engenheiro social", isCorrect: false },
        { answerText: "Ter um engenheiro do Hawaii", isCorrect: false },
        { answerText: "Conhecer Construct 2 e suas funcionalidades", isCorrect: false }
      ],
      questionText: "Sobre a Confidencialidade é correto afirmar : 1. Somente pessoas autorizadas poderão ter acesso às informações; 2. A equipe deve ser conscientizada que não deve violar as regras de segurança da empresa; 3. Proteger os computadores de vírus e ciberataques",
      answerOptions: [
        { answerText: "Apenas 1 está correto", isCorrect: false },
        { answerText: "1 e 2 estão corretas", isCorrect: false },
        { answerText: "Nenhuma está correta", isCorrect: false },
        { answerText: "Apenas 3 está correta", isCorrect: false },
        { answerText: "Todas estão corretas", isCorrect: true }
      ],
      questionText: "No contexto da segurança da informação, há três pilares essenciais que devem ser considerados: confidencialidade, integridade e disponibilidade. Acerca desse assunto, assinale a alternativa que indica a medida que reforça o pilar de integridade",
      answerOptions: [
        { answerText: "Implementar um plano de recuperação de desastres em caso de perda de dados importantes", isCorrect: false },
        { answerText: "Definir acesso a informações somente para pessoas autorizadas", isCorrect: false },
        { answerText: "Implementar processos de manutenção rápida de hardware", isCorrect: false },
        { answerText: "Conscientizar os funcionários para que não violem regras e para que sigam os procedimentos de sigilo de dados", isCorrect: false },
        { answerText: "Permitir a reversão de arquivos para versões anteriores, para casos de edições acidentais.", isCorrect: true }
      ],
    },
  ],
});