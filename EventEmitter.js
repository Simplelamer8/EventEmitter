class EventEmitter{
    constructor()
    {
        this.events = {};
    }
    on(eventName, listener)
    {
        if (typeof listener !== 'function')
        {
            console.log("The listener is not a function");
            return;
        }
        if (!this.events[eventName])
        {
            this.events[eventName] = [];
        }
        if (this.events[eventName].includes(listener))
        {
            console.log("The listener is already present");
            return;
        }
        this.events[eventName].push(listener);
    }
    off(eventName, listener)
    {
        if (!this.events[eventName])
        {
            console.log("The event does not exist");
            return;
        }
        this.events[eventName] = this.events[eventName].filter((l) => l !== listener);
    }

    emit(eventName, ...args)
    {
        if (!this.events[eventName])
        {
            console.log("The event does not exist");
            return;
        }
        this.events[eventName].forEach((listener) => {
            listener(...args);
        })
    }

}
const emitter = new EventEmitter();
const log = console.log;