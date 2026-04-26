import { dom, state } from './dashboard/core.js'
import { addNV, updateNV, searchNV } from './dashboard/crud-flow.js'
import { closeModal, renderTable } from './dashboard/ui-flow.js'

document.addEventListener("DOMContentLoaded", () => {

    if (dom.buttons.btnThemNV) dom.buttons.btnThemNV.onclick = addNV
    if (dom.buttons.btnCapNhat) dom.buttons.btnCapNhat.onclick = updateNV
    if (dom.buttons.btnTimNV) dom.buttons.btnTimNV.onclick = searchNV

    if (dom.inputSearch) {
        dom.inputSearch.oninput = searchNV
    }

    if (dom.buttons.btnMoModal) {
        dom.buttons.btnMoModal.onclick = () => {
            dom.form.reset()
            dom.tknv.disabled = false

            Object.values(dom.spans).forEach(s => {
                if (s) s.innerHTML = ""
            })

            if (dom.headerTitle) dom.headerTitle.innerHTML = "Thêm Nhân Viên"

            if (dom.buttons.btnThemNV)
                dom.buttons.btnThemNV.style.display = "inline-block"

            if (dom.buttons.btnCapNhat)
                dom.buttons.btnCapNhat.style.display = "none"
        }
    }

    window.xoaNV = (id) => {
        if (!confirm("Bạn có chắc muốn xóa nhân viên này?")) return

        state.danhSachNV = state.danhSachNV.filter(nv => nv.taiKhoan !== id)
        renderTable(state.danhSachNV)
    }

    window.editNV = (id) => {
        const nv = state.danhSachNV.find(i => i.taiKhoan === id)
        if (!nv) return

        $('#myModal').modal('show')

        dom.tknv.value = nv.taiKhoan
        dom.tknv.disabled = true
        dom.name.value = nv.name
        dom.email.value = nv.email
        dom.password.value = nv.matKhau
        dom.datepicker.value = nv.ngayLam
        dom.luongCB.value = nv.luongCB
        dom.chucvu.value = nv.chucvu
        dom.gioLam.value = nv.gioLam

        if (dom.headerTitle) dom.headerTitle.innerHTML = "Cập Nhật Nhân Viên"

        if (dom.buttons.btnThemNV)
            dom.buttons.btnThemNV.style.display = "none"

        if (dom.buttons.btnCapNhat)
            dom.buttons.btnCapNhat.style.display = "inline-block"
    }

    window.closeModal = closeModal

    renderTable(state.danhSachNV)
})