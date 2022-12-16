import { createI18n } from "vue-i18n";

const misaResource = createI18n({
  locale: "vn",
  messages: {
    vn: {
      ISCUSTOMER: "Là Khách Hàng",
      ISSUPPLiER: "Là Nhà Cung Cấp",
      EMPLOYEECODE: "Mã",
      EMPLOYEENAME: "Tên",
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
      EMPLOYEECODEEMPTY: "Mã không được để trống.",
      EMPLOYEENAMEEMPTY: "Tên không được để trống.",
      WORKINGUNITNAMEEMPTY: "Đơn vị không được để trống.",
    },
  },
});

export default misaResource;
