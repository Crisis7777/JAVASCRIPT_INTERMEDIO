const nombre = "Cristian";
const pais = "Colombia";

if(!(nombre !== "Cristian")){
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

// El sensei Cristian es de Colombia
if(nombre == "Cristian" && pais == "Colombia"){
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

if(nombre == "Cristian" && pais == "Colombia"){
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

// El sensei que no es Cristian (o sea adrian) no es de Colombia
if(nombre !== "Cristian" && pais !== "Colombia"){
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

// O el sensei es Cristian o el sensei es Colombiano
if(nombre == "Cristian" || pais == "Colombia"){
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

// O el sensei es Cristian o el sensei es Colombiano
if(nombre == "Cristian" || pais == "Colombia"){
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

if(nombre == "Adrian" || pais == "Colombia"){
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

// nombre !== "Cristian" // False
// ! (nombre !== "Cristian") // Verdadero


/** 
 * 
 * 
 * 
  !Verdadero = Falso
  !Falso = Verdadero

  !== / ===
  != / ==

  Verdadero && Verdadero = Verdadero
  Verdadero && Falso = Falso
  Falso && Verdadero = Falso
  Falso && Falso =  Falso

    Verdadero || Verdadero = Verdadero
  Verdadero || Falso = Vedadero
  Falso || Verdadero = Vedadero
  Falso || Falso =  Falso

*/