class CustomMatch {
    constructor(number) {
        this.number = number;
    }

    //50+6=56
    plus(num) {
        this.number += num;
        return this
    }
    //56-30=26   
    minus(num) {
        this.number -= num;
        return this;
    }
    //26*3=78
    multiply(num) {
        this.number *= num;
        return this;
    }
    //78/2=39
    divided(num) {
        this.number /= num;
        return this;
    }

}

//50+6-30*3/2
var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divided(2)
console.log(Object.values(result)[0]);