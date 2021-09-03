const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(resultado, pai) {
    const parag = document.createElement('p')
    parag.innerText = resultado
    pai.appendChild(parag)
}

function kata1() {
    const num = document.getElementById('k1')
    let arr = []
    for (let i = 1; i <= 25; i++) {
        arr.push(i)
    }
    
    return showResults(arr, num)
}
kata1()

function kata2() {
    const num = document.getElementById('k2')
    let arr = []
    for (let i = 25; i >= 1; i--) {
        arr.push(i)
    }
    
    return showResults(arr, num)
}
kata2()

function kata3() {
    const num = document.getElementById('k3')
    let arr = []
    for (let i = -1; i >= -25; i--) {
        arr.push(i)
    }
    
    return showResults(arr, num)
}
kata3()

function kata4() {
    const num = document.getElementById('k4')
    let arr = []
    for (let i = -25; i <= -1; i++) {
        arr.push(i)
    }
    
    return showResults(arr, num)
}
kata4()

function kata5() {
    const num = document.getElementById('k5')
    let arr = []
    for (let i = 25; i >= -25; i -= 2) {
        arr.push(i)
    }
    
    return showResults(arr, num)
}
kata5()

function kata6() {
    const num = document.getElementById('k6')
    let arr = []
    let i = 3
    for (let i = 1; i < 100; i++) {
        if (i % 3 == 0) {
            arr.push(i)
        }
    }
    
    return showResults(arr, num)
}
kata6()

function kata7() {
    const num = document.getElementById('k7')
    let arr = []
    let i = 7
    for (let i = 1; i < 100; i++) {
        if (i % 7 == 0) {
            arr.push(i)
        }
    }
    
    return showResults(arr, num)
}
kata7()

function kata8() {
    const num = document.getElementById('k8')
    let arr = []
    for (let i = 100; i > 0; i--) {
        if (i % 3 == 0 || i % 7 ==0) {
            arr.push(i)
        }
    }
    
    return showResults(arr, num)
}
kata8()

function kata9() {
    const num = document.getElementById('k9')
    let arr = []
    for (let i = 5; i <= 100; i++) {
        if (i % 5 == 0 && i % 2 !== 0) {
        arr.push(i)
        }
    }
    
    return showResults(arr, num)
}
kata9()

function kata10() {
    const num = document.getElementById('k10')
    let arr = sampleArray
    
    return showResults(arr, num)
}
kata10()

function kata11() {
    const num = document.getElementById('k11')
    let arr = []
    for (let i = 0; i <= sampleArray.length; i++){
        if (sampleArray[i] % 2 == 0) {
            arr.push(sampleArray[i])
        }
    }
    
    return showResults(arr, num)
}
kata11()

function kata12() {
    const num = document.getElementById('k12')
    let arr = []
    for (let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] % 2 !== 0) {
            arr.push(sampleArray[i])
        }
    }
    
    return showResults(arr, num)
}
kata12()

function kata13() {
    const num = document.getElementById('k13')
    let arr = []
    for (let i = 0; i <= sampleArray.length; i++){
        if (sampleArray[i] % 8 == 0) {
            arr.push(sampleArray[i])
        }
    }
    
    return showResults(arr, num)
}
kata13()

function kata14() {
    const num = document.getElementById('k14')
    let arr = []
    for (let i = 0; i < sampleArray.length; i++){
        arr.push(sampleArray[i]*sampleArray[i])
    }
    
    return showResults(arr, num)
}
kata14()

function kata15() {
    const num = document.getElementById('k15')
    let soma = 0
    for (let i = 1; i <= 20; i++) {
        soma += i
    }

    return showResults(soma, num)
}
kata15()

function kata16() {
    const num = document.getElementById('k16')
    let soma = 0
    for (let i = 0; i < sampleArray.length; i++) {
        soma += sampleArray[i]
    }

    return showResults(soma, num)
}
kata16()

function kata17() {
    const num = document.getElementById('k17')
    let menor = sampleArray[0]
    for (let i = 1; i < sampleArray.length; i++){
        if (menor > sampleArray[i]) {
            menor = sampleArray[i]
        } 
    }

    return showResults(menor, num)
}
kata17()

function kata18() {
    const num = document.getElementById('k18')
    let maior = sampleArray[0]
    for (let i = 0; i <= sampleArray.length; i++){
        if (maior < sampleArray[i]) {
            maior = sampleArray[i]
        }
    }

    return showResults(maior, num)
}
kata18()

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    let cinza = document.createElement('div')

    cinza.style.height =  '20px'
    cinza.style.width = '100px'
    cinza.style.backgroundColor = 'gray'

    let divAtual = document.getElementById('caixa')
    document.body.insertBefore(cinza, divAtual)
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
