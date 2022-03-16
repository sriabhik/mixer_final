package com.mixer_grinder_service.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import  com.mixer_grinder_service.model.ServiceCenter;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name="product_details")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long pId;
    private String productName;
    private String modelNumber;
    private String contactNumber;
    private String enterProblem;
    private boolean status = false;
    @JsonDeserialize(using = LocalDateDeserializer.class)
    @JsonSerialize(using = LocalDateSerializer.class)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate dateOfPurchase;

    @ManyToOne(fetch = FetchType.EAGER)
    private ServiceCenter serviceCenter;

    @ManyToOne(fetch = FetchType.EAGER)

    @JoinColumn(name = "Id")

    private User user;

    @OneToOne(mappedBy = "product",cascade = CascadeType.REMOVE)
    @JsonIgnore
    private Bill bill;
    public Product() {
    }

    public Product(Long pId, String productName, String modelNumber, String contactNumber, String enterProblem, boolean status, LocalDate dateOfPurchase, ServiceCenter serviceCenter, User user, Bill bill) {
        this.pId = pId;
        this.productName = productName;
        this.modelNumber = modelNumber;
        this.contactNumber = contactNumber;
        this.enterProblem = enterProblem;
        this.status = status;
        this.dateOfPurchase = dateOfPurchase;
        this.serviceCenter = serviceCenter;
        this.user = user;
        this.bill = bill;
    }

    public Long getpId() {
        return pId;
    }

    public void setpId(Long pId) {
        this.pId = pId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getModelNumber() {
        return modelNumber;
    }

    public void setModelNumber(String modelNumber) {
        this.modelNumber = modelNumber;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getEnterProblem() {
        return enterProblem;
    }

    public void setEnterProblem(String enterProblem) {
        this.enterProblem = enterProblem;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public LocalDate getDateOfPurchase() {
        return dateOfPurchase;
    }

    public void setDateOfPurchase(LocalDate dateOfPurchase) {
        this.dateOfPurchase = dateOfPurchase;
    }

    public ServiceCenter getServiceCenter() {
        return serviceCenter;
    }

    public void setServiceCenter(ServiceCenter serviceCenter) {
        this.serviceCenter = serviceCenter;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Bill getBill() {
        return bill;
    }

    public void setBill(Bill bill) {
        this.bill = bill;
    }
}
