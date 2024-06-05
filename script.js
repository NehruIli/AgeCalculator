// Mendapatkan elemen DOM
const currDate = document.getElementById("currDate");
const dateOfBirth = document.querySelector("#DOB");
const nameInput = document.getElementById("name");
const CalcAge = document.getElementById("CalcAge");
const displayAge = document.getElementById("displayAge");
const Age = document.getElementById("age");

// Mendapatkan tanggal hari ini
const today = new Date();
currDate.innerText = `Today's Date is : ${today.toLocaleDateString('en-US')}`;

// Menambahkan event listener untuk tombol 'CalcAge'
CalcAge.addEventListener("click", () => {
    // Mendapatkan nilai dari input tanggal lahir dan nama
    const birthDate = new Date(dateOfBirth.value);
    const name = nameInput.value;

    // Validasi input
    if (isNaN(birthDate.getTime()) || name.trim() === "") {
        alert("Please enter a valid date of birth and name.");
        return;
    }

    // Menghitung usia
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    // Menghitung jumlah hari hingga ulang tahun berikutnya
    let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const diffTime = nextBirthday - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Menampilkan hasil
    displayAge.style.visibility = "visible";
    Age.innerText = `Hi.. ${name}\nYou are ${age} years old.\nThere are ${diffDays} days until your next birthday.`;
});
