package com.ecommerce.sportcenter.entity.OrderAggregate;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductItemOrdered {
    private Integer productId;
    private String name;
    private String pictureUrl;
}
