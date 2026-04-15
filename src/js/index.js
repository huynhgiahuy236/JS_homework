const el = {
    //Show data
    closeUpList: document.querySelectorAll(".closeUpList"),
    dataList: document.querySelectorAll(".dataList"),
    arrowChange: document.querySelectorAll(".arrowChange"),
    btnDeleteArray: document.getElementById("btnDeleteArray"),

    // header
    inputNumber: document.getElementById("inputNumber"),
    btnAddNumber: document.getElementById("btnAddNumber"),
    resultsArray: document.getElementById("resultsArray"),
    errorArray: document.getElementById("errorArray"),

    // content-left (1-5)
    //Bai 1
    btnTinhTong: document.getElementById('btnTinhTong'),
    resultsTinhTong: document.getElementById("resultsTinhTong"),

    //Bai 2
    btnDemSo: document.getElementById("btnDemSo"),
    resultsDemSo: document.getElementById("resultsDemSo"),

    // Bai 3
    btnTimSoNhoNhat: document.getElementById("btnTimSoNhoNhat"),
    resultsTimSoNhoNhat: document.getElementById("resultsTimSoNhoNhat"),

    // Bai 4
    btnTimSoDuongNho: document.getElementById("btnTimSoDuongNho"),
    resultsTimSoDuongNho: document.getElementById("resultsTimSoDuongNho"),

    // Bai 5
    btnTimSoChanCuoi: document.getElementById("btnTimSoChanCuoi"),
    resultsTimSoChanCuoi: document.getElementById("resultsTimSoChanCuoi"),

    //content-right (6-10)
    // Bai 6
    inputViTriThuNhat: document.getElementById("inputViTriThuNhat"),
    inputViTriThuHai: document.getElementById("inputViTriThuHai"),
    btnDoiCho: document.getElementById("btnDoiCho"),
    resultsDoiCho: document.getElementById("resultsDoiCho"),
    errorSoThuNhat: document.getElementById("errorSoThuNhat"),
    errorSoThuHai: document.getElementById("errorSoThuHai"),

    // Bai 7
    btnTangDan: document.getElementById("btnTangDan"),
    resultsTangDan: document.getElementById("resultsTangDan"),

    // Bai 8
    btnSoNguyenTo: document.getElementById("btnSoNguyenTo"),
    resultsSoNguyenTo: document.getElementById("resultsSoNguyenTo"),

    // Bai 9
    // them mang so thuc
    inputSoThuc: document.getElementById("inputSoThuc"),
    btnAddSoThuc: document.getElementById("btnAddSoThuc"),
    resultsArraySoThuc: document.getElementById("resultsArraySoThuc"),
    errorArraySoThuc: document.getElementById("errorArraySoThuc"),
    btnDeleteSoThuc: document.getElementById("btnDeleteSoThuc"),

    // dem so nguyen
    btnSoNguyen: document.getElementById("btnSoNguyen"),
    resultsSoNguyen: document.getElementById("resultsSoNguyen"),


    // Bai 10
    btnSoSanh: document.getElementById("btnSoSanh"),
    resultsSoSanh: document.getElementById("resultsSoSanh"),
}

//------------- show(array, content), delete, check array---------------
// show content
el.closeUpList.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        el.dataList[index].classList.toggle("hidden")
        el.arrowChange[index].classList.toggle("rotate-180")
    })
})
// check error array
const checkErrorArray = (arr, el) => {
    if (arr.length === 0) {
        el.innerText = `Mảng rỗng`;
        return true;
    }
    return false;
};

// Show array header
let arrayList = []
el.btnAddNumber.addEventListener("click", () => {
    const inputValue = el.inputNumber.value.trim()

    if (inputValue == "" || isNaN(Number(inputValue))) {
        el.errorArray.classList.remove("hidden")
        return
    }
    const inputNumber = Number(inputValue)
    arrayList.push(inputNumber)

    el.errorArray.classList.add("hidden")
    el.resultsArray.innerHTML = arrayList.join(", ")

    el.inputNumber.value = ""
})
// delete Array
const deleteArray = (btn, arr, results) => {
    btn.addEventListener("click", () => {
        arr.length = 0
        results.innerHTML = `<i class="fa-solid fa-hand-point-right text-yellow-500"></i> Các số bạn đã chọn`
    })
}
deleteArray(el.btnDeleteArray, arrayList, el.resultsArray)
// ham hien thi ket qua
const textHTML = (results, variable) => {
    results.innerText = `Kết quả: ${variable}`
}
//-------------------homework-----------------
// Bai 1 
el.btnTinhTong.addEventListener("click", () => {
    if (checkErrorArray(arrayList, el.resultsTinhTong)) return
    const tong = arrayList.reduce((sum, num) => (num > 0 ? sum + num : sum), 0)
    textHTML(el.resultsTinhTong, tong)
})

// Bai 2
el.btnDemSo.addEventListener("click", () => {
    if (checkErrorArray(arrayList, el.resultsDemSo)) return
    let count = 0
    arrayList.forEach((num) => {
        if (num > 0) count++
    })
    textHTML(el.resultsDemSo, count)
})

