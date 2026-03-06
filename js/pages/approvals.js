// ============================================
// DENTAL OPD — Approvals Page
// ============================================

let approvalsPriorityFirst = false;

function approvalUrgencyRank(level) {
    const order = { Emergency: 0, Urgent: 1, Routine: 2 };
    return order[level] ?? 3;
}

function sortApprovalsByPriority(items) {
    return [...items].sort((a, b) => {
        const urgencyDiff = approvalUrgencyRank(a.urgency) - approvalUrgencyRank(b.urgency);
        if (urgencyDiff !== 0) return urgencyDiff;
        return a.id.localeCompare(b.id);
    });
}

function toggleApprovalsPriority() {
    approvalsPriorityFirst = !approvalsPriorityFirst;
    navigateTo('approvals');
}

function renderApprovals() {
    const pendingApprovals = approvalsPriorityFirst
        ? sortApprovalsByPriority(MOCK.approvals)
        : MOCK.approvals;

    return `
    <div class="page-header">
      <div>
        <h1>Approvals</h1>
        <p class="text-secondary" style="margin-bottom:0;">Review and approve pending clinical actions</p>
      </div>
      <div class="page-header-actions">
        <button class="btn ${approvalsPriorityFirst ? 'btn-primary' : 'btn-secondary'}" onclick="toggleApprovalsPriority()">
          <i data-lucide="arrow-up-down" style="width:16px;height:16px;"></i>
          Priority First: ${approvalsPriorityFirst ? 'On' : 'Off'}
        </button>
      </div>
    </div>

    <!-- Stats -->
    <div class="grid grid-4 gap-4 mb-5">
      <div class="kpi-card">
        <div class="kpi-label">Pending</div>
        <div class="kpi-value" style="color:var(--warning);">${MOCK.approvals.length}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Approved Today</div>
        <div class="kpi-value" style="color:var(--success);">8</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Rejected</div>
        <div class="kpi-value" style="color:var(--danger);">1</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Avg. Turnaround</div>
        <div class="kpi-value">2.3h</div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="tabs" id="approval-tabs">
      <button class="tab active" data-tab="appr-pending" onclick="switchApprovalTab('appr-pending')">Pending (${MOCK.approvals.length})</button>
      <button class="tab" data-tab="appr-history" onclick="switchApprovalTab('appr-history')">History</button>
    </div>

    <!-- Pending Approvals -->
    <div class="tab-content active" id="tab-appr-pending">
      ${pendingApprovals.map(a => `
        <div class="card mb-3" style="border-left:3px solid var(--warning);">
          <div style="display:flex;justify-content:space-between;align-items:start;">
            <div>
              <span class="badge badge-pending mb-2">${a.type}</span>
              <div class="fw-semibold">${a.patient}</div>
              <div class="fs-xs text-muted">UHID: ${a.uhid} • Submitted by ${a.submittedBy}</div>
            </div>
            <div class="text-right">
              <span class="fs-xs text-muted">${a.date}</span>
              <span class="badge ${['Urgent', 'Emergency'].includes(a.urgency) ? 'badge-urgent' : 'badge-routine'} ml-2">${a.urgency}</span>
            </div>
          </div>
          <div style="background:var(--bg);padding:var(--sp-3);border-radius:var(--radius);margin-top:var(--sp-3);">
            <div class="fs-sm"><b>Summary:</b> ${a.summary}</div>
          </div>
          <div style="display:flex;gap:var(--sp-3);margin-top:var(--sp-3);justify-content:flex-end;">
            <button class="btn btn-ghost btn-sm">View Full Case</button>
            <button class="btn btn-secondary btn-sm" style="color:var(--danger);border-color:var(--danger);"><i data-lucide="x" style="width:14px;height:14px;"></i> Reject</button>
            <button class="btn btn-primary btn-sm"><i data-lucide="check" style="width:14px;height:14px;"></i> Approve</button>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- History -->
    <div class="tab-content" id="tab-appr-history">
      <div class="table-wrapper">
        <table>
          <thead><tr><th>Date</th><th>Type</th><th>Patient</th><th>Submitted By</th><th>Decision</th><th>By</th></tr></thead>
          <tbody>
            <tr><td>Feb 14</td><td>Prescription</td><td>Kavitha R</td><td>Dr. Diva C</td><td><span class="badge badge-completed">Approved</span></td><td>Dr. SriRam V</td></tr>
            <tr><td>Feb 14</td><td>Diagnosis</td><td>Suresh M</td><td>Dr. Praneeth K</td><td><span class="badge badge-completed">Approved</span></td><td>Dr. SriRam V</td></tr>
            <tr><td>Feb 13</td><td>Treatment Plan</td><td>Lakshmi V</td><td>Dr. Diva C</td><td><span class="badge badge-completed">Approved</span></td><td>Dr. Nithi G</td></tr>
            <tr><td>Feb 13</td><td>Prescription</td><td>Arun P</td><td>Dr. Praneeth K</td><td><span class="badge" style="background:#FEE2E2;color:var(--danger);">Rejected</span></td><td>Dr. SriRam V</td></tr>
            <tr><td>Feb 12</td><td>Investigation</td><td>Ramesh K</td><td>Dr. Diva C</td><td><span class="badge badge-completed">Approved</span></td><td>Dr. Nithi G</td></tr>
          </tbody>
        </table>
      </div>
    </div>`;
}

function switchApprovalTab(tabId) {
    document.querySelectorAll('#approval-tabs .tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tabId));
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
    document.getElementById('tab-' + tabId)?.classList.add('active');
}
