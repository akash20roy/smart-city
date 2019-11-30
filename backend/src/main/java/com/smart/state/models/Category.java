package com.smart.state.models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString(callSuper = true)
public class Category {

    private static final long serialVersionUID = -8164686624984696619L;


    @GeneratedValue(strategy= GenerationType.AUTO)
    @Id
    private Long Id;

    @Column(unique = true)
    private String name = "";

    @Column
    private String location = "";

    @Column
    private String website;

    @Column
    private Date createdDate;

    @Column
    private int deleted;

    @Column
    private Date lastModifiedDate;

    @Column
    private String categoryType;

    @Transient
    private String oldName;

}
