package com.mixer_grinder_service.service.impl;

import com.mixer_grinder_service.model.Bill;
import com.mixer_grinder_service.model.Product;
import com.mixer_grinder_service.repo.BillRepository;
import com.mixer_grinder_service.service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BillServiceImpl implements BillService {
    @Autowired
    private BillRepository billRepository;
    @Override
    public Bill addBill(Bill bill) {
        return this.billRepository.save(bill);
    }

    @Override
    public Bill updateBill(Bill bill) {
        return this.billRepository.save(bill);
    }

    @Override
    public Bill getBill(Long Id) {
        return this.billRepository.findById(Id).get();
    }

    @Override
    public Bill getBillBypId(Long pId) {
        Product product = new Product();
        product.setpId(pId);
        return this.billRepository.findByproduct(product);
    }
}
