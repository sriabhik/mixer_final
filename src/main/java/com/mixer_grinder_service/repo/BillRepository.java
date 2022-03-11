package com.mixer_grinder_service.repo;

import com.mixer_grinder_service.model.Bill;
import com.mixer_grinder_service.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BillRepository extends JpaRepository<Bill,Long> {
    Bill findByproduct(Product product);
}
