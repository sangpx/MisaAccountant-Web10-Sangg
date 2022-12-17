import { createI18n } from "vue-i18n";

const misaResource = createI18n({
  locale: "vn",
  messages: {
    vn: {
      //Form Detail
      TITLE_FORM: "Thông tin Nhân Viên",
      ISCUSTOMER: "Là Khách Hàng",
      ISSUPPLiER: "Là Nhà Cung Cấp",
      EMPLOYEECODE: "Mã",
      EMPLOYEESCODE: "Mã Nhân Viên",
      EMPLOYEENAME: "Tên",
      EMPLOYEESNAME: "Tên Nhân Viên",
      DATEOFBIRTH: "Ngày Sinh",
      GENDER: "Giới Tính",
      IDENTITYDATE: "Ngày Cấp",
      IDENTITYPLACE: "Nơi Cấp",
      IDENTITYNUMBER: "Số CMND",
      CAREERTITLE: "Chức Danh",
      WORKINGUNITNAME: "Đơn Vị",
      ACCOUNTNUMBER: "Số Tài Khoản",
      ADDRESS: "Địa Chỉ",
      EMAIL: "Email",
      BANKNAME: "Tên Ngân Hàng",
      BRANCHBANK: "Chi Nhánh TK Ngân Hàng",
      PHONENUMBER: "ĐT Di Động",
      LANDLINENUMBER: "ĐT Cố Định",
      FUNC: "Chức Năng",
      EDIT: "Sửa",
      EMPLOYEECODEEMPTY: "Mã không được để trống.",
      EMPLOYEENAMEEMPTY: "Tên không được để trống.",
      WORKINGUNITNAMEEMPTY: "Đơn vị không được để trống.",
      CANCEL: "Hủy",
      ADD: "Cất",
      SAVEANDADD: "Cất và Thêm",

      //SideBar
      OVERVIEW: "Tổng Quan",
      CASH: "Tiền Mặt",
      DEPOSITS: "Tiền Gửi",
      PURCHASE: "Mua Hàng",
      SELL: "Bán Hàng",
      BILL_MANAGEMENT: "Quản lý hóa đơn",
      WAREHOUSE: "Kho",
      SUPPORT_TOOLS: "Công cụ hỗ trợ",
      FIXED_ASSETS: "Tài sản cố định",
      TAX: "Thuế",
      PRICE: "Giá thành",
      GENERAL: "Tổng Hợp",
      BUDGET: "Ngân sách",
      REPORT: "Báo cáo",
      FINANCIAL_ANALYSIS: "Phân tích tài chính",

      //Title Company
      TITLE_COMPANY: "CÔNG TY TNHH SẢN XUẤT - THƯƠNG MẠI - DỊCH VỤ QUI PHÚC",

      //Tile User
      TITLE_USER: "Phạm Xuân Sang",

      //Footer
      TOTAL: "Tổng số: ",
      RECORD: "bản ghi",
    },
  },
});

export default misaResource;
