package com.smart.state.models;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;


@Data
@Entity
@ToString(callSuper = true)
public class Login {

    @GeneratedValue(strategy= GenerationType.AUTO)
    @Id
    private Long id;

    @Column(unique = true)
    private String username = "";

    @Column
    private String password = "";

    @Column
    private Date createdDate;

    @Column
    private Boolean deleted;

    @Column
    private Date lastModifiedDate;

    @Column
    private String role;
}
