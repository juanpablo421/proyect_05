const math = {}
    function add(a,b){
        return a + b;
    }
    function substract(a,b){
        return a - b;
    }
     function multiply(a,b){
        return a * b;
     }

        // define la funcion dividir(divide)
     function divide(a,b){
        if ((b ==0 && a==0)||(b==0)){
            return `ERROR0:N/A :: VALORES A= ${a} y B =${b}`.bgRed
            }else if (a== 0) {
                return `ERROR0:N/A :: VALORES A= ${a} y B =${b}`.bgRed
            }else{
                return a / b;

                }
            }
            Math.add = add;
            Math.substract = substract;
            Math.multiply = multiply;
            Math.divide = divide;

            module.exports = Math;
            