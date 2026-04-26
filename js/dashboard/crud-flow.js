import { NhanVien, dom, state } from './core.js'
import { renderTable, closeModal } from './ui-flow.js'

export const validate = (nv) => {
    let isValid = true
    // regex
    const nameRegex = /^[A-Za-zÀ-ỹ\s]+$/
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const mkRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,10}$/

    // vali taiKhoan
    const isExistTK = state.danhSachNV.some(item => item.taiKhoan === nv.taiKhoan)

    if (!/^\d{4,6}$/.test(nv.taiKhoan)) {
        dom.spans.tknv.innerHTML = "Tài khoản phải từ 4-6 ký số!"
        isValid = false
    } else if (isExistTK && !dom.tknv.disabled) {
        dom.spans.tknv.innerHTML = "Tài khoản đã tồn tại!"
        isValid = false
    } else {
        dom.spans.tknv.innerHTML = ""
    }
    dom.spans.tknv.style.display = dom.spans.tknv.innerHTML ? "block" : "none"

    // vali name
    if (nv.name.trim() === "") {
        dom.spans.name.innerHTML = "Họ tên không được để trống!"
        isValid = false
    } else if (!nameRegex.test(nv.name)) {
        dom.spans.name.innerHTML = "Họ tên phải là chữ cái!"
        isValid = false
    } else {
        dom.spans.name.innerHTML = ""
    }
    dom.spans.name.style.display = dom.spans.name.innerHTML ? "block" : "none"

    //vali email
    const isExistEmail = state.danhSachNV.some(item => item.email === nv.email && item.taiKhoan !== nv.taiKhoan)

    if (!emailRegex.test(nv.email)) {
        dom.spans.email.innerHTML = "Email không đúng định dạng!"
        isValid = false
    } else if (isExistEmail) {
        dom.spans.email.innerHTML = "Email này đã được sử dụng!"
        isValid = false
    } else {
        dom.spans.email.innerHTML = ""
    }
    dom.spans.email.style.display = dom.spans.email.innerHTML ? "block" : "none"

    // vali day    
    const ngayChon = new Date(nv.ngayLam)
    const ngayHienTai = new Date()
    ngayHienTai.setHours(0, 0, 0, 0)

    if (nv.ngayLam === "") {
        dom.spans.datepicker.innerHTML = "Vui lòng chọn ngày làm!"
        isValid = false
    } else if (ngayChon >= ngayHienTai) {
        dom.spans.datepicker.innerHTML = "Ngày làm phải nhỏ hơn ngày hiện tại!"
        isValid = false
    } else {
        dom.spans.datepicker.innerHTML = ""
    }
    dom.spans.datepicker.style.display = dom.spans.datepicker.innerHTML ? "block" : "none"

    //vali pass
    if (!mkRegex.test(nv.matKhau)) {
        dom.spans.password.innerHTML = "6-10 ký tự (1 hoa, 1 số, 1 đặc biệt)!"
        isValid = false
    } else {
        dom.spans.password.innerHTML = ""
    }
    dom.spans.password.style.display = dom.spans.password.innerHTML ? "block" : "none"

    // vali luong
    if (isNaN(nv.luongCB) || nv.luongCB < 1000000 || nv.luongCB > 20000000) {
        dom.spans.luongCB.innerHTML = "Lương từ 1.000.000 đến 20.000.000!"
        isValid = false
    } else {
        dom.spans.luongCB.innerHTML = ""
    }
    dom.spans.luongCB.style.display = dom.spans.luongCB.innerHTML ? "block" : "none"

    // vali chuc vu
    if (nv.chucvu === "" || nv.chucvu === "Chọn chức vụ") {
        dom.spans.chucvu.innerHTML = "Vui lòng chọn chức vụ!"
        isValid = false
    } else {
        dom.spans.chucvu.innerHTML = ""
    }
    dom.spans.chucvu.style.display = dom.spans.chucvu.innerHTML ? "block" : "none"

    // vali gioLam
    const diffTime = Math.abs(ngayHienTai - ngayChon)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const maxHours = diffDays * 24

    if (isNaN(nv.gioLam) || nv.gioLam < 80 || nv.gioLam > 200) {
        dom.spans.gioLam.innerHTML = "Giờ làm từ 80 đến 200 giờ!"
        isValid = false
    } else if (nv.gioLam > maxHours) {
        dom.spans.gioLam.innerHTML = `Giờ làm (${nv.gioLam}h) không thể lớn hơn (${maxHours}h)!`
        isValid = false
    } else {
        dom.spans.gioLam.innerHTML = ""
    }
    dom.spans.gioLam.style.display = dom.spans.gioLam.innerHTML ? "block" : "none"

    return isValid
}
// getFormData
const getFormData = () => ({
    taiKhoan: dom.tknv.value,
    name: dom.name.value,
    email: dom.email.value,
    matKhau: dom.password.value,
    ngayLam: dom.datepicker.value,
    luongCB: dom.luongCB.value,
    chucvu: dom.chucvu.value,
    gioLam: dom.gioLam.value
})
const createNV = () => {
    const d = getFormData()
    return new NhanVien(
        d.taiKhoan,
        d.name,
        d.email,
        d.matKhau,
        d.ngayLam,
        d.luongCB,
        d.chucvu,
        d.gioLam
    )
}
// themNhanVien
export const addNV = () => {
    console.log("Đang thực hiện thêm nhân viên...")

    const data = getFormData()

    if (!validate(data)) {
        console.warn("Dữ liệu không hợp lệ")
        return
    }

    const nv = createNV()

    state.danhSachNV.push(nv)
    renderTable(state.danhSachNV)
    closeModal()

    console.log("Thêm thành công:", nv)
}
// capNhatNhanVien
export const updateNV = () => {
    console.log("Đang cập nhật nhân viên...")

    const data = getFormData()

    if (!validate(data)) {
        console.warn("Dữ liệu không hợp lệ")
        return
    }

    const nvUpdate = createNV()

    const index = state.danhSachNV.findIndex(i => i.taiKhoan === nvUpdate.taiKhoan)

    if (index !== -1) {
        state.danhSachNV[index] = nvUpdate
        renderTable(state.danhSachNV)
        closeModal()
        console.log("Cập nhật thành công!")
    }
}

// timKiemTheoXepLoai
// Ham xoa dau tieng viet
const removeVietnameseTones = (str) => {
    return str.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D')
}

export const searchNV = () => {
    const input = dom.inputSearch
    if (!input) return

    const keyword = removeVietnameseTones(input.value.toLowerCase().trim())

    const result = state.danhSachNV.filter(nv => {
        const loai = removeVietnameseTones(nv.loaiNV.toLowerCase())
        return loai.includes(keyword)
    })

    renderTable(result)
}
