import { FloatingDocuments } from '../../components/shared/FloatingDocuments';
import { ArrowUpRight, MapPin, Mail, Link2, Phone, Instagram, Twitter, Linkedin, Eraser, Droplet, Square, Moon, Sun, ChevronLeft, ChevronRight, ChevronDown, Sparkles, Menu, X, Home, User, Settings, Info, Play, FolderOpen, FileText, ZoomIn } from 'lucide-react';
import React, { lazy, Suspense,  useState, useEffect  } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const data = {
  sidebar: {
    name: "Dhia Najmi Athallah",
    role: "S.Tr.Log., CSSWB",
    quote: "Every great design begins with an even better story.",
    quoteAuthor: "Lorinda Mamo",
    contact: [
      { icon: Link2, label: "Website", value: "dhnaath.com" },
      { icon: MapPin, label: "Address", value: "Indonesia" }
    ],
    socials: [
      { icon: Instagram, label: "Instagram", value: "@dhnaath", color: "bg-gradient-to-tr from-amber-500 via-rose-500 to-fuchsia-600" },
      { icon: Twitter, label: "Twitter", value: "@dhnaath", color: "bg-[#1DA1F2]" },
      { icon: Linkedin, label: "Linkedin", value: "dhnaath", color: "bg-[#0A66C2]" }
    ]
  },
  internships: [
    { year: "", company: "PT. Astra International Tbk", companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/image.webp", role: <><span>Toyota Sales Operation</span><span>(TSO-Auto2000)</span></>, rightTitle: "Asst. Partman", location: "", href: "#", isPresent: false, logoBg: "bg-red-600", logoColor: "text-[#F2F0EF]", initials: "A", 
      details: (
      <>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Jenis Pekerjaan:</p>
        <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Magang (Internship)</p>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Tanggung Jawab Utama:</p>
        <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
          <li>Mengoptimalkan penataan rak penyimpanan suku cadang berdasarkan kode standar agar alur kerja gudang jadi lebih rapi dan efisien.</li>
          <li>Mengelola keakuratan data stok di gudang lewat stock opname berkala dan langsung memperbarui datanya di sistem Warehouse Management System (WMS).</li>
          <li>Mengelola proses inbound dan outbound suku cadang, mulai dari pencocokan Goods Received Note (GRN) dengan Purchase Order (PO), hingga proses picking, packing, labeling, dan distribusi ke area bengkel.</li>
          <li>Melakukan rekonsiliasi data Special Service Tools (SST) dan suku cadang pada sistem, serta memantau pergerakan utilisasi alat oleh teknisi untuk meminimalisir risiko kehilangan sesuai standar operasional.</li>
        </ol>
      
        <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Pergudangan #Persediaan #SukuCadang #Otomotif #Dealer</p>
      </>
    ),
      detailsEn: (
      <>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Type of Employment:</p>
        <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Internship</p>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Key Responsibilities:</p>
        <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
          <li>Optimized the arrangement of spare parts storage racks based on standard codes so that the warehouse workflow became neater and more efficient.</li>
          <li>Managed the accuracy of stock data in the warehouse through regular stock opname and directly updated the data in the Warehouse Management System (WMS).</li>
          <li>Managed the inbound and outbound processes of spare parts, starting from matching the Goods Received Note (GRN) with the Purchase Order (PO), to the picking, packing, labeling, and distribution processes to the workshop area.</li>
          <li>Reconciled Special Service Tools (SST) and spare parts data in the system, and monitored the movement of tool utilization by technicians to minimize the risk of loss according to operational standards.</li>
        </ol>
      
        <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Pergudangan #Persediaan #SukuCadang #Otomotif #Dealer</p>
      </>
    ) },
    { year: "", company: "PT. Pos Indonesia (Persero)", companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/7-1.webp", role: <><span>PosIND</span></>, rightTitle: <><span>Asst. Branch Manager</span><span>Asst. Supervisor</span></>, location: "", href: "#", isPresent: false, logoBg: "bg-orange-500", logoColor: "text-[#F2F0EF]", initials: "P", 
      details: (
      <>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Jenis Pekerjaan:</p>
        <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Magang (Internship)</p>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Tanggung Jawab Utama:</p>
        <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
          <li>Mempersiapkan uang tunai untuk setoran bank, mengisi slip setoran, serta melakukan rekonsiliasi kas harian guna memastikan kesesuaian fisik uang dengan catatan sistem.</li>
          <li>Menutup sistem loket kasir secara harian dengan menyusun laporan backsheet, serta menyelidiki dan menyelesaikan apabila terjadi selisih dana.</li>
          <li>Memproses dan mencatat pembayaran berbagai tagihan pelanggan melalui sistem PosPay Loket serta menerbitkan bukti transaksi/tanda terima yang sah.</li>
          <li>Memeriksa keaslian dan kelengkapan dokumen identitas pelanggan (KTP/KK) untuk keperluan reaktivasi akun atau rekening tidak aktif.</li>
          <li>Memverifikasi dokumen penyaluran Bantuan Sosial Tunai (BST) Kemensos, mencairkan dana sesuai prosedur, serta menjaga jejak audit dokumen bersama Branch Manager.</li>
          <li>Melaksanakan penyortiran, pembongkaran muatan kiriman, serta pencetakan resi dan label pengiriman secara mandiri sesuai dengan standar operasional yang ditetapkan.</li>
        </ol>
      
        <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#BUMN #Danantara #Administrasi #Operasional #Marketing</p>
      </>
    ),
      detailsEn: (
      <>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Type of Employment:</p>
        <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Internship</p>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Key Responsibilities:</p>
        <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
          <li>Prepared cash for bank deposits, filled out deposit slips, and conducted daily cash reconciliation to ensure physical cash matched system records.</li>
          <li>Closed the cashier counter system daily by preparing backsheet reports, and investigated and resolved any fund discrepancies.</li>
          <li>Processed and recorded various customer bill payments through the PosPay Loket system and issued valid transaction receipts.</li>
          <li>Verified the authenticity and completeness of customer identity documents (ID card/Family Card) for account reactivation or dormant accounts.</li>
          <li>Verified documents for the distribution of Ministry of Social Affairs Cash Social Assistance (BST), disbursed funds according to procedures, and maintained the document audit trail with the Branch Manager.</li>
          <li>Carried out sorting, unloading of shipments, and printed receipts and shipping labels according to standards.</li>
        </ol>
      
        <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#BUMN #Danantara #Administrasi #Operasional #Marketing</p>
      </>
    ) },
    { year: "", company: "KSP Nusantara - KopnusPos", companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/5-1.webp", role: <></>, rightTitle: <><span>Account Officer Lending</span><span>Agen Oren by KOPNUS</span></>, location: "", href: "#", isPresent: false, logoBg: "bg-blue-500", logoColor: "text-[#F2F0EF]", initials: "K", 
      details: (
      <>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Jenis Pekerjaan:</p>
        <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Magang (Internship) / Mandiri, Berbasis Komisi (Freelancer)</p>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Tanggung Jawab Utama:</p>
        <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
          <li>Memasarkan produk pinjaman pensiun (PNS, TNI, Polri) secara aktif melalui pendekatan langsung (door-to-door), menggunakan brosur cetak, serta memakai pesan siaran via WhatsApp.</li>
          <li>Mengelola seluruh siklus proses kredit mulai dari analisis kebutuhan klien, verifikasi dokumen, koordinasi asuransi, hingga pencairan dana, serta berkoordinasi dengan staf PosIND dan kantor cabang.</li>
          <li>Membangun hubungan baik dengan komunitas pensiunan, mitra juru bayar lain, dan pegawai pemerintah aktif, sekaligus memberikan edukasi terkait regulasi terbaru serta penggunaan aplikasi penunjang (Taspen/Asabri).</li>
          <li>Menyusun laporan kunjungan harian (pipeline) dan hasil prospek secara rutin sebagai bahan evaluasi kerja, serta menangani keluhan dan masukan klien dengan solutif.</li>
          <li>Melaksanakan tugas pemasaran dan akuisisi klien yang setara dengan peran Account Officer Lending secara mandiri.</li>
        </ol>
      
        <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Keuangan #Koperasi #Marketing #Sales #PembiayaanPensiun</p>
      </>
    ),
      detailsEn: (
      <>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Type of Employment:</p>
        <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Internship / Independent, Commission-Based (Freelancer)</p>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Key Responsibilities:</p>
        <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
          <li>Actively marketed pension loan products (Civil Servants, Military, Police) through a direct approach (door-to-door), using printed brochures, and utilizing broadcast messages via WhatsApp.</li>
          <li>Managed the entire credit process cycle starting from client needs analysis, document verification, insurance coordination, up to fund disbursement, and coordinated with PosIND staff and the branch office.</li>
          <li>Built good relationships with the pensioner community, other paying partners, and active government employees, while providing education regarding the latest regulations and the use of supporting applications (Taspen/Asabri).</li>
          <li>Prepared daily visit reports (pipeline) and prospect results regularly as material for work evaluation, and handled client complaints and feedback correctively.</li>
          <li>Performed marketing and client acquisition tasks equivalent to the role of an Account Officer Lending independently.</li>
        </ol>
      
        <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Keuangan #Koperasi #Marketing #Sales #PembiayaanPensiun</p>
      </>
    ) }
  ],
  remoteWork: [
    { year: "Agustus 2024", company: "GAO Tek Inc.", companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/3-1.webp", role: <><span>Global Advanced Operations</span></>, rightTitle: "Human Resources", location: "", href: "#", isPresent: false, logoBg: "bg-blue-600", logoColor: "text-[#F2F0EF]", initials: "G", 
      details: (
      <>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Jenis Pekerjaan:</p>
        <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Magang Daring Tidak Berbayar (Internship)</p>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Tanggung Jawab Utama:</p>
        <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
          <li>Melakukan screening awal terhadap resume pelamar, menyaring kandidat potensial (shortlisting), serta mengelola proses tindak lanjut hasil seleksi.</li>
          <li>Mengoptimalkan publikasi lowongan kerja (job posting) dan materi promosi rekrutmen secara berkala di berbagai platform profesional seperti LinkedIn dan Glints.</li>
          <li>Mengatur jadwal pertemuan, mengirimkan undangan atau pengingat, serta menyiapkan agenda diskusi dengan kandidat.</li>
          <li>Menangani seluruh jalur komunikasi internal maupun eksternal melalui MS Teams, Outlook, Skype, dan LinkedIn untuk memastikan penyampaian informasi berjalan jelas dan tepat waktu.</li>
          <li>Bekerja sama dengan rekan tim dan Squad Leader (SL) dan Assistant Squad Leader (ASL) dalam memastikan akurasi dan pelaksanaan tugas.</li>
        </ol>
      
        <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Pelatihan #Promosi #Penjualan #UnpaidInternship #Remote</p>
      </>
    ),
      detailsEn: (
      <>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Type of Employment:</p>
        <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Unpaid Remote Internship</p>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Key Responsibilities:</p>
        <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
          <li>Conducted initial screening of applicant resumes, filtered potential candidates (shortlisting), and managed the follow-up process of selection results.</li>
          <li>Optimized the publication of job vacancies (job posting) and recruitment promotion materials periodically on various professional platforms such as LinkedIn and Glints.</li>
          <li>Arranged meeting schedules, sent invitations or reminders, and prepared discussion agendas with candidates.</li>
          <li>Handled all internal and external communication channels through MS Teams, Outlook, Skype, and LinkedIn to ensure the delivery of information ran clearly and on time.</li>
          <li>Collaborated with team members and Squad Leaders (SL) and Assistant Squad Leaders (ASL) to ensure accuracy and task execution.</li>
        </ol>
      
        <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Pelatihan #Promosi #Penjualan #UnpaidInternship #Remote</p>
      </>
    ) },
    { year: "September 2024", company: "GOVOKASi Indonesia", companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/6-1.webp", role: <></>, rightTitle: "Project Asst.", location: "", href: "#", isPresent: false, logoBg: "bg-emerald-600", logoColor: "text-[#F2F0EF]", initials: "G", 
      details: (
      <>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Jenis Pekerjaan:</p>
        <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Magang Daring Tidak Berbayar (Internship)</p>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Tanggung Jawab Utama:</p>
        <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
          <li>Melakukan riset pasar dan audiens untuk mendukung posisi perusahaan, penyampaian pesan dan tujuan, dan pemilihan program kegiatan.</li>
          <li>Mengembangkan strategi pemasaran untuk rencana kegiatan program berdasarkan temuan riset dan hasil diskusi tim.</li>
          <li>Mendukung koordinasi tim yang beranggotakan mahasiswa dari kampus lain pada fase awal program, termasuk pembagian tugas dan penjadwalan presentasi di hadapan para mentor dan tim lain.</li>
        </ol>
      
        <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Mentorship #Pelatihan #Pengembangan #RancangProgram</p>
      </>
    ),
      detailsEn: (
      <>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Type of Employment:</p>
        <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Unpaid Remote Internship</p>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Key Responsibilities:</p>
        <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
          <li>Conducted market and audience research to support the company's position, message delivery and goals, and the selection of activity programs.</li>
          <li>Developed marketing strategies for program activity plans based on research findings and team discussion results.</li>
          <li>Supported the coordination of a team of students from other campuses in the early phases of the program, including dividing tasks and scheduling presentations before mentors and other teams.</li>
        </ol>
      
        <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Mentorship #Pelatihan #Pengembangan #RancangProgram</p>
      </>
    ) },
    { year: "", company: "Huachuang Singapore Pte. Ltd", companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/4-1.webp", role: <><span>TISCE</span></>, rightTitle: "Import – Export", location: "", href: "#", isPresent: false, logoBg: "bg-orange-600", logoColor: "text-[#F2F0EF]", initials: "H", 
      details: (
      <>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Jenis Pekerjaan:</p>
        <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Mandiri, Berbasis Komisi, Tanpa Gaji Pokok (Freelancer)</p>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Tanggung Jawab Utama:</p>
        <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
          <li>Mencari dan menjaring calon pembeli lokal yang membutuhkan pasokan barang atau mesin industri dari China.</li>
          <li>Mengumpulkan dan memverifikasi spesifikasi kebutuhan barang serta detail kontak pembeli guna menyusun dokumen Request for Quotation (RFQ) yang akurat sebelum diajukan ke platform.</li>
          <li>Memantau respons dari pemasok dan menindaklanjuti penawaran kepada calon pembeli sesuai standar yang berlaku untuk mendukung kelancaran proses pengadaan.</li>
        </ol>
      
        <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#SourcingPlatform #GlobalPartnership #RFQ #B2B #Freelance</p>
      </>
    ),
      detailsEn: (
      <>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Type of Employment:</p>
        <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Independent, Commission-Based, No Basic Salary (Freelancer)</p>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Key Responsibilities:</p>
        <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
          <li>Search for and network with local prospective buyers who need the supply of industrial goods or machinery from China.</li>
          <li>Collect and verify goods specification needs and buyer contact details to compile accurate Request for Quotation (RFQ) documents before submitting them to the platform.</li>
          <li>Monitor responses from suppliers and follow up on offers to prospective buyers according to applicable standards to support the smooth procurement process.</li>
        </ol>
      
        <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#SourcingPlatform #GlobalPartnership #RFQ #B2B #Freelance</p>
      </>
    ) }
  ],
  freelanceWork: [
    { year: "2024 — 2026", company: "Prudential", companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/2-1.webp", role: <><span>Life Assurance (PLA)</span><span>Sharia Life Assurance (PSLA)</span></>, rightTitle: "Life Insurance Agent", location: "", href: "#", isPresent: false, logoBg: "bg-red-600", logoColor: "text-[#F2F0EF]", initials: "P", 
      details: (
      <>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Jenis Pekerjaan:</p>
        <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Mandiri, Berbasis Komisi, Tanpa Gaji Pokok (Freelancer)</p>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Tanggung Jawab Utama:</p>
        <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
          <li>Menganalisis profil risiko, tujuan keuangan, dan kemampuan premi calon nasabah untuk merancang proposal ilustrasi asuransi (konvensional/syariah) yang sesuai kebutuhan.</li>
          <li>Membimbing calon nasabah dalam penyiapan dokumen SPAJ, menjelaskan hak-kewajiban secara transparan, serta mengawal proses pengajuan proposal.</li>
          <li>Berkoordinasi aktif dengan tim internal serta rutin mengikuti pelatihan, seminar, dan ujian sertifikasi produk baru guna menjaga pemahaman materi tetap aktual.</li>
          <li>Menjaga kepatuhan terhadap kode etik keagenan berdasarkan lisensi AAJI-AASI, serta memastikan seluruh proses layanan sejalan dengan regulasi OJK.</li>
          <li>Memantau perkembangan tren produk asuransi serta dinamika pasar ekonomi untuk memberikan edukasi literasi keuangan yang tepat kepada masyarakat.</li>
        </ol>
      
        <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Keuangan #AsuransiJiwa #AsuransiKesehatan #TakafulKeluarga</p>
      </>
    ),
      detailsEn: (
      <>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Type of Employment:</p>
        <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Independent, Commission-Based, No Basic Salary (Freelancer)</p>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Key Responsibilities:</p>
        <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
          <li>Analyzed prospective clients' risk profiles, financial goals, and premium capabilities to design tailored insurance illustration proposals (conventional/sharia).</li>
          <li>Guided prospective clients in preparing SPAJ documents, explaining rights and obligations transparently, and overseeing the proposal submission process.</li>
          <li>Coordinated actively with the internal team and regularly attended training, seminars, and new product certification exams to keep knowledge up-to-date.</li>
          <li>Maintained compliance with the agency code of ethics based on AAJI-AASI licenses, ensuring all service processes aligned with OJK regulations.</li>
          <li>Monitored trends in insurance products and economic market dynamics to provide appropriate financial literacy education to the public.</li>
        </ol>
      
        <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Keuangan #AsuransiJiwa #AsuransiKesehatan #TakafulKeluarga</p>
      </>
    ) },
    { year: "", company: "PT. Mandiri Utama Finance", companyLogo: "https://dhnaath.com/wp-content/uploads/2026/08/image-1.webp", role: <><span>MUF</span></>, rightTitle: "Mitra MUF Dana", location: "", href: "#", isPresent: false, logoBg: "bg-blue-600", logoColor: "text-[#F2F0EF]", initials: "M", 
      details: (
      <>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Jenis Pekerjaan:</p>
        <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Mandiri, Berbasis Komisi, Tanpa Gaji, Tanpa Absensi (Freelancer)</p>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Tanggung Jawab Utama:</p>
        <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
          <li>Memasarkan produk pinjaman dana tunai dengan jaminan BPKB kendaraan, baik untuk roda dua (motor) maupun roda empat (mobil).</li>
          <li>Menyesuaikan produk pembiayaan yang akan diajukan agar sejalan dengan kebutuhan serta kemampuan finansial calon klien.</li>
          <li>Mendampingi klien dalam proses pengajuan, mulai dari melengkapi berkas dokumen hingga dana berhasil dicairkan.</li>
          <li>Berkoordinasi secara aktif dengan tim MUF untuk memastikan proses administrasi dan pengajuan berjalan sesuai standar operasional yang berlaku.</li>
        </ol>
      
        <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#BUMN #Keuangan #Leasing #PembiayaanKendaraan #Sales</p>
      </>
    ),
      detailsEn: (
      <>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Type of Employment:</p>
        <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Independent, Commission-Based, No Salary, No Attendance (Freelancer)</p>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Key Responsibilities:</p>
        <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
          <li>Marketed cash loan products with vehicle BPKB collateral, both for two-wheelers (motorcycles) and four-wheelers (cars).</li>
          <li>Adjusted the financing products to be proposed to align with the needs and financial capabilities of prospective clients.</li>
          <li>Assisted clients in the application process, starting from completing document files until the funds were successfully disbursed.</li>
          <li>Coordinated actively with the MUF team to ensure the administrative and application processes ran according to applicable operational standards.</li>
        </ol>
      
        <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#BUMN #Keuangan #Leasing #PembiayaanKendaraan #Sales</p>
      </>
    ) },
    { year: "", company: "Grab Teknologi Indonesia", role: <><span>Grab</span></>, rightTitle: "Online Driver", location: "", href: "#", isPresent: false, logoBg: "bg-green-600", logoColor: "text-[#F2F0EF]", initials: "G", 
      details: (
      <>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Jenis Pekerjaan:</p>
        <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Mandiri, Tanpa Jam Operasional dan Wilayah Tetap (Freelancer)</p>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Tanggung Jawab Utama:</p>
        <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
          <li>Melayani transportasi penumpang serta distribusi makanan dan paket barang dengan memastikan keamanan, kebersihan, dan ketepatan waktu hingga ke lokasi tujuan.</li>
          <li>Berkoordinasi secara aktif dengan pelanggan, mitra restoran, dan pihak keamanan/parkir demi kelancaran proses ambil-antar pesanan.</li>
          <li>Mengatur rute perjalanan secara mandiri dan mengelola waktu secara efisien untuk memaksimalkan performa akun serta mencapai target harian.</li>
          <li>Mematuhi standar operasional dengan menggunakan atribut resmi serta merawat kondisi kendaraan secara rutin guna meminimalisir kendala teknis di jalan.</li>
        </ol>
      
        <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Transportasi #JasaLayanan #Kurir-Ojek #Pesan-Antar #Aplikasi</p>
      </>
    ),
      detailsEn: (
      <>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Type of Employment:</p>
        <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Independent, No Fixed Operating Hours and Area (Freelancer)</p>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Key Responsibilities:</p>
        <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
          <li>Served passenger transportation and the distribution of food and goods packages by ensuring safety, cleanliness, and punctuality to the destination.</li>
          <li>Coordinated actively with customers, restaurant partners, and security/parking parties for the smooth pick-up and delivery process of orders.</li>
          <li>Arranged travel routes independently and managed time efficiently to maximize account performance and achieve daily targets.</li>
          <li>Complied with operational standards by using official attributes and maintaining vehicle conditions regularly to minimize technical obstacles on the road.</li>
        </ol>
      
        <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Transportasi #JasaLayanan #Kurir-Ojek #Pesan-Antar #Aplikasi</p>
      </>
    ) },
    { year: "", company: "Shopee Internasional Indonesia", role: <><span>Shopee</span></>, rightTitle: "Online Driver", location: "", href: "#", isPresent: false, logoBg: "bg-orange-500", logoColor: "text-[#F2F0EF]", initials: "S", 
      details: (
      <>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Jenis Pekerjaan:</p>
        <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Mandiri, Tanpa Jam Operasional dan Wilayah Tetap (Freelancer)</p>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Tanggung Jawab Utama:</p>
        <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
          <li>Melayani transportasi penumpang serta distribusi makanan dan paket barang dengan memastikan keamanan, kebersihan, dan ketepatan waktu hingga ke lokasi tujuan.</li>
          <li>Berkoordinasi secara aktif dengan pelanggan, mitra restoran, dan pihak keamanan/parkir demi kelancaran proses ambil-antar pesanan.</li>
          <li>Mengatur rute perjalanan secara mandiri dan mengelola waktu secara efisien untuk memaksimalkan performa akun serta mencapai target harian.</li>
          <li>Mematuhi standar operasional dengan menggunakan atribut resmi serta merawat kondisi kendaraan secara rutin guna meminimalisir kendala teknis di jalan.</li>
        </ol>
      
        <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Transportasi #JasaLayanan #Kurir-Ojek #Pesan-Antar #Aplikasi</p>
      </>
    ),
      detailsEn: (
      <>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Type of Employment:</p>
        <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Independent, No Fixed Operating Hours and Area (Freelancer)</p>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Key Responsibilities:</p>
        <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
          <li>Served passenger transportation and the distribution of food and goods packages by ensuring safety, cleanliness, and punctuality to the destination.</li>
          <li>Coordinated actively with customers, restaurant partners, and security/parking parties for the smooth pick-up and delivery process of orders.</li>
          <li>Arranged travel routes independently and managed time efficiently to maximize account performance and achieve daily targets.</li>
          <li>Complied with operational standards by using official attributes and maintaining vehicle conditions regularly to minimize technical obstacles on the road.</li>
        </ol>
      
        <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Transportasi #JasaLayanan #Kurir-Ojek #Pesan-Antar #Aplikasi</p>
      </>
    ) },
    { year: "", company: "Teknologi Perdana Indonesia", role: <><span>Maxim</span></>, rightTitle: "Online Driver", location: "", href: "#", isPresent: false, logoBg: "bg-yellow-500", logoColor: "text-[#F2F0EF]", initials: "M", 
      details: (
      <>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Jenis Pekerjaan:</p>
        <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Mandiri, Tanpa Jam Operasional dan Wilayah Tetap (Freelancer)</p>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Tanggung Jawab Utama:</p>
        <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
          <li>Melayani transportasi penumpang serta distribusi makanan dan paket barang dengan memastikan keamanan, kebersihan, dan ketepatan waktu hingga ke lokasi tujuan.</li>
          <li>Berkoordinasi secara aktif dengan pelanggan, mitra restoran, dan pihak keamanan/parkir demi kelancaran proses ambil-antar pesanan.</li>
          <li>Mengatur rute perjalanan secara mandiri dan mengelola waktu secara efisien untuk memaksimalkan performa akun serta mencapai target harian.</li>
          <li>Mematuhi standar operasional dengan menggunakan atribut resmi serta merawat kondisi kendaraan secara rutin guna meminimalisir kendala teknis di jalan.</li>
        </ol>
      
        <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Transportasi #JasaLayanan #Kurir-Ojek #Pesan-Antar #Aplikasi</p>
      </>
    ),
      detailsEn: (
      <>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-1 text-[0.8125rem] font-calibri">Type of Employment:</p>
        <p className="text-[#3D3D3D] dark:text-[#F2F0EF] mb-4 text-[0.84375rem] sm:text-[0.875rem] font-calibri">Independent, No Fixed Operating Hours and Area (Freelancer)</p>
        <p className="font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] mb-2 text-[0.8125rem] font-calibri">Key Responsibilities:</p>
        <ol className="list-decimal list-outside ml-4 space-y-1 text-[#3D3D3D] dark:text-[#F2F0EF] text-justify text-[0.84375rem] sm:text-[0.875rem] pb-2 font-calibri">
          <li>Served passenger transportation and the distribution of food and goods packages by ensuring safety, cleanliness, and punctuality to the destination.</li>
          <li>Coordinated actively with customers, restaurant partners, and security/parking parties for the smooth pick-up and delivery process of orders.</li>
          <li>Arranged travel routes independently and managed time efficiently to maximize account performance and achieve daily targets.</li>
          <li>Complied with operational standards by using official attributes and maintaining vehicle conditions regularly to minimize technical obstacles on the road.</li>
        </ol>
      
        <p className="mt-4 text-[0.8125rem] sm:text-[0.84375rem] text-blue-600 dark:text-blue-400 font-medium font-calibri">#Transportasi #JasaLayanan #Kurir-Ojek #Pesan-Antar #Aplikasi</p>
      </>
    ) }
  ],
  organizations: [
    { year: "2021 — 2022", role: "Radio dan Pers Kampus", company: "ULBI", location: "Bandung", href: "#" },
    { year: "2020", role: "Himpunan Mahasiswa Pencinta Unggas", company: "USK", location: "Banda Aceh", href: "#" },
    { year: "2017 — 2019", role: "Mading dan Pers", company: "SMA 8 Pontianak", location: "Pontianak", href: "#" }
  ],
  writing: [
    { year: "2023", title: "Exploring the Intersection of Design and Technology", subtitle: "Collaboration with Mia, Leo, and Ava", href: "#" },
    { year: "2023", title: "Understanding Design Hierarchies", subtitle: "Worked alongside Alex", href: "#" },
    { year: "2020", title: "The Art of User-Centered Design", href: "#" },
    { year: "2019", title: "Navigating Design Challenges", href: "#" },
    { year: "2018", title: "Crafting Engaging User Experiences", href: "#" }
  ],
  certificate: [
    { 
      year: "2024", 
      title: "Six Sigma (64/80) White Belt", 
      subtitle: "The Council for Six Sigma Certification (CSSC)", 
      location: "Online", 
      href: "https://drive.google.com/file/d/1B_SkKayCigdyRwtSluJiheSUpkyn0E3b/view?usp=sharing" 
    },
    { 
      year: "2024", 
      title: "Lean Six Sigma (68/80) White Belt", 
      subtitle: "The Council for Six Sigma Certification (CSSC)", 
      location: "Online", 
      href: "https://drive.google.com/file/d/1Sx60x5R7G0eTpk6tOOIi1OYLlozMuZpi/view?usp=drive_link" 
    },
    { 
      year: "2024", 
      title: "SAP01 SAP Overview", 
      subtitle: "Edugate Indonesia • ERP & Digital Business System", 
      location: "Online", 
      href: "https://drive.google.com/file/d/1Ypt10VSW6fdkUm3HKLJBodaQpTSl1OcJ/view?usp=sharing" 
    },
    { 
      year: "2023", 
      title: "CEFR B1 Intermediate (302)", 
      subtitle: "British Council • English Proficiency Assessment", 
      location: "Online", 
      href: "#" 
    },
    { 
      year: "2025", 
      title: "Dasar Procurement & Purchasing di Perusahaan", 
      subtitle: "Ioda Academy • Recorded Workshop Praktikal Berprojek", 
      location: "Online", 
      href: "https://drive.google.com/file/d/1hEQUPywU-ce3x1P-zyiUre65oYf4bZhV/view?usp=drive_link" 
    }
  ],
  license: [
    { 
      year: "2024 – 2026", 
      title: "Sertifikasi Keagenan Asuransi Jiwa Syariah", 
      subtitle: "Asosiasi Asuransi Syariah Indonesia (AASI) • Lisensi Tenaga Pemasar Syariah (No. 3321012070258823)", 
      location: "Indonesia", 
      href: "#" 
    },
    { 
      year: "2024 – 2026", 
      title: "Sertifikasi Keagenan Asuransi Jiwa", 
      subtitle: "Asosiasi Asuransi Jiwa Indonesia (AAJI) • Lisensi Tenaga Pemasar (No. 15270228)", 
      location: "Indonesia", 
      href: "#" 
    }
  ],
  formalSchool: [
    { year: "2017 – 2020", title: "SMA Negeri 8 Pontianak", subtitle: "MIPA (NPSN: 30105204 | Akreditasi A)", location: "Pontianak", href: "https://sekolah.data.kemendikdasmen.go.id/profil-sekolah/04531D4B-7A11-4B2D-B063-6664362CE129" },
    { year: "2014 – 2017", title: "SMP Negeri 1 Batang Lupar", subtitle: "NPSN: 30102940 | Akreditasi B", location: "Kapuas Hulu", href: "https://sekolah.data.kemendikdasmen.go.id/profil-sekolah/F09BB109-30F5-E011-90C6-F9C4ACF3E380" },
    { year: "2008 – 2014", title: "SD Negeri 01 Lanjak", subtitle: "NPSN: 30103040 | Akreditasi A", location: "Kapuas Hulu", href: "https://sekolah.data.kemendikdasmen.go.id/profil-sekolah/903B0F09-30F5-E011-9EB4-8B25DB501A9D" }
  ],
  tertiaryDegree: [
    { year: "2021 – 2025", title: "Sarjana Terapan Logistik (S.Tr.Log.)", subtitle: "Universitas Logistik dan Bisnis Internasional (ULBI) • PDDikti: 041104 (Akreditasi B / Baik Sekali)", location: "Bandung", href: "https://pddikti.kemdiktisaintek.go.id/detail-prodi/ODloXNDeYp9ggYjIE1_rHnAoLqKGWJDhO3uFfP-zRjprQ4PjJGEX5QcL9E1w28bgTBt3vQ==" }
  ],
  workshop: [
    { year: "2025", title: "Dasar Procurement & Purchasing di Perusahaan", subtitle: "Ioda Academy • Recorded Workshop Praktikal Berprojek", location: "Online", href: "https://drive.google.com/file/d/1hEQUPywU-ce3x1P-zyiUre65oYf4bZhV/view?usp=drive_link" },
    { year: "2024", title: "Six Sigma (64/80) White Belt", subtitle: "The Council for Six Sigma Certification (CSSC)", location: "Online", href: "https://drive.google.com/file/d/1B_SkKayCigdyRwtSluJiheSUpkyn0E3b/view?usp=sharing" },
    { year: "2024", title: "Lean Six Sigma (68/80) White Belt", subtitle: "The Council for Six Sigma Certification (CSSC)", location: "Online", href: "https://drive.google.com/file/d/1Sx60x5R7G0eTpk6tOOIi1OYLlozMuZpi/view?usp=drive_link" },
    { year: "2024 – 2026", title: "Sertifikasi Keagenan Asuransi Jiwa Syariah", subtitle: "Asosiasi Asuransi Syariah Indonesia (AASI) • Lisensi Wajib Tenaga Pemasar Syariah", location: "Indonesia", href: "#" },
    { year: "2024 – 2026", title: "Sertifikasi Keagenan Asuransi Jiwa", subtitle: "Asosiasi Asuransi Jiwa Indonesia (AAJI) • Lisensi Wajib Tenaga Pemasar", location: "Indonesia", href: "#" },
    { year: "2024", title: "SAP01 SAP Overview", subtitle: "Edugate Indonesia • ERP & Digital Business System", location: "Online", href: "https://drive.google.com/file/d/1Ypt10VSW6fdkUm3HKLJBodaQpTSl1OcJ/view?usp=sharing" },
    { year: "2023", title: "CEFR B1 Intermediate (302)", subtitle: "British Council • English Proficiency Assessment", location: "Online", href: "#" }
  ]
};

