// 1. Định nghĩa Lớp đối tượng
export class NhanVien {
    constructor(tk, ten, email, mk, ngay, luong, cv, gio) {
        this.taiKhoan = tk
        this.name = ten
        this.email = email
        this.matKhau = mk
        this.ngayLam = ngay
        this.luongCB = Number(luong)
        this.chucvu = cv
        this.gioLam = Number(gio)
        this.tongLuong = this.tinhTongLuong()
        this.loaiNV = this.xepLoai()
    }

    tinhTongLuong() {
        if (this.chucvu === "SEP") return this.luongCB * 3
        if (this.chucvu === "TRUONGPHONG") return this.luongCB * 2
        return this.luongCB
    }

    xepLoai() {
        if (this.gioLam >= 192) return "Xuất sắc"
        if (this.gioLam >= 176) return "Giỏi"
        if (this.gioLam >= 160) return "Khá"
        return "Trung bình"
    }
}

// Dom theo feature
export const dom = {
    tableDanhSach: document.getElementById("tableDanhSach"),
    form: document.getElementById("formModal"),
    headerTitle: document.getElementById("header-title"),

    // Inputs
    tknv: document.getElementById("tknv"),
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    password: document.getElementById("password"),
    datepicker: document.getElementById("datepicker"),
    luongCB: document.getElementById("luongCB"),
    chucvu: document.getElementById("chucvu"),
    gioLam: document.getElementById("gioLam"),
    inputSearch: document.getElementById("searchName"),

    // Nút bấm 
    buttons: {
        btnThemNV: document.getElementById("btnThemNV"),
        btnCapNhat: document.getElementById("btnCapNhat"),
        btnTimNV: document.getElementById("btnTimNV"),
        btnMoModal: document.getElementById("btnThem")
    },

    // Spans thông báo lỗi
    spans: {
        tknv: document.getElementById("tbTKNV"),
        name: document.getElementById("tbTen"),
        email: document.getElementById("tbEmail"),
        password: document.getElementById("tbMatKhau"),
        datepicker: document.getElementById("tbNgay"),
        luongCB: document.getElementById("tbLuongCB"),
        chucvu: document.getElementById("tbChucVu"),
        gioLam: document.getElementById("tbGiolam")
    }
}

// 3. Định nghĩa State
// export const state = {
//     danhSachNV: []x
// }
// danhSachNV demo 
export const state = {
    danhSachNV: [
        { taiKhoan: "1001", name: "Nguyễn Văn Xuất Sắc", email: "xs1@gmail.com", matKhau: "Admin@123", ngayLam: "2024-04-01", luongCB: 15000000, chucvu: "Sếp", gioLam: 200, tongLuong: 45000000, loaiNV: "Xuất sắc" },
        { taiKhoan: "1002", name: "Trần Thị Đỉnh", email: "xs2@gmail.com", matKhau: "Admin@123", ngayLam: "2024-04-01", luongCB: 16000000, chucvu: "Sếp", gioLam: 195, tongLuong: 48000000, loaiNV: "Xuất sắc" },
        
        { taiKhoan: "2001", name: "Lê Văn Giỏi", email: "g1@gmail.com", matKhau: "Admin@123", ngayLam: "2024-04-02", luongCB: 10000000, chucvu: "Trưởng phòng", gioLam: 185, tongLuong: 20000000, loaiNV: "Giỏi" },
        { taiKhoan: "2002", name: "Phạm Minh Tâm", email: "g2@gmail.com", matKhau: "Admin@123", ngayLam: "2024-04-02", luongCB: 11000000, chucvu: "Trưởng phòng", gioLam: 180, tongLuong: 22000000, loaiNV: "Giỏi" },
        
        { taiKhoan: "3001", name: "Hoàng Văn Khá", email: "k1@gmail.com", matKhau: "Admin@123", ngayLam: "2024-04-03", luongCB: 8000000, chucvu: "Nhân viên", gioLam: 165, tongLuong: 8000000, loaiNV: "Khá" },
        { taiKhoan: "3002", name: "Ngô Thanh Bình", email: "k2@gmail.com", matKhau: "Admin@123", ngayLam: "2024-04-03", luongCB: 7500000, chucvu: "Nhân viên", gioLam: 162, tongLuong: 7500000, loaiNV: "Khá" },
        
        { taiKhoan: "4001", name: "Võ Duy Trung", email: "tb1@gmail.com", matKhau: "Admin@123", ngayLam: "2024-04-04", luongCB: 5000000, chucvu: "Nhân viên", gioLam: 120, tongLuong: 5000000, loaiNV: "Trung bình" },
        { taiKhoan: "4002", name: "Đỗ Bảo Hạng", email: "tb2@gmail.com", matKhau: "Admin@123", ngayLam: "2024-04-04", luongCB: 4500000, chucvu: "Nhân viên", gioLam: 110, tongLuong: 4500000, loaiNV: "Trung bình" }
    ]
}