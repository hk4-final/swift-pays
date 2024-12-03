# Tài liệu API

## Lấy danh sách ngân hàng và các mã của chúng

Để lấy danh sách các ngân hàng đang được hỗ trợ và các mã của chúng:

### Request

```bash
GET https://api.mmobank.net/api/client/banks

```

### Headers

```json
{
  "accept": "application/json"
}
```

### Response

```json
[
  {
    "short_name": "ACB",
    "name": "Ngân hàng Thương mại Cổ phần Á Châu",
    "logo_url": "https://...",
    "code": "ACB"
  },
  {
    "short_name": "VietinBank",
    "name": "Ngân hàng Thương mại Cổ phần Công thương Việt Nam",
    "logo_url": null,
    "code": "CTG"
  }
]
```

## Lấy lịch sử giao dịch

Để lấy lịch sử giao dịch của một tài khoản ngân hàng cụ thể:

### Request

```bash
GET https://api.mmobank.net/api/client/transactions

```

### Parameters

| Tên           | Loại   | Vị trí | Mô tả                  |
| ------------- | ------ | ------ | ---------------------- |
| codeBank      | string | query  | Mã ngân hàng (VD: ACB) |
| accountNumber | string | query  | Số tài khoản           |
| user-api-key  | string | header | API key của người dùng |

### Response

```json
{
  "transactions": [
    {
      "amount": 100000,
      "content": "Nội dung giao dịch",
      "ref_code": "Mã tham chiếu",
      "transaction_date": "2024-11-20T20:37:50.000Z",
      "transaction_type": "IN" // "IN": nhận tiền, "OUT": chuyển tiền
    },
    {
      "amount": 800000,
      "content": "Nội dung giao dịch 2",
      "ref_code": "Mã tham chiếu",
      "transaction_date": "2024-10-20T20:37:50.000Z",
      "transaction_type": "OUT" // "IN": nhận tiền, "OUT": chuyển tiền
    }
  ]
}
```

### Ví dụ

```bash
curl -X 'GET' \
  'https://api.Swift Pays.net/api/client/transactions?codeBank=ACB&accountNumber=12345678' \
  -H 'accept: application/json' \
  -H 'user-api-key: YOUR-API-KEY'
```

::: tip
Bạn cần có API key hợp lệ để có thể truy vấn lịch sử giao dịch. API key được cung cấp trong phần thông tin cá nhân của bạn.
:::

::: warning Lưu ý
Vui lòng bảo mật API key của bạn và không chia sẻ cho người khác.
:::