const Section = ({ children, noGap = false }: { children: React.ReactNode, noGap?: boolean }) => (
  <section className="mb-8">
    <div className={`flex flex-col ${noGap ? '' : 'gap-6'}`}>
      {children}
    </div>
  </section>
);

const WorkExperienceItem = ({ year, role, company, location, rightTitle, href, isPresent, logoBg, logoColor, initials, companyLogo, presentText = "Present", details, detailsEn, lang = 'id', isExpanded, onToggle }: any) => {
  return (
    <div className={`group flex flex-col p-2.5 sm:p-4 rounded-lg sm:rounded-xl mb-2.5 transition-colors cursor-pointer ${isPresent ? 'bg-[#EAE8E6] dark:bg-[#737171] hover:bg-[#E0DDDB] dark:hover:bg-[#686666]' : 'bg-transparent hover:bg-[#EAE8E6] dark:hover:bg-[#737171]'}`} onClick={onToggle}>
      <div className="flex items-center w-full">
        {/* Content */}
        <div className="flex flex-1 flex-col sm:flex-row sm:justify-between gap-1.5 sm:gap-0 min-w-0">
          <div className="flex flex-col justify-center py-0.5 sm:py-1 min-w-0">
            <span className="text-[0.825rem] sm:text-[1rem] font-medium text-[#3D3D3D] dark:text-[#F2F0EF] mb-0.5 leading-snug">{company}</span>
            <span className="text-[0.7rem] sm:text-[0.8125rem] text-[#3D3D3D]/80 dark:text-[#F2F0EF]/80 flex flex-col gap-0.5 leading-tight">{role}</span>
          </div>
          
          <div className="flex flex-col sm:items-end justify-center shrink-0">
            {rightTitle && <span className="font-medium text-[0.725rem] sm:text-[0.875rem] text-[#3D3D3D]/90 dark:text-[#F2F0EF]/90 mb-0.5 sm:mb-1 flex flex-col sm:items-end gap-0.5">{rightTitle}</span>}
            {isPresent ? (
              <span className="bg-[#E6E4E3] dark:bg-[#8C8B8B] text-[#3D3D3D] dark:text-[#F2F0EF] text-[0.65rem] sm:text-[0.75rem] font-medium px-2 py-0.5 rounded-md w-fit mb-0.5 sm:mb-1.5">{presentText}</span>
            ) : (
              <span className="text-[0.7rem] sm:text-[0.8125rem] text-[#3D3D3D]/80 dark:text-[#F2F0EF] mb-0.5 sm:mb-1">{year}</span>
            )}
            {location && (
              <div className="flex items-center gap-1 text-[0.65rem] sm:text-[0.8125rem] text-[#3D3D3D]/80 dark:text-[#F2F0EF]">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>{location}</span>
              </div>
            )}
          </div>
        </div>
        <div className={`ml-2 sm:ml-4 shrink-0 transition-transform duration-300 opacity-60 group-hover:opacity-100 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#3D3D3D]/40 dark:text-[#F2F0EF]/40" />
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-3 mt-3 text-[0.75rem] sm:text-[0.875rem] text-[#3D3D3D] dark:text-[#F2F0EF] leading-relaxed">
              {lang === 'en' && detailsEn ? detailsEn : details || "Detail untuk posisi ini akan segera ditambahkan. Tetap terhubung untuk pembaruan lebih lanjut mengenai tanggung jawab dan pencapaian selama periode ini."}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ListItem: React.FC<{ year: string, title: string, subtitle?: string, location?: string, href?: string }> = ({ year, title, subtitle, location, href }) => {
  const content = (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 items-start sm:items-center group p-2.5 sm:p-4 rounded-lg sm:rounded-xl hover:bg-[#EAE8E6] dark:hover:bg-[#737171] transition-colors">
      <div className="w-full sm:w-[8.125rem] shrink-0 text-[#3D3D3D]/80 dark:text-[#F2F0EF] text-[0.72rem] sm:text-[0.875rem]">
        {year}
      </div>
      
      <div className="flex-1 flex flex-col sm:flex-row justify-between gap-1 sm:gap-4 w-full items-start sm:items-center min-w-0">
        <div className="flex flex-col items-start pr-1 sm:pr-4 flex-1 min-w-0">
          <span className="text-[0.78rem] sm:text-[0.875rem] font-medium text-[#3D3D3D] dark:text-[#F2F0EF] leading-[1.5] sm:leading-[1.6]">{title}</span>
          {subtitle && <span className="text-[0.7rem] sm:text-[0.875rem] text-[#3D3D3D]/80 dark:text-[#F2F0EF] leading-[1.5] sm:leading-[1.6] mt-0.5">{subtitle}</span>}
        </div>
        {location && (
          <div className="text-[0.68rem] sm:text-[0.875rem] text-[#3D3D3D]/80 dark:text-[#F2F0EF] sm:text-right whitespace-nowrap shrink-0">
            {location}
          </div>
        )}
      </div>
      {href && (
        <div className="ml-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
          <ArrowUpRight className="w-4 h-4 text-[#3D3D3D]/40 dark:text-[#F2F0EF]/40" />
        </div>
      )}
    </div>
  );

  if (href) {
    return <a href={href} className="block w-full">{content}</a>;
  }
  return <div className="w-full">{content}</div>;
};


const AnimatedBackground = ({ theme }: { theme: string }) => {
  const blob1Colors = ["#2D2F47", "#5D194B", "#3D1A6A", "#82350C", "#134D66", "#1A4938", "#13113C", "#433632", "#2D2F47"];
  const blob2Colors = ["#8A6543", "#96225B", "#6F1D8A", "#B31D12", "#1B6F8A", "#2E7550", "#2D2A72", "#6D594E", "#8A6543"];
  const blob3Colors = ["#D18A49", "#C62B4A", "#9D2395", "#E25300", "#289299", "#5FA85B", "#042BAB", "#A98763", "#D18A49"];
  const blob4Colors = ["#E3C38B", "#F26430", "#E2278C", "#ECA734", "#43B2A6", "#A9DD4F", "#5FBCBB", "#DCCFC2", "#E3C38B"];

  const opacityClass = theme === 'transparent' ? 'opacity-100' : 'opacity-80';

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blob 1 - Top Left (60vw) */}
      <motion.div
        className={`absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-[150px] ${opacityClass} mix-blend-screen pointer-events-none`}
        animate={{
          x: ["0vw", "10vw", "-5vw", "0vw"],
          y: ["0vh", "5vh", "-10vh", "0vh"],
          scale: [1, 1.15, 0.9, 1],
          backgroundColor: blob1Colors
        }}
        transition={{
          x: { duration: 25, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0 },
          y: { duration: 25, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0 },
          scale: { duration: 25, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0 },
          backgroundColor: { duration: 40, repeat: Infinity, ease: "linear" }
        }}
      />

      {/* Blob 2 - Bottom Right (50vw) */}
      <motion.div
        className={`absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full blur-[150px] ${opacityClass} mix-blend-screen pointer-events-none`}
        animate={{
          x: ["0vw", "-15vw", "10vw", "0vw"],
          y: ["0vh", "-10vh", "5vh", "0vh"],
          scale: [1, 1.2, 0.95, 1],
          backgroundColor: blob2Colors
        }}
        transition={{
          x: { duration: 25, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 2 },
          y: { duration: 25, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 2 },
          scale: { duration: 25, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 2 },
          backgroundColor: { duration: 40, repeat: Infinity, ease: "linear" }
        }}
      />

      {/* Blob 3 - Top Right (45vw) */}
      <motion.div
        className={`absolute -top-[5%] -right-[5%] w-[45vw] h-[45vw] rounded-full blur-[150px] ${opacityClass} mix-blend-screen pointer-events-none`}
        animate={{
          x: ["0vw", "-10vw", "15vw", "0vw"],
          y: ["0vh", "15vh", "-5vh", "0vh"],
          scale: [1, 0.9, 1.15, 1],
          backgroundColor: blob3Colors
        }}
        transition={{
          x: { duration: 25, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 4 },
          y: { duration: 25, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 4 },
          scale: { duration: 25, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 4 },
          backgroundColor: { duration: 40, repeat: Infinity, ease: "linear" }
        }}
      />

      {/* Blob 4 - Bottom Left (40vw) */}
      <motion.div
        className={`absolute -bottom-[5%] -left-[5%] w-[40vw] h-[40vw] rounded-full blur-[150px] ${opacityClass} mix-blend-screen pointer-events-none`}
        animate={{
          x: ["0vw", "15vw", "-10vw", "0vw"],
          y: ["0vh", "-15vh", "10vh", "0vh"],
          scale: [1, 1.1, 0.85, 1],
          backgroundColor: blob4Colors
        }}
        transition={{
          x: { duration: 25, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 6 },
          y: { duration: 25, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 6 },
          scale: { duration: 25, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 6 },
          backgroundColor: { duration: 40, repeat: Infinity, ease: "linear" }
        }}
      />
    </div>
  );
};

const variants = {
  enter: (direction: number) => {
    return {
      opacity: 0,
      scale: 0.98,
      filter: "blur(4px)"
    };
  },
  center: {
    zIndex: 1,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)"
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      opacity: 0,
      scale: 0.98,
      filter: "blur(4px)"
    };
  }
};

export default function ResumeApp({ 
  activeApp, 
  setActiveApp, 
  docTarget,
  showcaseTarget,
  onDocClick,
  onShowcaseClick,
  lang = 'en', 
  theme = 'flat-white' 
}: { 
  activeApp?: 'resume' | 'portfolio' | 'cover-letter' | 'personality-traits', 
  setActiveApp?: (app: 'resume' | 'portfolio' | 'cover-letter' | 'personality-traits') => void, 
  docTarget?: 'resume' | 'cover-letter',
  showcaseTarget?: 'portfolio' | 'personality-traits',
  onDocClick?: () => void,
  onShowcaseClick?: () => void,
  lastStaticDoc?: 'resume' | 'cover-letter', 
  lang?: 'en' | 'id', 
  setLang?: (lang: 'en' | 'id') => void, 
  theme?: string, 
  setTheme?: any 
}) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [expandedWorkKey, setExpandedWorkKey] = useState<string | null>(null);

  const paginate = (newDirection: number) => {
    const nextPage = page + newDirection;
    if (nextPage >= 0 && nextPage <= 9) {
      setPage([nextPage, newDirection]);
    }
  };

  const t = {
    en: {
      socials: "Socials",
      experience: "Experience",
      internship: "Internship",
      remote: "Remote",
      freelance: "Freelance",
      organizational: "Organizational",
      education: "Education",
      formalSchool: "Formal School",
      tertiaryDegree: "Tertiary Degree",
      workshop: "Workshop",
      certificate: "Certificate",
      license: "License",
      writing: "Writing",
      present: "Present"
    },
    id: {
      socials: "Media Sosial",
      experience: "Pengalaman",
      internship: "Magang",
      remote: "Remote",
      freelance: "Freelance",
      organizational: "Organisasi",
      education: "Pendidikan",
      formalSchool: "Formal School",
      tertiaryDegree: "Tertiary Degree",
      workshop: "Workshop",
      certificate: "Certificate",
      license: "License",
      writing: "Tulisan",
      present: "Sekarang"
    }
  }[lang];

  return (
    <div className="flex w-full min-h-screen bg-transparent dark:bg-transparent font-calibri">
      
      {/* Main Content Area */}
      <div className="flex-1 lg:h-screen lg:overflow-y-auto [&::-webkit-scrollbar]:hidden relative">
        <FloatingDocuments 
          activeApp="resume" 
          setActiveApp={setActiveApp as any} 
          docTarget={docTarget}
          showcaseTarget={showcaseTarget}
          onDocClick={onDocClick}
          onShowcaseClick={onShowcaseClick}
        />

        <div className="w-full flex flex-col items-center z-10 px-2 sm:px-5 lg:px-10 pt-4 pb-8 sm:py-5 lg:py-10 min-h-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="paper-scale-mobile w-full max-w-[56.25rem] h-[88.375rem] sm:min-h-[88.375rem] lg:h-[88.375rem] rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] flex flex-row overflow-hidden transition-colors duration-300 transform-gpu bg-[#F2F0EF] dark:bg-[#3D3D3D]"
          >
            <div className="flex flex-row w-full h-full overflow-hidden rounded-[2.5rem]">
            
            {/* Left Sidebar */}
            <aside className="w-[37.66%] md:w-[21.1875rem] p-4 sm:p-6 lg:p-[2rem] flex flex-col gap-4 sm:gap-6 lg:gap-10 shrink-0 bg-transparent z-10 transition-colors duration-300 overflow-y-auto [&::-webkit-scrollbar]:hidden border-r border-[#3D3D3D]/10 dark:border-[#F2F0EF]/10 md:border-r-0">
              
              {/* Profile Header */}
              <div>
                <div className="w-full aspect-square rounded-2xl bg-[#EAE8E6] dark:bg-[#737171] mb-4 sm:mb-8 overflow-hidden">
                   <img 
                     src="/images/profile-662.webp" 
                     srcSet="/images/profile-331.webp 331w, /images/profile-662.webp 662w"
                     sizes="(max-width: 768px) 662px, 331px"
                     alt="Profile" 
                     fetchPriority="high"
                     width="662"
                     height="662"
                     className="w-full h-full object-cover object-top" 
                   />
                </div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-1 sm:mb-2 text-[#3D3D3D] dark:text-[#F2F0EF] leading-tight">{data.sidebar.name}</h1>
                <p className="text-sm sm:text-base lg:text-[1.125rem] text-[#3D3D3D] dark:text-[#F2F0EF] font-medium mb-4 sm:mb-8 leading-tight">{data.sidebar.role}</p>
                
                
                {/* Navigation Menu */}
                <div className="flex flex-col gap-1 sm:gap-1.5 mt-3 sm:mt-8">
                  {/* Experience Group (Parent Category with 4 Children) */}
                  <div className="flex flex-col">
                    <button 
                      onClick={() => {
                        if (page > 3 || page < 0) {
                          setPage([0, -1]);
                        }
                      }}
                      className="text-left px-3 sm:px-4 pt-1 sm:pt-1.5 pb-0.5 sm:pb-1 text-[10.5pt] sm:text-[11pt] lg:text-[12.5pt] font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] italic tracking-tight hover:opacity-80 transition-opacity"
                    >
                      {t.experience}
                    </button>
                    
                    {/* Sub-categories / Anak Kategori (4 items) */}
                    <div className="flex flex-col gap-0.5 sm:gap-1 pl-2 sm:pl-3 ml-2 sm:ml-3 border-l-2 border-[#3D3D3D]/20 dark:border-[#F2F0EF]/25 my-1">
                      <button 
                        onClick={() => setPage([0, 0 > page ? 1 : -1])} 
                        className={`text-left px-2.5 sm:px-3 py-1 sm:py-2 rounded-lg sm:rounded-xl text-[9pt] sm:text-[9.5pt] lg:text-[10.5pt] font-medium transition-colors ${page === 0 ? 'bg-black text-white dark:bg-white dark:text-black italic font-semibold shadow-sm' : 'bg-transparent text-black/80 hover:bg-[#E6E4E3] dark:text-white/80 dark:hover:bg-[#8C8B8B] italic'}`}
                      >
                        {t.internship}
                      </button>
                      <button 
                        onClick={() => setPage([1, 1 > page ? 1 : -1])} 
                        className={`text-left px-2.5 sm:px-3 py-1 sm:py-2 rounded-lg sm:rounded-xl text-[9pt] sm:text-[9.5pt] lg:text-[10.5pt] font-medium transition-colors ${page === 1 ? 'bg-black text-white dark:bg-white dark:text-black italic font-semibold shadow-sm' : 'bg-transparent text-black/80 hover:bg-[#E6E4E3] dark:text-white/80 dark:hover:bg-[#8C8B8B] italic'}`}
                      >
                        {t.remote}
                      </button>
                      <button 
                        onClick={() => setPage([2, 2 > page ? 1 : -1])} 
                        className={`text-left px-2.5 sm:px-3 py-1 sm:py-2 rounded-lg sm:rounded-xl text-[9pt] sm:text-[9.5pt] lg:text-[10.5pt] font-medium transition-colors ${page === 2 ? 'bg-black text-white dark:bg-white dark:text-black italic font-semibold shadow-sm' : 'bg-transparent text-black/80 hover:bg-[#E6E4E3] dark:text-white/80 dark:hover:bg-[#8C8B8B] italic'}`}
                      >
                        {t.freelance}
                      </button>
                      <button 
                        onClick={() => setPage([3, 3 > page ? 1 : -1])} 
                        className={`text-left px-2.5 sm:px-3 py-1 sm:py-2 rounded-lg sm:rounded-xl text-[9pt] sm:text-[9.5pt] lg:text-[10.5pt] font-medium transition-colors ${page === 3 ? 'bg-black text-white dark:bg-white dark:text-black italic font-semibold shadow-sm' : 'bg-transparent text-black/80 hover:bg-[#E6E4E3] dark:text-white/80 dark:hover:bg-[#8C8B8B] italic'}`}
                      >
                        {t.organizational}
                      </button>
                    </div>
                  </div>

                  {/* Education Group (Parent Category with 3 Children) */}
                  <div className="flex flex-col">
                    <button 
                      onClick={() => {
                        if (page < 4 || page > 6) {
                          setPage([4, page < 4 ? 1 : -1]);
                        }
                      }}
                      className="text-left px-3 sm:px-4 pt-1 sm:pt-1.5 pb-0.5 sm:pb-1 text-[10.5pt] sm:text-[11pt] lg:text-[12.5pt] font-semibold text-[#3D3D3D] dark:text-[#F2F0EF] italic tracking-tight hover:opacity-80 transition-opacity"
                    >
                      {t.education}
                    </button>
                    
                    {/* Sub-categories / Anak Kategori (3 items) */}
                    <div className="flex flex-col gap-0.5 sm:gap-1 pl-2 sm:pl-3 ml-2 sm:ml-3 border-l-2 border-[#3D3D3D]/20 dark:border-[#F2F0EF]/25 my-1">
                      <button 
                        onClick={() => setPage([4, 4 > page ? 1 : -1])} 
                        className={`text-left px-2.5 sm:px-3 py-1 sm:py-2 rounded-lg sm:rounded-xl text-[9pt] sm:text-[9.5pt] lg:text-[10.5pt] font-medium transition-colors ${page === 4 ? 'bg-black text-white dark:bg-white dark:text-black italic font-semibold shadow-sm' : 'bg-transparent text-black/80 hover:bg-[#E6E4E3] dark:text-white/80 dark:hover:bg-[#8C8B8B] italic'}`}
                      >
                        {t.formalSchool}
                      </button>
                      <button 
                        onClick={() => setPage([5, 5 > page ? 1 : -1])} 
                        className={`text-left px-2.5 sm:px-3 py-1 sm:py-2 rounded-lg sm:rounded-xl text-[9pt] sm:text-[9.5pt] lg:text-[10.5pt] font-medium transition-colors ${page === 5 ? 'bg-black text-white dark:bg-white dark:text-black italic font-semibold shadow-sm' : 'bg-transparent text-black/80 hover:bg-[#E6E4E3] dark:text-white/80 dark:hover:bg-[#8C8B8B] italic'}`}
                      >
                        {t.tertiaryDegree}
                      </button>
                      <button 
                        onClick={() => setPage([6, 6 > page ? 1 : -1])} 
                        className={`text-left px-2.5 sm:px-3 py-1 sm:py-2 rounded-lg sm:rounded-xl text-[9pt] sm:text-[9.5pt] lg:text-[10.5pt] font-medium transition-colors ${page === 6 ? 'bg-black text-white dark:bg-white dark:text-black italic font-semibold shadow-sm' : 'bg-transparent text-black/80 hover:bg-[#E6E4E3] dark:text-white/80 dark:hover:bg-[#8C8B8B] italic'}`}
                      >
                        {t.workshop}
                      </button>
                    </div>
                  </div>

                  {/* Main Categories */}
                  <button onClick={() => setPage([7, 7 > page ? 1 : -1])} className={`text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-[10.5pt] sm:text-[11pt] lg:text-[12.5pt] font-medium transition-colors ${page === 7 ? 'bg-black text-white dark:bg-white dark:text-black italic' : 'bg-transparent text-black hover:bg-[#E6E4E3] dark:text-white dark:hover:bg-[#8C8B8B] italic'}`}>
                    {t.certificate}
                  </button>
                  <button onClick={() => setPage([8, 8 > page ? 1 : -1])} className={`text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-[10.5pt] sm:text-[11pt] lg:text-[12.5pt] font-medium transition-colors ${page === 8 ? 'bg-black text-white dark:bg-white dark:text-black italic' : 'bg-transparent text-black hover:bg-[#E6E4E3] dark:text-white dark:hover:bg-[#8C8B8B] italic'}`}>
                    {t.license}
                  </button>
                  <button onClick={() => setPage([9, 9 > page ? 1 : -1])} className={`text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-[10.5pt] sm:text-[11pt] lg:text-[12.5pt] font-medium transition-colors ${page === 9 ? 'bg-black text-white dark:bg-white dark:text-black italic' : 'bg-transparent text-black hover:bg-[#E6E4E3] dark:text-white dark:hover:bg-[#8C8B8B] italic'}`}>
                    {t.writing}
                  </button>
                </div>
              </div>

              

              {/* Contact */}
              <div className="flex flex-col gap-2.5 sm:gap-4 lg:gap-6">
                {data.sidebar.contact.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-3 lg:gap-4 min-w-0">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-[#3D3D3D] dark:bg-[#F2F0EF] flex items-center justify-center text-[#F2F0EF] dark:text-[#3D3D3D] shrink-0">
                      <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-[1.125rem] lg:h-[1.125rem]" strokeWidth={2} />
                    </div>
                    <div className="flex flex-col min-w-0 overflow-hidden">
                      <span className="text-[0.65rem] sm:text-[0.7rem] lg:text-[0.75rem] text-[#3D3D3D]/80 dark:text-[#F2F0EF] leading-tight truncate">{item.label}</span>
                      {item.label === "Website" ? (
                        <a 
                          href={item.value.startsWith('http') ? item.value : `https://${item.value}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[0.72rem] sm:text-[0.75rem] lg:text-[0.875rem] font-medium text-[#3D3D3D] dark:text-[#F2F0EF] hover:underline truncate"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-[0.72rem] sm:text-[0.75rem] lg:text-[0.875rem] font-medium text-[#3D3D3D] dark:text-[#F2F0EF] truncate">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>


              
            </aside>

            {/* Main Content (Right Side of CV) */}
            <main className="w-[62.34%] md:flex-1 min-w-0 flex flex-col bg-transparent transition-colors duration-300 z-10 overflow-hidden relative h-full">

              {/* Tab Content */}
              <div className="flex-1 relative overflow-hidden h-full">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      opacity: { duration: 0.3 }
                    }}
                    className="absolute inset-0 p-4 sm:p-6 lg:p-[2rem] overflow-y-auto [&::-webkit-scrollbar]:hidden"
                  >
                    {page === 0 && (
                      <Section noGap>
                        {data.internships.map((item, idx) => {
                          const key = `intern-${idx}`;
                          return (
                            <WorkExperienceItem key={key} {...item} lang={lang} presentText={t.present} isExpanded={expandedWorkKey === key} onToggle={() => setExpandedWorkKey(expandedWorkKey === key ? null : key)} />
                          );
                        })}
                      </Section>
                    )}

                    {page === 1 && (
                      <Section noGap>
                        {data.remoteWork.map((item, idx) => {
                          const key = `remote-${idx}`;
                          return (
                            <WorkExperienceItem key={key} {...item} lang={lang} presentText={t.present} isExpanded={expandedWorkKey === key} onToggle={() => setExpandedWorkKey(expandedWorkKey === key ? null : key)} />
                          );
                        })}
                      </Section>
                    )}

                    {page === 2 && (
                      <Section noGap>
                        {data.freelanceWork.map((item, idx) => {
                          const key = `freelance-${idx}`;
                          return (
                            <WorkExperienceItem key={key} {...item} lang={lang} presentText={t.present} isExpanded={expandedWorkKey === key} onToggle={() => setExpandedWorkKey(expandedWorkKey === key ? null : key)} />
                          );
                        })}
                      </Section>
                    )}

                    {page === 3 && (
                      <Section>
                        {data.organizations.map((item, idx) => (
                          <ListItem 
                            key={idx} 
                            year={item.year} 
                            title={item.role} 
                            subtitle={item.company} 
                            location={item.location} 
                            href={item.href} 
                          />
                        ))}
                      </Section>
                    )}
                    
                    {page === 4 && (
                      <Section>
                        {data.formalSchool.map((item, idx) => (
                          <ListItem 
                            key={idx} 
                            year={item.year} 
                            title={item.title} 
                            subtitle={item.subtitle} 
                            location={item.location} 
                            href={item.href} 
                          />
                        ))}
                      </Section>
                    )}

                    {page === 5 && (
                      <Section>
                        {data.tertiaryDegree.map((item, idx) => (
                          <ListItem 
                            key={idx} 
                            year={item.year} 
                            title={item.title} 
                            subtitle={item.subtitle} 
                            location={item.location} 
                            href={item.href} 
                          />
                        ))}
                      </Section>
                    )}

                    {page === 6 && (
                      <Section>
                        {data.workshop.map((item, idx) => (
                          <ListItem 
                            key={idx} 
                            year={item.year} 
                            title={item.title} 
                            subtitle={item.subtitle} 
                            location={item.location} 
                            href={item.href} 
                          />
                        ))}
                      </Section>
                    )}

                    {page === 7 && (
                      <Section>
                        {data.certificate.map((item, idx) => (
                          <ListItem 
                            key={idx} 
                            year={item.year} 
                            title={item.title} 
                            subtitle={item.subtitle}
                            location={item.location}
                            href={item.href} 
                          />
                        ))}
                      </Section>
                    )}

                    {page === 8 && (
                      <Section>
                        {data.license.map((item, idx) => (
                          <ListItem 
                            key={idx} 
                            year={item.year} 
                            title={item.title} 
                            subtitle={item.subtitle}
                            location={item.location}
                            href={item.href} 
                          />
                        ))}
                      </Section>
                    )}

                    {page === 9 && (
                      <Section>
                        {data.writing.map((item, idx) => (
                          <ListItem key={idx} {...item} />
                        ))}
                      </Section>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </main>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}