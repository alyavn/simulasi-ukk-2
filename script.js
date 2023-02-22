const formBalok = document.getElementById("formBalok");
const panjang = document.getElementById("panjang");
const lebar = document.getElementById("lebar");
const tinggi = document.getElementById("tinggi");
const container = document.getElementById("container");

const hasilBalok = JSON.parse(localStorage.getItem("balok")) || [];

const addBalok = (panjang, lebar, tinggi, hasil) => {
    hasilBalok.push ({
        panjang,
        lebar,
        tinggi,
        hasil
    })

    localStorage.setItem("balok", JSON.stringify(hasilBalok));

    return {panjang, lebar, tinggi, hasil};
}

const buatBalok = ({panjang, lebar, tinggi, hasil}) => {

    const divBalok = document.createElement("div");
    const panjang1 = document.createElement("p");
    const lebar1 = document.createElement("p");
    const tinggi1 = document.createElement("p");
    const hasil1 = document.createElement("h4");
    const hr = document.createElement("hr");

    panjang1.innerHTML = "panjang : " + panjang;
    lebar1.innerHTML = "lebar : " + lebar;
    tinggi1.innerHTML = "tinggi : " + tinggi;
    hasil1.innerHTML = "Volume balok adalah " + hasil;

    divBalok.append(panjang1, lebar1, tinggi1, hasil1, hr);
    container.appendChild(divBalok);

}

hasilBalok.forEach(buatBalok);

formBalok.onsubmit = e => {
    e.preventDefault()

    const varPanjang = panjang.value;
    const varLebar = lebar.value;
    const varTinggi = tinggi.value;
    const Volume = varPanjang*varLebar*varTinggi;

    const balokBaru = addBalok(
        varPanjang,
        varLebar,
        varTinggi,
        Volume
    )

    buatBalok(balokBaru);

    panjang.value = "";
    lebar.value = "";
    tinggi.value = "";
}