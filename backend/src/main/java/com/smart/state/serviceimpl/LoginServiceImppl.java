package com.smart.state.serviceimpl;

import com.smart.state.models.Login;
import com.smart.state.repository.LoginRepository;
import com.smart.state.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class LoginServiceImppl implements LoginService {

    @Autowired
    LoginRepository loginRepository;

    @Override
    public Login findUser(String username) {
        return loginRepository.findByUsername(username);
    }
}
