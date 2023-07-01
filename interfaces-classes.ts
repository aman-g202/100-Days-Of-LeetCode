interface A {
    a: number;
    b: number;
}

class B {
    c: number;

    aman() {
        console.log('asd');
    }
}

interface C extends A, B {
    d: number;
}

class D implements C {
    a: number;
    b: number;
    c: number;
    d: number;

    aman(): void {
        console.log('asdsd');
        this.a = 10;
    }
}

const x = new D();
console.log(x.aman());
