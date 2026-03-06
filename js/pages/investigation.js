// ============================================
// DENTAL OPD — Investigation Orders
// ============================================

<<<<<<< HEAD
let investigationPriorityFirst = false;

function investigationUrgencyRank(level) {
    const order = { Emergency: 0, Urgent: 1, Routine: 2 };
    return order[level] ?? 3;
}

function sortInvestigationsByPriority(items) {
    return [...items].sort((a, b) => {
        const urgencyDiff = investigationUrgencyRank(a.urgency) - investigationUrgencyRank(b.urgency);
        if (urgencyDiff !== 0) return urgencyDiff;
        return a.id.localeCompare(b.id);
    });
}

function toggleInvestigationPriority() {
    investigationPriorityFirst = !investigationPriorityFirst;
    navigateTo('investigation');
}

function renderInvestigation(role, params) {
    const p = getActivePatient(params);
    const investigations = investigationPriorityFirst
        ? sortInvestigationsByPriority(MOCK.investigations)
        : MOCK.investigations;

=======
function renderInvestigation() {
>>>>>>> origin/main
    return `
    <div class="page-header">
      <div>
        <h1>Investigations</h1>
<<<<<<< HEAD
        <p class="text-secondary" style="margin-bottom:0;">Order and track radiographs and lab tests â€¢ Patient context: ${p.name} (${p.uhid})</p>
      </div>
      <div class="page-header-actions">
        <button class="btn ${investigationPriorityFirst ? 'btn-primary' : 'btn-secondary'}" onclick="toggleInvestigationPriority()">
          <i data-lucide="arrow-up-down" style="width:16px;height:16px;"></i>
          Priority First: ${investigationPriorityFirst ? 'On' : 'Off'}
        </button>
=======
        <p class="text-secondary" style="margin-bottom:0;">Order and track radiographs and lab tests</p>
      </div>
      <div class="page-header-actions">
>>>>>>> origin/main
        <button class="btn btn-primary" onclick="document.getElementById('new-inv-section').classList.toggle('hidden')"><i data-lucide="plus" style="width:16px;height:16px;"></i> New Investigation</button>
      </div>
    </div>

    <!-- New Investigation Form (hidden by default) -->
    <div class="form-section hidden" id="new-inv-section">
      <div class="form-section-title"><i data-lucide="microscope" style="width:18px;height:18px;color:var(--primary);"></i> New Investigation Request</div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Patient <span class="required">*</span></label>
          <select class="form-select">
<<<<<<< HEAD
            ${MOCK.patients.map(pt => `<option ${pt.id === p.id ? 'selected' : ''}>${pt.name} (${pt.uhid})</option>`).join('')}
=======
            ${MOCK.patients.map(p => `<option>${p.name} (${p.uhid})</option>`).join('')}
>>>>>>> origin/main
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Investigation Type <span class="required">*</span></label>
          <select class="form-select">
            <option>RVG/IOPA</option>
            <option>OPG (Orthopantomogram)</option>
            <option>CBCT</option>
            <option>Lateral Cephalogram</option>
            <option>Occlusal Radiograph</option>
            <option>Blood Test — CBC</option>
            <option>Blood Test — RBS</option>
            <option>Blood Test — Bleeding/Clotting Time</option>
            <option>Biopsy</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Urgency</label>
          <select class="form-select">
            <option>Routine</option>
            <option>Urgent</option>
            <option>Emergency</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Tooth / Region</label>
          <input type="text" class="form-input" placeholder="e.g., #46, Lower right">
        </div>
        <div class="form-group">
          <label class="form-label">Clinical Indication <span class="required">*</span></label>
          <input type="text" class="form-input" placeholder="Reason for investigation">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Additional Instructions</label>
        <textarea class="form-textarea" rows="2" placeholder="Special instructions for radiology..."></textarea>
      </div>
      <div style="display:flex;gap:var(--sp-3);justify-content:flex-end;">
        <button class="btn btn-secondary" onclick="document.getElementById('new-inv-section').classList.add('hidden')">Cancel</button>
        <button class="btn btn-primary">Submit Request</button>
      </div>
    </div>

    <!-- Investigation Table -->
    <div class="table-wrapper">
      <div class="table-toolbar">
        <div class="table-toolbar-left">
          <input type="text" class="form-input" style="width:250px;" placeholder="Search investigations...">
          <select class="form-select" style="width:130px;padding:var(--sp-2) var(--sp-3);">
            <option>All Status</option>
            <option>Requested</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>
      </div>
      <table>
        <thead>
          <tr><th>ID</th><th>Patient</th><th>Type</th><th>Tooth</th><th>Indication</th><th>Priority</th><th>Status</th><th>Action</th></tr>
        </thead>
        <tbody>
<<<<<<< HEAD
          ${investigations.map(inv => `
=======
          ${MOCK.investigations.map(inv => `
>>>>>>> origin/main
            <tr>
              <td><code style="font-size:var(--fs-xs);background:var(--bg);padding:2px 6px;border-radius:var(--radius-sm);">${inv.id}</code></td>
              <td><b style="color:var(--text)">${inv.patientName}</b></td>
              <td>${inv.type}</td>
              <td>${inv.tooth}</td>
              <td>${inv.indication}</td>
<<<<<<< HEAD
              <td><span class="badge ${['Urgent', 'Emergency'].includes(inv.urgency) ? 'badge-urgent' : 'badge-routine'}">${inv.urgency}</span></td>
=======
              <td><span class="badge ${inv.urgency === 'Urgent' ? 'badge-urgent' : 'badge-routine'}">${inv.urgency}</span></td>
>>>>>>> origin/main
              <td><span class="badge ${inv.status === 'Completed' ? 'badge-completed' : inv.status === 'In Progress' ? 'badge-treatment' : 'badge-pending'}">${inv.status}</span></td>
              <td>
                ${inv.status === 'Completed'
            ? `<button class="btn btn-sm btn-secondary"><i data-lucide="eye" style="width:14px;height:14px;"></i> Report</button>`
            : `<button class="btn btn-sm btn-ghost">Track</button>`}
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>`;
}
