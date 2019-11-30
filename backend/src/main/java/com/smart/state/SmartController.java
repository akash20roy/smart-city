package com.smart.state;

import com.smart.state.models.Category;
import com.smart.state.models.Login;
import com.smart.state.services.CategoryService;
import com.smart.state.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin("*")
@RestController
public class SmartController {

    @Autowired
    CategoryService categoryService;

    @Autowired
    LoginService loginService;

    @PostMapping
    public HttpStatus save(@RequestBody Category category) {
        try {
            category.setLastModifiedDate(new Date());
            category.setCreatedDate(new Date());
            category.setDeleted(0);
            categoryService.saveCategory(category);
            return HttpStatus.OK;
        } catch (Exception e) {
            System.out.println("Execption :" + e.getMessage());
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
    }

    @GetMapping("/list")
    public List<Category> getList(@RequestParam("categoryType") String categoryType) {
        try {
            return categoryService.findCategories(categoryType);
        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping
    public Category getCategory(@RequestParam("categoryName") String categoryName) {
        try {
            return categoryService.findCategory(categoryName);
        } catch (Exception e) {
            return null;
        }

    }

    @PostMapping("/auth")
    public Login login(@RequestBody Login login) {
        try {
            Login exists = loginService.findUser(login.getUsername());
            System.out.println(exists);
            if (exists != null && exists.getPassword().equals(login.getPassword())) {
                return exists;
            }
        } catch (Exception e) {
            return null;
        }
        return null;
    }

    @PostMapping("/delete")
    public Category delete(@RequestBody Category category){
        try{
            categoryService.deleteCategory(category);
            return  category;
        } catch (Exception e){
            return null;
        }
    }

    @PostMapping("/update")
    public Category update(@RequestBody Category category){
        try{
            return categoryService.updateCategory(category);
        } catch (Exception e){
            return null;
        }
    }

}
