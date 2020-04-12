package com.rest_tre.rest_service.repos;

import com.rest_tre.rest_service.db_tables.Flight;
import com.rest_tre.rest_service.db_tables.FlightWithAvSeats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

public interface FlightWithAvSeatsRepo extends JpaRepository<FlightWithAvSeats, Integer> {
    @Query(value = "SELECT flight_id, departure_date_and_time, arrival_date_and_time, occupied_seats, number_of_seats, ticket_price " +
            "FROM flights NATURAL JOIN seats_av WHERE departure_date_and_time BETWEEN ?1 " +
            "AND ?2"
            , nativeQuery = true)
    List<FlightWithAvSeats> searchFlightsByDates(LocalDateTime departure, LocalDateTime departure2);


    @Query(value = "SELECT f.flight_id, departure_date_and_time, arrival_date_and_time, occupied_seats, number_of_seats, ticket_price " +
            "FROM flights AS f LEFT JOIN seats_av AS s ON f.flight_id=s.flight_id WHERE f.flight_id = ?1"
            , nativeQuery = true)
    FlightWithAvSeats getFlightById(int flight_id);


    @Query(value = "SELECT flight_id, departure_date_and_time, arrival_date_and_time, occupied_seats, number_of_seats, ticket_price " +
            "FROM flights NATURAL JOIN seats_av WHERE departure_date_and_time BETWEEN ?1 " +
            "AND ?2 AND ticket_price < ?3 AND cast(departure_date_and_time as time) BETWEEN ?4 AND ?5"
            , nativeQuery = true)
    List<FlightWithAvSeats> searchFlightsByQuery(LocalDateTime start, LocalDateTime end, Integer ticket_price, LocalTime hour_greater, LocalTime hour_less);


}
