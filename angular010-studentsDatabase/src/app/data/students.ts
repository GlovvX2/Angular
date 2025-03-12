import { Student } from "../models/student";
export const students:Student[]=
[
    {id: 1, firstName: "Rafał", lastName: "Sitko", age: 32, skills: ["progrmming"], leader: false, photo: "z1.webp"},
    {id: 2, firstName: "Anna", lastName: "Kowalska", age: 28, skills: ["programming", "design"], leader: true, photo: "z2.webp"},
    {id: 3, firstName: "Piotr", lastName: "Nowak", age: 35, skills: ["management", "sales"], leader: false, photo: "z3.webp"},
    {id: 4, firstName: "Ewa", lastName: "Wiśniewska", age: 40, skills: ["marketing"], leader: true, photo: "z4.webp"},
    {id: 5, firstName: "Tomasz", lastName: "Wójcik", age: 30, skills: ["software development", "networking"], leader: false, photo: "z5.webp"},
    {id: 6, firstName: "Katarzyna", lastName: "Zielinska", age: 25, skills: ["data analysis"], leader: false, photo: "z6.webp"},
    {id: 7, firstName: "Marek", lastName: "Szymański", age: 38, skills: ["strategy", "research"], leader: true, photo: "z7.webp"},
    {id: 8, firstName: "Julia", lastName: "Kaczmarek", age: 29, skills: ["design", "art"], leader: false, photo: "z8.webp"},
    {id: 9, firstName: "Grzegorz", lastName: "Jankowski", age: 33, skills: ["coding", "problem solving"], leader: true, photo: "z9.webp"},
    {id: 10, firstName: "Magdalena", lastName: "Lewandowska", age: 31, skills: ["HR", "recruitment"], leader: false, photo: "z10.webp"}
]