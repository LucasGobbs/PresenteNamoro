class Word{
    constructor(){
        this.frase = document.body.querySelector('.card');
        this.pergunta = document.body.querySelector('.pergunta');
        this.resposta = document.body.querySelector('.resposta');
        this.form = two.makeText('alo',two.width/2,3*two.height/4);
        this.form.color = "rgb(255,0,0)";
        this.form.linewidth = 0.5;
        this.form.scale = 5.0;
        this.form.opacity = 0.0;
    }
    startAnimation(){
      let txt = this.getText();
      this.frase.classList.add("active");
      this.pergunta.innerHTML = txt.pergunta;
      this.resposta.innerHTML = txt.resposta;
      //this.frase.innerHTML = this.getText();
      //this.form.value = this.getText();
      //createAnimationWordPosition({x:two.width/2,y:two.height/2}).start();
      //createAnimationWordOpacity(1.0).start();
        
    }
    endAnimation(){
      this.frase.classList.remove("active");
        //createAnimationWordOpacity(0.0,()=>{
        //    createAnimationWordPosition({x:two.width/2,y:3*two.height/4}).start();
        //}).start();
        
    }
    update(delta){
       // if(!wordFlag){
            //this.form.opacity = 0.0;
        //}
    }
    getText(){
        return Frases.getRandomFrase();
    }
}
function createAnimationWordPosition(new_position, onComplete) {
    return new TWEEN.Tween(word.form.translation)
      .to({
        x: new_position.x,
        y: new_position.y,
      }, 1000)
  
      .easing(TWEEN.Easing.Cubic.Out)
  
      .onUpdate(function (t) {
  
      })
      .onComplete(function () {
        if (onComplete) {
          onComplete();
        }
      });
  }
  
  function createAnimationWordOpacity(new_opacity, onComplete) {
    return new TWEEN.Tween(word.form)
      .to({
        opacity: new_opacity,
      }, 1000).easing(TWEEN.Easing.Cubic.Out)
      .onComplete(function () {
        if (onComplete) {
          onComplete();
        }
      })
  }
  
  function createAnimationWordSize(new_size, onComplete) {
    return new TWEEN.Tween(word.form)
      .to({
        width: new_size.width,
        height: new_size.height,
      }, 1000).easing(TWEEN.Easing.Cubic.Out)
      .onComplete(function () {
        if (onComplete) {
          onComplete();
        }
      })
  }
  