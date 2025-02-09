package com.cocoviet.backend.models.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "product")
@FieldDefaults(level = AccessLevel.PRIVATE)
@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class CoconutProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long productId;

    @Column
    String productName;

    @Column(columnDefinition = "TEXT")
    String productDesc;

    // @Column
    // int productStock;

    @Column
    String productImage;

    @Column
    String productOrigin;

    @Column
    Date createdAt;

//    @ManyToOne
//    @JoinColumn(name = "retailer_id")
//    RetailerEntity retailer;

//    @OneToMany(mappedBy = "product")
//    Set<CoconutProductVariantsEntity> variants;
//
//    @OneToMany(mappedBy = "product")
//    Set<ReceiptEntity> receiptDetails;

    @ManyToOne
    @JoinColumn(name = "retailer_id", nullable = false) // Liên kết đến RetailerEntity
    RetailerEntity retailer;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    List<CoconutProductVariantEntity> variants;
}