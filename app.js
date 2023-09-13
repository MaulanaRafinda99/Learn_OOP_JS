// Asynchronus :

// console.log("First");

// // Delay

// setTimeout(() => {
//     console.log("Second");
// }, 2000);

// function printElement() {
//     console.log("Third");
// }


// Download image dari sebuah url.
const firstUrl = "https://www.first-url.com"; // --> Makan waktu 2 detik.
const secondUrl = "https://www.second-url.com"; // --> Makan waktu 5 detik.
const thirdUrl = "https://www.third-url.com"; // --> Makan waktu 1 detik.

// const download = (delay, url) => {
//     setTimeout(() => {
//         console.log(`Download succesfully form ${url}`);
//     }, delay);
// }

// download(2000, firstUrl);
// download(5000, secondUrl);
// download(1000, thirdUrl);
// Tapi download belum secara berurutan.


// Calback :
// const download = (url, delay, callback) => {
//     // Synchronus 
//     console.log("Download Started...");

//     setInterval(() => {
//         console.log(`Download succesfully from ${url}`);
//         callback()
//     }, delay);
// }

// download(firstUrl,2000,() => {

//     download(secondUrl,5000,() => {

//         download(thirdUrl, 1000,() => {
//             console.log("All download completed... ");
//         })
//     })
// })


// Promise : ES5 JS
const download = (url, delay) => {
    return new Promise((resolve, reject) => {
        // Resolve : Download berhasil.
        // Reject  : Download gagal.

        setTimeout(() => {
            console.log(`Download succesfully from ${url}`);
            resolve();
        }, delay);
    })
}

// download(firstUrl, 2000)
//     .then(() => {
//         return download(secondUrl, 5000)
//     })
//     .then(() => {
//         return download(thirdUrl, 1000)
//     })
//     .then(() => {
//         console.log("All download succesfully.");
//     })

// Asynch await : ES 8

const showDownloads = async () => {
    await download(firstUrl, 2000)
    await download(secondUrl, 5000)
    await download(thirdUrl, 1000)
    console.log("All download succesfully");
}

showDownloads();




