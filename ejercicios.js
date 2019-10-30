// Punto 1
function InvertirString(Palabra)
{
    var x = Palabra.length;
    var strInvertido = "";
   
    while (x >= 0)
    {
        strInvertido = strInvertido + Palabra.charAt(x);
      x--;
    }
    return strInvertido;
}


// Punto 3
function EliminarDuplicados()
{
    var objArr = [ 1, 2, 3, 2, 3, 1, 4, 5];
    let sinRepetidos = objArr.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
    return sinRepetidos;
}

// Punto 4
function Resolver(n,m)
{
    if(n <= 0 || m <= 0)
    {
        return "Ingrese números no negativos"
    }
    else
    {
        var MiResultado = n+(n+1)+(n+2)+m;
        return MiResultado;
    }
}

//Punto 5 - B
function MostrarMes(arrA, ArrB)
{

}

//console.log(InvertirString("Mi texto"));
console.log(EliminarDuplicados())
//console.log(Resolver(2,5));
