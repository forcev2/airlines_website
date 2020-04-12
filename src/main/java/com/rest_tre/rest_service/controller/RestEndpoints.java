package com.rest_tre.rest_service.controller;

import com.rest_tre.rest_service.db_tables.Flight;
import com.rest_tre.rest_service.db_tables.FlightWithAvSeats;
import com.rest_tre.rest_service.db_tables.Tourist;
import com.rest_tre.rest_service.db_tables.Transaction;
import com.rest_tre.rest_service.repos.FlightRepo;
import com.rest_tre.rest_service.repos.FlightWithAvSeatsRepo;
import com.rest_tre.rest_service.repos.TouristRepo;
import com.rest_tre.rest_service.repos.TransactionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RestEndpoints {
    @Autowired
    FlightRepo flightRepo;

    @Autowired
    TouristRepo touristRepo;

    @Autowired
    TransactionRepo transactionRepo;

    @Autowired
    FlightWithAvSeatsRepo flightWithAvSeatsRepo;

    @GetMapping("/management/getTouristList")
    public List<Tourist> getTouristList(){
        return touristRepo.getAllTourists();
    }

    @GetMapping("/management/getTouristById")
    public Tourist getTouristById(@RequestParam int tourist_id){
        return touristRepo.getTouristById(tourist_id);
    }

    @GetMapping("/management/getFlightsList")
    public List<Flight> getFlightList(){
        return flightRepo.getAllFlights();
    }

    @GetMapping("/management/getTouristsOfFlight")
    public List<Tourist> getTouristsOfFlight(@RequestParam int flight_id){
        return touristRepo.getTouristsOfFlight(flight_id);
    }

    @GetMapping("/management/getTouristFlights")
    public List<Flight> getTouristFlights(@RequestParam int tourist_id){
        return flightRepo.getTouristFlights(tourist_id);
    }

    @PostMapping("/management/addNewFlight")
    public Flight addNewFlight(@RequestBody Flight flight){
        Flight newFlight = flightRepo.addNewFlight(flight.getDeparture_date_and_time(), flight.getArrival_date_and_time(), flight.getNumber_of_seats(), flight.getTicket_price());
        return newFlight;
    }

    @DeleteMapping("/management/deleteFlight")
    public Integer deleteFlight(@RequestParam int flight_id){
        return flightRepo.deleteFlight(flight_id);
    }

    @PostMapping("/management/addNewTourist")
    public Tourist addNewTourist(@RequestBody Tourist tourist){
        Tourist newTourist = touristRepo.addNewTourist(tourist.getName(), tourist.getSurname(), tourist.getGender(), tourist.getNotes(), tourist.getDate_of_birth(), tourist.getCountry());
        return newTourist;
    }

    @DeleteMapping("/management/deleteTourist")
    public Integer deleteTourist(@RequestParam int tourist_id){
        return touristRepo.deleteTourist(tourist_id);
    }

    @PostMapping("/management/addTouristToFlight")
    public Integer addTouristToFlight(@RequestBody Transaction transaction){
        return transactionRepo.addTouristToFlight(transaction.getTourist_id(), transaction.getFlight_id());
    }

    @DeleteMapping("/management/deleteUserFromFlight")
    public Integer deleteUserFromFlight(@RequestParam int tourist_id, @RequestParam int flight_id){
        return transactionRepo.deleteFlightFromUser(tourist_id, flight_id);
    }

    @GetMapping("/management/searchFlightsByDates")
    public List<FlightWithAvSeats> searchFlightsByDates(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime departure,
            @RequestParam  @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime departure2){
        return flightWithAvSeatsRepo.searchFlightsByDates(departure, departure2);
    }

    @GetMapping("/management/getFlightWithAvSeats")
    public FlightWithAvSeats searchFlightsByDates(@RequestParam int flight_id){
        FlightWithAvSeats fs = flightWithAvSeatsRepo.getFlightById(flight_id);
        if(fs.getOccupied_seats() == null){
            fs.setOccupied_seats(0);
        }
        return flightWithAvSeatsRepo.getFlightById(flight_id);
    }

    @GetMapping("/management/searchTourists")
    public List<Tourist> searchTourists(@RequestParam String search){
        return touristRepo.searchTourists(search);
    }

    @GetMapping("/management/searchFlightsByQuery")
    public List<FlightWithAvSeats> searchFlightsByQuery(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime start,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime end,
            @RequestParam Integer ticket_price, @RequestParam  String hour_greater, @RequestParam  String hour_less){
        return flightWithAvSeatsRepo.searchFlightsByQuery(start, end, ticket_price, LocalTime.parse(hour_greater), LocalTime.parse(hour_less));
    }
}
