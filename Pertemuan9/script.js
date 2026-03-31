//fungsi untuk memuat data dari session storage dan menampilkannya
function displayGuests(){
    const guestListUI = document.getElementById("guestList");
    guestListUI.innerHTML = ''; //Reset tampilan list

    //Mengambil dara session storage, jika kosong buat array baru
    let guests = JSON.parse(sessionStorage.getItem('guests')) || [];

    guests.forEach(guest => {
        let li = document.createElement('li');
        li.textContent = guest;
        guestListUI.appendChild(li);
    });
}

function addGuest(){
    const input = document.getElementById('guestInput');
    const guestName = input.value;
    if(guestName === ''){
        alert('Nama tidak boleh kosong!');
        return;
    }
    //ambil data lama
    let guests = JSON.parse(sessionStorage.getItem('guests')) || [];
    //Tambah data baru ke array
    guests.push(guestName);

    //simpan kembali ke storage dalam bentuk string
    sessionStorage.setItem('guests', JSON.stringify(guests));
    //Bersihkan input dan perbarui tampilan
    input.value = '';
    displayGuests();
}

function clearList(){
    if(confirm('Hapus semua data tamu di sesi ini?')){
        sessionStorage.removeItem('guest');
        displayGuests();
    }
}

window.onload = displayGuests;

