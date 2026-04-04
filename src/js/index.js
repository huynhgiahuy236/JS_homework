function showBai(num, btn) {

    let buttons = document.querySelectorAll(".btn");

    // bỏ active tất cả
    buttons.forEach(b => {
        b.classList.remove("bg-[#EBD5AB]", "text-[#8BAE66]");
        b.classList.add("bg-[#8BAE66]", "text-white");
    });

    // active button được bấm
    btn.classList.remove("bg-[#8BAE66]", "text-white");
    btn.classList.add("bg-[#EBD5AB]", "text-[#8BAE66]");

    for (let i = 1; i <= 4; i++) {
        document.getElementById("bai" + i).classList.add("hidden")
    }
    document.getElementById("bai" + num).classList.remove("hidden")
}
//// const element khai bao bien
const element = {
    //Bai 1
    form1: document.getElementById("formBai1"),
    diemChuan: document.getElementById("diemChuan"),
    monThuNhat: document.getElementById("monThuNhat"),
    monThuHai: document.getElementById("monThuHai"),
    monThuBa: document.getElementById("monThuBa"),
    khuVuc: document.getElementById("khuVuc"),
    doiTuong: document.getElementById("doiTuong"),
    resultsBai1: document.getElementById("resultsBai1"),
    //error
    errorDiemChuan: document.getElementById("error_chuan"),
    errorDiem1: document.getElementById("error_diem1"),
    errorDiem2: document.getElementById("error_diem2"),
    errorDiem3: document.getElementById("error_diem3"),
    //Bai 2
    form2: document.getElementById("formBai2"),
    nameDien: document.getElementById("nameDien"),
    soKW: document.getElementById("soKW"),
    resultsBai2: document.getElementById("resultsBai2"),
    errorDien: document.getElementById("errorDien"),
    errorNameDien: document.getElementById("errorNameDien"),
    //Bai 3
    form3: document.getElementById("formBai3"),
    nameThue: document.getElementById("nameThue"),
    tongThuNhap: document.getElementById("tongThuNhap"),
    nguoiPhuThuoc: document.getElementById("nguoiPhuThuoc"),
    resultsBai3: document.getElementById("resultsBai3"),
    errorThuNhap: document.getElementById("errorThuNhap"),
    errorPhuThuoc: document.getElementById("errorPhuThuoc"),
    errorNameThue: document.getElementById("errorNameThue"),
    //Bai 4
    form4: document.getElementById("formBai4"),
    maKhachHang: document.getElementById("maKhachHang"),
    loaiKhachHang: document.getElementById("loaiKhachHang"),
    soKenh: document.getElementById("soKenh"),
    soKetNoi: document.getElementById("soKetNoi"),
    resultsBai4: document.getElementById("resultsBai4"),
    errorSoKenh: document.getElementById("errorSoKenh"),
    errorSoKetNoi: document.getElementById("errorSoKetNoi"),
    doanhNghiepKetNoi: document.getElementById("doanhNghiepKetNoi")
}

