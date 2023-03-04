import Osoba from'./Osoba';

export default function OsobeLista() {
    // Lista u stejtu
    const [korisnici, setKorisnici] = useState([
        {ime: 'Pero', prezime: 'Perić', godine: 33},
        {ime: 'Mujo', prezime: 'Mujić', godine: 56},
        {ime: 'Tomislava', prezime: 'Tomić', godine: 46},
        {ime: 'Ana', prezime: 'Anić', godine: 22}
    ]);

    return (
        <div>
            {korisnici.map((k, i) => {
                return (


                    <Osoba key={i} osoba={k} />

                    // <p key={i}>
                    //     {k.ime} {k.prezime} : {k.godine} 
                    // </p>
                )
            })}
        </div>
    )
}