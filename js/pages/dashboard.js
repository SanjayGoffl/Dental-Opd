// ============================================
// DENTAL OPD — Dashboard Page (Multi-Variant)
// ============================================

function renderDashboard(role) {
  switch (role) {
    case 'junior_resident': return dashboardJunior();
    case 'senior_resident': return dashboardSenior();
    case 'asst_professor':
    case 'assoc_professor':
    case 'hod': return dashboardProfessor(role);
    case 'op_incharge': return dashboardOPIncharge();
    case 'reception': return dashboardReception();
    case 'radiology': return dashboardRadiology();
    default: return dashboardJunior();
  }
}

function dashboardJunior() {
  const user = MOCK.roleUsers.junior_resident;
  const assigned = MOCK.patients.filter(p => p.assignedTo === 'D006');
  const todayAppts = MOCK.appointments.filter(a => a.date === '2026-02-16' && a.doctor === 'Diva Chaitava');

  return `
    <div class="page-header">
      <div>
        <h1>Good Morning, ${user.name.split(' ')[0]} 👋</h1>
        <p class="text-secondary mb-0" style="margin-bottom:0;">Here's your clinical overview for today</p>
      </div>
      <div class="page-header-actions">
        <button class="btn btn-primary" onclick="navigateTo('case-history')"><i data-lucide="plus" style="width:16px;height:16px;"></i> New Case Entry</button>
      </div>
    </div>

    <!-- KPI Cards -->
    <div class="grid grid-4 gap-4 mb-6">
      <div class="kpi-card">
        <div class="kpi-icon icon-primary"><i data-lucide="users" style="width:20px;height:20px;"></i></div>
        <div class="kpi-label">Assigned Cases</div>
        <div class="kpi-value">${assigned.length}</div>
        <div class="kpi-change positive">↑ 2 new today</div>
      </div>
      <div class="kpi-card kpi-warning">
        <div class="kpi-icon icon-warning"><i data-lucide="clock" style="width:20px;height:20px;"></i></div>
        <div class="kpi-label">Pending Documentation</div>
        <div class="kpi-value">3</div>
        <div class="kpi-change negative">2 overdue</div>
      </div>
      <div class="kpi-card kpi-success">
        <div class="kpi-icon icon-success"><i data-lucide="check-circle" style="width:20px;height:20px;"></i></div>
        <div class="kpi-label">Completed Today</div>
        <div class="kpi-value">2</div>
        <div class="kpi-change positive">On track</div>
      </div>
      <div class="kpi-card kpi-info">
        <div class="kpi-icon icon-info"><i data-lucide="calendar" style="width:20px;height:20px;"></i></div>
        <div class="kpi-label">Today's Appointments</div>
        <div class="kpi-value">${todayAppts.length}</div>
        <div class="kpi-change">Next: 10:30 AM</div>
      </div>
    </div>

    <!-- Two Column Layout -->
    <div class="grid grid-2 gap-4" style="grid-template-columns:1.5fr 1fr;">
      <!-- Today's Patients -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">Today's Patients</div>
          <button class="btn btn-ghost btn-sm" onclick="navigateTo('patients')">View All →</button>
        </div>
        <div class="table-wrapper" style="border:none;">
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>UHID</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${todayAppts.map(a => {
    return `<tr>
                  <td><b style="color:var(--text)">${a.patient}</b></td>
                  <td>—</td>
                  <td>${a.time}</td>
                  <td>${statusBadge(a.status === 'Waiting' ? 'pending' : a.status === 'Completed' ? 'completed' : 'review')}</td>
                  <td><button class="btn btn-sm btn-secondary" onclick="navigateTo('patient-profile')">View</button></td>
                </tr>`;
  }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">Recent Activity</div>
        </div>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-time">10 min ago</div>
            <div class="timeline-text">Submitted provisional diagnosis for <b>Lakshmi Devi</b></div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot" style="background:var(--success);box-shadow:0 0 0 2px var(--success-bg);"></div>
            <div class="timeline-time">45 min ago</div>
            <div class="timeline-text">Completed clinical exam for <b>Ramesh Kumar</b></div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot" style="background:var(--warning);box-shadow:0 0 0 2px var(--warning-bg);"></div>
            <div class="timeline-time">2 hours ago</div>
            <div class="timeline-text">Investigation request sent for <b>Priya Sharma</b></div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot" style="background:var(--info);box-shadow:0 0 0 2px var(--info-bg);"></div>
            <div class="timeline-time">Yesterday</div>
            <div class="timeline-text">Case history created for <b>Anitha M</b></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pending Tasks -->
    <div class="card mt-6">
      <div class="card-header">
        <div class="card-title">⚡ Pending Tasks</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:var(--sp-2);">
        <div style="display:flex;align-items:center;gap:var(--sp-3);padding:var(--sp-3);border-radius:var(--radius);background:var(--warning-bg);border-left:3px solid var(--warning);">
          <span style="font-size:var(--fs-sm);flex:1;">Complete case history documentation for <b>Priya Sharma</b></span>
          <button class="btn btn-sm btn-primary" onclick="navigateTo('case-history')">Continue</button>
        </div>
        <div style="display:flex;align-items:center;gap:var(--sp-3);padding:var(--sp-3);border-radius:var(--radius);background:var(--info-bg);border-left:3px solid var(--info);">
          <span style="font-size:var(--fs-sm);flex:1;">Document clinical findings for <b>Anitha M</b></span>
          <button class="btn btn-sm btn-secondary" onclick="navigateTo('clinical-exam')">Start</button>
        </div>
        <div style="display:flex;align-items:center;gap:var(--sp-3);padding:var(--sp-3);border-radius:var(--radius);background:var(--primary-bg);border-left:3px solid var(--primary);">
          <span style="font-size:var(--fs-sm);flex:1;">Create treatment plan draft for <b>Ramesh Kumar</b></span>
          <button class="btn btn-sm btn-secondary" onclick="navigateTo('treatment-plan')">Start</button>
        </div>
      </div>
    </div>`;
}