//Bai 1
const validationBai1 = (diemChuan, monThuNhat, monThuHai, monThuBa) => {
    if (diemChuan <= 0 || diemChuan > 30) {
        element.errorDiemChuan.classList.remove("hidden");
    } else
        element.errorDiemChuan.classList.add("hidden");
    //--------------------------------------------------   
    if (monThuNhat < 0 || monThuNhat > 10) {
        element.errorDiem1.classList.remove("hidden");
    } else
        element.errorDiem1.classList.add("hidden");
    //--------------------------------------------------  
    if (monThuHai < 0 || monThuHai > 10) {
        element.errorDiem2.classList.remove("hidden");
    } else
        element.errorDiem2.classList.add("hidden");
    //--------------------------------------------------     
    if (monThuBa < 0 || monThuBa > 10) {
        element.errorDiem3.classList.remove("hidden");
    } else
        element.errorDiem3.classList.add("hidden");

}
const DIEM_THEO_KHU_VUC = {
    A: 2,
    B: 1,
    C: 0.5
}
const DIEM_THEO_DOI_TUONG = {
    1: 2.5,
    2: 1.5,
    3: 1
}
element.form1.addEventListener('submit', (event) => {
    event.preventDefault()
    const diemChuan = Number(element.diemChuan.value)
    const monThuNhat = Number(element.monThuNhat.value)
    const monThuHai = Number(element.monThuHai.value)
    const monThuBa = Number(element.monThuBa.value)
    const khuVuc = element.khuVuc.value
    const doiTuong = element.doiTuong.value

    validationBai1(diemChuan, monThuNhat, monThuHai, monThuBa)
    const tongDiem = monThuNhat + monThuHai + monThuBa + DIEM_THEO_DOI_TUONG[doiTuong] + DIEM_THEO_KHU_VUC[khuVuc]
    console.log(tongDiem)
    const resultsBai1 = element.resultsBai1
    if (monThuNhat == 0 || monThuHai == 0 || monThuBa == 0) {
        resultsBai1.classList.add("text-red-700")
        resultsBai1.innerText = `Bạn chưa đạt do môn bị liệt`
        return
    }
    if (diemChuan < tongDiem) {
        resultsBai1.classList.remove("text-red-700")
        resultsBai1.classList.add("text-green-700")
        resultsBai1.innerText = `Bạn đã đạt với tổng điểm của bạn là ${tongDiem}`
        return
    } else
        resultsBai1.classList.add("text-red-700")
    resultsBai1.innerText = `Bạn chưa đạt với tổng điểm của bạn là ${tongDiem}`
    resultsBai1.classList.remove("text-green-700")
})


// Bai 2
const validationBai2 = (soKW, nameDien) => {
    if (soKW <= 0) {
        element.errorDien.classList.remove("hidden");
    } else
        element.errorDien.classList.add("hidden");
    if (!/^[A-Za-zÀ-ỹ\s]+$/.test(nameDien)) {
        element.errorNameDien.classList.remove("hidden");
    } else
        element.errorNameDien.classList.add("hidden");
}

element.form2.addEventListener("submit", (event2) => {
    event2.preventDefault();
    const soKW = Number(element.soKW.value)
    const nameDien = element.nameDien.value
    const resultsBai2 = element.resultsBai2
    let tongTienDien = 0

    validationBai2(soKW, nameDien)
    if (soKW <= 50 && soKW > 0) {
        tongTienDien = soKW * 500
    } else if (soKW > 50 && soKW <= 100) {
        tongTienDien = (50 * 500) + (soKW - 50) * 650
    } else if (soKW > 100 && soKW <= 200) {
        tongTienDien = (50 * 500) + (100 - 50) * 650 + (soKW - 100) * 850
    } else if (soKW > 200 && soKW <= 350) {
        tongTienDien = (50 * 500) + 50 * 650 + 100 * 850 + (soKW - 200) * 1100
    } else {
        tongTienDien = (50 * 500) + (50 * 650) + (100 * 850) + (350 - 200) * 1100 + (soKW - 350) * 1300;
    }
    resultsBai2.innerText = `Tên chủ hộ : ${nameDien} và số tiền bạn phải trả là ${tongTienDien} VND`
})

