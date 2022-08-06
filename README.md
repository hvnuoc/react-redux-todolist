-   State là các thành phần để xây dựng nên một component. lưu trữ các giá trị của component. khi state thay đổi thì component cũng được render lại. State chỉ nằm trong một component.
-   Props là các tham số truyền vào một component

## Table of Contents

-   [Redux là gì](#redux-là-gì)
-   [Vì sao phải sử dụng redux? Redux toolkit nói riêng](#why-use-redux-redux-toolkit)
-   [Khi nào sử dụng redux](#why-use-redux)
-   [Kiến trúc và các khái niệm cần nắm](#struct-redux)

## Redux Là gì

-   Redux là một thư viện JS dùng để quản lý và cập nhật state của ứng dụng
-   Redux là một pattern Khuôn mẫu

## Why use redux redux toolkit

-   Quản lý global state

*   Các components tại mọi nơi trong ứng dụng có thể truy xuất và cập nhật
*   Giúp giải quyết vấn đề của React khi muốn truyền dữ liệu vào các cấp con cháu. ex có 3 component a, b, c nếu muốn truyền state từ a -> c thì phải truyền qua b. nếu dùng redux thì ở component c chỉ cần vào store redux để lấy state cần dùng

-   Dễ dàng debug: dự đoán được kết quả
-   xử lý caching dữ liệu từ server

*   Redux toolkit: là một library bọc phía bên ngoài redux core. chứa các package và function cần thiết khi mà chúng ta sử dụng redux sẽ không cần cài đặt các package riêng rẻ nữa. Việc cấu hình redux core rất phức tạp, khi sử dụng redux toolkit sẽ dễ dàng hơn. redux yêu cầu rất nhiều boileplate code (code lặp lại)

*   Phải cài đặt rất nhiều package để redux hoạt động tốt

## Why use redux

> Redux sẽ rất hữu dụng với các trường hợp sau

-   Dự án có số lượng lớn state và các state được sử dụng ở nhiều nơi
-   State được cập nhật thường xuyên
-   Logic code cập nhật state phức tạp
-   Ứng dụng có số lượng code trung bình hoặc lớn và có nhiều người làm chung
-   Cần debug và muốn xem cách state được cập nhật tại bất kì khoảng thời gian nào

## struct redux

-   State Management: cần quản lý các dữ liệu và trạng thái trong một component [useState], [useReducer] ..
-   Redux hoạt động theo một chiều View -> Actions -> State
-   imutability (Bất biến): quy tắc của redux là khi cập nhật state thì phải copy ra 1 state mới và cập nhật trên state đó
-   Kiến trúc của redux: Reducers, Action, dispatch

-   Reducer:

*   reducer là một function: dùng để cập nhật lại state trong store
*   Bao gồm 2 tham số là state và action

```js
const initialValue = {value: 0}
const rootReducer = (state = initialValue, action) {
}
```

-   Action là một object hoặc là một action creator:

*   bao gồm 2 field type và payload
*   Action creator là một function trả về một object. Có thể truyển tham số để tránh việc viết object action lặp lại

```js
const incrementCreator = (data) => {
    return {
        type: "todolist/add:",
        payload: data,
    };
};

incrementCreator(10);
```

-   Dispatch là một function có tham số là action:

```js
dispatch(INCREMENT);
dispatch(incrementCreator(10));
```
