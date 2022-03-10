package com.mixer_grinder_service.service.impl;

import com.mixer_grinder_service.model.Product;
import com.mixer_grinder_service.model.ServiceCenter;
import com.mixer_grinder_service.model.User;
import com.mixer_grinder_service.repo.ProductRepository;
import com.mixer_grinder_service.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;


    @Override
    public Product addProduct(Product product) {
        return this.productRepository.save(product);
    }

    @Override
    public Product updateProduct(Product product) {
        return this.productRepository.save(product);
    }

    @Override
    public void deleteProduct(Long pId) {
        Product product = new Product();
        product.setpId(pId);
        this.productRepository.delete(product);
    }

    @Override
    public Product getProduct(Long pId) {
        return this.productRepository.findById(pId).get();
    }

    @Override
    public List<Product> getProductOfServiceCenter(ServiceCenter serviceCenter) {
        return this.productRepository.findByserviceCenter(serviceCenter);
    }

    @Override
    public List<Product> getProductOfUser(User user) {
        return this.productRepository.findByUser(user);
    }
}
