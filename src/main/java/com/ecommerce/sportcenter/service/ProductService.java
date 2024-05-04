package com.ecommerce.sportcenter.service;

import com.ecommerce.sportcenter.model.ProductResponse;
import java.util.List;

public interface ProductService {
    ProductResponse getProductById(Integer productId);
    List<ProductResponse> getAllProducts();
}
