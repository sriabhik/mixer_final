//step 2 after model


package com.mixer_grinder_service.repo;

import com.mixer_grinder_service.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    //spring automatically give implmentation for this
    User findByUsername(String username);

}
