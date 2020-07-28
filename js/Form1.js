class Form1 {

    constructor() {
      this.sportsbutton = createButton('SPORTS PERSONS');
      this.question = createElement('h2');
      
    }
     hide(){
       this.sportsbutton.hide();
       this.question.hide();
     }
  
    display(){
      this.question.html("WHAT DO YOU WANT TO KNOW ABOUT ?");
      this.question.position(70,100);
  
      this.sportsbutton.position(100,250);
  
      this.sportsbutton.mousePressed(()=>{
        this.question.hide();
        this.sportsbutton.hide();
        form2 = new Form2();
        form2.display();
        
      });
      
    }
  }
  