// Bai 3
const validationBai3 = (tongThuNhap, nguoiPhuThuoc, nameThue) => {
    if (tongThuNhap <= 0) {
        element.errorThuNhap.classList.remove("hidden");
    } else
        element.errorThuNhap.classList.add("hidden");
    if (nguoiPhuThuoc < 0) {
        element.errorPhuThuoc.classList.remove("hidden");
    } else
        element.errorPhuThuoc.classList.add("hidden");
    if (!/^[A-Za-zÀ-ỹ\s]+$/.test(nameThue)) {
        element.errorNameThue.classList.remove("hidden");
    } else
        element.errorNameThue.classList.add("hidden");
}
element.form3.addEventListener("submit", (event3) => {
    event3.preventDefault()

    const nameThue = element.nameThue.value
    const tongThuNhap = Number(element.tongThuNhap.value)
    const nguoiPhuThuoc = Number(element.nguoiPhuThuoc.value)
    const resultsBai3 = element.resultsBai3
    const phiMienTruThue = 4000000
    const phiNguoiPhuThuoc = 1600000

    let tienTruocThue = tongThuNhap - phiMienTruThue - nguoiPhuThuoc * phiNguoiPhuThuoc
    let tongThue = 0

    validationBai3(tongThuNhap, nguoiPhuThuoc, nameThue)
    if (tienTruocThue <= 0) {
        resultsBai3.classList.add("text-green-700")
        resultsBai3.innerText = `Bạn không phải đóng thuế`
        return
    }

    if (tienTruocThue <= 6000000) {
        tongThue = tienTruocThue * 0.05
    } else if (tienTruocThue > 6000000 && tienTruocThue <= 120000000) {
        tongThue = tienTruocThue * 0.1
    } else if (tienTruocThue > 120000000 && tienTruocThue <= 210000000) {
        tongThue = tienTruocThue * 0.15
    } else if (tienTruocThue > 210000000 && tienTruocThue <= 384000000) {
        tongThue = tienTruocThue * 0.2
    } else if (tienTruocThue > 384000000 && tienTruocThue <= 624000000) {
        tongThue = tienTruocThue * 0.25
    } else if (tienTruocThue > 624000000 && tienTruocThue <= 960000000) {
        tongThue = tienTruocThue * 0.3
    } else {
        tongThue = tienTruocThue * 0.35
    }

    resultsBai3.classList.remove("text-green-700")
    resultsBai3.innerText = `Số tiền thuế mà anh/chị ${nameThue} phải đóng sau khi trừ ${nguoiPhuThuoc} người phụ thuộc là: ${tongThue.toFixed(2)}`

})
//Bai 4
const validationBai4 = (soKenh, soKetNoi) => {
    if (soKenh < 0) {
        element.errorSoKenh.classList.remove("hidden");
    } else
        element.errorSoKenh.classList.add("hidden");
    if (soKetNoi < 0) {
        element.errorSoKetNoi.classList.remove("hidden");
    } else
        element.errorSoKetNoi.classList.add("hidden");
}
element.loaiKhachHang.addEventListener("change", () => {
    const loaiKhachHang = element.loaiKhachHang.value;

    if (loaiKhachHang === "doanhNghiep") {
        element.doanhNghiepKetNoi.classList.remove("hidden");
    } else {
        element.doanhNghiepKetNoi.classList.add("hidden");
        element.soKetNoi.value = "";
    }
})
element.form4.addEventListener("submit", (event4) => {
    event4.preventDefault()

    const maKhachHang = element.maKhachHang.value
    const loaiKhachHang = element.loaiKhachHang.value
    const soKenh = Number(element.soKenh.value)
    const soKetNoi = Number(element.soKetNoi.value)
    const resultsBai4 = element.resultsBai4

    validationBai4(soKenh, soKetNoi)
    let tongTienCapUSD = 0

    if (loaiKhachHang === "nhaDan") {
        tongTienCapUSD = 4.5 + 20.5 + 7.5 * soKenh
    } else
        if (loaiKhachHang === "doanhNghiep") {
            if (soKetNoi > 0 && soKetNoi <= 10) {
                tongTienCapUSD = 15 + 75 + 50 * soKenh
            }
            else tongTienCapUSD = 15 + 75 + (soKetNoi - 10) * 5 + 50 * soKenh
        }
    resultsBai4.innerText = ` Tổng tiền cáp của khách hàng có mã ${maKhachHang} là ${tongTienCapUSD} USD quy ra khoảng ${(tongTienCapUSD * 26.351).toFixed(2)} VND`
})