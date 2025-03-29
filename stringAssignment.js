str1 = 'wisdom'
str2 = "Spourts IT Training Hub"
str3 =  'Batch 42'

str4 = "Priya"+" Patil"

console.log(typeof(str4))

console.log(str4.lenght)

console.log(str4.toUpperCase())
console.log(str4.toLowerCase())

str5 = str1 +" "+ str2
console.log(str5)
console.log(str1.concat(" ",str2))

console.log(str5.charAt(7))

//.indexOf, .lastIndexOf(), .includes(), .startWith(), .endsWith().

console.log(str5.indexOf("S"))
console.log(str5.indexOf("i"))

console.log(str5.lastIndexOf("i"))

console.log(str5.includes("it"))

//.slice(), .substring(), .substr()

strTemp = str5.substring(7,14);
console.log(str5)
console.log(strTemp)

strTemp = str5.slice(7,14);
console.log(str5)
console.log(strTemp)

//.trim(), .trimStart(), .trimEnd().

str7= "             Hello                  ";
console.log(str7.length)
console.log(str7.trim().length)
console.log(str7.trimStart(). length)
console.log(str7.trimEnd().length)


str8="My .... name ....";
console.log(str8)
str9 = str8.replaceAll("....", "wisdom");
console.log(str9)

str10= "APPLE| MANGO |ORANGE| BANANA|"
arrayNew = str10.split("|")
console.log(arrayNew)

array1=["WATERMELON","GRAPES","PINEAPPLE"]
console.log(array1)
console.log(array1.join("|"))

console.log(str5)
console.log(str5.replaceAll(" ", "-"))

str10 = "spourts it training hub"
console.log(str10)
result =''
capitalizeNext= true;
for(i=0;i<str10.length;i++){
    if(str10[i] === " "){
        result += " ";
        capitalizeNext = true;
    }else if (capitalizeNext) {
        result += str10[i].toUpperCase();
        capitalizeNext = false;
    } else{
        result += str10[i];
    }
    }
    console.log(result);

