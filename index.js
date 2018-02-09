const fs = require("fs");
const loggersAvailable = fs.readdirSync("loggers");

class POMLogger{
    constructor(type){
        if(!type) throw "You must specify a 'type' of POMLogger";

        type = type.trim().toLowerCase();
    }
}
