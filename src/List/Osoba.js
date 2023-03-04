export default function OsobeLista({osoba}) {

    return(
        <p>
            {osoba.ime} {osoba.prezime} : {osoba.godine} godina
        </p>
    )
}