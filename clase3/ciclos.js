//--tabla de multiplicar... let base = 3 -> "3*1=3 \n 3*2=6 \n .... 1 hasta 100"

//que hagamos todas las tablas de multiplicar de los numeros del 1 al 10 y cada nuero de esos, hacer la respectiba multiplicacion hasta el 100 2*2=4,2*3=6,...2*100=200

let num = 2;


for(let i=5;i<=10;i+=1){ //i=i+1
    for(let j=0;j<=100;j+=20){ //j=j+2
        console.log(`${i} * ${j} = ${i*j}`)
        //console.log(i+"*"+j+"="+(i*j))
    }
}