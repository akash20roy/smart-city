package com.smart.state.repository;

import com.smart.state.models.Login;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends CrudRepository<Login, String> {
    Login findByUsername(String name);
}
