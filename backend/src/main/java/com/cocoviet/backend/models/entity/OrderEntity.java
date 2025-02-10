package com.cocoviet.backend.models.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;
import java.util.List;
import java.math.BigDecimal;

@Entity
@Table(name = "product_orders")
@FieldDefaults(level = AccessLevel.PRIVATE)
@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String orderId; // Đổi từ productOrderId → orderId

    @Column(nullable = false)
    Date orderDate; // Đổi tên từ productOrderDate → orderDate

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    CustomerEntity customer;

    @ManyToOne
    @JoinColumn(name = "status_id", nullable = false)
    StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "payment_id", nullable = false)
    PaymentEntity payment;

    @Column(nullable = false)
    BigDecimal totalPrice; // Đảm bảo đơn hàng có tổng giá trị
}
