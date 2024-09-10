function Envelope() {
  this.envelopeBack = document.querySelector(".envelope-back");
  this.envelopeOpening = document.querySelector(".envelope-opening");
  this.envelopeFront = document.querySelector(".envelope-front");
  this.envelopeMessage = document.querySelector(".envelope-message");
  this.envelopeGlow = document.querySelector(".envelope-shadow");
  this.displayMessage = document.querySelector(".display-message");
  this.envelopeMessageArea = document.querySelector(".envelope-message-area");
  this.smallQuote = document.querySelector(".small-quote");
  this.messageQuote = document.querySelector(".quote");
  this.messageAuthor = document.querySelector(".author");

  this.quotes = [
    {
      quote: "Tu é dona de um sorriso e risada que se tiver alguem que não trepida, pode internar (Esse aqui foi só o elogio mesmo)",
      author: "Comedor de sorvete sabor bacio",
      tag: "hope"
    },
    {
      quote: "Melhor copilota semi-oficial, um porque ainda não tivemos uma experiencia de verdade e outra porque eu vou querer carona algumas vezes",
      author: "Relampago Marquinhos do ABC",
      tag: "hope"
    },
    {
      quote: "Mesmo que até o tarot esteja contra meu sucesso, o pedido do nerd pra Deus se sobrepõe eu confio",
      author: "Nerd da TI",
      tag: "hope"
    },
    {
      quote: "Companhia para vinho, cerveja, whisky, gasolina, alcool zulu você tem e com exclusividade, pois eu faço questão de levar a bebida",
      author: "Alcoolatra assumido",
      tag: "hope"
    },
    {
      quote: "Essa é só uma forma de mostrar o que os homenzinhos de dentro do celular conseguem fazer, e te falar que você é incrível!",
      author: "Homenzinho preso no Iphone 13",
      tag: "hope"
    },
  ];

  this.colors = {
    hope: {
      envBack: "#bac6bf",
      envMessage: "#d1a5a5",
      envMsgBorder: "#d1a5a5",
      envOpening: "#DAEDE2",
      envFront: "#DAEDE2"
    },
    science: {
      envBack: "#c63e30",
      envMessage: "#2C3E50",
      envMsgBorder: "#21303e",
      envOpening: "#E74C3C",
      envFront: "#E74C3C"
    },
    life: {
      envBack: "#332532",
      envMessage: "#FF974F",
      envMsgBorder: "#F77A52",
      envOpening: "#644D52",
      envFront: "#644D52"
    },
    success: {
      envBack: "#1B1D26",
      envMessage: "#BFBD9F",
      envMsgBorder: "#aaa88d",
      envOpening: "#425955",
      envFront: "#425955"
    },
    inspirational: {
      envBack: "#1C0C19",
      envMessage: "#CC4452",
      envMsgBorder: "#723147",
      envOpening: "#31152B",
      envFront: "#31152B"
    },
    happiness: {
      envBack: "#1C1D21",
      envMessage: "#445878",
      envMsgBorder: "#394a66",
      envOpening: "#31353D",
      envFront: "#31353D"
    }
  };

  this.openEnvelope = function() {
    this.envelopeOpening.classList.toggle("open-envelope");
    this.envelopeMessage.classList.toggle("push-message");
    this.envelopeGlow.classList.toggle("envelope-glow");
    this.envelopeMessageArea.classList.toggle("envelope-msg-area-show");
  };

  this.showMessage = function() {
    this.displayMessage.classList.add("view-message");
    this.messageQuote.style.fontSize = "20px";
    this.messageAuthor.style.fontSize = "16px";
  };

  this.closeMessage = function() {
    this.displayMessage.classList.remove("view-message");
    this.messageQuote.style.fontSize = "0";
    this.messageAuthor.style.fontSize = "0";
  };

  this.envelopeColor = function(frontColor, backColor, msgColor, msgBorderColor, opnColor) {
    this.envelopeFront.style.borderLeftColor = frontColor;
    this.envelopeFront.style.borderRightColor = frontColor;
    this.envelopeFront.style.borderBottomColor = frontColor;
    this.envelopeBack.style.background = backColor;
    this.envelopeMessage.style.background = msgColor;
    this.envelopeMessage.style.borderColor = msgBorderColor;
    this.displayMessage.style.background = msgColor;
    this.displayMessage.style.borderColor = msgBorderColor;
    this.envelopeOpening.style.borderTopColor = opnColor;
  };

  this.getEnvelope = function() {
    const qaa = this.quotes;
    const randomIndex = Math.floor(Math.random() * qaa.length);

    if (this.envelopeOpening.classList.contains("open-envelope")) {
      // Close the envelope if is opened
      this.openEnvelope();
      // Don't change the quote if the envelope is opened
      this.smallQuote.textContent = this.smallQuote.textContent;
      this.messageQuote.textContent = this.messageQuote.textContent;
      this.messageAuthor.innerHTML = this.messageAuthor.textContent;
    }
    else {
      // Get random quote if the envelope is closed
      this.smallQuote.textContent = `${qaa[randomIndex].quote}`;
      this.messageQuote.textContent = `${qaa[randomIndex].quote}`;
      this.messageAuthor.innerHTML = `&mdash;&nbsp;${qaa[randomIndex].author}`;
      // Change the envelope color
      // Save the tag from quotes to a variable
      const tag = qaa[randomIndex].tag;
      const colors = this.colors;
      const envBack = colors[tag].envBack;
      const envMsg = colors[tag].envMessage;
      const envMsgBorder = colors[tag].envMsgBorder;
      const envOpn = colors[tag].envOpening;
      const envFront = colors[tag].envFront;

      // Call the function to change colors
      this.envelopeColor(envFront, envBack, envMsg, envMsgBorder, envOpn);
    }
  };
}

const envelope = new Envelope();