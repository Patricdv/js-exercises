/**
 * Exercise 8
 * Create a class with a function man that uses other classes features.
 */
class Man {
    body = ["   ", "   ", "   "];

    addHead() {
        this.body[0] = "( )";
        return this;
    }

    addBody() {
        this.body[1] = this.body[1].substring(0, 1) +
        "|" +
        this.body[1].substring(2);
        return this;
    }

    addLeftArm() {
        this.body[1] = "/" + this.body[1].substring(1);
        return this;
    }

    addRightArm() {
        this.body[1] = this.body[1].substring(0, 2) + "\\";
        return this;
    }

    addLeftLeg() {
        this.body[2] = "/" + this.body[2].substring(1);
        return this;
    }

    addRightLeg() {
        this.body[2] = this.body[2].substring(0, 2) + "\\";
        return this;
    }

    print() {
       console.log(`${this.body[0]}\n${this.body[1]}\n${this.body[2]}`);
    }
}

const man = new Man();
man.addHead().addBody().addLeftArm().addRightArm().addLeftLeg().addRightLeg();
man.print();