function dashboardSenior() {
  return `
    <div class="page-header">
      <div>
        <h1>Good Morning, Dr. Nithi 👋</h1>
        <p class="text-secondary mb-0" style="margin-bottom:0;">Senior Resident Dashboard — Cases & Supervision</p>
      </div>
    </div>
    <div class="grid grid-4 gap-4 mb-6">
      <div class="kpi-card">
        <div class="kpi-icon icon-primary"><i data-lucide="folder-open" style="width:20px;height:20px;"></i></div>
        <div class="kpi-label">Active Cases</div>
        <div class="kpi-value">12</div>
      </div>
      <div class="kpi-card kpi-accent">
        <div class="kpi-icon icon-accent"><i data-lucide="check-circle" style="width:20px;height:20px;"></i></div>
        <div class="kpi-label">Pending Approvals</div>
        <div class="kpi-value">4</div>
        <div class="kpi-change negative">2 urgent</div>
      </div>
      <div class="kpi-card kpi-info">
        <div class="kpi-icon icon-info"><i data-lucide="users" style="width:20px;height:20px;"></i></div>
        <div class="kpi-label">Supervised Juniors</div>
        <div class="kpi-value">4</div>
      </div>
      <div class="kpi-card kpi-success">
        <div class="kpi-icon icon-success"><i data-lucide="trending-up" style="width:20px;height:20px;"></i></div>
        <div class="kpi-label">Approval Rate</div>
        <div class="kpi-value">87%</div>
        <div class="kpi-change positive">↑ 5%</div>
      </div>
    </div>

    <div class="grid grid-2 gap-4">
      <div class="card">
        <div class="card-header">
          <div class="card-title">📋 Cases Pending Review</div>
          <button class="btn btn-ghost btn-sm" onclick="navigateTo('approvals')">View All →</button>
        </div>
        ${MOCK.approvals.slice(0, 3).map(a => `
          <div style="display:flex;align-items:center;gap:var(--sp-3);padding:var(--sp-3);border-bottom:1px solid var(--border);">
            <div class="avatar avatar-sm">${a.patient.charAt(0)}</div>
            <div style="flex:1;">
              <div style="font-size:var(--fs-sm);font-weight:var(--fw-semibold);">${a.patient}</div>
              <div style="font-size:var(--fs-xs);color:var(--text-muted);">${a.type} • ${a.submittedBy}</div>
            </div>
            <span class="badge ${a.urgency === 'Urgent' ? 'badge-urgent' : 'badge-routine'}">${a.urgency}</span>
          </div>
        `).join('')}
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title">👥 Junior Residents Activity</div>
        </div>
        ${['Dr. Diva Chaitava', 'Dr. Pranila', 'Dr. Varshinee', 'Dr. Dhishon Banu'].map((name, i) => `
          <div style="display:flex;align-items:center;gap:var(--sp-3);padding:var(--sp-3);border-bottom:1px solid var(--border);">
            <div class="avatar avatar-sm">${name.charAt(4)}</div>
            <div style="flex:1;">
              <div style="font-size:var(--fs-sm);font-weight:var(--fw-medium);">${name}</div>
              <div style="font-size:var(--fs-xs);color:var(--text-muted);">${[3, 2, 1, 2][i]} active cases</div>
            </div>
            <span class="badge ${['badge-treatment', 'badge-review', 'badge-draft', 'badge-pending'][i]}">${['Active', 'Review', 'Draft', 'Pending'][i]}</span>
          </div>
        `).join('')}
      </div>
    </div>`;
}

