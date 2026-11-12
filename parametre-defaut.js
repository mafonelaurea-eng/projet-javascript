function createUser(name, role,isActive = false){
    if(isActive == true){
        console.log(name + " avec le role " + role + " est actif");
    }else{
        console.log(name + " avec le role " + role + " n'est pas actif");
    }
}

createUser("Moumbe", "Admin", true);
