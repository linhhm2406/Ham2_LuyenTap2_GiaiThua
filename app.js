function factorial(number) {
    let result=1;
    for (let i = 1; i <=number ; i++) {
        result = result*i;
    }
    return result;
}

let input_number=parseInt(prompt('Nhap vao so nguyen muon tinh giai thua'));
alert('Giai thua cua '+input_number+' la: '+ factorial(input_number));