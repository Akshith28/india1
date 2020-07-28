class Form2 {

    constructor() {
      //this.backButton = createButton('< =');
      this.button1 = createButton("FOOTBALLER'S");
      this.button2 = createButton("SHUTTLER'S");
      this.button3 = createButton("WRESTLER'S");
      this.button4 = createButton("ATHLETS'S");
      this.button5 = createButton("TENNIS PLAYERS");
      this.button = createButton("CRICKETER'S");
      this.backbutton=createButton("< =")
    }
     hide(){
       this.button.hide();

       this.button1.hide();
       this.button2.hide();
       this.button3.hide();
       this.button4.hide();
       this.button5.hide();
     }
  
    display(){
     
      this.backbutton.position(20,10);
      this.button.position(100,250);
      this.button1.position(100,300);
      this.button2.position(100,350);
      this.button3.position(100,400);
      this.button4.position(100,450);
      this.button5.position(100,500);

    this.backbutton.mousePressed(()=>{
        this.button.hide();

       this.button1.hide();
       this.button2.hide();
       this.button3.hide();
       this.button4.hide();
       this.button5.hide();
        form1 = new Form1();
        form1.display();
      });
      
    }
  }
  