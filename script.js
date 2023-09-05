let player = {
    inventory: [],
};

// Comienza el juego
alert("Bienvenido! Este es un juego de texto donde investigas el paradero de la abuela");


let juego = true;

while (juego) {
    let opcion = prompt(
        "Hace varios días que no sabes nada de tu abuela, así que vas hasta su casa a ver si se encuentra bien. Te encuentras en el living y no hay rastro de ella. Escuchas unos ruidos y sientes un escalofrío por la espalda. Debes investigar.\n ¿Qué quieres hacer?\n" +
        "1. Ir a la cocina\n" +
        "2. Ir al cuarto\n" +
        "3. Ir al sótano\n" +
        "4. Verificar inventario"
    );

    
    if (opcion === "1") {
        while (true) {
            let encounteropcion = prompt("No hay nada fuera de lugar en la cocina. ¿Qué quieres hacer?\n" +
                "1. Buscar en los cajones\n" +
                "2. Buscar en la heladera\n" +
                "3. Volver al living\n" +
                "4. Verificar inventario"
            );

            if (encounteropcion === "1") {
                alert("Encuentras unas pastillas de naftalina. Te las guardas en el bolsillo.");
                player.inventory.push("naftalina");
            } else if (encounteropcion === "2") {
                alert("Encuentras una milanesa casera. La comes ya que tu abuela las prepara con mucho cariño.");
            } else if (encounteropcion === "3") {
                break;
            } else if (encounteropcion === "4") {
                alert("Inventario: " + player.inventory.join(", "));
            }
        }
    }  else if (opcion === "2") {
        while (true) {
            let bedroomopcion = prompt("El cuarto se encuentra vacío pero escuchas un golpeteo en el armario.\n" +
                "1. Mirar debajo de la cama\n" +
                "2. Mirar en el armario\n" +
                "3. Volver al living\n" +
                "4. Verificar inventario"
            );
    
            if (bedroomopcion === "1") {
                alert("Encuentras solo polvo bajo la cama.");
            } else if (bedroomopcion === "2") {
                alert("Te encuentras con una polilla gigante en el armario.");
                while (true) {
                    let mothopcion = prompt("¿Qué quieres hacer?\n" +
                        "1. Analizar la situación\n" +
                        (player.inventory.includes("naftalina")
                            ? "2. Matar a la polilla\n"
                            : "") +
                        "3. Volver al living\n" +
                        "4. Verificar inventario"
                    );
    
                    if (mothopcion === "1") {
                        alert("La polilla tiene un revólver en la mano y está dispuesta a matar con tal de comerse toda la lana de tu abuela.");
                    } else if (mothopcion === "2" && player.inventory.includes("naftalina")) {
                        alert("La polilla se desnortea luego de propinarle un golpe y la obligas a tragarse las pastillas de naftalina. La polilla explota.");
                        
                        
                        let talkToGrandma = prompt("Luego de asesinar a la polilla, sientes que tu abuela te llama. ¿Quieres hablar con ella? (SI / NO)");
                        if (talkToGrandma.toUpperCase() === "SI") {
                            alert("Tienes una larga conversación con tu abuela y pasan un buen rato juntos. Te cocina milanesas con puré. El misterio se ha resuelto y estás feliz de haberla encontrado.");
                            juego = false; 
                        } else {
                            juego = false;
                        }
                        break; // Exit the inner while loop
                    } else if (mothopcion === "3") {
                        // User goes back to the living room
                        break;
                    } else if (mothopcion === "4") {
                        alert("Inventario: " + player.inventory.join(", "));
                    }
                }
                break; 
            } else if (bedroomopcion === "3") {
                break; 
            } else if (bedroomopcion === "4") {
                alert("Inventario: " + player.inventory.join(", "));
            }
        }
    }
     else if (opcion === "3") {
        while (true) {
            let basementopcion = prompt("El sótano se encuentra en tinieblas pero escuchas un leve sollozo.\n" +
                "1. Prender la luz\n" +
                "2. Volver al living\n" +
                "3. Verificar inventario"
            );

            if (basementopcion === "1") {
                alert("Encuentras a tu abuela amordazada. La desatas y te cuenta que una polilla malvada se ha comido todos sus buzos de lana. Te pide entre llantos que mates a la polilla.");
            } else if (basementopcion === "2") {
                break;
            } else if (basementopcion === "3") {
                alert("Inventario: " + player.inventory.join(", "));
            }
        }
    } else if (opcion === "4") {
        alert("Inventario: " + player.inventory.join(", "));
    } else {
        alert("Opción inválida. Inténtalo de nuevo.");
    }
}

alert("Gracias por jugar y salvar a la Abuela!");
