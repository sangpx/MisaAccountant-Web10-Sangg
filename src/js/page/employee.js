// $(document).ready(function () {
//   initEvent();
// });

// var errorMsgs = [];

// function initEvent() {
//   /* tạo các sự kiện cho các element
//         author: Sang - 02/11/2022
//      */
//   try {
//     //1. Nhấn btn-close ẩn dialog
//     $(".btn-close").click(function () {
//       $(".dialog").hide();
//     });

//     //2.  Nhấn btn-add để hiện dialog
//     $(".btn-add").click(function () {
//       $(".dialog").show();
//       $(".dialog-container input")[0].focus();
//     });

//     //3. Nhấn đồng ý để ẩn dialog
//     $(".toast__warning-yes").click(function () {
//       $(this).parents(".toast-message").hide();
//     });

//     // $(".require").blur(function () {
//     //   var value = $(this).val();

//     //   if (!value) {
//     //     $(this).addClass("error");
//     //     $(this).attr("title", "Thông tin này không được phép để trống.");
//     //   } else {
//     //     this.classList.remove("error");
//     //     $(this).attr("title", "");
//     //   }
//     // });

//     $("#btn-store__add").click(btnSaveOnClick);
//   } catch (error) {
//     console.log(error);
//   }
// }

// /**
//  * Cất dữ liệu
//  * Author: Sang - 04/11/2022
//  */
// function btnSaveOnClick() {
//   try {
//     //validate dữ liệu
//     validateData();

//     //nếu không hợp lệ --> đưa ra thông báo lỗi
//     if (errorMsgs.length > 0) {
//       //Hiển thị cảnh báo lỗi
//       showDialogWarning();
//       return;
//     }
//     //nếu hợp lệ --> gọi API
//     callAPISaveData();
//     //nếu api trả về thành công -> hiển thị toast message thông báo thành công
//     //nếu api trả về thất bại -> hiển thị thông báo lỗi
//   } catch (error) {
//     console.log(error);
//   }
// }

// function callAPISaveData() {
//   try {
//     //build đối tượng nhân viên:
//     var employee = {
//       EmployeeCode: $("#txtEmployeeCode").val(),
//       EmployeeName: $("#txtEmployeeName").val(),
//       Email: $("#txtEmail").val(),
//       PhoneNumber: $("#txtPhone").val(),
//     };

//     //gọi API thêm mới dữ liệu
//     $.ajax({
//       type: "POST",
//       url: "https://amis.manhnv.net/api/v1/Employees",
//       data: JSON.stringify(employee),
//       dataType: "json",
//       contentType: "Application/json",
//       success: function (response) {
//         console.log("success: ", response);
//       },
//       error: function (response) {
//         var statusCode = response.status;
//         switch (statusCode) {
//           case 400:
//             var msg = response.responseJSON.userMsg;
//             //Hiển thị thông báo lỗi:
//             var warningDialog = $(".toast-message");
//             //xác định phạm vi đặt các câu cảnh báo lỗi
//             var dialogBody = $(warningDialog).find(
//               ".toast__warning-empty--container"
//             );
//             console.log(dialogBody);

//             //build các câu cảnh báo lỗi từ mảng các câu thông báo đã có:
//             //xóa tất cả các nội dung thông báo cũ:
//             $(dialogBody).empty();

//             var warningitemHTML = `<div class="toast__warning-empty--content">
//                  <div class="toast__icon"><i class="icofont-warning"></i></div>
//                    ${msg}
//                </div>`;
//             $(dialogBody).append(warningitemHTML);
//             $(warningDialog).show();

//             break;

//           default:
//             break;
//         }
//       },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// function showDialogWarning(msg) {
//   try {
//     var warningDialog = $(".toast-message");
//     $(warningDialog).show();

//     //xác định phạm vi đặt các câu cảnh báo lỗi
//     var dialogBody = $(warningDialog).find(".toast__warning-empty--container");
//     console.log(dialogBody);

//     //build các câu cảnh báo lỗi từ mảng các câu thông báo đã có:
//     //xóa tất cả các nội dung thông báo cũ:
//     $(dialogBody).empty();
//     for (const msg of errorMsgs) {
//       var warningitemHTML = `<div class="toast__warning-empty--content">
//            <div class="toast__icon"><i class="icofont-warning"></i></div>
//               ${msg}
//          </div>`;
//       $(dialogBody).append(warningitemHTML);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// //Thực hiện validate dữ liệu
// function validateData() {
//   try {
//     //trước khi validate phải gán errorMsgs rỗng
//     errorMsgs = [];
//     //các thông tin bắt buộc nhập
//     validateRequired();
//     //email đúng định dạng
//     //ngày sinh ko được đúng hơn ngày hiện tại
//   } catch (error) {
//     console.log(error);
//   }
// }

// /*
//  * validate các thông tin bắt buộc
//  **/
// function validateRequired() {
//   // lấy tất cả các trường thông tin bắt buộc nhập trên form
//   var inputRequired = $("#dlgEmployeeDetail input[required]");

//   // thực hiện validate từng thông tin đã lấy được:
//   for (const input of inputRequired) {
//     $(input).trigger("blur");
//     var value = input.value;
//     if (!value) {
//       input.classList.add("error");
//       var label = $(input).attr("labels");
//       $(input).attr("title", `${label} không được phép để trống.`);

//       errorMsgs.push(`${label} không được phép để trống.`);
//     } else {
//       input.classList.remove("error");
//       $(input).attr("title", "");
//     }
//   }
//   //trả về kết quả kèm thông báo lỗi
// }
