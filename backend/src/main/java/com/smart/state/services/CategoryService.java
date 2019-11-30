package com.smart.state.services;


import com.smart.state.models.Category;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CategoryService {

    Category saveCategory(Category category);

    List<Category> findCategories(String categoryType);

    Category findCategory(String name);

    Category deleteCategory(Category category);

    Category updateCategory(Category category);

}
