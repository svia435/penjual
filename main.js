import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
  }
  from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
  
const firebaseConfig = {
  apiKey: "AIzaSyCRlnLBhUHGOF7Lfg9iy_SbfK6coM_7f1U",
  authDomain: "insan-cemerlang-6640c.firebaseapp.com",
  projectId: "insan-cemerlang-6640c",
  storageBucket: "insan-cemerlang-6640c.appspot.com",
  messagingSenderId: "917464283158",
  appId: "1:917464283158:web:3a6179cd71818d68f6dd37"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// fungsi untuk mengambil data dari database dan menampilkan 
export async function ambilDaftarPenjual() {
  const refDokumen = collection(db, "penjual");
  const kueri = query(refDokumen, orderBy("nama"));
  const cuplikanKueri = await getDocs(kueri);

  let hasil = [];
  cuplikanKueri.forEach((dok) => {
    hasil.push({
      id: dok.id,
      nama: dok.data().nama,
      alamat: dok.data().alamat,
      gmail: dok.data().gmail,
      notlpn: dok.data().notlpn,
    });
  });



  return hasil;
} 

export function formatAngka(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
//######################################

//fungsi untuk menambahkan data pembeli
export async function tambahPenjual(nama, alamat, notlpn) {
  try {
    const dokRef = await addDoc(collection(db, 'penjual'), {
      nama: nama,
      alamat: alamat,
      gmail: gmail,
      notlpn: notlpn
    });
    console.log('berhasil menambah penjual ' + dokRef.id);
  } catch (e) {
    console.log('gagal menambah penjual ' + e);
  }
}

export async function hapusPenjual(docId) {
  await deleteDoc(doc(db,"penjual", docId));
//######################################
export async function ubahPenjual(docId, nama, alamat, gmail, noTlpn) {
  await updateDoc(doc(db, "penjual", docId), {
    nama: nama,
    alamat: alamat,
    gmail: gmail,
    notlpn: notlpn
  });
}

 export async function ambilPenjual(docId) {
   const docRef = await doc(db,"penjual", docId);
   const docSnap = await getDoc(decRef);
   
    return await docSnap.data();
 }
 
}