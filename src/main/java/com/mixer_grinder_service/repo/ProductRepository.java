package com.mixer_grinder_service.repo;

import com.mixer_grinder_service.model.Product;
import com.mixer_grinder_service.model.ServiceCenter;
import com.mixer_grinder_service.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product,Long> {
    List<Product> findByserviceCenter(ServiceCenter serviceCenter);
    List<Product> findByUser(User user);
}
