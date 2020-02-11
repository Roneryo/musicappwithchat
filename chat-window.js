class ChatWindow extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
  
      // Create a shadow root
      const shadow = this.attachShadow({mode: 'open'});
  
      // Create spans
      const window = document.createElement('div');
      window.setAttribute('class', 'chat-window');
      
      const headerWindow = document.createElement('div');
      headerWindow.setAttribute('class','header-window');

      const closeButton = document.createElement('a');
      closeButton.setAttribute('class','close')
      const closeButtonText = document.createElement('span');
      closeButtonText.setAttribute('class','closeText');
      closeButton.innerHTML="X";
      const windowTitle = document.createElement('p');
      windowTitle.innerHTML='Ventana de chat';
      windowTitle.setAttribute('class','window-title');
      headerWindow.appendChild(windowTitle);
      headerWindow.appendChild(closeButton);
      const messagesSection = document.createElement("div");
      messagesSection.setAttribute('class','messagesSection');
      //icon.setAttribute('tabindex', 0);
      const info = document.createElement('span');
      info.setAttribute('class', 'info');
  
      // Take attribute content and put it inside the info span
      const text = this.getAttribute('data-text');
      info.textContent = text;

  
      // Create some CSS to apply to the shadow dom
      const style = document.createElement('style');
      console.log(style.isConnected);
  
      style.textContent = `
        .chat-window {
          display:flex;
          flex-direction:column;
          position: absolute;
          border-radius:20px;
          /*
          bottom:0;
          right:0;
          margin-bottom:75px;*/
          background:gray;
          width:20%;
        }
        .header-window{
            display:inherit;
            justify-content:flex-end;
        }
        .header-window *{
        }
        .header-window .window-title{
            margin:5px auto;
        }
        .header-window .close {
            width:20%;
            background:red;
            display:inherit;
            border-top-right-radius:10px;
            border-bottom-right-radius:3px;
        }
        
        .header-window .close .close  {
        }
        .header-window.window-title{
            text-align:center;
            justify-self:flex-start;
            align-self:center;
        }
        .chat-window .messagesSection{
            margin:5px;
            padding:3px;
            background:white;
        }
        .info {
          background:red;
          font-size: 0.8rem;
          width: 80%;
          display: inline-block;
          background: white;
          /*border-radius: 10px;*/
          
          /*opacity: 0;
          transition: 0.6s all;
          position: absolute;
          bottom: 20px;
          left: 10px;
          z-index: 3;*/
        }
      `;
  
      // Attach the created elements to the shadow dom
      shadow.appendChild(style);
      console.log(style.isConnected);
      shadow.appendChild(window);
      
      window.appendChild(headerWindow);
      window.appendChild(messagesSection);
      window.appendChild(info);
    }
  }
  
  // Define the new element
  customElements.define('chat-window', ChatWindow);