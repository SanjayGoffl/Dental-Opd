// ============================================
// DENTAL OPD — Mock Data
// ============================================

const MOCK = {
    // ── Current User ──
    currentUser: {
        name: 'Dr. Diva Chaitava',
        initials: 'DC',
        role: 'junior_resident',
        department: 'Conservative Dentistry & Endodontics'
    },

    // ── Role Labels ──
    roleLabels: {
        junior_resident: 'Junior Resident',
        senior_resident: 'Senior Resident',
        asst_professor: 'Assistant Professor',
        assoc_professor: 'Associate Professor',
        hod: 'HOD',
        op_incharge: 'OP In-Charge',
        reception: 'Reception',
        radiology: 'Radiology'
    },

    // ── Role-User Map ──
    roleUsers: {
        junior_resident: { name: 'Dr. Diva Chaitava', initials: 'DC' },
        senior_resident: { name: 'Dr. Nithi G', initials: 'NG' },
        asst_professor: { name: 'Dr. SriRam V', initials: 'SV' },
        assoc_professor: { name: 'Dr. Asha T', initials: 'AT' },
        hod: { name: 'Dr. Jayasimha Raj', initials: 'JR' },
        op_incharge: { name: 'Sr. Priya M', initials: 'PM' },
        reception: { name: 'Ms. Swetha R', initials: 'SR' },
        radiology: { name: 'Dr. Karthik N', initials: 'KN' }
    },

    // ── Doctors ──
    doctors: [
        { id: 'D001', name: 'Dr. Jayasimha Raj', role: 'HOD', dept: 'Conservative Dentistry & Endodontics' },
        { id: 'D002', name: 'Dr. Asha T', role: 'Associate Professor', dept: 'Oral & Maxillofacial Surgery' },
        { id: 'D003', name: 'Dr. SriRam V', role: 'Sr. Asst. Professor', dept: 'Prosthodontics' },
        { id: 'D004', name: 'Dr. Nithi G', role: 'Senior Resident', dept: 'Pedodontics' },
        { id: 'D005', name: 'Dr. Nandini', role: 'Senior Resident', dept: 'Orthodontics' },
        { id: 'D006', name: 'Dr. Diva Chaitava', role: 'Junior Resident', dept: 'General Dentistry' },
        { id: 'D007', name: 'Dr. Pranila', role: 'Junior Resident', dept: 'General Dentistry' },
        { id: 'D008', name: 'Dr. Varshinee', role: 'Junior Resident', dept: 'General Dentistry' }
    ],

    // ── Patients ──
    patients: [
        {
            id: 'P001', uhid: 'UHID-2024-001', name: 'Ramesh Kumar', age: 45, gender: 'M',
            phone: '9876543210', email: 'ramesh.k@email.com', lastVisit: '2026-02-14',
            status: 'treatment', assignedTo: 'D006', chiefComplaint: 'Pain in lower right molar',
            address: '12, Gandhi Nagar, Chennai - 600020',
            bloodGroup: 'B+', allergies: ['Penicillin'],
            pmh: { htn: true, dm: false, cad: false }
        },
        {
            id: 'P002', uhid: 'UHID-2024-002', name: 'Lakshmi Devi', age: 32, gender: 'F',
            phone: '9876543211', email: 'lakshmi.d@email.com', lastVisit: '2026-02-15',
            status: 'review', assignedTo: 'D006', chiefComplaint: 'Sensitivity to cold in upper teeth',
            address: '45, Anna Nagar, Chennai - 600040',
            bloodGroup: 'O+', allergies: [],
            pmh: { htn: false, dm: false, cad: false }
        },
        {
            id: 'P003', uhid: 'UHID-2024-003', name: 'Suresh Babu', age: 58, gender: 'M',
            phone: '9876543212', email: 'suresh.b@email.com', lastVisit: '2026-02-10',
            status: 'approved', assignedTo: 'D007', chiefComplaint: 'Missing teeth — needs denture',
            address: '78, T Nagar, Chennai - 600017',
            bloodGroup: 'A+', allergies: ['Sulfa drugs'],
            pmh: { htn: true, dm: true, cad: false }
        },
        {
            id: 'P004', uhid: 'UHID-2024-004', name: 'Priya Sharma', age: 28, gender: 'F',
            phone: '9876543213', email: 'priya.s@email.com', lastVisit: '2026-02-16',
            status: 'draft', assignedTo: 'D006', chiefComplaint: 'Wisdom tooth pain',
            address: '23, Adyar, Chennai - 600020',
            bloodGroup: 'AB+', allergies: [],
            pmh: { htn: false, dm: false, cad: false }
        },
        {
            id: 'P005', uhid: 'UHID-2024-005', name: 'Venkatesh R', age: 62, gender: 'M',
            phone: '9876543214', email: 'venkatesh.r@email.com', lastVisit: '2026-02-13',
            status: 'completed', assignedTo: 'D008', chiefComplaint: 'Loose crown on upper front tooth',
            address: '56, Mylapore, Chennai - 600004',
            bloodGroup: 'B-', allergies: ['Aspirin'],
            pmh: { htn: true, dm: true, cad: true }
        },
        {
            id: 'P006', uhid: 'UHID-2024-006', name: 'Anitha M', age: 24, gender: 'F',
            phone: '9876543215', email: 'anitha.m@email.com', lastVisit: '2026-02-16',
            status: 'pending', assignedTo: 'D006', chiefComplaint: 'Irregular teeth alignment',
            address: '89, Velachery, Chennai - 600042',
            bloodGroup: 'O-', allergies: [],
            pmh: { htn: false, dm: false, cad: false }
        },
        {
            id: 'P007', uhid: 'UHID-2024-007', name: 'Mohan Das', age: 50, gender: 'M',
            phone: '9876543216', email: 'mohan.d@email.com', lastVisit: '2026-02-11',
            status: 'consented', assignedTo: 'D007', chiefComplaint: 'Bleeding gums while brushing',
            address: '34, Tambaram, Chennai - 600045',
            bloodGroup: 'A-', allergies: [],
            pmh: { htn: false, dm: true, cad: false }
        },
        {
            id: 'P008', uhid: 'UHID-2024-008', name: 'Kavitha S', age: 35, gender: 'F',
            phone: '9876543217', email: 'kavitha.s@email.com', lastVisit: '2026-02-09',
            status: 'closed', assignedTo: 'D008', chiefComplaint: 'Tooth discoloration',
            address: '67, Nungambakkam, Chennai - 600034',
            bloodGroup: 'AB-', allergies: ['Ibuprofen'],
            pmh: { htn: false, dm: false, cad: false }
        }
    ],

    // ── Appointments ──
    appointments: [
        { id: 'A001', patient: 'Ramesh Kumar', doctor: 'Diva Chaitava', date: '2026-02-16', time: '09:30', type: 'Follow-up', status: 'Waiting' },
        { id: 'A002', patient: 'Lakshmi Devi', doctor: 'Diva Chaitava', date: '2026-02-16', time: '10:00', type: 'New', status: 'Waiting' },
        { id: 'A003', patient: 'Priya Sharma', doctor: 'Diva Chaitava', date: '2026-02-16', time: '10:30', type: 'New', status: 'In Progress' },
        { id: 'A004', patient: 'Anitha M', doctor: 'Diva Chaitava', date: '2026-02-16', time: '11:00', type: 'New', status: 'Waiting' },
        { id: 'A005', patient: 'Suresh Babu', doctor: 'Pranila', date: '2026-02-16', time: '09:00', type: 'Follow-up', status: 'Completed' },
        { id: 'A006', patient: 'Mohan Das', doctor: 'Pranila', date: '2026-02-17', time: '09:30', type: 'Treatment', status: 'Waiting' }
    ],

    // ── Notifications ──
    notifications: [
        { id: 'N001', type: 'warning', title: 'Case pending your review', message: 'Lakshmi Devi (UHID-2024-002) — Provisional diagnosis submitted by Dr. Diva', time: '5 min ago', read: false },
        { id: 'N002', type: 'info', title: 'Radiology report available', message: 'OPG report for Ramesh Kumar (UHID-2024-001) is ready', time: '30 min ago', read: false },
        { id: 'N003', type: 'info', title: 'New appointment booked', message: 'Priya Sharma — 10:30 AM today', time: '1 hour ago', read: false },
        { id: 'N004', type: 'info', title: 'Cross-referral received', message: 'Suresh Babu referred to Prosthodontics by Dr. Asha T', time: '2 hours ago', read: true },
        { id: 'N005', type: 'success', title: 'Treatment plan approved', message: 'Ramesh Kumar — RCT approved by Dr. SriRam V', time: '3 hours ago', read: true },
        { id: 'N006', type: 'danger', title: 'Emergency patient arrival', message: 'Walk-in patient with severe toothache — OP Queue', time: '4 hours ago', read: true }
    ],

    // ── Investigation Requests ──
    investigations: [
        { id: 'INV001', patientId: 'P001', patientName: 'Ramesh Kumar', type: 'RVG/IOPA', tooth: '46', indication: 'Deep caries evaluation', urgency: 'Routine', status: 'Completed', requestedBy: 'Dr. Diva Chaitava' },
        { id: 'INV002', patientId: 'P002', patientName: 'Lakshmi Devi', type: 'OPG', tooth: '-', indication: 'Full mouth assessment', urgency: 'Routine', status: 'In Progress', requestedBy: 'Dr. Diva Chaitava' },
        { id: 'INV003', patientId: 'P003', patientName: 'Suresh Babu', type: 'OPG', tooth: '-', indication: 'Edentulous ridge assessment', urgency: 'Routine', status: 'Completed', requestedBy: 'Dr. Pranila' },
        { id: 'INV004', patientId: 'P004', patientName: 'Priya Sharma', type: 'RVG/IOPA', tooth: '38', indication: 'Impacted wisdom tooth', urgency: 'Urgent', status: 'Requested', requestedBy: 'Dr. Diva Chaitava' }
    ],

    // ── Queue ──
    queue: {
        waiting: [
            { id: 'Q001', name: 'Priya Sharma', uhid: 'UHID-2024-004', token: 'T-004', visitType: 'New', waitTime: '25 min', urgency: 'Routine' },
            { id: 'Q002', name: 'Anitha M', uhid: 'UHID-2024-006', token: 'T-005', visitType: 'New', waitTime: '10 min', urgency: 'Routine' }
        ],
        inConsultation: [
            { id: 'Q003', name: 'Lakshmi Devi', uhid: 'UHID-2024-002', token: 'T-003', visitType: 'Follow-up', doctor: 'Dr. Diva Chaitava', duration: '15 min', unit: 'Unit 1', stage: 'Clinical Exam' }
        ],
        completed: [
            { id: 'Q004', name: 'Ramesh Kumar', uhid: 'UHID-2024-001', token: 'T-001', visitType: 'Follow-up', doctor: 'Dr. Diva Chaitava' },
            { id: 'Q005', name: 'Suresh Babu', uhid: 'UHID-2024-003', token: 'T-002', visitType: 'Follow-up', doctor: 'Dr. Pranila' }
        ]
    },

    // ── Drug Database (for Prescription) ──
    drugs: [
        { name: 'Amoxicillin', dosages: ['250mg', '500mg'], routes: ['Oral'] },
        { name: 'Ibuprofen', dosages: ['200mg', '400mg', '600mg'], routes: ['Oral'] },
        { name: 'Metronidazole', dosages: ['200mg', '400mg'], routes: ['Oral'] },
        { name: 'Paracetamol', dosages: ['500mg', '650mg'], routes: ['Oral'] },
        { name: 'Clindamycin', dosages: ['150mg', '300mg'], routes: ['Oral'] },
        { name: 'Chlorhexidine Mouthwash', dosages: ['0.2%'], routes: ['Topical'] },
        { name: 'Fluconazole', dosages: ['50mg', '150mg'], routes: ['Oral'] },
        { name: 'Diclofenac Sodium', dosages: ['50mg'], routes: ['Oral'] },
        { name: 'Lignocaine 2% + Adrenaline', dosages: ['1.8ml'], routes: ['Injectable'] },
        { name: 'Ornidazole', dosages: ['500mg'], routes: ['Oral'] }
    ],

    // ── Pending Approvals ──
    approvals: [
        { id: 'AP001', patient: 'Lakshmi Devi', uhid: 'UHID-2024-002', type: 'Diagnosis', submittedBy: 'Dr. Diva Chaitava', date: 'Feb 15, 2026', urgency: 'Routine', summary: 'Irreversible Pulpitis w.r.t. #36 — provisional diagnosis submitted for approval.' },
        { id: 'AP002', patient: 'Priya Sharma', uhid: 'UHID-2024-004', type: 'Treatment Plan', submittedBy: 'Dr. Diva Chaitava', date: 'Feb 16, 2026', urgency: 'Urgent', summary: 'Surgical extraction of impacted #38 planned. Pre-op blood work completed.' },
        { id: 'AP003', patient: 'Ramesh Kumar', uhid: 'UHID-2024-001', type: 'Prescription', submittedBy: 'Dr. Nithi G', date: 'Feb 14, 2026', urgency: 'Routine', summary: 'Ibuprofen 400mg TDS + Metronidazole 400mg TDS for 5 days post-RCT.' },
        { id: 'AP004', patient: 'Mohan Das', uhid: 'UHID-2024-007', type: 'Consent', submittedBy: 'Dr. Pranila', date: 'Feb 11, 2026', urgency: 'Routine', summary: 'Informed consent for scaling and root planing — full mouth treatment.' }
    ]
};
