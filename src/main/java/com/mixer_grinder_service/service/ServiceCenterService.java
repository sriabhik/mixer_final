package com.mixer_grinder_service.service;


import com.mixer_grinder_service.model.ResponseModel;
import com.mixer_grinder_service.model.ServiceCenter;
import com.mixer_grinder_service.repo.ServiceCenterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;

@Service
public class ServiceCenterService {


    @Autowired
    private ServiceCenterRepository serviceCenterRepository;
    
    public List<ServiceCenter> viewServiceCenter()
    {
    	return serviceCenterRepository.findAll();
	}

    public ResponseModel addServiceCenter(ServiceCenter serviceCenterModel, MultipartFile multipartFile)
    {
        String fileName = ServletUriComponentsBuilder.fromCurrentContextPath().
                path("/image/").path(multipartFile.getOriginalFilename()).toUriString();

        //fileName = fileName.substring(28);
        System.out.println(fileName);
        serviceCenterModel.setServiceCenterImageUrl(fileName);
        serviceCenterRepository.save(serviceCenterModel);
    	return new ResponseModel("new user "+serviceCenterModel.getServiceCenterName()+" added successfully!!!");
    }
    	
//    public ResponseModel updateUser(ServiceCenter serviceCenterModel)
//    {
//    	serviceCenterRepository.save(serviceCenterModel);
//    	return new ResponseModel("user "+serviceCenterModel.getServiceCenterName()+" details updated successfully!!!");
//	}
    
    public ResponseModel deleteServiceCenter(Long serviceCenterID)
    {
        serviceCenterRepository.deleteById(serviceCenterID);
    	return new ResponseModel("user details deleted successfully :(");	
    }
    


    public ServiceCenter updateServiceCenter(ServiceCenter serviceCenter) {
    return this.serviceCenterRepository.save(serviceCenter);
    }

    public ServiceCenter getServiceCenter(Long serviceCenterID) {
        return  this.serviceCenterRepository.findById(serviceCenterID).get();
    }
    
}
