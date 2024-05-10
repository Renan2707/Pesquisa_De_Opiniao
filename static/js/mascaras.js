function cpfCnpj(input) {
    return input.length <=14
        ? '999.999.999-99'
        : '99.999.999/9999-99'
}

function telefoneCelular(input) {
    return input.startsWith('9',5)
        ?'(99) 99999-9999' 
        :'(99) 9999-9999'
}