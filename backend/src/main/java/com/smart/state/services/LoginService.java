package com.smart.state.services;

import com.smart.state.models.Login;
import org.springframework.stereotype.Service;

@Service
public interface LoginService {
    Login findUser(String username);
}
