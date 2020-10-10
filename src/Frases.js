

class Frases{
    static index_perg = 9;
    static index_resp = 0;
    constructor(){
      
    }
    static getRandomFrase(){
       // let index = Math.floor(Math.random()*frases.respostas.length);
        let perg = frases.respostas[this.index_perg].pergunta;
        let resp = frases.respostas[this.index_perg].respostas[this.index_resp];
        if(!resp){
          this.index_perg++;
          this.index_resp = 0;
          perg = frases.respostas[this.index_perg].pergunta;
          resp = frases.respostas[this.index_perg].respostas[this.index_resp];
        }
        
       // console.log(this.index_perg,this.index_resp,perg,resp);
        this.index_resp++;
        return {
          index: this.index_resp,
          pergunta: perg,
          resposta: resp,
        }
    }
}

const frases = {
   
    "respostas": [
      
      {
        "pergunta": "Como tudo comecou &#128540",
        "respostas": ["(diretao do tinder)<br>Eu: Garota te falar<br>Eu: Sua bio é tão legal q nem sei por onde começar<br>Eu: Tipo gosto de tudo isso tambemmmmm"]
      },
      {
        "pergunta": "Eai, oque aconteceu?",
        "respostas": ["Conversa vai conversa vem, joguinhos no clash royale pra la e pra cá.<br><br> E a gostosa se apaixona pelo nerdinho :)<br>(e vice e versa)<br>"]
      },
      {
        "pergunta": "Fui apresentada a dona iolanda",
        "respostas": ["Vc estava jogando comigo em anchieta e me apresentou a ela<br><br>(Mal sabia dona yolanda que eu ja havia conquistado a senhorita julia)"]
      },
      {
        "pergunta": "Primeira vez em vixxx",
        "respostas": ["Fui pra o aniversário da duda, e dei uma fugida pra conhecer a bonita<br><brLembro de vc toda stalker me filmando na janela do jao vitor"]
      },
      {
        "pergunta": "Momentos aleatorios ",
        "respostas": ["1) Vc pulando a gradinha la de baixo no pique pega<br>2) minha queda jogando tf quase morri e vc dando gargalhada<br>3)Nossa noite eu vc eler e lolo, contando historia e dando gargalhada até a mae do eler fica brava kkkkkk"]
      },
      {
        "pergunta": "Segunda vez em vix",
        "respostas": ["1) Brama 9 horas da manha<br>2) Andadinha na praia até a perna doer<br>3)melhor strogonof da minha vida<br>4)maratonar series comendo até explodir melhor coisa"]
      },
      {
        "pergunta": "Eu conheci sua familiaaa",
        "respostas": ["Reveionzinho regado a bramas, churrasquin, samba, andadas na floresta dos nazistas<br><br>(E o melhor a companhia da grande gostosa ai)😚✌"]
      },
      {
        "pergunta": "Descobri oque era amor do seu lado",
        "respostas": ["Vc me ensinou, sem eu pedir.Amor e pás apenas"]
      },
      {
        "pergunta": "Quarentena SOS &#128567",
        "respostas": ["Nesses 3 meses juntos, descobri o quanto sua presenca é boa pra mim<br>Descobri o quanto quero viver ao seu ladinho"]
      },
      {
        "pergunta": "Um animm",
        "respostas": ["Sò quero que esse anim seja o primeiro de muitos<br>Passar o resto da vida contigo, jogando joguinhos, madrugando no mine e sendo feliz ao seu ladinnn"]
      },
      {
        "pergunta": "Te amo meu amooooooo",
        "respostas": ["💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖"]
      }
      
    ]
  
  };
  /*
   "perguntas":[
      "Porque eu te amo",
      "Porque eu te acho incrivel",
      "Momentos especiais nossos",
      "Momentos especiais nossos (no clash royale)",
    ],
{
  "perguntas": [
    {
      "pergunta": "Porque eu te amo",
      "respostas": [
        "Eu posso ser eu mesmo com voce, com todas as minhas bobeiras e brincadeiras. Isso é a melhor coisa do mundo",
        "C é boba igual eu :v"
      ]
    },
    {
      "pergunta": "Porque eu te acho incrivel",
      "respostas": [
        "Teve um dia que vc fez sozinha uma apresentação de slides no celular, completa cheia de imagens... tipo wtf? vc é mt foda"
      ]
    },

    {
      "pergunta": "Momentos especiais de eu com vc",
      "respostas": [
        "Vc quando conheceu o eler e a lorraine e ficaram amiguinhos aaaaa mt fofo",
        "Minha queda jogando tft aaaaaaa, porque aquele darius não girou. E vc capotando de rir com isso :v",
        "Eu vc e o eler no among us, e eu acusando ele sendo que vc era a impostora (falsa)",
        "Nossa noite eu vc eler e lolo, só contando historia top até a mae do eler ficar brava kkkk",
        "Nosso estrogonoff top do top, até hoje lembro do gostin dele mt saudade",
        "A primeira vez que nos encontramos, vc toda stalker me filmando pela janela mdsssss",
        "Aquela vez que eu tava correndo atras de vc (n sei pq) e vc desceu a escada e pulou o muro fodac kkkkkkk",
        "Aquela vez que ficamos mó tempao andando pela praia no negocio de iemanja la, voltei com a perna doída de andar",
        "8 da manha caminhadinha em jardin da penha com direito a brama gelada kkkkkkkkkkkkk",
        "Churrascão brabo que eu fiz pros seus tios lá, eu suando igual um cavalo enchendo balde de agua pra jogar no amigo da sua mae la q pediu kkkkk",
        "Primeiro dia que eu dormi em vix contigo, acordei e vc tava fazendo pao com salsisha pra mimmmmmmmm (café da manha na cama fodac)",
        "lembra da lan house montada aki quando vc e eler se conheceram, um monte de pc e nois jogando party hard ",
        "Reveion vc toda tristinha pq eu ia embora, ai dona regina ligou e deu o aval pra eu passar contigo o ano novo. Vc ficou um anjinho toda felizinhaaa",
        "Meia noite pra mais, seu primo alexandre preparando a cama pras duas filhas e nois só na brincadeira tensa suando pra carai ashduasdhas",
        "Maratona de harry potter e de stranger things com direito a um baldão de comida que a gente fazia mdsssss",
        "Nossa ida ao aeroporto indo resgatar o amigo da sua mãe, eu n sei vc mas fiquei imaginando que era a gente indo viajar pra algum lugar :3",
        "A gente jogando no minecraft aki em casa, só o vicio. Ai a gente olha pro lado ja amanhecendo (passamo a noite jogando minecraft pqp)",
        "Madrugando terminando boku no hero, endeavor pegando fogo e rodando dms kkkkkkkkkk",
        ""
      ]
    },
    {
      "pergunta": "Momentos especiais nossos (no clash royale)",
      "respostas": [
        "No começo do namoro, a gente jogando clash juntinho todo dia. Não tinha coisa melhor",
        "Vc jogando comigo lá na casa da sua vó, falando de mim pra elaaa",
        "Eu vc juntin na cama jogando royale com a outra juliaaaa"
  
      ]
    }
  ]

}



{
        "pergunta": "Porque eu te amo",
        "respostas": [
          "Eu posso ser eu mesmo com voce, com todas as minhas bobeiras e brincadeiras. Isso é a melhor coisa do mundo",
          "C é boba igual eu :v"
        ]
      },
      {
        "pergunta": "Porque eu te acho incrivel",
        "respostas": [
          "Teve um dia que vc fez sozinha uma apresentação de slides no celular, completa cheia de imagens... tipo wtf? vc é mt foda"
        ]
      },
  
      {
        "pergunta": "Momentos especiais de eu com vc",
        "respostas": [
          "Vc quando conheceu o eler e a lorraine e ficaram amiguinhos aaaaa mt fofo",
          "Minha queda jogando tft aaaaaaa, porque aquele darius não girou. E vc capotando de rir com isso :v",
          "Eu vc e o eler no among us, e eu acusando ele sendo que vc era a impostora (falsa)",
          "Nossa noite eu vc eler e lolo, só contando historia top até a mae do eler ficar brava kkkk",
          "Nosso estrogonoff top do top, até hoje lembro do gostin dele mt saudade",
          "A primeira vez que nos encontramos, vc toda stalker me filmando pela janela mdsssss",
          "Aquela vez que eu tava correndo atras de vc (n sei pq) e vc desceu a escada e pulou o muro fodac kkkkkkk",
          "Aquela vez que ficamos mó tempao andando pela praia no negocio de iemanja la, voltei com a perna doída de andar",
          "8 da manha caminhadinha em jardin da penha com direito a brama gelada kkkkkkkkkkkkk",
          "Churrascão brabo que eu fiz pros seus tios lá, eu suando igual um cavalo enchendo balde de agua pra jogar no amigo da sua mae la q pediu kkkkk",
          "Primeiro dia que eu dormi em vix contigo, acordei e vc tava fazendo pao com salsisha pra mimmmmmmmm (café da manha na cama fodac)",
          "lembra da lan house montada aki quando vc e eler se conheceram, um monte de pc e nois jogando party hard ",
          "Reveion vc toda tristinha pq eu ia embora, ai dona regina ligou e deu o aval pra eu passar contigo o ano novo. Vc ficou um anjinho toda felizinhaaa",
          "Meia noite pra mais, seu primo alexandre preparando a cama pras duas filhas e nois só na brincadeira tensa suando pra carai ashduasdhas",
          "Maratona de harry potter e de stranger things com direito a um baldão de comida que a gente fazia mdsssss",
          "Nossa ida ao aeroporto indo resgatar o amigo da sua mãe, eu n sei vc mas fiquei imaginando que era a gente indo viajar pra algum lugar :3",
          "A gente jogando no minecraft aki em casa, só o vicio. Ai a gente olha pro lado ja amanhecendo (passamo a noite jogando minecraft pqp)",
          "Madrugando terminando boku no hero, endeavor pegando fogo e rodando dms kkkkkkkkkk",
          ""
        ]
      },
      {
        "pergunta": "Momentos especiais nossos (no clash royale)",
        "respostas": [
          "No começo do namoro, a gente jogando clash juntinho todo dia. Não tinha coisa melhor",
          "Vc jogando comigo lá na casa da sua vó, falando de mim pra elaaa",
          "Eu vc juntin na cama jogando royale com a outra juliaaaa"
    
        ]
      }
  */