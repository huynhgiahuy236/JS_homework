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

    for (let i = 1; i <= 5; i++) {
        document.getElementById("bai" + i).classList.add("hidden")
    }
    document.getElementById("bai" + num).classList.remove("hidden")
}

//Bai 1 : tính tiền lương
let btn_luong = document.getElementById("btn_Luong").addEventListener("click", () => {

    let luongTheoNgay = 100000
    let ngayLamViec = document.getElementById("ngaylamviec").value
    let results = document.getElementById("tienluong")

    if (ngayLamViec <= 0) {
        results.innerHTML = `Vui lòng nhập lại: số ngày làm việc trên 0 `
    } else {
        let tienLuong = luongTheoNgay * ngayLamViec
        results.innerHTML = `Tiền lương của bạn là: ${tienLuong}`
    }
})
// Bai 2:Tính giá trị trung bình 
let btnTrungBinh = document.getElementById("btnTrungBinh").addEventListener("click", () => {

    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let num3 = Number(document.getElementById("num3").value)
    let num4 = Number(document.getElementById("num4").value)
    let num5 = Number(document.getElementById("num5").value)

    let trungBinh = (num1 + num2 + num3 + num4 + num5) / 5
    let results = document.getElementById("tinhTrungBinh")
    results.innerHTML = `Giá trị trung bình là: ${trungBinh}`
})

//Bai 3: Quy đổi tiền từ USD sang VND
let quyDoi = document.getElementById("btnQuyDoi").addEventListener("click", () => {
    let soLuongUSD = document.getElementById("soluongUSD").value
    let heSo = 26.294
    let results = document.getElementById("tienQuyDoi")
    let tienSauQuyDoi = soLuongUSD * heSo

    if (soLuongUSD > 0) {
        results.innerHTML = `Số tiền sau quy đổi là: ${tienSauQuyDoi} VND`
    } else
        results.innerHTML = `Vui lòng nhập số lượng trên 0`
})

//Bai 4: Tinh dien tich va chu vi 
let tinhHCN = document.getElementById("btnHCN").addEventListener("click", () => {
    let width = Number(document.getElementById("width").value)
    let height = Number(document.getElementById("height").value)

    let results_chuVi = document.getElementById("chuVi")
    let results_dienTich = document.getElementById("dienTich")
    if (height > 0 && width > 0) {
        let chuVi = (height + width) * 2
        let dienTich = height * width

        results_chuVi.innerHTML = `Chu vi của hình là: ${chuVi}`
        results_dienTich.innerHTML = `Diện tích của hình là: ${dienTich}`
    } else {
        results_chuVi.innerHTML = `Vui lòng nhập lại kích thước`
        results_dienTich.innerHTML = `Vui lòng nhập lại kích thước`
    }
})

//Bai 5: Tinh tổng hai kí số
let tongKySo = document.getElementById("btnKySo").addEventListener("click", () => {
    let num = Number(document.getElementById("num").value)
    let results = document.getElementById("tinhTong")

    if (num >= -99 && num <= -10) {
        let hangChuc = Math.ceil(num / 10)
        let hangDonVi = Math.abs(num % 10)
        let tongHaiKySo = hangChuc + hangDonVi
        results.innerHTML = `Tổng hai kí số là:  ${tongHaiKySo}`
    }
    else if (num >= 10 && num < 100) {
        let hangChuc = Math.floor(num / 10)
        let hangDonVi = num % 10
        let tongHaiKySo = hangChuc + hangDonVi
        results.innerHTML = `Tổng hai kí số là:  ${tongHaiKySo}`
    }
    else {
        results.innerHTML = `Vui lòng nhập vào số có hai chữ số`
    }

})