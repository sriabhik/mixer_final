//this repo to save role

package com.mixer_grinder_service.repo;

import com.mixer_grinder_service.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RoleRepository extends JpaRepository<Role,Long> {
}
