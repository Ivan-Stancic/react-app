import Osoba from'./Osoba';
import  {useState} from 'react';

let currentId = 4;

export default function OsobeLista() {
    // Lista u stejtu
    const [korisnici, setKorisnici] = useState([
                                        {id: 1, ime: 'Pero', prezime: 'Perić', godine: 33},
                                        {id: 2, ime: 'Mujo', prezime: 'Mujić', godine: 56},
                                        {id: 3, ime: 'Tomislava', prezime: 'Tomić', godine: 46},
                                        {id: 4, ime: 'Ana', prezime: 'Anić', godine: 22}
                                    ]);

    const handelaChangeIme = (tekst, index) => {
        const noviKorisnici = [...korisnici];
        noviKorisnici[index].ime = tekst;
        setKorisnici(noviKorisnici);
    }      
    
    const handelaChangePrezime = (tekst, index) => {
        const noviKorisnici = [...korisnici];
        noviKorisnici[index].prezime = tekst;
        setKorisnici(noviKorisnici);
    } 

    const handelaChangeGodine = (tekst, index) => {
        const noviKorisnici = [...korisnici];
        noviKorisnici[index].godine = tekst;
        setKorisnici(noviKorisnici);
    } 

    return (
        <div>
            {korisnici.map((korisnik, index) => {
                return (


                    <Osoba key={korisnik.id} osoba={korisnik}
                                    onChangeIme={(tekst) => handelaChangeIme(tekst, index)}
                                    onChangePrezime={(tekst) => handelaChangePrezime(tekst, index)}
                                    onChangeGodine={(tekst) => handelaChangeGodine(tekst, index)} />

                    // <p key={i}>
                    //     {k.ime} {k.prezime} : {k.godine} 
                    // </p>
                )
            })}
        </div>
    )
}