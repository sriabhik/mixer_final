package com.mixer_grinder_service.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name="service")
public class ServiceCenter {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long serviceCenterID;

    private String serviceCenterName;
    private String serviceCenterPhone;
    private String serviceCenterAddress;
    private String serviceCenterMailId;

    @Column(length=50)
    private String serviceCenterDescription;

    private String serviceCenterImageUrl;

    @OneToMany(mappedBy = "serviceCenter",cascade = CascadeType.REMOVE)
    @JsonIgnore
    private Set<Product> set = new LinkedHashSet<>();

    public ServiceCenter() {
    }

    public ServiceCenter(Long serviceCenterID, String serviceCenterName, String serviceCenterPhone, String serviceCenterAddress, String serviceCenterMailId, String serviceCenterDescription, String serviceCenterImageUrl, Set<Product> set) {
        this.serviceCenterID = serviceCenterID;
        this.serviceCenterName = serviceCenterName;
        this.serviceCenterPhone = serviceCenterPhone;
        this.serviceCenterAddress = serviceCenterAddress;
        this.serviceCenterMailId = serviceCenterMailId;
        this.serviceCenterDescription = serviceCenterDescription;
        this.serviceCenterImageUrl = serviceCenterImageUrl;
        this.set = set;
    }

    public Long getServiceCenterID() {
        return serviceCenterID;
    }

    public void setServiceCenterID(Long serviceCenterID) {
        this.serviceCenterID = serviceCenterID;
    }

    public String getServiceCenterName() {
        return serviceCenterName;
    }

    public void setServiceCenterName(String serviceCenterName) {
        this.serviceCenterName = serviceCenterName;
    }

    public String getServiceCenterPhone() {
        return serviceCenterPhone;
    }

    public void setServiceCenterPhone(String serviceCenterPhone) {
        this.serviceCenterPhone = serviceCenterPhone;
    }

    public String getServiceCenterAddress() {
        return serviceCenterAddress;
    }

    public void setServiceCenterAddress(String serviceCenterAddress) {
        this.serviceCenterAddress = serviceCenterAddress;
    }

    public String getServiceCenterMailId() {
        return serviceCenterMailId;
    }

    public void setServiceCenterMailId(String serviceCenterMailId) {
        this.serviceCenterMailId = serviceCenterMailId;
    }

    public String getServiceCenterDescription() {
        return serviceCenterDescription;
    }

    public void setServiceCenterDescription(String serviceCenterDescription) {
        this.serviceCenterDescription = serviceCenterDescription;
    }

    public String getServiceCenterImageUrl() {
        return serviceCenterImageUrl;
    }

    public void setServiceCenterImageUrl(String serviceCenterImageUrl) {
        this.serviceCenterImageUrl = serviceCenterImageUrl;
    }

    public Set<Product> getSet() {
        return set;
    }

    public void setSet(Set<Product> set) {
        this.set = set;
    }
}
