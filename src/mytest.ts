function  a(): void {
    for (let i:number = 1; i < 4; i++)
        console.log('a is:', i++);
}

a();

function  b(): void {
    for (let i:number = 1; i < 4; ++i)
        console.log('b is:', ++i);
}

b();