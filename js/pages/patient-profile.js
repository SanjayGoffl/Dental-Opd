// ============================================
// DENTAL OPD — Patient Profile Page
// ============================================

function renderPatientProfile(role, params) {
<<<<<<< HEAD
    const p = getActivePatient(params);
    const doc = MOCK.doctors.find(d => d.id === p.assignedTo);

    return `
=======
  const pid = params?.id || 'P001';
  const p = MOCK.patients.find(pt => pt.id === pid) || MOCK.patients[0];
  const doc = MOCK.doctors.find(d => d.id === p.assignedTo);

  return `
>>>>>>> origin/main
    <!-- Profile Header -->
    <div class="profile-header">
      <div class="profile-avatar">${p.name.charAt(0)}</div>
      <div class="profile-info">
        <div class="profile-name">${p.name}</div>
        <div class="profile-meta">
          <span class="profile-meta-item"><i data-lucide="hash" style="width:14px;height:14px;"></i> ${p.uhid}</span>
          <span class="profile-meta-item"><i data-lucide="user" style="width:14px;height:14px;"></i> ${p.age}/${p.gender}</span>
          <span class="profile-meta-item"><i data-lucide="phone" style="width:14px;height:14px;"></i> ${p.phone}</span>
          <span class="profile-meta-item"><i data-lucide="droplets" style="width:14px;height:14px;"></i> ${p.bloodGroup}</span>
          ${p.allergies.length ? `<span class="profile-meta-item text-danger"><i data-lucide="alert-triangle" style="width:14px;height:14px;"></i> Allergies: ${p.allergies.join(', ')}</span>` : ''}
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:var(--sp-2);align-items:flex-end;">
        ${statusBadge(p.status)}
        ${doc ? `<span style="font-size:var(--fs-xs);color:var(--text-muted);">Assigned: ${doc.name}</span>` : ''}
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="flex gap-3 mb-6 flex-wrap">
<<<<<<< HEAD
      <button class="btn btn-primary" onclick="navigateTo('case-history', {id:'${p.id}'})"><i data-lucide="file-plus" style="width:16px;height:16px;"></i> Case History</button>
      <button class="btn btn-secondary" onclick="navigateTo('clinical-exam', {id:'${p.id}'})"><i data-lucide="stethoscope" style="width:16px;height:16px;"></i> Clinical Exam</button>
      <button class="btn btn-secondary" onclick="navigateTo('dental-chart', {id:'${p.id}'})"><i data-lucide="scan" style="width:16px;height:16px;"></i> Dental Chart</button>
      <button class="btn btn-secondary" onclick="navigateTo('investigation', {id:'${p.id}'})"><i data-lucide="microscope" style="width:16px;height:16px;"></i> Investigation</button>
      <button class="btn btn-secondary" onclick="navigateTo('prescription', {id:'${p.id}'})"><i data-lucide="pill" style="width:16px;height:16px;"></i> Prescription</button>
=======
      <button class="btn btn-primary" onclick="navigateTo('case-history')"><i data-lucide="file-plus" style="width:16px;height:16px;"></i> Case History</button>
      <button class="btn btn-secondary" onclick="navigateTo('clinical-exam')"><i data-lucide="stethoscope" style="width:16px;height:16px;"></i> Clinical Exam</button>
      <button class="btn btn-secondary" onclick="navigateTo('dental-chart')"><i data-lucide="scan" style="width:16px;height:16px;"></i> Dental Chart</button>
      <button class="btn btn-secondary" onclick="navigateTo('investigation')"><i data-lucide="microscope" style="width:16px;height:16px;"></i> Investigation</button>
      <button class="btn btn-secondary" onclick="navigateTo('prescription')"><i data-lucide="pill" style="width:16px;height:16px;"></i> Prescription</button>
>>>>>>> origin/main
    </div>

    <!-- Tabs -->
    <div class="tabs" id="profile-tabs">
      <button class="tab active" data-tab="overview" onclick="switchProfileTab('overview')">Overview</button>
      <button class="tab" data-tab="history" onclick="switchProfileTab('history')">Medical History</button>
      <button class="tab" data-tab="visits" onclick="switchProfileTab('visits')">Visit Log</button>
      <button class="tab" data-tab="documents" onclick="switchProfileTab('documents')">Documents</button>
    </div>

    <!-- Tab: Overview -->
    <div class="tab-content active" id="tab-overview">
      <div class="grid grid-2 gap-4">
        <div class="card">
          <div class="card-title mb-4">📋 Current Case Summary</div>
          <div style="display:flex;flex-direction:column;gap:var(--sp-3);">
            <div>
              <div style="font-size:var(--fs-xs);color:var(--text-muted);text-transform:uppercase;">Chief Complaint</div>
              <div style="font-size:var(--fs-sm);font-weight:var(--fw-medium);">${p.chiefComplaint}</div>
            </div>
            <div>
              <div style="font-size:var(--fs-xs);color:var(--text-muted);text-transform:uppercase;">Provisional Diagnosis</div>
              <div style="font-size:var(--fs-sm);font-weight:var(--fw-medium);">Irreversible Pulpitis w.r.t. #46</div>
            </div>
            <div>
              <div style="font-size:var(--fs-xs);color:var(--text-muted);text-transform:uppercase;">Treatment Plan</div>
              <div style="font-size:var(--fs-sm);font-weight:var(--fw-medium);">Root Canal Treatment + Crown</div>
            </div>
            <div>
              <div style="font-size:var(--fs-xs);color:var(--text-muted);text-transform:uppercase;">Next Appointment</div>
              <div style="font-size:var(--fs-sm);font-weight:var(--fw-medium);">Feb 20, 2026 – 10:00 AM</div>
            </div>
          </div>
        </div>

        <div class="card">
<<<<<<< HEAD
          <div class="card-title mb-4">🩺 Personal Details</div>
=======
          <div class="card-title mb-4">Personal Details</div>
>>>>>>> origin/main
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-3);">
            <div><span class="text-muted fs-xs">Full Name</span><div class="fs-sm fw-medium">${p.name}</div></div>
            <div><span class="text-muted fs-xs">Age / Gender</span><div class="fs-sm fw-medium">${p.age} yrs / ${p.gender === 'M' ? 'Male' : 'Female'}</div></div>
            <div><span class="text-muted fs-xs">Blood Group</span><div class="fs-sm fw-medium">${p.bloodGroup}</div></div>
            <div><span class="text-muted fs-xs">Phone</span><div class="fs-sm fw-medium">${p.phone}</div></div>
            <div style="grid-column:span 2;"><span class="text-muted fs-xs">Address</span><div class="fs-sm fw-medium">${p.address}</div></div>
          </div>
        </div>
      </div>

      <!-- Workflow Timeline -->
      <div class="card mt-4">
        <div class="card-title mb-4">📑 Case Workflow Progress</div>
        <div style="display:flex;gap:var(--sp-1);align-items:center;">
          ${['Registration', 'Case History', 'Clinical Exam', 'Investigation', 'Diagnosis', 'Treatment', 'Consent', 'Rx', 'Complete'].map((step, i) => {
<<<<<<< HEAD
        const done = i < 4;
        const current = i === 4;
        return `
=======
    const done = i < 4;
    const current = i === 4;
    return `
>>>>>>> origin/main
              <div style="flex:1;text-align:center;">
                <div style="height:4px;background:${done ? 'var(--primary)' : current ? 'var(--warning)' : 'var(--border)'};border-radius:var(--radius-full);margin-bottom:var(--sp-1);"></div>
                <span style="font-size:0.625rem;color:${done ? 'var(--primary)' : current ? 'var(--warning)' : 'var(--text-muted)'};font-weight:${current ? '600' : '400'};">${step}</span>
              </div>`;
<<<<<<< HEAD
    }).join('')}
=======
  }).join('')}
>>>>>>> origin/main
        </div>
      </div>
    </div>

    <!-- Tab: Medical History -->
    <div class="tab-content" id="tab-history">
      <div class="grid grid-2 gap-4">
        <div class="card">
          <div class="card-title mb-4">Past Medical History</div>
          <div style="display:flex;flex-direction:column;gap:var(--sp-2);">
            <div class="flex items-center gap-2"><span style="width:8px;height:8px;border-radius:50%;background:${p.pmh.htn ? 'var(--danger)' : 'var(--success)'};"></span><span class="fs-sm">Hypertension: ${p.pmh.htn ? 'Yes' : 'No'}</span></div>
            <div class="flex items-center gap-2"><span style="width:8px;height:8px;border-radius:50%;background:${p.pmh.dm ? 'var(--danger)' : 'var(--success)'};"></span><span class="fs-sm">Diabetes Mellitus: ${p.pmh.dm ? 'Yes' : 'No'}</span></div>
            <div class="flex items-center gap-2"><span style="width:8px;height:8px;border-radius:50%;background:${p.pmh.cad ? 'var(--danger)' : 'var(--success)'};"></span><span class="fs-sm">Cardiac Disease: ${p.pmh.cad ? 'Yes' : 'No'}</span></div>
          </div>
        </div>
        <div class="card">
          <div class="card-title mb-4">Allergies & Medications</div>
          <div class="mb-3">
            <span class="text-muted fs-xs">Known Allergies</span>
            <div class="mt-1">${p.allergies.length ? p.allergies.map(a => `<span class="badge badge-rejected">${a}</span>`).join(' ') : '<span class="badge badge-completed">None Known</span>'}</div>
          </div>
          <div>
            <span class="text-muted fs-xs">Current Medications</span>
            <div class="fs-sm mt-1">${p.pmh.htn ? 'Amlodipine 5mg OD' : 'None reported'}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tab: Visit Log -->
    <div class="tab-content" id="tab-visits">
      <div class="card">
        <div class="card-title mb-4">Visit History</div>
        <table>
          <thead><tr><th>Date</th><th>Type</th><th>Doctor</th><th>Diagnosis</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>${formatDate(p.lastVisit)}</td><td>Follow-up</td><td>${doc?.name || '—'}</td><td>Irreversible Pulpitis #46</td><td>${statusBadge(p.status)}</td></tr>
            <tr><td>${formatDate('2026-02-10')}</td><td>New</td><td>${doc?.name || '—'}</td><td>Initial Assessment</td><td>${statusBadge('completed')}</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Tab: Documents -->
    <div class="tab-content" id="tab-documents">
      <div class="card">
        <div class="card-title mb-4">Uploaded Documents</div>
        <div class="empty-state">
          <div class="empty-state-icon">📄</div>
          <h3>No Documents Uploaded</h3>
          <p>Upload patient documents like referral letters, previous reports, or ID proofs.</p>
          <button class="btn btn-primary mt-4"><i data-lucide="upload" style="width:16px;height:16px;"></i> Upload Document</button>
        </div>
      </div>
    </div>`;
}

function switchProfileTab(tabId) {
<<<<<<< HEAD
    document.querySelectorAll('#profile-tabs .tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tabId));
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
    document.getElementById('tab-' + tabId)?.classList.add('active');
=======
  document.querySelectorAll('#profile-tabs .tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tabId));
  document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
  document.getElementById('tab-' + tabId)?.classList.add('active');
>>>>>>> origin/main
}
