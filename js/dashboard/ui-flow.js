import { dom } from './core.js'

export const renderTable = (list) => {
    // Kiểm tra nếu không có dữ liệu
    if (!list || list.length === 0) {
        dom.tableDanhSach.innerHTML = `<tr><td colspan="8" class="text-center">Danh sách trống</td></tr>`
        return
    }

    const html = list.map(nv => {
        // Xử lý hiển thị tên chức vụ cho thân thiện
        const tenChucVu = nv.chucvu === "SEP" ? "Sếp"
            : nv.chucvu === "TRUONGPHONG" ? "Trưởng phòng"
                : "Nhân viên"

        return `
            <tr>
                <td>${nv.taiKhoan}</td>
                <td>${nv.name}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${tenChucVu}</td>
                <td>${Number(nv.tongLuong).toLocaleString()} VNĐ</td>
                <td><span class="badge ${getBadgeClass(nv.loaiNV)}">${nv.loaiNV}</span></td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editNV('${nv.taiKhoan}')">
                        <i class="fa fa-edit"></i>
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="xoaNV('${nv.taiKhoan}')">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        `
    }).join("")

    dom.tableDanhSach.innerHTML = html
}

export const closeModal = () => {
    // 1. Đóng modal (Sử dụng jQuery của Bootstrap 4)
    if (window.$) {
        $('#myModal').modal('hide')
    }

    // 2. Reset các trường nhập liệu
    if (dom.form) dom.form.reset()

    // 3. Xóa toàn bộ nội dung trong các thẻ thông báo lỗi (span)
    if (dom.spans) {
        Object.values(dom.spans).forEach(span => {
            if (span) span.innerHTML = ""
        })
    }
}

const getBadgeClass = (loai) => {
    switch (loai) {
        case "Xuất sắc": return "badge-danger"
        case "Giỏi": return "badge-success"
        case "Khá": return "badge-primary"
        default: return "badge-info"
    }
}