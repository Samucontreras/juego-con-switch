var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu) {
    var ganador = null;
    switch(user) {
        case op1:
            switch(cpu) {
                case op1:
                    ganador = "empate";
                    break;
                case op2:
                    ganador = cpu;
                    break;
                case op3:
                    ganador = user;
                    break;
            }
            break;
        case op2:
            switch(cpu) {
                case op1:
                    ganador = user;
                    break;
                case op2:
                    ganador = "empate";
                    break;
                case op3:
                    ganador = cpu;
                    break;
            }
            break;
        case op3:
            switch(cpu) {
                case op1:
                    ganador = cpu;
                    break;
                case op2:
                    ganador = user;
                    break;
                case op3:
                    ganador = "empate";
                    break;
            }
            break;
    }
    switch(ganador) {
        case user:
            console.log("el usuario GANO con " + user);
            break;
        case cpu:
            console.log("La CPU Gano!!");
            break;
        default:
            console.log("Empate");
            break;
    }
};

resultado(op1, op3); // el usuario GANO con Piedra
resultado(op2, op1); // el usuario GANO con Papel
resultado(op3, op2); // el usuario GANO con Tijera