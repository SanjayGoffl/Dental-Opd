// ============================================
// DENTAL OPD — App Router & State
// ============================================

let currentRole = 'junior_resident';
let currentPage = 'dashboard';
<<<<<<< HEAD
let activePatientId = null;

const PATIENT_CONTEXT_PAGES = new Set([
    'patient-profile',
    'case-history',
    'clinical-exam',
    'dental-chart',
    'investigation',
    'diagnosis',
    'treatment-plan',
    'consent',
    'prescription'
]);
=======
>>>>>>> origin/main

// ── Page Registry ──
const PAGES = {
    dashboard: { title: 'Dashboard', render: renderDashboard },
    patients: { title: 'Patients', render: renderPatientList },
    'patient-register': { title: 'Patient Registration', render: renderPatientRegister },
    'patient-profile': { title: 'Patient Profile', render: renderPatientProfile },
    'vital-signs': { title: 'Vital Signs', render: renderVitalSigns },
    'case-history': { title: 'Case History', render: renderCaseHistory },
    'clinical-exam': { title: 'Clinical Examination', render: renderClinicalExam },
    'dental-chart': { title: 'Dental Chart', render: renderDentalChart },
    investigation: { title: 'Investigations', render: renderInvestigation },
    diagnosis: { title: 'Diagnosis', render: renderDiagnosis },
    'treatment-plan': { title: 'Treatment Plan', render: renderTreatmentPlan },
    consent: { title: 'Consent Management', render: renderConsent },
    prescription: { title: 'Prescription', render: renderPrescription },
    'radiology-queue': { title: 'Imaging Requests', render: renderRadiologyQueue },
    appointments: { title: 'Appointments', render: renderAppointments },
    'queue-mgmt': { title: 'Patient Queue', render: renderQueueMgmt },
    approvals: { title: 'Pending Approvals', render: renderApprovals },
    notifications: { title: 'Notifications', render: renderNotifications },
    settings: { title: 'Settings', render: renderSettings },
    help: { title: 'Help & Support', render: renderHelp }
};

<<<<<<< HEAD
function getPatientById(patientId) {
    return MOCK.patients.find(p => p.id === patientId);
}

function getActivePatient(params) {
    const fallback = MOCK.patients[0];
    const patientId = params?.id || activePatientId || fallback.id;
    const patient = getPatientById(patientId) || fallback;
    activePatientId = patient.id;
    return patient;
}

function resolvePageParams(pageId, params) {
    const resolved = { ...(params || {}) };

    if (resolved.id) {
        activePatientId = resolved.id;
        return resolved;
    }

    if (PATIENT_CONTEXT_PAGES.has(pageId) && activePatientId) {
        resolved.id = activePatientId;
    }

    return resolved;
}

=======
>>>>>>> origin/main
// ── Navigate to page ──
function navigateTo(pageId, params) {
    const page = PAGES[pageId];
    if (!page) return;

<<<<<<< HEAD
    const resolvedParams = resolvePageParams(pageId, params);

    // Force explicit patient selection for patient-context pages.
    if (PATIENT_CONTEXT_PAGES.has(pageId) && !resolvedParams.id) {
        navigateTo('patients');
        return;
    }

    currentPage = pageId;
    window._pageParams = resolvedParams;
=======
    currentPage = pageId;
    window._pageParams = params || {};
>>>>>>> origin/main

    // Update topbar title
    document.getElementById('topbar-title').textContent = page.title;

    // Render page content
    const content = document.getElementById('content');
<<<<<<< HEAD
    content.innerHTML = '<div class="fade-in">' + page.render(currentRole, resolvedParams) + '</div>';
=======
    content.innerHTML = '<div class="fade-in">' + page.render(currentRole, params) + '</div>';
>>>>>>> origin/main

    // Update sidebar active state
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.toggle('active', item.dataset.page === pageId);
    });

    // Re-init lucide icons
    if (window.lucide) lucide.createIcons();

    // Scroll to top
    content.scrollTop = 0;
}

// ── Set Role ──
function setRole(role) {
    currentRole = role;
<<<<<<< HEAD
    activePatientId = null;
=======
>>>>>>> origin/main
    MOCK.currentUser.role = role;

    // Update role label
    document.getElementById('role-label').textContent = MOCK.roleLabels[role];

    // Update role dropdown
    document.querySelectorAll('.role-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.role === role);
    });

    // Re-render sidebar
    renderSidebar(role, currentPage);

    // Re-render current page
    navigateTo('dashboard');
}

// ── Toggle Role Dropdown ──
function toggleRoleDropdown() {
    const dd = document.getElementById('role-dropdown');
    dd.classList.toggle('open');
}

// ── Close dropdown on outside click ──
document.addEventListener('click', (e) => {
    const dd = document.getElementById('role-dropdown');
    const btn = document.getElementById('role-switcher-btn');
    if (dd && !dd.contains(e.target) && !btn.contains(e.target)) {
        dd.classList.remove('open');
    }
});

// ── Role option click handlers ──
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('role-option')) {
        const role = e.target.dataset.role;
        setRole(role);
        document.getElementById('role-dropdown').classList.remove('open');
    }
});

// ── Login ──
document.getElementById('login-btn').addEventListener('click', () => {
    const role = document.getElementById('login-role').value;
    document.getElementById('login-page').classList.add('hidden');
    document.getElementById('app-shell').classList.remove('hidden');
    setRole(role);
});

// ── Helper: Status badge ──
function statusBadge(status) {
    const labels = {
        draft: 'Draft', review: 'Under Review', pending: 'Pending',
        approved: 'Approved', consented: 'Consented', treatment: 'In Treatment',
        completed: 'Completed', closed: 'Closed', rejected: 'Rejected'
    };
    return `<span class="badge badge-${status}">${labels[status] || status}</span>`;
}

// ── Helper: Format date ──
function formatDate(dateStr) {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) lucide.createIcons();
});
