function createNewPerson(name){
    const obj={};
    obj.name=name;
    obj.greeting=function(){
        alert("Hello"+obj.name+"to Javascript");
    };
    return obj;

}