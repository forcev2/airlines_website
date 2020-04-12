package com.rest_tre.rest_service.db_tables;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name="tourist", schema = "public")
public class Tourist {
    @Id
    Integer tourist_id;

    String name;

    String surname;

    String gender;

    String notes;

    String country;

    LocalDateTime date_of_birth;

    public Tourist(Integer tourist_id, String name, String surname, String gender, String notes, String country, LocalDateTime date_of_birth) {
        this.tourist_id = tourist_id;
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.notes = notes;
        this.country = country;
        this.date_of_birth = date_of_birth;
    }

    public Tourist() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Tourist tourist = (Tourist) o;
        return Objects.equals(tourist_id, tourist.tourist_id) &&
                Objects.equals(name, tourist.name) &&
                Objects.equals(surname, tourist.surname) &&
                Objects.equals(gender, tourist.gender) &&
                Objects.equals(notes, tourist.notes) &&
                Objects.equals(country, tourist.country) &&
                Objects.equals(date_of_birth, tourist.date_of_birth);
    }

    @Override
    public int hashCode() {
        return Objects.hash(tourist_id, name, surname, gender, notes, country, date_of_birth);
    }

    @Override
    public String toString() {
        return "Tourist{" +
                "tourist_id=" + tourist_id +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", gender='" + gender + '\'' +
                ", notes='" + notes + '\'' +
                ", country='" + country + '\'' +
                ", date_of_birth=" + date_of_birth +
                '}';
    }

    public Integer getTourist_id() {
        return tourist_id;
    }

    public void setTourist_id(Integer tourist_id) {
        this.tourist_id = tourist_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public LocalDateTime getDate_of_birth() {
        return date_of_birth;
    }

    public void setDate_of_birth(LocalDateTime date_of_birth) {
        this.date_of_birth = date_of_birth;
    }
}
