package com.rest_tre.rest_service.repos;

import com.rest_tre.rest_service.db_tables.Flight;
import com.rest_tre.rest_service.db_tables.Tourist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public interface TouristRepo extends JpaRepository<Tourist, Integer> {
    @Query(value = "SELECT * FROM tourist"
            , nativeQuery = true)
    List<Tourist> getAllTourists();

    @Query(value = "SELECT * FROM tourist WHERE tourist_id = ?1"
            , nativeQuery = true)
    Tourist getTouristById(int tourist_id);

    @Query(value = "INSERT INTO tourist(name, surname, gender, notes, date_of_birth, country) VALUES (?1, ?2, ?3, ?4, ?5, ?6) RETURNING *"
            , nativeQuery = true)
    Tourist addNewTourist(String name, String surname, String gender, String notes, LocalDateTime date_of_birth, String country);

    @Query(value = "SELECT tourist_id, name, surname, gender, notes, date_of_birth, country FROM tourist  NATURAL JOIN transactions WHERE flight_id = ?1"
            , nativeQuery = true)
    List<Tourist> getTouristsOfFlight(int flight_id);

    @Query(value = "DELETE FROM tourist WHERE tourist_id = ?1 RETURNING tourist_id"
            , nativeQuery = true)
    Integer deleteTourist(int id);

    @Query(value= "SELECT * FROM tourist WHERE CAST(tourist_id AS VARCHAR(9)) LIKE CONCAT('',?1,'') OR LOWER(name) LIKE CONCAT('%',?1,'%') OR LOWER(surname) LIKE CONCAT('%',?1,'%') OR LOWER(gender) LIKE CONCAT('%',?1,'%') OR LOWER(notes) LIKE CONCAT('%',?1,'%')"
        , nativeQuery = true)
    List<Tourist> searchTourists(String search);

}
