// ============================================
// DENTAL OPD — Sidebar Navigation
// ============================================

const SIDEBAR_MENUS = {
    junior_resident: [
        { section: 'Main' },
        { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
        { id: 'patients', label: 'Patients', icon: 'users' },
        { section: 'Clinical' },
        { id: 'case-history', label: 'New Case Entry', icon: 'file-plus' },
        { id: 'clinical-exam', label: 'Clinical Exam', icon: 'stethoscope' },
        { id: 'dental-chart', label: 'Dental Chart', icon: 'scan' },
        { id: 'investigation', label: 'Investigations', icon: 'microscope' },
        { id: 'diagnosis', label: 'Diagnosis', icon: 'clipboard-check' },
        { id: 'treatment-plan', label: 'Treatment Plan', icon: 'list-checks' },
        { section: 'Schedule' },
        { id: 'appointments', label: 'Calendar', icon: 'calendar' },
        { id: 'notifications', label: 'Notifications', icon: 'bell', badge: 3 },
        { section: '' },
        { id: 'settings', label: 'Settings', icon: 'settings' },
        { id: 'help', label: 'Help', icon: 'help-circle' }
    ],

    senior_resident: [
        { section: 'Main' },
        { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
        { id: 'patients', label: 'Patients', icon: 'users' },
        { section: 'Clinical' },
        { id: 'case-history', label: 'Case Review', icon: 'file-search' },
        { id: 'approvals', label: 'Pending Approvals', icon: 'check-circle', badge: 4 },
        { id: 'diagnosis', label: 'Diagnosis', icon: 'clipboard-check' },
        { id: 'treatment-plan', label: 'Treatment Plans', icon: 'list-checks' },
        { id: 'consent', label: 'Consent Mgmt', icon: 'file-signature' },
        { section: 'Supervision' },
        { id: 'dental-chart', label: 'Dental Chart', icon: 'scan' },
        { id: 'investigation', label: 'Investigations', icon: 'microscope' },
        { section: 'Schedule' },
        { id: 'appointments', label: 'Calendar', icon: 'calendar' },
        { id: 'notifications', label: 'Notifications', icon: 'bell', badge: 3 },
        { section: '' },
        { id: 'settings', label: 'Settings', icon: 'settings' },
        { id: 'help', label: 'Help', icon: 'help-circle' }
    ],

    asst_professor: [
        { section: 'Main' },
        { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
        { id: 'patients', label: 'All Cases', icon: 'users' },
        { section: 'Approvals & Review' },
        { id: 'approvals', label: 'Approvals Queue', icon: 'check-circle', badge: 4 },
        { id: 'diagnosis', label: 'Diagnosis', icon: 'clipboard-check' },
        { id: 'treatment-plan', label: 'Treatment Plans', icon: 'list-checks' },
        { id: 'prescription', label: 'Prescriptions', icon: 'pill' },
        { id: 'consent', label: 'Consents', icon: 'file-signature' },
        { section: 'Clinical' },
        { id: 'dental-chart', label: 'Dental Chart', icon: 'scan' },
        { id: 'investigation', label: 'Investigations', icon: 'microscope' },
        { section: 'Schedule' },
        { id: 'appointments', label: 'Calendar', icon: 'calendar' },
        { id: 'notifications', label: 'Notifications', icon: 'bell', badge: 3 },
        { section: '' },
        { id: 'settings', label: 'Settings', icon: 'settings' },
        { id: 'help', label: 'Help', icon: 'help-circle' }
    ],

    assoc_professor: [
        { section: 'Main' },
        { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
        { id: 'patients', label: 'All Cases', icon: 'users' },
        { section: 'Approvals & Review' },
        { id: 'approvals', label: 'Approvals Queue', icon: 'check-circle', badge: 4 },
        { id: 'treatment-plan', label: 'Treatment Plans', icon: 'list-checks' },
        { id: 'prescription', label: 'Prescriptions', icon: 'pill' },
        { id: 'consent', label: 'Consents', icon: 'file-signature' },
        { section: 'Clinical' },
        { id: 'dental-chart', label: 'Dental Chart', icon: 'scan' },
        { id: 'investigation', label: 'Investigations', icon: 'microscope' },
        { section: 'Schedule' },
        { id: 'appointments', label: 'Calendar', icon: 'calendar' },
        { id: 'notifications', label: 'Notifications', icon: 'bell', badge: 3 },
        { section: '' },
        { id: 'settings', label: 'Settings', icon: 'settings' },
        { id: 'help', label: 'Help', icon: 'help-circle' }
    ],

    hod: [
        { section: 'Main' },
        { id: 'dashboard', label: 'Department Dashboard', icon: 'layout-dashboard' },
        { id: 'patients', label: 'All Cases', icon: 'users' },
        { section: 'Oversight' },
        { id: 'approvals', label: 'Critical Approvals', icon: 'shield-check', badge: 2 },
        { id: 'treatment-plan', label: 'Treatment Plans', icon: 'list-checks' },
        { id: 'prescription', label: 'Prescriptions', icon: 'pill' },
        { section: 'Analytics' },
        { id: 'queue-mgmt', label: 'Department Queue', icon: 'kanban' },
        { section: 'Clinical' },
        { id: 'dental-chart', label: 'Dental Chart', icon: 'scan' },
        { section: 'Schedule' },
        { id: 'appointments', label: 'Calendar', icon: 'calendar' },
        { id: 'notifications', label: 'Notifications', icon: 'bell', badge: 3 },
        { section: '' },
        { id: 'settings', label: 'Settings', icon: 'settings' },
        { id: 'help', label: 'Help', icon: 'help-circle' }
    ],

    op_incharge: [
        { section: 'Main' },
        { id: 'dashboard', label: 'OP Dashboard', icon: 'layout-dashboard' },
        { id: 'queue-mgmt', label: 'Patient Queue', icon: 'kanban' },
        { section: 'Patient Care' },
        { id: 'vital-signs', label: 'Vital Signs', icon: 'heart-pulse' },
        { id: 'patients', label: 'Patients', icon: 'users' },
        { id: 'patient-register', label: 'Registration', icon: 'user-plus' },
        { section: 'Schedule' },
        { id: 'appointments', label: 'Appointments', icon: 'calendar' },
        { id: 'notifications', label: 'Notifications', icon: 'bell', badge: 3 },
        { section: '' },
        { id: 'settings', label: 'Settings', icon: 'settings' },
        { id: 'help', label: 'Help', icon: 'help-circle' }
    ],

    reception: [
        { section: 'Main' },
        { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
        { id: 'patients', label: 'Patients', icon: 'users' },
        { section: 'Registration' },
        { id: 'patient-register', label: 'New Registration', icon: 'user-plus' },
        { id: 'queue-mgmt', label: 'Queue', icon: 'kanban' },
        { section: 'Schedule' },
        { id: 'appointments', label: 'Appointments', icon: 'calendar' },
        { id: 'notifications', label: 'Notifications', icon: 'bell', badge: 3 },
        { section: '' },
        { id: 'settings', label: 'Settings', icon: 'settings' },
        { id: 'help', label: 'Help', icon: 'help-circle' }
    ],

    radiology: [
        { section: 'Main' },
        { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
        { section: 'Imaging' },
        { id: 'radiology-queue', label: 'Imaging Requests', icon: 'scan-line', badge: 3 },
        { id: 'patients', label: 'Patients', icon: 'users' },
        { section: 'Schedule' },
        { id: 'appointments', label: 'Calendar', icon: 'calendar' },
        { id: 'notifications', label: 'Notifications', icon: 'bell', badge: 3 },
        { section: '' },
        { id: 'settings', label: 'Settings', icon: 'settings' },
        { id: 'help', label: 'Help', icon: 'help-circle' }
    ]
};

function renderSidebar(role, activePage) {
    const nav = document.getElementById('sidebar-nav');
    const items = SIDEBAR_MENUS[role] || SIDEBAR_MENUS.junior_resident;
    let html = '';

    items.forEach(item => {
        if (item.section !== undefined) {
            if (item.section) {
                html += `<div class="sidebar-section-label">${item.section}</div>`;
            } else {
                html += `<div style="margin-top:auto;padding-top:var(--sp-4);"></div>`;
            }
        } else {
            const isActive = activePage === item.id ? ' active' : '';
            const badge = item.badge ? `<span class="sidebar-item-badge">${item.badge}</span>` : '';
            html += `
        <div class="sidebar-item${isActive}" onclick="navigateTo('${item.id}')" data-page="${item.id}">
          <span class="sidebar-item-icon"><i data-lucide="${item.icon}"></i></span>
          <span>${item.label}</span>
          ${badge}
        </div>`;
        }
    });

    nav.innerHTML = html;

    // Update user info
    const user = MOCK.roleUsers[role];
    document.getElementById('sidebar-avatar').textContent = user.initials;
    document.getElementById('sidebar-user-name').textContent = user.name;
    document.getElementById('sidebar-user-role').textContent = MOCK.roleLabels[role];

    // Re-init icons
    if (window.lucide) lucide.createIcons();
}
