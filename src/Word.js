class Word{
    constructor(){
        this.form = two.makeText('alo',two.width/2,3*two.height/4);
        this.form.color = "rgb(255,0,0)";
        this.form.linewidth = 0.5;
        this.form.scale = 5.0;
        this.form.opacity = 0.0;
    }
    startAnimation(){
        this.form.value = this.getText();
        createAnimationWordPosition({x:two.width/2,y:two.height/2}).start();
        createAnimationWordOpacity(1.0).start();
        
    }
    endAnimation(){

        createAnimationWordOpacity(0.0,()=>{
            createAnimationWordPosition({x:two.width/2,y:3*two.height/4}).start();
        }).start();
        
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
  