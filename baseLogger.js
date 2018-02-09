class BaseLogger{
    
    constructor(name){
        this.name = name;
    }

    error(err){
        throw (this.name,"-->","You must override error(...) when you extend BaseLogger");
    }

    log(message){
        throw (this.name,"-->","MethodError: You must override log(...) when you extend BaseLogger";)
    }
}

module.exports = BaseLogger;