

//carousel

//Array storage class

let carouselArr = [];




//class Carousel
class Carousel {

    constructor(img, texto, link) {
        this.img = img   //img da classe recebe o img do parâmetro do construtor
        this.texto = texto
        this.link = link

    }


    static Start(arr) { // o método só poderá ser acessado pela classe
        if (arr) {

            if (arr.length > 0) { // começa o carrossel se o array tiver itens 
                Carousel._sequence = 0; //inicia a sequencia
                Carousel._size = arr.length; //tamanho do array
                Carousel._updateDisplay(); //chama o proximo item
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 5000); //chama o proximo item a cada 5 segundos

            }

        } else {
            throw "Method Start need a Array Variable."; //lança erro se o parametro não for um array
        }
    }

    static Next() { //função para mover o carrossel para frente
        
        Carousel._sequence++
        if (Carousel._sequence >= Carousel._size) { //se a sequencia (ponteiro) for maior que o tamanho do array, volta para o inicio
            Carousel._sequence = 0; //volta para o inicio
            
        }
        Carousel._updateDisplay(); //atualiza a tela

    }
    

    static moverDireita() {  //função para mover o carrossel para direita

        Carousel._sequence ++  
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0
        }


        Carousel._updateDisplay();
    }
    static moverEsquerda() {  //função para mover o carrossel para esquerda    
        Carousel._sequence--; 
        if (Carousel._sequence < 0) { 
            Carousel._sequence = Carousel._size - 1; //volta para o ultimo item do array
            
        }
        Carousel._updateDisplay(); 
    }


    static _updateDisplay() {   //  função para pegar o item atual do array e mostrar na tela
        let itemAtual = carouselArr[Carousel._sequence];

        document.getElementById("carousel").innerHTML = `<a href="${itemAtual.link}"><img src="img/${itemAtual.img}"></a>` //mostra a imagem do item atual
        document.getElementById("carousel-title").innerHTML = `<p>${itemAtual.texto}</p>` //mostra o texto do item atual
    }





}

