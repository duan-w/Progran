class Queue{
    constructor(){
        this.arr=[];
    }
    put(f){
        this.arr.push(f);
        return this;
    }
    exec(){
        this.arr.shift()();
    }
}