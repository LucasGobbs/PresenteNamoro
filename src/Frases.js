

class Frases{
    static index_perg = 0;
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
  */