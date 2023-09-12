function sumar() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 + num2;
    console.log(resultado)
    document.getElementById("resultado").textContent = "Resultado Suma: " + resultado;
   }
   function restar() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 - num2;
    console.log(resultado)
    document.getElementById("resultado").textContent = "Resultado Resta: " + resultado;
   }
   function multiplicar() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 * num2;
    console.log(resultado)
    document.getElementById("resultado").textContent = "Resultado Multiplicacion: " + resultado;
   }
   function dividir() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (num2 !== 0) {
    const resultado = num1 / num2;
    console.log(resultado)
    document.getElementById("resultado").textContent = "Resultado Division: " + resultado;
    } else {
    document.getElementById("resultado").textContent = "Error: División por cero";}
}