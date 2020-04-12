package com.rest_tre.rest_service.db_tables;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Objects;

@Entity
@Table(name="transactions", schema = "public")
public class Transaction {
    @Id
    Integer transation_id;
    int flight_id;
    int tourist_id;

    public Transaction(int transation_id, int flight_id, int tourist_id) {
        this.transation_id = transation_id;
        this.flight_id = flight_id;
        this.tourist_id = tourist_id;
    }

    public Transaction() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Transaction that = (Transaction) o;
        return transation_id == that.transation_id &&
                flight_id == that.flight_id &&
                tourist_id == that.tourist_id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(transation_id, flight_id, tourist_id);
    }

    @Override
    public String toString() {
        return "transactions{" +
                "transation_id=" + transation_id +
                ", flight_id=" + flight_id +
                ", tourist_id=" + tourist_id +
                '}';
    }

    public int getTransation_id() {
        return transation_id;
    }

    public void setTransation_id(int transation_id) {
        this.transation_id = transation_id;
    }

    public int getFlight_id() {
        return flight_id;
    }

    public void setFlight_id(int flight_id) {
        this.flight_id = flight_id;
    }

    public int getTourist_id() {
        return tourist_id;
    }

    public void setTourist_id(int tourist_id) {
        this.tourist_id = tourist_id;
    }
}