// Bai 3
el.btnTimSoNhoNhat.addEventListener("click", () => {
    if (checkErrorArray(arrayList, el.resultsTimSoNhoNhat)) return
    let min = Infinity
    arrayList.forEach((num) => {
        if (num < min) min = num
    })
    textHTML(el.resultsTimSoNhoNhat, min)
})

// Bai 4
el.btnTimSoDuongNho.addEventListener("click", () => {
    if (checkErrorArray(arrayList, el.resultsTimSoDuongNho)) return
    let min = Infinity
    arrayList.forEach((num) => {
        if (num > 0 && num < min) min = num
    })
    if (min === Infinity) {
        textHTML(el.resultsTimSoDuongNho, `Mảng không có số dương`)
    } else textHTML(el.resultsTimSoDuongNho, min)
})

// bai 5
el.btnTimSoChanCuoi.addEventListener("click", () => {
    if (checkErrorArray(arrayList, el.resultsTimSoChanCuoi)) return
    let soChan = -1
    for (let i = arrayList.length - 1; i >= 0; i--) {
        if (arrayList[i] % 2 === 0) {
            soChan = arrayList[i]
            break
        }
    }
    textHTML(el.resultsTimSoChanCuoi, soChan)
})

// Bai 6
const errorNumber = (num, el) => {
    if (num === "") {
        el.classList.remove("hidden")
        return true
    } el.classList.add("hidden")
    return false
}
el.btnDoiCho.addEventListener("click", () => {

    const valueSoThuNhat = el.inputViTriThuNhat.value
    const valueSoThuHai = el.inputViTriThuHai.value

    if (errorNumber(valueSoThuNhat, el.errorSoThuNhat) || errorNumber(valueSoThuHai, el.errorSoThuHai) || checkErrorArray(arrayList, el.resultsDoiCho)) return

    let index1 = Number(valueSoThuNhat)
    let index2 = Number(valueSoThuHai)

    if (index1 < 0 || index1 >= arrayList.length || index2 < 0 || index2 >= arrayList.length) {
        textHTML(el.resultsDoiCho, "Vị trí không hợp lệ!")
        return
    }
    if (!Number.isInteger(index1) || !Number.isInteger(index2)) {
        textHTML(el.resultsDoiCho, "Vị trí phải là số nguyên!")
        return
    }
    [arrayList[index1], arrayList[index2]] = [arrayList[index2], arrayList[index1]]

    textHTML(el.resultsDoiCho, arrayList.join(", "))
})

// Bai 7
el.btnTangDan.addEventListener("click", () => {
    if (checkErrorArray(arrayList, el.resultsTangDan)) return

    const arrayListTangDan = [...arrayList].sort((a, b) => a - b)

    textHTML(el.resultsTangDan, arrayListTangDan.join(" → "))
})

// Bai 8
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false
    }
    return true
}
el.btnSoNguyenTo.addEventListener("click", () => {
    if (checkErrorArray(arrayList, el.resultsSoNguyenTo)) return
    const result = arrayList.find((num) => Number.isInteger(num) && isPrime(num))
    textHTML(el.resultsSoNguyenTo, result !== undefined ? result : -1)
})

// Bai 9
// them mang so thuc
let arraySoThuc = []
el.btnAddSoThuc.addEventListener("click", () => {
    const inputValue = el.inputSoThuc.value.trim()

    if (inputValue == "" || isNaN(Number(inputValue))) {
        el.errorArraySoThuc.classList.remove("hidden")
        return
    }
    const inputSoThuc = Number(inputValue)

    arraySoThuc.push(inputSoThuc)

    el.errorArraySoThuc.classList.add("hidden")
    textHTML(el.resultsArraySoThuc, arraySoThuc.join(", "))

    el.inputSoThuc.value = ""
})
// delete array
deleteArray(el.btnDeleteSoThuc, arraySoThuc, el.resultsArraySoThuc)

// dem so luong so nguyen trong mang
el.btnSoNguyen.addEventListener("click", () => {
    if (checkErrorArray(arraySoThuc, el.resultsSoNguyen)) return
    let count = 0
    arraySoThuc.forEach((num) => {
        if (Number.isInteger(num)) count++
    })
    textHTML(el.resultsSoNguyen, count)
})

// Bai 10
el.btnSoSanh.addEventListener("click", () => {
    if (checkErrorArray(arrayList, el.resultsSoSanh)) return
    let countAm = 0
    let countDuong = 0
    arrayList.forEach((num) => {
        if (num < 0) {
            countAm++
        } else if (num > 0) countDuong++
    })
    if (countAm > countDuong) {
        textHTML(el.resultsSoSanh, `Số lượng số Âm nhiều hơn số Dương`)
    } else if (countAm < countDuong) {
        textHTML(el.resultsSoSanh, `Số lượng số Dương nhiều hơn số Âm`)
    } else textHTML(el.resultsSoSanh, `Số lượng số Dương và số Âm bằng nhau`)

})