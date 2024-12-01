base = 3

for (let expo = 0; expo <= 16; expo++){
    resultado = 1

    for (let i = 0; i < expo; i++){
        resultado *= base
}
    console.log(`${base}^${expo} = ${resultado}`)
}