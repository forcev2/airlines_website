package com.rest_tre.rest_service.repos;

import com.rest_tre.rest_service.db_tables.Tourist;
import com.rest_tre.rest_service.db_tables.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TransactionRepo extends JpaRepository<Transaction, Integer> {


    @Query(value = "DELETE FROM transactions WHERE tourist_id = ?1 AND flight_id = ?2 RETURNING flight_id"
            , nativeQuery = true)
    Integer deleteFlightFromUser(int tourist_id, int flight_id);

    @Query(value = "INSERT INTO transactions(flight_id, tourist_id) VALUES (?2, ?1) RETURNING transaction_id"
            , nativeQuery = true)
    Integer addTouristToFlight(int tourist_id, int flight_id);
}
