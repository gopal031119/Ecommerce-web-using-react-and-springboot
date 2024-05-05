package com.ecommerce.sportcenter.service.impl;

import com.ecommerce.sportcenter.entity.Product;
import com.ecommerce.sportcenter.model.ProductResponse;
import com.ecommerce.sportcenter.repository.ProductRepository;
import com.ecommerce.sportcenter.service.ProductService;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@Log4j2
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public ProductResponse getProductById(Integer productId) {
        log.info("fetching product by id: {}", productId);
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product doesn't exist"));
//        Product product = productRepository.findById(productId)
//                .orElseThrow(()->new ProductNotFoundException("Product doesn't exist"));
        //now convert the Product to Product Response
        ProductResponse productResponse = convertToProductResponse(product);
        log.info("fetched product by product id: {}", productId);
        return productResponse;
    }

    @Override
    public Page<ProductResponse> getProducts(Pageable pageable, Integer brandId, Integer typeId, String keyword) {
        Specification<Product> spec = Specification.where(null);
        
        if(Objects.nonNull(brandId)){
            spec = spec.and(((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("brand").get("id"), brandId)));
        }
        if(Objects.nonNull(typeId)){
            spec = spec.and(((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("type").get("id"), typeId)));
        }
        if(Objects.nonNull(keyword) && !keyword.isEmpty()){
            spec = spec.and(((root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("name"), "%" + keyword + "%")));
        }
        Page<Product> productPage = productRepository.findAll(spec, pageable);
        // no need to stream
        Page<ProductResponse> productResponses = productPage.map(this::convertToProductResponse);
        log.info("fetched all products!!!");
        return productResponses;
    }

    private ProductResponse convertToProductResponse(Product product) {
        return ProductResponse.builder()
                .id(product.getId())
                .name(product.getName())
                .description(product.getDescription())
                .price(product.getPrice())
                .pictureUrl(product.getPictureUrl())
                .productBrand(product.getBrand().getName())
                .productType(product.getType().getName())
                .build();
    }
}
