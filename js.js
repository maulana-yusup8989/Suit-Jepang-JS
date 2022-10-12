var tanya = true;
while (tanya) {
    //menangkap pilihan player
    var player = prompt(`Pilih : kertas, gunting, batu`)

    //menangkap pilihan komputer
    //bilangan random komputer
    var comp = Math.random();
    if (comp < 0.34) {
        comp = `kertas`;
    } else if (comp > 0.34 && comp < 0.67) {
        comp = `gunting`;
    } else {
        comp = `batu`;
    }

    //menentukan rules
    var hasil = ``;
    if (player == comp) {
        hasil = `Seri`
    } else if (player == `kertas`) {
        hasil = (comp == `gunting`) ? `Menang` : `Kalah`;
    } else if (player == `gunting`) {
        hasil = (comp == `kertas`) ? `Menang` : `Kalah`;
    } else {
        hasil = `memasukan pilihan yang salah`;
    }

    //hasil
    alert(`Kamu memilih ` + player + ` & Komputer mililih ` + comp + `\n kamu ` + hasil);

    tanya=confirm(`lagi?`)
}

alert`Terima kasih sudah bermain`;