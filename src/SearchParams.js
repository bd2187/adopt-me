import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";

const SearchParams = function() {
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "cat", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
    const [pets, setPets] = useState([]);

    const fetchPets = function() {
        pet.animals({
            location,
            breed,
            type: animal
        })
            .then(function({ animals }) {
                setPets(animals || []);
            })
            .catch(function(err) {
                console.error(err);
            });
    };

    useEffect(
        function() {
            setBreeds([]);
            setBreed("");

            pet.breeds(animal).then(function({ breeds: apiBreeds }) {
                const breedStrings = apiBreeds.map(function({ name }) {
                    return name;
                });

                setBreeds(breedStrings);
            });
        },
        [animal, setBreeds, setBreed]
    );
    return (
        <div className="search-params">
            <form
                onSubmit={evt => {
                    evt.preventDefault();
                    fetchPets();
                }}
            >
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        placeholder="Location"
                        onChange={evt => setLocation(evt.target.value)}
                    />
                </label>
                <AnimalDropdown />
                <BreedDropdown />
                <button>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    );
};

export default SearchParams;
