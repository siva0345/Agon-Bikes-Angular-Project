package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.model.Bike;

@Repository
public interface BikesRepo extends JpaRepository<Bike,Integer> {

	 @Query("select b from Bike b where b.email= :email AND b.password= :password")
	 Bike validateCustLogin(@Param("email") String email, @Param("password") String password);
}
