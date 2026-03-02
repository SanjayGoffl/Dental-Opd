// ============================================
// DENTAL OPD — Treatment Plan Page
// ============================================

function renderTreatmentPlan() {
    return `
    <div class="page-header">
      <div>
        <h1>Treatment Plan</h1>
        <p class="text-secondary" style="margin-bottom:0;">Define and manage treatment procedures</p>
      </div>
      <div class="page-header-actions">
        <button class="btn btn-secondary">Save Draft</button>
        <button class="btn btn-primary"><i data-lucide="send" style="width:16px;height:16px;"></i> Submit for Approval</button>
      </div>
    </div>

    <!-- Patient Banner -->
    <div style="display:flex;align-items:center;gap:var(--sp-4);padding:var(--sp-3) var(--sp-4);background:var(--primary-bg);border-radius:var(--radius);margin-bottom:var(--sp-5);border:1px solid var(--primary-100);">
      <div class="avatar">R</div>
      <div style="flex:1;">
        <b>Ramesh Kumar</b> • UHID-2024-001 • 45/M<br>
        <span class="fs-xs text-muted">Dx: Irreversible Pulpitis with Periapical Abscess w.r.t. #46</span>
      </div>
      ${statusBadge('approved')}
    </div>

    <!-- Treatment Steps -->
    <div class="form-section">
      <div class="form-section-title"><i data-lucide="list-checks" style="width:18px;height:18px;color:var(--primary);"></i> Treatment Procedures</div>

      <!-- Phase 1 -->
      <div class="accordion-item open">
        <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
          <span>Phase 1: Emergency / Immediate</span>
          <span class="badge badge-completed">Completed</span>
        </div>
        <div class="accordion-body">
          <table>
            <thead><tr><th>Step</th><th>Procedure</th><th>Tooth</th><th>Est. Cost</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Access Opening & Pulp Extirpation</td><td>#46</td><td>₹500</td><td><span class="badge badge-completed">Done</span></td></tr>
              <tr><td>2</td><td>Drainage & Medication</td><td>#46</td><td>₹300</td><td><span class="badge badge-completed">Done</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Phase 2 -->
      <div class="accordion-item open">
        <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
          <span>Phase 2: Definitive Treatment</span>
          <span class="badge badge-treatment">In Progress</span>
        </div>
        <div class="accordion-body">
          <table>
            <thead><tr><th>Step</th><th>Procedure</th><th>Tooth</th><th>Est. Cost</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td>3</td><td>BMP (Biomechanical Preparation)</td><td>#46</td><td>₹1,500</td><td><span class="badge badge-treatment">In Progress</span></td></tr>
              <tr><td>4</td><td>Obturation (Root Canal Filling)</td><td>#46</td><td>₹2,000</td><td><span class="badge badge-pending">Scheduled</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Phase 3 -->
      <div class="accordion-item">
        <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
          <span>Phase 3: Restorative / Prosthetic</span>
          <span class="badge badge-draft">Planned</span>
        </div>
        <div class="accordion-body">
          <table>
            <thead><tr><th>Step</th><th>Procedure</th><th>Tooth</th><th>Est. Cost</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td>5</td><td>Post & Core Build-up</td><td>#46</td><td>₹1,200</td><td><span class="badge badge-draft">Planned</span></td></tr>
              <tr><td>6</td><td>PFM Crown Cementation</td><td>#46</td><td>₹4,000</td><td><span class="badge badge-draft">Planned</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Phase 4 -->
      <div class="accordion-item">
        <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
          <span>Phase 4: Preventive / Maintenance</span>
          <span class="badge badge-draft">Planned</span>
        </div>
        <div class="accordion-body">
          <table>
            <thead><tr><th>Step</th><th>Procedure</th><th>Tooth</th><th>Est. Cost</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td>7</td><td>Full Mouth Scaling</td><td>All</td><td>₹800</td><td><span class="badge badge-draft">Planned</span></td></tr>
              <tr><td>8</td><td>Oral Hygiene Instructions</td><td>—</td><td>—</td><td><span class="badge badge-draft">Planned</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Cost Summary -->
    <div class="card">
      <div class="card-header">
        <div class="card-title">💰 Cost Summary</div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:var(--fs-sm);padding:var(--sp-2) 0;border-bottom:1px solid var(--border);">
        <span>Emergency Treatment</span><span class="fw-semibold">₹800</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:var(--fs-sm);padding:var(--sp-2) 0;border-bottom:1px solid var(--border);">
        <span>Root Canal Treatment</span><span class="fw-semibold">₹3,500</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:var(--fs-sm);padding:var(--sp-2) 0;border-bottom:1px solid var(--border);">
        <span>Crown (PFM)</span><span class="fw-semibold">₹5,200</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:var(--fs-sm);padding:var(--sp-2) 0;border-bottom:1px solid var(--border);">
        <span>Preventive Care</span><span class="fw-semibold">₹800</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:var(--fs-md);padding:var(--sp-3) 0;font-weight:var(--fw-bold);">
        <span>Total Estimated</span><span style="color:var(--primary);">₹10,300</span>
      </div>
    </div>

    <!-- Notes -->
    <div class="form-section mt-4">
      <div class="form-section-title"><i data-lucide="notepad-text" style="width:18px;height:18px;color:var(--text-muted);"></i> Treatment Notes</div>
      <div class="form-group">
        <textarea class="form-textarea" rows="3" placeholder="Special notes...">Patient informed about treatment plan and estimated costs. Consent to be obtained for RCT + Crown. Follow-up in 1 week for obturation.</textarea>
      </div>
    </div>

    <div style="display:flex;justify-content:space-between;margin-top:var(--sp-4);">
      <button class="btn btn-ghost" onclick="navigateTo('diagnosis')">← Diagnosis</button>
      <div style="display:flex;gap:var(--sp-3);">
        <button class="btn btn-secondary">Save Draft</button>
        <button class="btn btn-primary btn-lg" onclick="navigateTo('consent')"><i data-lucide="arrow-right" style="width:16px;height:16px;"></i> Consent</button>
      </div>
    </div>`;
}
