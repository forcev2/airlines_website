package com.rest_tre.rest_service.db_tables;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name="flights", schema = "public")
public class Flight {
    @Id
    Integer flight_id;
    LocalDateTime departure_date_and_time;
    LocalDateTime arrival_date_and_time;
    int number_of_seats;
    float ticket_price;

    public Flight(Integer flight_id, LocalDateTime departure_date_and_time, LocalDateTime arrival_date_and_time, int number_of_seats, float ticket_price) {
        this.flight_id = flight_id;
        this.departure_date_and_time = departure_date_and_time;
        this.arrival_date_and_time = arrival_date_and_time;
        this.number_of_seats = number_of_seats;
        this.ticket_price = ticket_price;
    }


    public Flight() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Flight flight = (Flight) o;
        return number_of_seats == flight.number_of_seats &&
                Float.compare(flight.ticket_price, ticket_price) == 0 &&
                Objects.equals(flight_id, flight.flight_id) &&
                Objects.equals(departure_date_and_time, flight.departure_date_and_time) &&
                Objects.equals(arrival_date_and_time, flight.arrival_date_and_time);
    }

    @Override
    public int hashCode() {
        return Objects.hash(flight_id, departure_date_and_time, arrival_date_and_time, number_of_seats, ticket_price);
    }

    @Override
    public String toString() {
        return "flights{" +
                "flight_id=" + flight_id +
                ", departure_date_and_time=" + departure_date_and_time +
                ", arrival_date_and_time=" + arrival_date_and_time +
                ", number_of_seats=" + number_of_seats +
                ", ticket_price=" + ticket_price +
                '}';
    }

    public int getFlight_id() {
        return flight_id;
    }

    public void setFlight_id(int flight_id) {
        this.flight_id = flight_id;
    }

    public void setFlight_id(Integer flight_id) {
        this.flight_id = flight_id;
    }

    public LocalDateTime getDeparture_date_and_time() {
        return departure_date_and_time;
    }

    public void setDeparture_date_and_time(LocalDateTime departure_date_and_time) {
        this.departure_date_and_time = departure_date_and_time;
    }

    public LocalDateTime getArrival_date_and_time() {
        return arrival_date_and_time;
    }

    public void setArrival_date_and_time(LocalDateTime arrival_date_and_time) {
        this.arrival_date_and_time = arrival_date_and_time;
    }

    public int getNumber_of_seats() {
        return number_of_seats;
    }

    public void setNumber_of_seats(int number_of_seats) {
        this.number_of_seats = number_of_seats;
    }

    public float getTicket_price() {
        return ticket_price;
    }

    public void setTicket_price(float ticket_price) {
        this.ticket_price = ticket_price;
    }
}
