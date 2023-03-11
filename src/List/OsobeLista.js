import Osoba from'./Osoba';
import  {useState} from 'react';
import AddOsoba from './AddOsoba';

let currentId = 4;

export default function OsobeLista() {
    // Lista u stejtu
    const [korisnici, setKorisnici] = useState([
                                        {id: 1, ime: 'Pero', prezime: 'Perić', godine: 33},
                                        {id: 2, ime: 'Mujo', prezime: 'Mujić', godine: 56},
                                        {id: 3, ime: 'Tomislava', prezime: 'Tomić', godine: 46},
                                        {id: 4, ime: 'Ana', prezime: 'Anić', godine: 22}
                                    ]);

    const handelaChangeIme = (tekst, id) => {
        const noviKorisnici = [...korisnici];
        const korisnikPromjena = noviKorisnici.find(k => k.id === id);
        korisnikPromjena.ime = tekst
        setKorisnici(noviKorisnici);
    }      
    
    const handelaChangePrezime = (tekst, id) => {
        const noviKorisnici = [...korisnici];
        const korisnikPromjena = noviKorisnici.find(k => k.id === id);
        korisnikPromjena.prezime = tekst
        setKorisnici(noviKorisnici);
    } 

    const handelaChangeGodine = (tekst, id) => {
        const noviKorisnici = [...korisnici];
        const korisnikPromjena = noviKorisnici.find(k => k.id === id);
        korisnikPromjena.godine = tekst
        setKorisnici(noviKorisnici);
    } 

    const handleDeleteOsoba = (id) => {
        //obriši osobu
        const noviKorisnici = korisnici.filter((k) => k.id !== id);
        setKorisnici(noviKorisnici);
    }

    const handleAdNew = (newOsoba) => {
        currentId++;
        const korisnikZaDodati = {...newOsoba, id: currentId};

        const newKorisniciLista = [...korisnici];
        newKorisniciLista.push(korisnikZaDodati);
        setKorisnici(newKorisniciLista);
    }

    return (
        <div>
            {korisnici.map((korisnik) => {
                return (


                    <Osoba key={korisnik.id} osoba={korisnik}
                                    onChangeIme={(tekst) => handelaChangeIme(tekst, korisnik.id)}
                                    onChangePrezime={(tekst) => handelaChangePrezime(tekst, korisnik.id)}
                                    onChangeGodine={(tekst) => handelaChangeGodine(tekst, korisnik.id)} 
                                    onDelete={() => handleDeleteOsoba(korisnik.id)}
                                    />

                    // <p key={i}>
                    //     {k.ime} {k.prezime} : {k.godine} 
                    // </p>
                )
            })}

            <AddOsoba onAddNew={handleAdNew} />

            {korisnici.map((k) => {
                return (

                    <p key={k.id}>
                        {k.ime} {k.prezime} : {k.godine} 
                    </p>
                )
            })}
        </div>
    )
}