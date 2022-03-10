package com.mixer_grinder_service.service;

import com.mixer_grinder_service.model.Product;
import com.mixer_grinder_service.model.ServiceCenter;
import com.mixer_grinder_service.model.User;

import java.util.List;

public interface ProductService {

    Product addProduct(Product product);
    Product updateProduct(Product product);
    void deleteProduct(Long pId);
    Product getProduct(Long pId);
    List<Product> getProductOfServiceCenter(ServiceCenter serviceCenter);
    List<Product> getProductOfUser(User user);
}
