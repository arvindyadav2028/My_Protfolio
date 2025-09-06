import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  messages:{text:string, sender:string}[] = [];
  userMessage: string = '';

  sendMessage(){
    if(this.userMessage.trim()){
      this.messages.push({text:this.userMessage,sender:'user'});

      //generate bot's response
      const botResponse = this.getBotResponse(this.userMessage);
      this.messages.push({text:botResponse,sender:'bot'});

      //clear the input field 

      this.userMessage = '';

    }
  }

  getBotResponse(message:string):string {
    const lowerCaseMessage = message.toLowerCase();
 
    //simple keyword-based responses
    if(lowerCaseMessage.includes('hello')){
      return 'Hello! How can I assist you today?';
    }else if(lowerCaseMessage.includes('portfolio')){
      return 'You can view my portfolio by navigating to the Portfolio section on this site.';
    } else if (lowerCaseMessage.includes('contact')) {
      return 'You can contact me via the contact form on this page or by emailing me directly at kamalv534@gmail.com';
    } else if (lowerCaseMessage.includes('about')) {
      return 'I am a web developer with experience in Angular and building custom solutions. What would you like to know more about?';
    } else {
      return 'I’m sorry, I don’t understand that. Can you please rephrase?';
    }

  }


}
