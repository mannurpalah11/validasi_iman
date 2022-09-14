function enter() {
    var name = document.getElementById("name").value;
    var semester = document.getElementById("semester").value;

    if (name == '') {
        Swal.fire('Isikan nama anda!');
        return false;

    } else if (semester == '') {
        Swal.fire('Isikan semester anda!');
        return false;

    } else if (semester >= 1 && semester <= 2) {
        Swal.fire('Anda Mahasiswa Tahun Pertama, Mahasiswa Baru!');
        return false;

    } else if (semester >= 3 && semester <= 4) {
        Swal.fire('Anda Mahasiswa Tahun Kedua, Semangat!');
        return false;

    } else if (semester >= 5 && semester <= 6) {
        Swal.fire('Anda Mahasiswa Tahun Ketiga, Tetap Semangat!');
        return false;

    } else if (semester >= 7 && semester <= 8) {
        Swal.fire('Anda Mahasiswa Tahun Keempat, Lulus Tahun ini!');
        return false;

    } else if (semester >= 9 && semester <= 99) {
        Swal.fire('Lohh belom lulus kah?');
        return false;

    } else if (semester <= 0) {
        Swal.fire('Maaf, Anda Bukan Mahasiswa di Universitas ini!');
        return false;
    }
}