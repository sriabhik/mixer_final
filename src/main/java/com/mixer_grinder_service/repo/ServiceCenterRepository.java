package com.mixer_grinder_service.repo;



import com.mixer_grinder_service.model.ServiceCenter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
//import java.util.ArrayList;

@Repository
public interface ServiceCenterRepository extends JpaRepository <ServiceCenter,Long> {

//	ArrayList<UserModel> findByUserType(String userType);
}
