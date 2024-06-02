package com.ecommerce.sportcenter.mapper;

import com.ecommerce.sportcenter.entity.OrderAggregate.Order;
import com.ecommerce.sportcenter.model.OrderDto;
import com.ecommerce.sportcenter.model.OrderResponse;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface OrderMapper {
    OrderMapper INSTANCE = Mappers.getMapper(OrderMapper.class);
    @Mapping(source = "id", target = "id")
    @Mapping(source = "basketId", target = "basketId")
    @Mapping(source = "shippingAddress", target = "shippingAddress")
    @Mapping(source = "subTotal", target = "subTotal")
    @Mapping(source = "deliveryFee", target = "deliveryFee")
    @Mapping(target = "total", expression = "java(order.getSubTotal() + order.getDeliveryFee())")
    @Mapping(target = "orderDate", expression = "java(java.time.LocalDateTime.now())")
    @Mapping(target = "orderStatus", constant = "Pending")
    OrderResponse OrderToOrderResponse(Order order);

    @Mapping(target = "orderDate", expression = "java(orderDto.getOrderDate())")
    @Mapping(target = "orderStatus", constant = "Pending") // Reference enum constant directly
    Order orderResponseToOrder(OrderDto orderDto);

    List<OrderDto> ordersToOrderResponses(List<Order> orders);

    void updateOrderFromOrderResponse(OrderDto orderDto, @MappingTarget Order order);
}
