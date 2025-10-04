// Main wedding data for the invitation
export const weddingData = {
  // Couple information
  title: "Pernikahan Arga & Agni Jumat 17 Oktober 2025",
  description: "Pernikahan Arga & Agni Jumat 17 Oktober 2025",
  groomName: "I Made Arga Swarsa",
  brideName: "Andrea Maria Agniwijaya",
  groomParents: "Bapak I Wayan Sarmadi & Ibu Indah Yana",
  brideParents: "Bapak Andreas Anang Wijaya & Ibu Yovita Sandra Ekawati",
  // Wedding date and venue
  weddingDate: "2025-10-17T09:00:00",
  weddingDateFormatted: "17 Oktober 2025",
  venue: "Gereja Hati Kudus Yesus Katedral Surabaya",
  address: "Jl. Polisi Istimewa No.15, Keputran, Kec. Tegalsari, Surabaya, Jawa Timur 60265",
  // Open Graph image
  ogImage: "https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwS35RaQ9KszXGCKoardWxuyJFchTp9RtekPAB",
  // Favicon
  favicon: "/favicon.ico"
};

// Background music settings
export const audioConfig = {
  // Music file (choose one or replace with your own file)
  src: "/audio/Sal Priadi - Kita usahakan rumah itu (Official Lyric Video).mp3",
  // Music title to display
  title: "Kita Usahakan Rumah Itu - Sal Priadi",
  // Whether music plays automatically when website opens
  autoplay: true,
  // Whether music repeats continuously
  loop: true
};

// Wedding location and venue settings
export const locationConfig = {
  // Wedding date (format: YYYY-MM-DD)
  date: "2025-10-17",
  // Event time
  time: "09:00 WIB",
  // Venue/building name
  location: "Gereja Hati Kudus Yesus Katedral Surabaya",
  // Full address of the wedding venue
  address: "Jl. Polisi Istimewa No.15, Keputran, Kec. Tegalsari, Surabaya, Jawa Timur 60265",
  // Google Maps link for location (clickable link for directions)
  maps_url: "https://maps.app.goo.gl/byBAm8cSZjw873PM6",
  // Google Maps embed code to display map on website
  maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.282384692975!2d112.73877521477393!3d-7.319573794671846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb91d2ac47ad%3A0x4b1e9e4a4b1e9e4a!2sGereja%20Katedral%20Hati%20Kudus%20Yesus!5e0!3m2!1sid!2sid!4v1635746820004!5m2!1sid!2sid"
};

// Digital gift and bank account settings
export const giftConfig = {
  // Charity message
  charityMessage: "Tanpa mengurangi rasa hormat, kehadiran serta doa restu Bapak/Ibu/Saudara/i adalah karunia terbesar bagi keluarga kami. Apabila Bapak/Ibu berkenan ingin berbagi kebahagiaan dalam bentuk tanda kasih, kami siapkan fitur amplop digital berikut semata demi kemudahan. Sebagian hadiah yang kami terima juga akan kami salurkan untuk kebermanfaatan bersama. Terima kasih atas cinta dan doanya.",
  // Payment link for digital gifts
  paymentLink: "https://app.midtrans.com/payment-links/1757628481403",
  // List of bank accounts for digital envelope/gifts
  banks: [
    {
      // Bank name
      bank: "Bank Central Asia",
      // Account number
      accountNumber: "1912343281",
      // Account holder name (all uppercase)
      accountName: "ANDREA MARIA AGNIWIJAYA",
    },
    {
      bank: "Bank Mandiri",
      accountNumber: "1400018288549",
      accountName: "I MADE ARGA SWARSA",
    }
    // You can add more banks with the same format
  ]
};