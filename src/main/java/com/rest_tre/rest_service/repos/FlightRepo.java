package com.rest_tre.rest_service.repos;

import com.rest_tre.rest_service.db_tables.Flight;
import com.rest_tre.rest_service.db_tables.Tourist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public interface FlightRepo extends JpaRepository<Flight, Integer> {
    @Query(value = "SELECT * FROM flights"
            , nativeQuery = true)
    List<Flight> getAllFlights();

    @Query(value = "SELECT flight_id, departure_date_and_time, arrival_date_and_time, number_of_seats, ticket_price FROM flights as flight NATURAL JOIN transactions WHERE tourist_id = ?1"
            , nativeQuery = true)
    List<Flight> getTouristFlights(int tourist_id);

    @Query(value = "INSERT INTO flights(departure_date_and_time, arrival_date_and_time, number_of_seats, ticket_price) VALUES (?1, ?2, ?3, ?4) RETURNING *"
            , nativeQuery = true)
    Flight addNewFlight(LocalDateTime departure, LocalDateTime arrival, int number_of_seats, float ticket_price);

    @Query(value = "DELETE FROM flights WHERE flight_id = ?1 RETURNING flight_id"
            , nativeQuery = true)
    Integer deleteFlight(int id);


}
