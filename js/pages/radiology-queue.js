// ============================================
// DENTAL OPD — Radiology Imaging Queue
// ============================================

function renderRadiologyQueue() {
    return `
    <div class="page-header">
      <div>
        <h1>Imaging Requests</h1>
        <p class="text-secondary" style="margin-bottom:0;">Manage radiology imaging requests and reports</p>
      </div>
    </div>

    <!-- Tabs -->
    <div class="tabs" id="rad-tabs">
      <button class="tab active" data-tab="rad-pending" onclick="switchRadTab('rad-pending')">Pending (${MOCK.investigations.filter(i => i.status === 'Requested').length})</button>
      <button class="tab" data-tab="rad-progress" onclick="switchRadTab('rad-progress')">In Progress (${MOCK.investigations.filter(i => i.status === 'In Progress').length})</button>
      <button class="tab" data-tab="rad-completed" onclick="switchRadTab('rad-completed')">Completed (${MOCK.investigations.filter(i => i.status === 'Completed').length})</button>
    </div>

    <!-- Pending -->
    <div class="tab-content active" id="tab-rad-pending">
      ${MOCK.investigations.filter(i => i.status === 'Requested').map(inv => `
        <div class="card mb-3" style="border-left:3px solid var(--accent);">
          <div style="display:flex;justify-content:space-between;align-items:start;">
            <div>
              <div class="fw-semibold">${inv.patientName}</div>
              <div class="fs-xs text-muted">${inv.id} • Requested by ${inv.requestedBy}</div>
            </div>
            <span class="badge ${inv.urgency === 'Urgent' ? 'badge-urgent' : 'badge-routine'}">${inv.urgency}</span>
          </div>
          <div class="grid grid-3 gap-3 mt-3">
            <div><span class="text-muted fs-xs">Type</span><div class="fs-sm fw-medium">${inv.type}</div></div>
            <div><span class="text-muted fs-xs">Tooth/Region</span><div class="fs-sm fw-medium">${inv.tooth}</div></div>
            <div><span class="text-muted fs-xs">Indication</span><div class="fs-sm fw-medium">${inv.indication}</div></div>
          </div>
          <div style="display:flex;gap:var(--sp-3);margin-top:var(--sp-3);">
            <button class="btn btn-primary btn-sm"><i data-lucide="play" style="width:14px;height:14px;"></i> Start Imaging</button>
            <button class="btn btn-secondary btn-sm">View Details</button>
          </div>
        </div>
      `).join('') || '<div class="empty-state"><div class="empty-state-icon">✅</div><h3>No Pending Requests</h3></div>'}
    </div>

    <!-- In Progress -->
    <div class="tab-content" id="tab-rad-progress">
      ${MOCK.investigations.filter(i => i.status === 'In Progress').map(inv => `
        <div class="card mb-3" style="border-left:3px solid var(--info);">
          <div style="display:flex;justify-content:space-between;align-items:start;">
            <div>
              <div class="fw-semibold">${inv.patientName}</div>
              <div class="fs-xs text-muted">${inv.id} • ${inv.type}</div>
            </div>
            <span class="badge badge-treatment">In Progress</span>
          </div>
          <div class="grid grid-3 gap-3 mt-3">
            <div><span class="text-muted fs-xs">Type</span><div class="fs-sm fw-medium">${inv.type}</div></div>
            <div><span class="text-muted fs-xs">Tooth</span><div class="fs-sm fw-medium">${inv.tooth}</div></div>
            <div><span class="text-muted fs-xs">Indication</span><div class="fs-sm fw-medium">${inv.indication}</div></div>
          </div>
          <div style="display:flex;gap:var(--sp-3);margin-top:var(--sp-3);">
            <button class="btn btn-primary btn-sm"><i data-lucide="upload" style="width:14px;height:14px;"></i> Upload Image & Report</button>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Completed -->
    <div class="tab-content" id="tab-rad-completed">
      ${MOCK.investigations.filter(i => i.status === 'Completed').map(inv => `
        <div class="card mb-3" style="border-left:3px solid var(--success);">
          <div style="display:flex;justify-content:space-between;align-items:start;">
            <div>
              <div class="fw-semibold">${inv.patientName}</div>
              <div class="fs-xs text-muted">${inv.id} • ${inv.type}</div>
            </div>
            <span class="badge badge-completed">Completed</span>
          </div>
          <div class="grid grid-3 gap-3 mt-3">
            <div><span class="text-muted fs-xs">Type</span><div class="fs-sm fw-medium">${inv.type}</div></div>
            <div><span class="text-muted fs-xs">Tooth</span><div class="fs-sm fw-medium">${inv.tooth}</div></div>
            <div><span class="text-muted fs-xs">Finding</span><div class="fs-sm fw-medium">Periapical radiolucency noted</div></div>
          </div>
          <div style="display:flex;gap:var(--sp-3);margin-top:var(--sp-3);">
            <button class="btn btn-secondary btn-sm"><i data-lucide="eye" style="width:14px;height:14px;"></i> View Report</button>
            <button class="btn btn-ghost btn-sm"><i data-lucide="download" style="width:14px;height:14px;"></i> Download</button>
          </div>
        </div>
      `).join('')}
    </div>`;
}

function switchRadTab(tabId) {
    document.querySelectorAll('#rad-tabs .tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tabId));
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
    document.getElementById('tab-' + tabId)?.classList.add('active');
}
