// ============================================
// DENTAL OPD — Queue Management
// ============================================

function renderQueueMgmt() {
  return `
    <div class="page-header">
      <div>
        <h1>Queue Management</h1>
        <p class="text-secondary" style="margin-bottom:0;">OP patient flow management board</p>
      </div>
      <div class="page-header-actions">
        <span class="fs-xs text-muted">Auto-refreshes every 30s</span>
        <button class="btn btn-secondary"><i data-lucide="refresh-cw" style="width:16px;height:16px;"></i> Refresh</button>
        <button class="btn btn-primary"><i data-lucide="plus" style="width:16px;height:16px;"></i> Add to Queue</button>
      </div>
    </div>

    <div class="queue-board">
      <!-- Waiting Column -->
      <div class="queue-column">
        <div class="queue-column-header" style="border-top:3px solid var(--warning);">
          <span>🟡 Waiting</span>
          <span class="badge">${MOCK.queue.waiting.length}</span>
        </div>
        ${MOCK.queue.waiting.map((p, i) => `
          <div class="queue-card">
            <div style="display:flex;justify-content:space-between;align-items:start;">
              <div>
                <div class="queue-card-name">${p.name}</div>
                <div class="queue-card-meta">${p.uhid} • ${p.visitType}</div>
              </div>
              <span class="queue-token">${p.token}</span>
            </div>
            <div class="queue-card-meta mt-2">
<<<<<<< HEAD
              <span>⏱ ${p.waitTime}</span>
=======
              <span>${p.waitTime}</span>
>>>>>>> origin/main
              <span class="badge ${p.urgency === 'Urgent' ? 'badge-urgent' : 'badge-routine'}">${p.urgency}</span>
            </div>
            <button class="btn btn-primary btn-sm btn-block mt-2"><i data-lucide="arrow-right" style="width:14px;height:14px;"></i> Call</button>
          </div>
        `).join('')}
      </div>

      <!-- In Consultation Column -->
      <div class="queue-column">
        <div class="queue-column-header" style="border-top:3px solid var(--primary);">
          <span>🟢 In Consultation</span>
          <span class="badge">${MOCK.queue.inConsultation.length}</span>
        </div>
        ${MOCK.queue.inConsultation.map(p => `
          <div class="queue-card" style="border-left:3px solid var(--primary);">
            <div style="display:flex;justify-content:space-between;align-items:start;">
              <div>
                <div class="queue-card-name">${p.name}</div>
                <div class="queue-card-meta">${p.uhid} • ${p.visitType}</div>
              </div>
              <span class="queue-token">${p.token}</span>
            </div>
            <div class="queue-card-meta mt-2">
<<<<<<< HEAD
              <span>👨‍⚕️ ${p.doctor}</span>
              <span>⏱ ${p.duration}</span>
=======
              <span>${p.doctor}</span>
              <span>${p.duration}</span>
>>>>>>> origin/main
            </div>
            <div class="queue-card-meta mt-1">
              <span>📍 ${p.unit || 'Unit 1'}</span>
              <span class="badge badge-treatment">${p.stage}</span>
            </div>
            <button class="btn btn-secondary btn-sm btn-block mt-2"><i data-lucide="check" style="width:14px;height:14px;"></i> Complete</button>
          </div>
        `).join('')}
      </div>

      <!-- Completed Column -->
      <div class="queue-column">
        <div class="queue-column-header" style="border-top:3px solid var(--success);">
          <span>✅ Completed</span>
          <span class="badge">${MOCK.queue.completed.length}</span>
        </div>
        ${MOCK.queue.completed.map(p => `
          <div class="queue-card" style="opacity:0.8;">
            <div style="display:flex;justify-content:space-between;align-items:start;">
              <div>
                <div class="queue-card-name">${p.name}</div>
                <div class="queue-card-meta">${p.uhid} • ${p.visitType}</div>
              </div>
              <span class="queue-token">${p.token}</span>
            </div>
            <div class="queue-card-meta mt-2">
<<<<<<< HEAD
              <span>👨‍⚕️ ${p.doctor}</span>
=======
              <span>${p.doctor}</span>
>>>>>>> origin/main
              <span class="badge badge-completed">Done</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>`;
}
