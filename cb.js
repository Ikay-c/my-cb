function Mybot(name){
  this.posssibleInput = [['hello', "what's up", " how are you doing?"], ["what is your name", "who made you?", " when were you created?"], ["what are you made of?", "where do you live"]];
  
  this.replies = [["Hi", "I'm good", " I'm fine, trust you're too"], ["I am " + name, "My boss", " A very long time ago"], ["I'm made of a high level language", "That's none of your business. Goodbye!"]];
  this.chatBody = document.createElement("div");
  this.chatBody.setAttribute('class', 'body');
  this.messageBody = document.createElement("div");
  this.messageBody.setAttribute('class', 'message');
  this.messageBox = document.createElement("input");
  this.messageBox.setAttribute('class', 'input');
  this.messageBox.setAttribute('type', 'text');
  this.sendButton = document.createElement("button");
  this.sendButton.innerHTML = "send";
  this.sendButton.setAttribute('class', 'click');
  this.chatBody.appendChild(this.messageBody);
  this.chatBody.appendChild(this.messageBox);
  this.chatBody.appendChild(this.sendButton);
  this.Msg = "";
  this.start = function(){
    document.body.appendChild(this.chatBody);
  };
  this.create = function(Msg, msgBody, type = 'receive'){ 
    var msgBox = document.createElement('div');
    msgBox.setAttribute('class', 'msgBox');
    var text = document.createElement('span');
    if (type == 'receive'){
      text.style.color= 'green';
      text.setAttribute('class', 'user');
    } else {
      text.style.color= 'red';
      text.setAttribute('class', 'bot');
    }
    msgBox.appendChild(text);
    msgBody.appendChild(msgBox);
    text.innerHTML = Msg;
    };
  this.receive = function(Msg){
      this.Msg = Msg;
      this.create(Msg, this.messageBody,'receive' );
    };
  var obj = this;
  function chat(){
    var userMessage = obj.messageBox.value;
    obj.receive(userMessage);
    var userMsg = userMessage.toLowerCase();
    //console.log(userMessage);
    obj.messageBox.value = null;
    var x = 0;
    while (x<obj.posssibleInput.length){
      var innerMessage = obj.posssibleInput[x];
      var y = 0;
      while (y < innerMessage.length){
        var message = innerMessage[y];
        var check = userMsg.includes(message);
        if (check==true){
          var innerReplies = obj.replies[x];
          obj.botReply(innerReplies[y]);
        }
        y++;
      }
      x++;
    }
  }
  this.botReply = function(Msg){
        this.create (Msg, this.messageBody, 'botReply');
      };
  this.sendButton.onclick = function(e){//here is an event that sends the user's message once clicked.
      e.preventDefault();
      chat();
    };
  
}
var chat1 = new Mybot("Alexei");
chat1.start();
