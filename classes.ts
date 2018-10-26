interface UserInterface
{
    name: string;
    email: string;
    age: number;

    register();
    payInvoice();
}

class User implements UserInterface 
{
    // private name: string;
    // private email: string;
    // protected age: number;
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number)
    {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User Created: ' + this.name);
    }

    register()
    {
        console.log(this.name + ' is now registered');
    }

    payInvoice()
    {
        console.log(this.name + ' paid invoice');
    }
}

class Member extends User
{
    id: number;

    constructor(id: number, name: string, email: string, age: number)
    {
        super(name, email, age);
        this.id = id;
    }

    payInvoice()
    {
        super.payInvoice();
    }
}

let marlon = new User('Marlon Ayag', 'mdayag4891@gmail.com', 27);

console.log(marlon.age);
marlon.register();

let jay: User = new Member(1, 'Jay Lopez', 'jaylopez@gmail.com', 26);
jay.payInvoice();

