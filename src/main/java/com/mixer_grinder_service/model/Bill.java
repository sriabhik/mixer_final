package com.mixer_grinder_service.model;

import javax.persistence.*;

@Entity
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    private String customer_name;
    private int repair_Cost;
    private String productName;
    private String serviceCenterName;
    private String customer_Contact;

    @OneToOne
    private Product product;

    public Bill() {
    }

    public Bill(Long id, String customer_name, int repair_Cost, String productName, String serviceCenterName, String customer_Contact, Product product) {
        Id = id;
        this.customer_name = customer_name;
        this.repair_Cost = repair_Cost;
        this.productName = productName;
        this.serviceCenterName = serviceCenterName;
        this.customer_Contact = customer_Contact;
        this.product = product;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getCustomer_name() {
        return customer_name;
    }

    public void setCustomer_name(String customer_name) {
        this.customer_name = customer_name;
    }

    public int getRepair_Cost() {
        return repair_Cost;
    }

    public void setRepair_Cost(int repair_Cost) {
        this.repair_Cost = repair_Cost;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getCustomer_Contact() {
        return customer_Contact;
    }

    public void setCustomer_Contact(String customer_Contact) {
        this.customer_Contact = customer_Contact;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public String getServiceCenterName() {
        return serviceCenterName;
    }

    public void setServiceCenterName(String serviceCenterName) {
        this.serviceCenterName = serviceCenterName;
    }
}
