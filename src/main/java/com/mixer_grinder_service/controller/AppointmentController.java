package com.mixer_grinder_service.controller;

import com.mixer_grinder_service.model.Product;
import com.mixer_grinder_service.model.ServiceCenter;
import com.mixer_grinder_service.model.User;
import com.mixer_grinder_service.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class AppointmentController {
    @Autowired
    private ProductService productService;

    @PostMapping("/appointment")
    public ResponseEntity<?> addProduct(@RequestBody Product product){
        return ResponseEntity.ok(this.productService.addProduct(product));
    }

    @PutMapping("/appointment/update")
    public ResponseEntity<?> updateProduct(@RequestBody Product product){
        return ResponseEntity.ok(this.productService.updateProduct(product));
    }

    @GetMapping("/getAppointmentpid/{pId}")
    public Product getProductBypId(@PathVariable("pId") Long pId){
        return this.productService.getProduct(pId);
    }
    @GetMapping("/getAppointment/{serviceCenterID}")
    public List<Product> getProductOfServiceCenter(@PathVariable("serviceCenterID") Long serviceCenterID){
        ServiceCenter serviceCenter = new ServiceCenter();
        serviceCenter.setServiceCenterID(serviceCenterID);
        return this.productService.getProductOfServiceCenter(serviceCenter);
    }

    @GetMapping("/getAppointmentByUser/{Id}")
    public List<Product> getProductOfUser(@PathVariable("Id") Long Id){
        User user = new User();
        user.setId(Id);
        return this.productService.getProductOfUser(user);
    }
    @DeleteMapping("/cancelappointment/{pId}")
    public void deleteAppointment(@PathVariable("pId") Long pId){
        this.productService.deleteProduct(pId);
    }

}
