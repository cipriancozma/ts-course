
import React, {ChangeEvent, useState} from 'react'

interface Props {
    name?: string;
    age?: number;
    email?: string;
    getName?: (name: string) => string
}

enum HairColor {
    Blonde = "Your hair is blond",
    Brown = "Cool hair color",
    Pink = "Wow, that it is so cool"
}

interface IUser {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
}

interface Programming {
    name: string;
    awesome: boolean;
}

const typescript: Programming = {
    name: "typescript",
    awesome: true
}

enum Cheese {
    cheddar= "cheddar",
    gouda= "gouda",
    goat= "goat",
    blueMold = "blueMold"
}

const Person = (props: Props) => {

    const [country, setCountry] = useState<string>("");

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)
    }

    const fetchData = (apiUrl: string): Promise<IUser> => {
        return fetch(apiUrl).then(response => response.json())
    }

    const serveCheese = (cheeseType: Cheese, servings: number):void => {
        console.log(`You want ${servings} of ${cheeseType}`)
    }

    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.email}</h1>
            <h1>{props.getName}</h1>
            <input placeholder="Write down your country..." onChange={handleChange} />
            {country}
            {HairColor.Blonde}
        </div>
    )
}

export default Person
