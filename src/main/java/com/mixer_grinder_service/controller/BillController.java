package com.mixer_grinder_service.controller;

import com.mixer_grinder_service.model.Bill;
import com.mixer_grinder_service.service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Bill")
@CrossOrigin("*")
public class BillController {
    @Autowired
    private BillService billService;

    @PostMapping("/addBill")
    public ResponseEntity<?> addBill(@RequestBody Bill bill){
        return ResponseEntity.ok( this.billService.addBill(bill));
    }
    @PostMapping("/updateBill")
    public ResponseEntity<?> updateBill(@RequestBody Bill bill){
        return ResponseEntity.ok(this.billService.updateBill(bill));
    }
    @GetMapping("/getBill/{Id}")
    public ResponseEntity<?> getBill(@PathVariable("Id") Long Id){
        return ResponseEntity.ok(this.billService.getBill(Id));
    }
    @GetMapping("/getBillbyProduct/{pId}")
    public ResponseEntity<?> getBillBypId(@PathVariable("pId") Long pId){
        return ResponseEntity.ok(this.billService.getBillBypId(pId));
    }
}
