// ============================================
// DENTAL OPD — Diagnosis Page
// ============================================

function renderDiagnosis(role, params) {
    const p = getActivePatient(params);
    return `
    <div class="page-header">
      <div>
        <h1>Diagnosis</h1>
        <p class="text-secondary" style="margin-bottom:0;">Record provisional and final diagnosis</p>
      </div>
      <div class="page-header-actions">
        <button class="btn btn-secondary">Save Draft</button>
        <button class="btn btn-primary"><i data-lucide="send" style="width:16px;height:16px;"></i> Submit for Approval</button>
      </div>
    </div>

    <!-- Patient Banner -->
    <div style="display:flex;align-items:center;gap:var(--sp-4);padding:var(--sp-3) var(--sp-4);background:var(--primary-bg);border-radius:var(--radius);margin-bottom:var(--sp-5);border:1px solid var(--primary-100);">
      <div class="avatar">${p.name.charAt(0)}</div>
      <div><b>${p.name}</b> • ${p.uhid} • ${p.age}/${p.gender}</div>
      <div style="margin-left:auto;">${statusBadge(p.status)}</div>
    </div>

    <!-- Clinical Summary -->
    <div class="card mb-4">
      <div class="card-title mb-3">📋 Clinical Summary (Read-only)</div>
      <div class="grid grid-2 gap-4">
        <div>
          <span class="text-muted fs-xs">Chief Complaint</span>
          <div class="fs-sm fw-medium">${p.chiefComplaint}</div>
        </div>
        <div>
          <span class="text-muted fs-xs">Key Findings</span>
          <div class="fs-sm fw-medium">Deep carious lesion #46, negative vitality, tender on percussion</div>
        </div>
        <div>
          <span class="text-muted fs-xs">Investigation Result</span>
          <div class="fs-sm fw-medium">IOPA: Periapical radiolucency w.r.t. #46</div>
        </div>
        <div>
          <span class="text-muted fs-xs">Teeth Involved</span>
          <div class="fs-sm fw-medium">#46 (Lower Right First Molar)</div>
        </div>
      </div>
    </div>

    <!-- Provisional Diagnosis -->
    <div class="form-section">
      <div class="form-section-title"><i data-lucide="clipboard-check" style="width:18px;height:18px;color:var(--primary);"></i> Provisional Diagnosis</div>
      <div class="form-group">
        <label class="form-label">Diagnosis <span class="required">*</span></label>
        <textarea class="form-textarea" rows="2">Irreversible Pulpitis with Periapical Abscess w.r.t. #46</textarea>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">ICD-10 Code</label>
          <input type="text" class="form-input" value="K04.0 — Pulpitis" placeholder="Search ICD code...">
        </div>
        <div class="form-group">
          <label class="form-label">Tooth/Region</label>
          <input type="text" class="form-input" value="#46" placeholder="FDI notation">
        </div>
      </div>
    </div>

    <!-- Differential Diagnosis -->
    <div class="form-section">
      <div class="form-section-title"><i data-lucide="git-branch" style="width:18px;height:18px;color:var(--accent);"></i> Differential Diagnosis</div>
      <div id="diff-dx-list">
        <div style="display:flex;gap:var(--sp-3);align-items:center;margin-bottom:var(--sp-2);">
          <span style="width:24px;text-align:center;font-weight:var(--fw-semibold);color:var(--text-muted);">1.</span>
          <input type="text" class="form-input" value="Cracked Tooth Syndrome" style="flex:1;">
        </div>
        <div style="display:flex;gap:var(--sp-3);align-items:center;margin-bottom:var(--sp-2);">
          <span style="width:24px;text-align:center;font-weight:var(--fw-semibold);color:var(--text-muted);">2.</span>
          <input type="text" class="form-input" value="Periapical Cyst" style="flex:1;">
        </div>
        <div style="display:flex;gap:var(--sp-3);align-items:center;margin-bottom:var(--sp-2);">
          <span style="width:24px;text-align:center;font-weight:var(--fw-semibold);color:var(--text-muted);">3.</span>
          <input type="text" class="form-input" placeholder="Add another..." style="flex:1;">
        </div>
      </div>
      <button class="btn btn-ghost btn-sm"><i data-lucide="plus" style="width:14px;height:14px;"></i> Add Differential</button>
    </div>

    <!-- Final Diagnosis -->
    <div class="form-section">
      <div class="form-section-title"><i data-lucide="badge-check" style="width:18px;height:18px;color:var(--success);"></i> Final Diagnosis (Requires Senior Approval)</div>
      <div class="form-group">
        <label class="form-label">Final Diagnosis</label>
        <textarea class="form-textarea" rows="2" placeholder="Final diagnosis after investigation and confirmation...">Irreversible Pulpitis with Chronic Periapical Abscess w.r.t. #46</textarea>
      </div>
      <div class="form-group">
        <label class="form-label">Prognosis</label>
        <select class="form-select" style="width:200px;">
          <option>Good</option>
          <option selected>Fair</option>
          <option>Guarded</option>
          <option>Poor</option>
          <option>Hopeless</option>
        </select>
      </div>
    </div>

    <!-- Approval Status -->
    <div class="card" style="border-left:3px solid var(--warning);background:var(--warning-bg);">
      <div class="flex items-center gap-3">
        <i data-lucide="clock" style="width:20px;height:20px;color:var(--warning);"></i>
        <div>
          <div class="fw-semibold fs-sm">Pending Approval</div>
          <div class="fs-xs text-muted">Submitted to Dr. Nithi G (Senior Resident) on Feb 15, 2026</div>
        </div>
      </div>
    </div>

    <div style="display:flex;justify-content:space-between;margin-top:var(--sp-5);">
      <button class="btn btn-ghost" onclick="navigateTo('investigation', {id:'${p.id}'})">← Investigations</button>
      <div style="display:flex;gap:var(--sp-3);">
        <button class="btn btn-secondary">Save Draft</button>
        <button class="btn btn-primary btn-lg" onclick="navigateTo('treatment-plan', {id:'${p.id}'})"><i data-lucide="arrow-right" style="width:16px;height:16px;"></i> Treatment Plan</button>
      </div>
    </div>`;
}
