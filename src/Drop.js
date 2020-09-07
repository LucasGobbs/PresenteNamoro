class Drop {
  constructor(pos, min_size, max_size, size, color) {

    this.pos = pos;
    this.size = size;
    this.opacity = Utils.map(size, min_size, max_size, 0.9, 0.2);
    this.color = color;

    const horizontal_vel = Utils.map(size, min_size, max_size, 50, 100)* (Math.random()*2-1);
    const vertical_vel = Utils.map(size, min_size, max_size, 50, 300);
    this.velocity = new Two.Vector(horizontal_vel,vertical_vel);
  }
  addToScene() {
    if (!this.form) {
      this.form = two.makeEllipse(this.pos.x, this.pos.y, this.size, this.size);
      this.form.vertices.forEach(function(v) {
        v.origin = new Two.Vector().copy(v);
      });

    } else {
      this.form.translation.set(this.pos.x, this.pos.y);
      this.form.width = this.size * 2;
      this.form.height = this.size * 2;
    }
    this.form.noStroke().fill = this.color;
    this.form.opacity = this.opacity;
  }
  update(delta) {
    const vel_delta = this.velocity.clone().multiplyScalar(delta);
    this.form.translation.addSelf(vel_delta);
    
    
    
    
    
  }
  reset() {

    const other_drop = Drop.randomDrop();

    this.pos = other_drop.pos;
    this.size = other_drop.size;
    this.velocity = other_drop.velocity;
    this.opacity = other_drop.opacity;
    this.color = other_drop.color;
    this.addToScene();
  }
  static randomDrop() {

    let pos = {
      x: Math.random() * two.width,
      y: -Math.random() * 400
    };
    let prob = Math.random() * 100;

    let max_size, min_size, size, color;
    if (prob <= 80) {
      max_size = 30;
      min_size = 10;
    } else {
      max_size = 50;
      min_size = 10;
    }

    let delta_size = (max_size - min_size)
    size = Math.random() * delta_size + min_size;
    color = getRandomColor();
    //console.log(size);
    return new Drop(pos, min_size, max_size, size, color);
  }

}

function getRandomColor() {
  return 'rgb(' +
    Math.floor(Math.random() * 255) + ',' +
    Math.floor(Math.random() * 255) + ',' +
    Math.floor(Math.random() * 255) + ')';
}
/*class Drop {
  constructor(pos,min_size,max_size,size,color){
    this.pos = pos;
    this.min_size = min_size;
    this.max_size = max_size;
    this.size = size;
    this.color = color;

    this.invisible = false;
  }
  clone(){
    return new Drop(this.pos,this.min_size,this.max_size,this.size,this.color);  
  }
  makeInvisible(){
    this.invisible = true;
  }
  static randomDrop(){
    let pos = createVector(Math.random() * width, 
                            -Math.random() * 100);
    let prob = Math.random() * 100;
    let max_size, min_size, size, color;
    if(prob <= 80){
      max_size = 30;
      min_size = 5;
    } else {
      max_size = 50;
      min_size = 5;
    }
    
    let delta_size = (max_size - min_size)
    size = Math.random() * delta_size + min_size;
    color = createVector(Math.floor(Math.random()*255) ,
                              Math.floor(Math.random()*255) ,
                              Math.floor(Math.random()*255) );
    return new Drop(pos,min_size,max_size,size,color);                   
  }
 
  reset(){
    let nDrop = Drop.randomDrop();
    this.pos = nDrop.pos;
    this.min_size = nDrop.min_size
    this.max_size = nDrop.max_size
    this.size = nDrop.size
    this.color = nDrop.color
  }
  update(timeScale){
   
    let delta = map(this.size, this.min_size, 
                               this.max_size, 
                               2,10);
    this.pos.y+=delta*timeScale;
    if(this.pos.y > height){
       this.reset();
    }
  }
  drawWithParallax(){
    const min = this.size * 0.5 - this.size;
    const max = this.size * 0.5 + this.size;
    let offset = map(mouseX, 0, width, max,min );
   
    let delta = this.pos.x + offset;
    if(!this.invisible){
      fill(this.color.x,this.color.y,this.color.z,
        map(this.size,this.min_size,this.max_size,255,70))
        circle(delta,this.pos.y,this.size);
    }
    
    
    //console.log(mouseX, 0, width, max,min );
  }
  draw(){
    fill(this.color.x,this.color.y,this.color.z,
         map(this.size,this.min_size,this.max_size,255,70))
    circle(this.pos.x,this.pos.y,this.size);
    
  }
  drawNoAlpha(){
    fill(this.color.x,this.color.y,this.color.z)
    circle(this.pos.x,this.pos.y,this.size);
  }
}
*/