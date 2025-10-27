
//car
let carArr = [];

class Car {


    constructor(modelo, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.modelo = modelo;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;

    }
}

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].modelo === carClass.modelo)
            return i;
    }
    return -1;
}

//
function SetCarToCompare(el, carClass) {
   
    if (el.checked && carArr.length >= 2) {
        alert("Só é possível comparar 2 carros por vez.");
        el.checked = false; 
        return;
         
    
    } 
    
    if (el.checked) {
        carArr.push(carClass); //adiciona o objeto carro ao array
    } 
    else {
        const index = GetCarArrPosition(carArr, carClass);
        carArr.splice(index, 1); //remove o objeto carro do array (array e a posição)
    } 
}
function resetarCheck(){
}


function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    const compare0 = carArr[0]; //pega o primeiro item do array
    const compare1 = carArr[1]; //pega o segundo item do array

    document.getElementById("compare_image_0").innerHTML = `<img src="${compare0.image}" alt="">`;
    document.getElementById("compare_image_1").innerHTML = `<img src="${compare1.image}" alt="">`;

    document.getElementById("compare_modelo_0").innerText = compare0.modelo;
    document.getElementById("compare_modelo_1").innerText = compare1.modelo;

    document.getElementById("compare_preco_0").innerHTML = `R$ ${compare0.preco},00`;
    document.getElementById("compare_preco_1").innerHTML = `R$ ${compare1.preco},00`;

    document.getElementById("compare_alturaCacamba_0").innerText = `${compare0.alturaCacamba} mm`;
    document.getElementById("compare_alturaCacamba_1").innerText = `${compare1.alturaCacamba} mm`;

    document.getElementById("compare_alturaVeiculo_0").innerText = `${compare0.alturaVeiculo} mm`;
    document.getElementById("compare_alturaVeiculo_1").innerText = `${compare1.alturaVeiculo} mm`;

    document.getElementById("compare_alturaSolo_0").innerText = `${compare0.alturaSolo} mm`;
    document.getElementById("compare_alturaSolo_1").innerText = `${compare1.alturaSolo} mm`;

    document.getElementById("compare_capacidadeCarga_0").innerText = `${compare0.capacidadeCarga} Kg`;
    document.getElementById("compare_capacidadeCarga_1").innerText = `${compare1.capacidadeCarga} Kg`;

    document.getElementById("compare_motor_0").innerText = compare0.motor;
    document.getElementById("compare_motor_1").innerText = compare1.motor;

    document.getElementById("compare_potencia_0").innerText = `${compare0.potencia} cv`;
    document.getElementById("compare_potencia_1").innerText = `${compare1.potencia} cv`;

    document.getElementById("compare_volumeCacamba_0").innerText = `${compare0.volumeCacamba} L`;
    document.getElementById("compare_volumeCacamba_1").innerText = `${compare1.volumeCacamba} L`;

    document.getElementById("compare_roda_0").innerText = compare0.roda;
    document.getElementById("compare_roda_1").innerText = compare1.roda;

    

    
    


    
    



}
