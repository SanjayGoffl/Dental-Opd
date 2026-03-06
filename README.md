# 🦷 DentaCare OPD — Case Sheet Management System

[![Firebase](https://img.shields.io/badge/Firebase-Sync-orange?style=flat-square&logo=firebase)](https://firebase.google.com)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=flat-square&logo=github)](https://github.com/SanjayGoffl/Dental-Opd)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

> **Streamlining Dental Clinical Workflows from Registration to Recovery.**

DentaCare OPD is a modern, web-based digital health platform designed specifically for dental hospitals and clinics. It replaces traditional paper case sheets with a dynamic, role-based digital ecosystem that ensures data integrity, real-time synchronization, and efficient patient management.

---

## ✨ Key Features

- **🌐 Live Firebase Integration**: Real-time data synchronization across all devices. No manual backups needed.
- **🔐 Multi-Portal Architecture**: 8+ specialized roles including Reception, Residents, Professors, and Radiology.
- **📄 Digital Case Sheets**: Comprehensive clinical history, examination, and treatment planning modules.
- **🎨 Interactive Dental Charting**: Visual mapping of dental conditions for intuitive diagnostics.
- **⚡ Proactive Queue Management**: Real-time tracking of patient status from waiting room to completion.
- **🔍 Advanced Analytics**: Department-level dashboards for HODs to monitor workload and success rates.

---

## 🚀 The Portal Journey (User Flow)

The system is designed to mirror the actual physical flow of a dental clinic:

1.  **Reception** 🖥️: Patient arrives, is registered, and assigned a unique UHID.
2.  **OP In-Charge** 🏥: Triage phase; vital signs (BP, Pulse, Weight) are recorded.
3.  **Junior Resident** 👩‍⚕️: Primary case entry, clinical exam, and dental charting.
4.  **Radiology** 📸: Imaging requests are processed, and reports are instantly linked.
5.  **Senior Resident/Professor** 🎓: Review and digital approval of treatment plans.
6.  **Treatment & Discharge** 🦷: Informed consent, prescriptions, and final case closure.

---

## 🛠️ Technical Stack

- **Frontend**: Vanilla HTML5, CSS3 (Custom Variables, Grid, Flexbox), Vanilla JavaScript (ES6+).
- **Icons**: [Lucide Icons](https://lucide.dev/) for clean, modern UI components.
- **Backend/DB**: [Firebase Firestore](https://firebase.google.com/docs/firestore) — powering real-time persistence.
- **Deployment Ready**: Fully static frontend that can be served via GitHub Pages or Firebase Hosting.

---

## 💻 Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/SanjayGoffl/Dental-Opd.git
   cd Dental-Opd/dental-opd/dental-opd
   ```

2. **Open the App**:
   Simply open `index.html` in any modern web browser or use a "Live Server" extension in VS Code.

3. **Firebase Sync**:
   On the first load, the application will automatically populate its **Firebase Firestore** database with mock data. Ensure you have an active internet connection.

---

## 🤝 Clinical Roles

| Role | Responsibility |
| :--- | :--- |
| **Reception** | New patient registration & UHID generation. |
| **OP In-Charge** | Vital signs recording & queue triage. |
| **Junior Resident** | Detailed case history, exam, and charting. |
| **Sr. Res / Professor** | Clinical sign-off and treatment approval. |
| **HOD** | Department analytics and oversight. |
| **Radiology** | Imaging request processing (X-rays/Scans). |

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Developed with ❤️ for Modern Dental Practices.
