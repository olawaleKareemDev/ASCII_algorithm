

// Generates and returns a number range

const number_generator = (startnum, endnum) => {
    const charCodeList = [];
    for( i=startnum; i <= endnum; i++ ){
        charCodeList.push(i)
    }
    return  (console.log(`The numbers generated are:  `, charCodeList) ,charCodeList)

}

// uses the number range to generate an ASCII character equivalent

const number_to_char_generator = (startnum, endnum) => {

    const numbers = number_generator(startnum, endnum)
    const char_list = []
    for (num of numbers){
        const character = String.fromCharCode(num)
        char_list.push(character)
    }

    return ( console.log(`The alphabets/symbols generated are: `,  char_list ), char_list)
}




// uses ASCII character equivalent to generate ACII number


const generate_charcode = (startnum, endnum, index) => {
    const alphabets = number_to_char_generator(startnum, endnum)
    const alphabetCharcodeList = [];
    for (letter of alphabets){
        const num = letter.charCodeAt(index)
        alphabetCharcodeList.push(num)
    }

    return ( console.log(`The ascii numbers generated are:  `, alphabetCharcodeList),alphabetCharcodeList)
}

generate_charcode(65,90,0)



