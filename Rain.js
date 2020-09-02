class Rain{
  constructor() {
    this.drops = [];
    this.createNDrops(90);
    this.timeScale = 1;
    this.index = 0;
    this.start = false;
    this.old_position;
    this.old_opacity;
    this.old_size;
  }
  saveOlds(){
    
    this.old_opacity = this.drops[this.index].form.opacity;
    this.old_position = {x:this.drops[this.index].form.position.x,y:this.drops[this.index].form.position.y};
    this.old_size = {width: this.drops[this.index].form.width, height: this.drops[this.index].form.height};
    console.log(this.old_position);
  }
  

 
  onClick(){
    if(this.start){
      this.start = false;


      createAnimationDropSize(this.index, {width: this.old_size.width, 
                                           height: this.old_size.height},()=>{
        createAnimationDropPosition(this.index, {x: this.old_position.x, 
                                                 y: this.old_position.y},()=>{
          createAnimationSlowTime(1.0).start();
        }).start();
        createAnimationDropOpacity(this.index,this.old_opacity).start();
      }).start();
      background.add(this.drops[this.index].form);
    }else{
      this.start = true;
      this.index = Math.floor(Math.random()*rain.drops.length);
      const size = two.width > two.height ?  two.width : two.height;
      this.saveOlds();
      foreground.add(this.drops[this.index].form);

      createAnimationSlowTime(0.0,()=>{
        createAnimationDropPosition(this.index, {x: two.width/2, 
                                                 y:two.height/2},()=>{
          createAnimationDropSize(this.index, {width: size*1.5, 
                                               height: size*1.5}
          ).start();
        }).start();
        createAnimationDropOpacity(this.index,1.0).start();
      }).start();
    }
    
  }
  createNDrops(n){
    for(let i=0;i<n;i++){
      let drop = Drop.randomDrop();
      drop.addToScene();
      this.drops.push(drop);
      background.add(this.drops[i].form);
    }
  }
  update(delta){
    let deltaScale = (delta * this.timeScale) / 1000;
    
    for(let drop of this.drops){
      drop.update(deltaScale);
      if(drop.form.position.y - drop.size > two.height){
        drop.reset();
      }
    }
  }
}
function createAnimationSlowTime(new_timeScale,onComplete){
  return new TWEEN.Tween(rain)
  .to({
      timeScale: new_timeScale,
  },1000)
  .easing(TWEEN.Easing.Cubic.Out)
  .onComplete(function() {
    if(onComplete){
      onComplete();
    }
  })
}
function createAnimationDropPosition(index, new_position,onComplete){
  return new TWEEN.Tween(rain.drops[index].form.position)
              .to({
                  x: new_position.x,
                  y: new_position.y,
              },1000)
              
              .easing(TWEEN.Easing.Cubic.Out)
         
              .onUpdate(function(t) {
                
              })
              .onComplete(function() {
                if(onComplete){
                  onComplete();
                }
              });
}
function createAnimationDropOpacity(index, new_opacity,onComplete){
  return new TWEEN.Tween(rain.drops[index].form)
        .to({
            opacity: new_opacity,
        },1000).easing(TWEEN.Easing.Cubic.Out)
        .onComplete(function() {
          if(onComplete){
            onComplete();
          }
        })
}

function createAnimationDropSize(index, new_size,onComplete){
  return new TWEEN.Tween(rain.drops[index].form)
    .to({
        width: new_size.width,
        height: new_size.height,
    },1000).easing(TWEEN.Easing.Cubic.Out)
    .onComplete(function() {
      if(onComplete){
        onComplete();
      }
    })
}



/*
class Rain {
  constructor() {
    this.drops = [];
    this.timeScale = 1;
    this.animation = new Animation();


   this.startingAnimation = false;
   this.runningAnimation = false;
   this.endingAnimation = false;
  }
  createAnimationFromDrop(index) {
    let d = this.drops[index];
    //this.drops.splice(index,1);
    this.animation.start(d);
    this.startingAnimation = false;
    this.runningAnimation = true;
    this.drops[index].makeInvisible();
    this.drops[index].pos.x = width/2;
    this.drops[index].pos.y = height/2;
  }
  startAnimation(){
    // Se nao estiver rodando a animação
    if(!this.animation.isRunning){
      this.startingAnimation = true;
      //this.createAnimationFromDrop(Math.floor(Math.random() * this.drops.length))
    }
  }
 
  update() {
    if (this.drops.length < 2) {
      this.drops.push(Drop.randomDrop());
    }
    if(this.startingAnimation){
      this.timeScale = lerp(this.timeScale, 0, 0.08);
      if(this.timeScale <= 0.01){
        this.createAnimationFromDrop(Math.floor(Math.random() * this.drops.length))
      }
    }
    if(this.runningAnimation){
      this.timeScale = 0;
      this.animation.update();
      if(!this.animation.isRunning){
        
        this.runningAnimation = false;
        this.endingAnimation = true;
      }
    }
 
    if(this.endingAnimation){
     
      this.timeScale = lerp(this.timeScale, 1, 0.08);
      if(Math.abs(1-this.timeScale)<0.00001){
        this.endingAnimation = false;
        //this.drops.push(this.animation.backwardDrop);
        
      }
    }
  
    
    
    for (let drop of this.drops) {
        drop.update(this.timeScale);
    }
  }
  draw() {
    for (let drop of this.drops) {
      //drop.draw(); 
      
      drop.drawWithParallax();
    }
  }
}

*/