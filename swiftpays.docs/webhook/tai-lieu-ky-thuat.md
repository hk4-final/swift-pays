---
outline: deep
---

# Tài liệu kỹ thuật Webhook

## Method

```
Method: POST
```

## Header

```json
{
'Content-Type: application/json',
'secret-key: secret-key'
}
```

## Params POST

```json
{
  "payload": [
    {
      "id": "transaction",
      "gateway": "ACB",
      "transactionDate": "2024-07-20",
      "transactionNumber": "txn001",
      "accountNumber": "1234567890",
      "content": "Swift Pays 123456",
      "transferType": "credit",
      "transferAmount": 1000000
    }
  ]
}
```

## Code mẫu

::: code-group

```js [NestJS]
import { Controller, ForbiddenException, Post, Req } from '@nestjs/common';
import { DepositService } from './deposit.service';
import { ConfigService } from '@nestjs/config';

@Controller('webhook')
export class DepositController {
    constructor(private readonly depositService: DepositService,
        private readonly configService: ConfigService,
    ) { }
  // Định nghĩa endpoint POST tại /webhook
  @Post()
  async handleDeposit(@Req() req: any): Promise<boolean> {
    // Lấy dữ liệu thô từ request body
    const rawData = req.body;

    // Tạo payload chứa thông tin giao dịch từ dữ liệu thô
    const payload = {
      id: rawData.transactionNumber,                // Số giao dịch
      gateway: rawData.gateway,                    // Cổng thanh toán
      transactionDate: rawData.effectiveDate.toString(), // Ngày thực hiện giao dịch
      transactionNumber: rawData.transactionNumber, // Số giao dịch
      accountNumber: rawData.account,              // Số tài khoản người thực hiện
      content: rawData.description,                // Nội dung giao dịch
      transferType: rawData.type,                  // Loại giao dịch (ví dụ: chuyển khoản)
      transferAmount: rawData.amount,              // Số tiền giao dịch
    };

    // Lấy secret key từ header của request
    const secretKey = req.headers['secret-key'];
    // Lấy giá trị secret key đúng từ file cấu hình
    const expectedKey = this.configService.get<string>('WEBHOOK_SECRET_KEY');

    // Kiểm tra secret key trong request có khớp với secret key cấu hình
    if (secretKey !== expectedKey) {
      // Nếu không khớp, ném ra ngoại lệ ForbiddenException (cấm truy cập)
      throw new ForbiddenException('Invalid secret key');
    }

    // Dùng payload để xử lý phù hợp với hệ thống của bạn
    console.log(payload)

    // Trả về true nếu quá trình xử lý thành công
    return true;
  }
}
:::
```
