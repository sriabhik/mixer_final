package com.mixer_grinder_service.service;

import com.mixer_grinder_service.model.Bill;

public interface BillService {
    Bill addBill(Bill bill);
    Bill updateBill(Bill bill);
    Bill getBill(Long Id);
}
