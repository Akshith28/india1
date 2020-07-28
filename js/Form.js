class Form {

  constructor() {
    this.button = createButton('EXPLORE');
    //this.title = createElement('h1');
    
  }
  hide(){
    this.button.hide();
    //this.title.hide();
  }

  display(){
    //this.title.html("Explore INDIA");
    //this.title.position(displayWidth/2 - 450, 10);
    this.button.position(windowWidth/2-250, windowHeight/2);
   
    this.button.mousePressed(()=>{
      this.button.hide();
      //this.title.hide();
      form1 = new Form1();
      form1.display();
    });

  }
}
