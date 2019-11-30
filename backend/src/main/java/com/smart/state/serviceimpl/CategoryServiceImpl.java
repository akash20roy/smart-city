package com.smart.state.serviceimpl;

import com.smart.state.models.Category;
import com.smart.state.repository.CategoryRepository;
import com.smart.state.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;


@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    @Override
    public Category saveCategory(Category category) {
        try {

            if (null == category.getCreatedDate()) {
                category.setCreatedDate(new Date());
                category.setLastModifiedDate(new Date());
            }
            category.setDeleted(0);
            Category category1 = categoryRepository.save(category);
            return category1;
        } catch (Exception e) {
            return null;
        }

    }

    @Override
    public List<Category> findCategories(String categoryType) {
        try {
            return categoryRepository.findByCategoryType(categoryType);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public Category findCategory(String name) {
        try {
            return categoryRepository.findByName(name);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public Category deleteCategory(Category category){
        try {
            Category category1= categoryRepository.findByName(category.getName());
             categoryRepository.delete(category1);
             return category1;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public Category updateCategory(Category category){
        try {
            Category category1= categoryRepository.findByName(category.getOldName());
            category1.setName(category.getName());
            category1.setLocation(category.getLocation());
            category1.setWebsite(category.getWebsite());
            return categoryRepository.save(category1);
        } catch (Exception e) {
            return null;
        }
    }
}
