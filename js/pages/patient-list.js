// ============================================
// DENTAL OPD — Patient List Page
// ============================================

function renderPatientList() {
    return `
    <div class="page-header">
      <div>
        <h1>Patients</h1>
        <p class="text-secondary" style="margin-bottom:0;">Manage and view all registered patients</p>
      </div>
      <div class="page-header-actions">
        <button class="btn btn-secondary"><i data-lucide="download" style="width:16px;height:16px;"></i> Export</button>
        <button class="btn btn-primary" onclick="navigateTo('patient-register')"><i data-lucide="user-plus" style="width:16px;height:16px;"></i> New Patient</button>
      </div>
    </div>

    <div class="table-wrapper">
      <div class="table-toolbar">
        <div class="table-toolbar-left">
          <div class="table-search">
            <input type="text" placeholder="Search by name, UHID, or phone..." id="patient-search">
          </div>
          <select class="form-select" style="width:140px;padding:var(--sp-2) var(--sp-3);">
            <option>All Status</option>
            <option>Draft</option>
            <option>Under Review</option>
            <option>Pending</option>
            <option>In Treatment</option>
            <option>Completed</option>
          </select>
        </div>
        <div style="font-size:var(--fs-sm);color:var(--text-muted);">
          Showing <b>${MOCK.patients.length}</b> patients
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>UHID</th>
            <th>Age/Gender</th>
            <th>Phone</th>
            <th>Chief Complaint</th>
            <th>Last Visit</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${MOCK.patients.map(p => `
            <tr>
              <td>
                <div style="display:flex;align-items:center;gap:var(--sp-2);">
                  <div class="avatar avatar-sm">${p.name.charAt(0)}</div>
                  <b style="color:var(--text)">${p.name}</b>
                </div>
              </td>
              <td><code style="font-size:var(--fs-xs);background:var(--bg);padding:2px 6px;border-radius:var(--radius-sm);">${p.uhid}</code></td>
              <td>${p.age}/${p.gender}</td>
              <td>${p.phone}</td>
              <td class="truncate" style="max-width:200px;">${p.chiefComplaint}</td>
              <td>${formatDate(p.lastVisit)}</td>
              <td>${statusBadge(p.status)}</td>
              <td>
                <button class="btn btn-sm btn-secondary" onclick="navigateTo('patient-profile', {id:'${p.id}'})">
                  <i data-lucide="eye" style="width:14px;height:14px;"></i> View
                </button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <div class="table-footer">
        <span>Showing 1–${MOCK.patients.length} of ${MOCK.patients.length}</span>
        <div class="pagination">
          <button>‹</button>
          <button class="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>›</button>
        </div>
      </div>
    </div>`;
}
