//===Bài 1===
// let styles = ["Jazz", "Blues"];
//-----Thêm “Rock-n-Roll” vào cuối mảng
//styles.push("Rock-n-Roll");
//-----Thay thế giá trị ở giữa bằng “Classics”
//styles[1] = "Classics";
//console.log(styles);
//-----Tách giá trị đầu tiên của mảng và hiển thị nó
//let shift = styles.shift();
//console.log(shift);
//-----Thêm "Rap" và '"Reggae" vào đầu mảng
//styles.unshift("Rap", "Reggae");
//console.log(styles);
//===Bài 2===
//let arr = [1, 2, 3, 4, 5];
//-----biến mảng arr thành chuỗi và ngăn cách giữa các phần tử bằng kí tự "-"
//console.log(arr.join("-"));
//-----thêm 1 phần tử ở đầu mảng (tuỳ chọn phần tử)
//arr.unshift(0);
//console.log(arr);
//------thêm 2 phần tử ở cuối mảng (tuỳ chọn phần tử)
//arr.push(6, 7);
//console.log(arr);
//------xoá 2 phần tử ở cuối mảng
//arr.splice(arr.length - 2, 2);
//console.log(arr);
//-----xoá 2 phần tử ở đầu mảng
//arr.splice(0, 2);
//console.log(arr);
//-----tự tạo một mảng mới và nối với mảng arr
//let arr1 = [90, 100];
//console.log(arr1.concat(arr));
//===Bài 3===
//-----Viết hàm JavaScript để kiểm tra xem đầu vào có phải là một mảng hay không
// function is_Array(arr) {
//   return Array.isArray(arr);
// }
// const a = is_Array("techc"); // false
// const b = is_Array([1, 2, 4, 0]); //true

// console.log(a); // false
// console.log(b); // true
//===Bài 4===
//-----Viết một hàm JavaScript để sao chép một mảng
// function array_Clone(arr) {
//   let arr_clone = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr_clone[i] = arr[i];
//   }
//   return arr_clone;
// }
// const a = array_Clone([1, 2, 4, 0]);
// console.log(a);
//===Bài 5===
//-----Viết hàm JavaScript để lấy các phần tử đầu tiên của một mảng. Truyền tham số 'n' sẽ trả về 'n' phần tử đầu tiên của mảng
// function first(arr, count) {
//   arr.splice(count);
//   return arr;
// }
// const a = first([0, 1, 2, 3, 4, 5, 6], 4);
// console.log(a);
//===Bài 6===
//-----Viết một hàm JavaScript để lấy các phần tử cuối cùng của một mảng. Truyền tham số 'n' sẽ trả về 'n' phần tử cuối cùng của mảng
// function last(arr, count) {
//   arr.splice(0, arr.length - count);
//   return arr;
// }
// const a = last([1, 2, 3, 4], 3);
// console.log(a);
