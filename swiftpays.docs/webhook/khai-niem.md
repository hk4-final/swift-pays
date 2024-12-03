---
outline: deep
---

# Khái niệm

## Tích hợp

Việc tích hợp cực kỳ đơn giản với `Nodejs` hay bất kỳ mã nguồn nào khác. Bạn chỉ cần khai báo đầu nhận dữ liệu và đón kết quả được trả về từ Swift Pays sau đó xử lý dữ liệu giao dịch này trên hệ thống của bạn.

## Liên kết tài khoản

Đầu tiên bạn cần có tài khoản và liên kết được tài khoản lên hệ thống Swift Pays. Vui lòng xem trong danh sách liên kết trong menu quản trị hệ thống (danh sách hỗ trợ sẽ được update hoặc thay đổi bất kỳ lúc nào)

## Giao diện liên kết

Hệ thống có thể hỗ trợ liên kết cùng lúc nhiều tài khoản. Việc tích hợp gần như không phụ thuộc vào việc bạn liên kết tài khoản nào vào hệ thống nhờ tính linh động của hệ thống Hook.

## Thông báo giao dịch và debug lỗi

Tất cả các giao dịch mới sẽ được gửi đến hệ thống của bạn. Nghĩa là, nếu có 5 giao dịch mới, Swift Pays sẽ gửi 5 giao dịch mới đến endpoint mà bạn đã khai báo.

Bạn có thể theo dõi các giao dịch đã được gửi về trong mục XEM LOG ĐÃ GỬI để thuận tiện cho việc kiểm tra và debug khi cần.
::: tip
Thông thường để kiểm tra quá trình tích hợp có thành công hay không, bạn chỉ cần tạo một giao dịch cho tài khoản liên kết và chờ kết quả debug ở phần Thông báo được trả về.
:::
Dữ liệu gửi đi từ Swift Pays
Các tham số cơ bản của một giao dịch được gửi theo dạng json (raw text) kèm theo Secret key mà bạn đã khai báo ở bước Tạo Hook.
::: warning
SecretKey được gửi kèm trong Header của request tên là secret-key do đó để bảm bảo dữ liệu được gửi từ Swift Pays thì bạn nên kiểm tra và so sánh secret-key này trước khi xử lý dữ liệu giao dịch trên hệ thống của mình.
:::
Sau đây là dữ liệu được gửi từ Swift Pays:

```md
id
gateway
transactionDate
transactionNumber
accountNumber
content
transferType
transferAmount
```

::: info
`id`

Mã định danh duy nhất tại Swift Pays

`gateway`

Đây là tên cổng thanh toán của tài khoản liên kết (acb, vcb, techcombank...)

`transactionDate`

Đây là ngày tháng của giao dịch ở định dạng yyyy-mm-dd

`transactionNumber`

Đây là mã giao dịch riêng biệt và không trùng với các giao dịch khác trên cùng 1 tài khoản liên kết của bạn. Nghĩa là sẽ không thể có 2 giao dịch cùng mã này trên cùng một cổng thanh toán.
`accountNumber`

Đây là số tài khoản liên kết nhận giao dịch

`content`

Đây là nội dung của giao dịch mà bạn nhận được từ các cổng thanh toán

`transferType`

Đây là định danh cho loại giao dịch (nhận tiền hoặc chuyển tiền).

```
- IN: Nhận tiền
- OUT: Chuyển tiền
```

`transferAmount`

Đây là số tiền giao dịch, số tiền này ở dạng số nguyên không chứa ký tự phân cách (,.) hàng đơn vị. Ví dụ: `1000000`
:::
