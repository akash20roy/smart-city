package com.smart.state.repository;

import com.smart.state.models.Category;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends CrudRepository<Category, String> {
    List<Category> findByCategoryType(String categories);
    Category findByName(String name);
}
