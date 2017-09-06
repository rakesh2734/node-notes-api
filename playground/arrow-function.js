var square = (x) => {
    var result = x * x;
    return result;
};

console.log(square(7));

var user = {
    name: 'rakesh',
    SayHi : () => {
        console.log(`Hi ${this.name}`);
    },
    SayHiAlt () {
        console.log(`Hi ${this.name}`);
    }
};

user.SayHi();

user.SayHiAlt();
