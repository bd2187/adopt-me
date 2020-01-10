import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = function() {
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "cat", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

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
            <form>
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
        </div>
    );
};

export default SearchParams;
