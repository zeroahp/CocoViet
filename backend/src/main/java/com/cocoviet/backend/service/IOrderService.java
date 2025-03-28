package com.cocoviet.backend.service;

import com.cocoviet.backend.models.dto.OrderDTO;
import com.cocoviet.backend.models.dto.RevenueDTO;
import com.cocoviet.backend.models.request.OrderRequest;

import java.util.List;

public interface IOrderService {
    OrderDTO createOrder(OrderRequest orderRequest);

    OrderDTO updateOrder(String orderId, OrderRequest orderRequest);

    List<OrderDTO> getOrderByCustomerId(String customerId, String statusName);

    List<OrderDTO> getAllOrders();

    OrderDTO deleteReceipt(String orderId, String receiptId);

    List<OrderDTO> getOrderByRetailerId(String retailerId);

    String deleteOrderById(String orderId);

    RevenueDTO getRevenue(String retailerId);

    List<RevenueDTO> getAllRevenue(String statusCode);
}
