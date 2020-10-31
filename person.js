class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`MY NAME IS ${this.name} and I am ${this.age}`)
    }
    
}


module.exports = person