function dashboardProfessor(role) {
  const title = role === 'hod' ? 'Department Dashboard' : 'Department Overview';
  const name = MOCK.roleUsers[role].name.split(' ')[0];
  return `
    <div class="page-header">
      <div>
        <h1>${title} 📊</h1>
        <p class="text-secondary mb-0" style="margin-bottom:0;">Welcome back, ${MOCK.roleUsers[role].name}</p>
      </div>
    </div>
    <div class="grid grid-4 gap-4 mb-6">
      <div class="kpi-card">
        <div class="kpi-icon icon-primary"><i data-lucide="activity" style="width:20px;height:20px;"></i></div>
        <div class="kpi-label">Total Patients (Month)</div>
        <div class="kpi-value">248</div>
        <div class="kpi-change positive">↑ 12% vs last month</div>
      </div>
      <div class="kpi-card kpi-success">
        <div class="kpi-icon icon-success"><i data-lucide="check-circle" style="width:20px;height:20px;"></i></div>
        <div class="kpi-label">Treatment Success</div>
        <div class="kpi-value">94%</div>
      </div>
      <div class="kpi-card kpi-warning">
        <div class="kpi-icon icon-warning"><i data-lucide="clock" style="width:20px;height:20px;"></i></div>
        <div class="kpi-label">Pending Approvals</div>
        <div class="kpi-value">${MOCK.approvals.length}</div>
      </div>
      <div class="kpi-card kpi-info">
        <div class="kpi-icon icon-info"><i data-lucide="users" style="width:20px;height:20px;"></i></div>
        <div class="kpi-label">Active Staff</div>
        <div class="kpi-value">8</div>
      </div>
    </div>

    <div class="grid grid-2 gap-4" style="grid-template-columns:1.5fr 1fr;">
      <div class="card">
        <div class="card-header">
          <div class="card-title">Case Distribution by Type</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:var(--sp-3);">
          ${[
      { label: 'Conservative & Endodontics', count: 42, pct: 35, color: 'var(--primary)' },
      { label: 'Prosthodontics', count: 28, pct: 23, color: 'var(--info)' },
      { label: 'Oral Surgery', count: 22, pct: 18, color: 'var(--accent)' },
      { label: 'Orthodontics', count: 18, pct: 15, color: 'var(--success)' },
      { label: 'Pedodontics', count: 10, pct: 9, color: 'var(--warning)' }
    ].map(item => `
            <div>
              <div style="display:flex;justify-content:space-between;font-size:var(--fs-sm);margin-bottom:var(--sp-1);">
                <span>${item.label}</span>
                <span class="fw-semibold">${item.count} (${item.pct}%)</span>
              </div>
              <div style="height:8px;background:var(--bg-alt);border-radius:var(--radius-full);overflow:hidden;">
                <div style="height:100%;width:${item.pct}%;background:${item.color};border-radius:var(--radius-full);transition:width 0.5s ease;"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title">Doctor Workload</div>
        </div>
        ${MOCK.doctors.slice(0, 5).map(d => `
          <div style="display:flex;align-items:center;gap:var(--sp-3);padding:var(--sp-2) 0;border-bottom:1px solid var(--border);">
            <div class="avatar avatar-sm">${d.name.charAt(4)}</div>
            <div style="flex:1;">
              <div style="font-size:var(--fs-sm);font-weight:var(--fw-medium);">${d.name}</div>
              <div style="font-size:var(--fs-xs);color:var(--text-muted);">${d.role}</div>
            </div>
            <span style="font-size:var(--fs-sm);font-weight:var(--fw-semibold);">${Math.floor(Math.random() * 10 + 3)} cases</span>
          </div>
        `).join('')}
      </div>
    </div>

    ${role === 'hod' ? `
    <div class="card mt-6">
      <div class="card-header">
        <div class="card-title">🔍 Audit Trail — Recent Changes</div>
      </div>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-time">Today, 09:15 AM</div>
          <div class="timeline-text">Dr. SriRam V approved treatment plan for <b>Ramesh Kumar</b></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot" style="background:var(--warning);box-shadow:0 0 0 2px var(--warning-bg);"></div>
          <div class="timeline-time">Yesterday, 04:30 PM</div>
          <div class="timeline-text">Dr. Nithi G revised diagnosis for <b>Lakshmi Devi</b> — changed from "Pulpitis" to "Reversible Pulpitis"</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot" style="background:var(--success);box-shadow:0 0 0 2px var(--success-bg);"></div>
          <div class="timeline-time">Yesterday, 02:00 PM</div>
          <div class="timeline-text">Consent signed for <b>Mohan Das</b> — Scaling & Root Planing</div>
        </div>
      </div>
    </div>` : ''}`;
}

function dashboardOPIncharge() {
  const q = MOCK.queue;
  return `
    <div class="page-header">
      <div>
        <h1>OP Dashboard 🏥</h1>
        <p class="text-secondary mb-0" style="margin-bottom:0;">Live patient queue and operations</p>
      </div>
      <div class="page-header-actions">
        <button class="btn btn-primary" onclick="navigateTo('vital-signs')"><i data-lucide="heart-pulse" style="width:16px;height:16px;"></i> Record Vitals</button>
        <button class="btn btn-secondary" onclick="navigateTo('patient-register')"><i data-lucide="user-plus" style="width:16px;height:16px;"></i> New Patient</button>
      </div>
    </div>

    <div class="grid grid-4 gap-4 mb-6">
      <div class="kpi-card kpi-warning">
        <div class="kpi-icon icon-warning"><i data-lucide="clock" style="width:20px;height:20px;"></i></div>
        <div class="kpi-label">Waiting</div>
        <div class="kpi-value">${q.waiting.length}</div>
      </div>
      <div class="kpi-card kpi-info">
        <div class="kpi-icon icon-info"><i data-lucide="stethoscope" style="width:20px;height:20px;"></i></div>
        <div class="kpi-label">In Consultation</div>
        <div class="kpi-value">${q.inConsultation.length}</div>
      </div>
      <div class="kpi-card kpi-success">
        <div class="kpi-icon icon-success"><i data-lucide="check-circle" style="width:20px;height:20px;"></i></div>
        <div class="kpi-label">Completed</div>
        <div class="kpi-value">${q.completed.length}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon icon-primary"><i data-lucide="timer" style="width:20px;height:20px;"></i></div>
        <div class="kpi-label">Avg Wait Time</div>
        <div class="kpi-value">18m</div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="card-title">🔴 Live Patient Queue</div>
        <button class="btn btn-sm btn-primary" onclick="navigateTo('queue-mgmt')">Manage Queue</button>
      </div>
      <table>
        <thead><tr><th>Token</th><th>Patient</th><th>Type</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          ${q.inConsultation.map(p => `<tr>
            <td><b>${p.token}</b></td><td>${p.name}</td><td>${p.visitType || '—'}</td>
            <td><span class="badge badge-treatment">In Consultation</span></td>
            <td><button class="btn btn-sm btn-ghost">View</button></td>
          </tr>`).join('')}
          ${q.waiting.map(p => `<tr>
            <td><b>${p.token}</b></td><td>${p.name}</td><td>${p.visitType || '—'}</td>
            <td><span class="badge badge-pending">Waiting</span></td>
            <td><button class="btn btn-sm btn-primary">Call</button></td>
          </tr>`).join('')}
          ${q.completed.map(p => `<tr style="opacity:0.6;">
            <td><b>${p.token}</b></td><td>${p.name}</td><td>${p.visitType || '—'}</td>
            <td><span class="badge badge-completed">Done</span></td>
            <td><button class="btn btn-sm btn-ghost">View</button></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

function dashboardReception() {
  return `
    <div class="page-header">
      <div>
        <h1>Reception Dashboard 🖥️</h1>
        <p class="text-secondary mb-0" style="margin-bottom:0;">Patient registration and appointments</p>
      </div>
      <div class="page-header-actions">
        <button class="btn btn-primary" onclick="navigateTo('patient-register')"><i data-lucide="user-plus" style="width:16px;height:16px;"></i> New Registration</button>
      </div>
    </div>
    <div class="grid grid-4 gap-4 mb-6">
      <div class="kpi-card">
        <div class="kpi-icon icon-primary"><i data-lucide="user-plus" style="width:20px;height:20px;"></i></div>
        <div class="kpi-label">New Today</div>
        <div class="kpi-value">5</div>
      </div>
      <div class="kpi-card kpi-info">
        <div class="kpi-icon icon-info"><i data-lucide="calendar" style="width:20px;height:20px;"></i></div>
        <div class="kpi-label">Appointments Today</div>
        <div class="kpi-value">${MOCK.appointments.filter(a => a.date === '2026-02-16').length}</div>
      </div>
      <div class="kpi-card kpi-warning">
        <div class="kpi-icon icon-warning"><i data-lucide="clock" style="width:20px;height:20px;"></i></div>
        <div class="kpi-label">In Queue</div>
        <div class="kpi-value">${MOCK.queue.waiting.length}</div>
      </div>
      <div class="kpi-card kpi-success">
        <div class="kpi-icon icon-success"><i data-lucide="users" style="width:20px;height:20px;"></i></div>
        <div class="kpi-label">Total Patients</div>
        <div class="kpi-value">${MOCK.patients.length}</div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="card-title">Today's Appointments</div>
        <button class="btn btn-ghost btn-sm" onclick="navigateTo('appointments')">View Calendar →</button>
      </div>
      <table>
        <thead><tr><th>Time</th><th>Patient</th><th>Doctor</th><th>Type</th><th>Status</th></tr></thead>
        <tbody>
          ${MOCK.appointments.filter(a => a.date === '2026-02-16').map(a => `
            <tr><td>${a.time}</td><td><b style="color:var(--text)">${a.patient}</b></td><td>Dr. ${a.doctor}</td><td>${a.type}</td>
            <td><span class="badge ${a.status === 'Waiting' ? 'badge-pending' : a.status === 'Completed' ? 'badge-completed' : 'badge-treatment'}">${a.status}</span></td></tr>
          `).join('')}
        </tbody>
      </table>
    </div>`;
}

function dashboardRadiology() {
  return `
    <div class="page-header">
      <div>
        <h1>Radiology Dashboard 📸</h1>
        <p class="text-secondary mb-0" style="margin-bottom:0;">Imaging requests and reporting</p>
      </div>
    </div>
    <div class="grid grid-4 gap-4 mb-6">
      <div class="kpi-card kpi-accent">
        <div class="kpi-icon icon-accent"><i data-lucide="scan-line" style="width:20px;height:20px;"></i></div>
        <div class="kpi-label">Pending Requests</div>
        <div class="kpi-value">${MOCK.investigations.filter(i => i.status === 'Requested').length}</div>
      </div>
      <div class="kpi-card kpi-info">
        <div class="kpi-icon icon-info"><i data-lucide="loader" style="width:20px;height:20px;"></i></div>
        <div class="kpi-label">In Progress</div>
        <div class="kpi-value">${MOCK.investigations.filter(i => i.status === 'In Progress').length}</div>
      </div>
      <div class="kpi-card kpi-success">
        <div class="kpi-icon icon-success"><i data-lucide="check-circle" style="width:20px;height:20px;"></i></div>
        <div class="kpi-label">Completed Today</div>
        <div class="kpi-value">${MOCK.investigations.filter(i => i.status === 'Completed').length}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon icon-primary"><i data-lucide="image" style="width:20px;height:20px;"></i></div>
        <div class="kpi-label">Total This Week</div>
        <div class="kpi-value">18</div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="card-title">🔴 Urgent Imaging Requests</div>
        <button class="btn btn-ghost btn-sm" onclick="navigateTo('radiology-queue')">View All →</button>
      </div>
      <table>
        <thead><tr><th>Patient</th><th>Type</th><th>Tooth</th><th>Indication</th><th>Priority</th><th>Action</th></tr></thead>
        <tbody>
          ${MOCK.investigations.filter(i => i.status !== 'Completed').map(inv => `
            <tr>
              <td><b style="color:var(--text)">${inv.patientName}</b></td>
              <td>${inv.type}</td><td>${inv.tooth}</td><td>${inv.indication}</td>
              <td><span class="badge ${inv.urgency === 'Urgent' ? 'badge-urgent' : 'badge-routine'}">${inv.urgency}</span></td>
              <td><button class="btn btn-sm btn-primary">Start</button></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>`;
}
