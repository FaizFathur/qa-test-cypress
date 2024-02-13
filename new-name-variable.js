let name = "Traveloka";
let nameLength = name.length;
let newName = "";

for (let i = 0; i <= nameLength; i++) {
    let idx = name.length - i;
    
    if (idx > 0) {
        if (idx < nameLength - 1 && idx % 2 === 0) {
            newName = newName + name[idx];
        } else {
            newName = newName + "a";
        }
    } else {
        newName = newName + "o";
    }
    console.log(i,newName);
}
