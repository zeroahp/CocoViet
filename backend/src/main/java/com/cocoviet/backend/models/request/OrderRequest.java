package com.cocoviet.backend.models.request;

import java.time.LocalDateTime;
import java.util.List;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class OrderRequest {

//    @NotNull(message = "Customer ID cannot be null")
    String customerId;
    String customerName;

    String customerAddress;

    String customerNumber;

    String statusCode;

    String paymentCode;

    List<ReceiptDetailRequest> receiptDetailRequests;

    LocalDateTime orderDate;

}
