

class Frases{
    constructor(){

    }
    static getRandomFrase(){
        let index = Math.floor(Math.random()*frases.respostas.length);
        return {
          index: index+1,
          pergunta: frases.perguntas[frases.respostas[index].pergunta],
          resposta: frases.respostas[index].resposta,
        }
    }
}

const frases = {
    "perguntas": [
        "aaaaaaaaa",
        "bbbbbbbbb",
        "ccccccccc"
    ],
    "respostas":[
      {
        "pergunta": 0,
        "resposta": "aaaa-resp"
      },

      {
        "pergunta": 1,
        "resposta": "bbbb-resp"
      },
      {
        "pergunta": 2,
        "resposta": "cccc-resp"
      },

      
    ]
  
  };