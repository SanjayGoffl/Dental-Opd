// ============================================
// DENTAL OPD — Vital Signs Page
// ============================================

function renderVitalSigns() {
    return `
    <div class="page-header">
      <div>
        <h1>Vital Signs</h1>
        <p class="text-secondary" style="margin-bottom:0;">Record patient vital parameters</p>
      </div>
    </div>

    <!-- Patient Selection -->
    <div class="form-section">
      <div class="form-section-title"><i data-lucide="user" style="width:18px;height:18px;color:var(--primary);"></i> Select Patient</div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Patient <span class="required">*</span></label>
          <select class="form-select">
            ${MOCK.patients.map(p => `<option value="${p.id}">${p.name} (${p.uhid})</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Date</label>
          <input type="date" class="form-input" value="2026-02-16">
        </div>
        <div class="form-group">
          <label class="form-label">Recorded By</label>
          <input type="text" class="form-input" value="${MOCK.roleUsers[currentRole].name}" readonly>
        </div>
      </div>
    </div>

    <!-- Vitals Grid -->
    <div class="form-section">
      <div class="form-section-title"><i data-lucide="heart-pulse" style="width:18px;height:18px;color:var(--danger);"></i> Vital Parameters</div>
      <div class="grid grid-3 gap-4">
        <div class="card" style="text-align:center;border-top:3px solid var(--danger);">
          <div style="font-size:var(--fs-xs);color:var(--text-muted);text-transform:uppercase;margin-bottom:var(--sp-2);">Blood Pressure</div>
          <div style="display:flex;gap:var(--sp-2);justify-content:center;align-items:center;">
            <input type="text" class="form-input" style="width:70px;text-align:center;" placeholder="120" value="120">
            <span class="fw-bold">/</span>
            <input type="text" class="form-input" style="width:70px;text-align:center;" placeholder="80" value="80">
          </div>
          <span class="fs-xs text-muted mt-2">mmHg</span>
        </div>
        <div class="card" style="text-align:center;border-top:3px solid var(--accent);">
          <div style="font-size:var(--fs-xs);color:var(--text-muted);text-transform:uppercase;margin-bottom:var(--sp-2);">Pulse Rate</div>
          <input type="text" class="form-input" style="width:100px;text-align:center;margin:0 auto;" placeholder="72" value="72">
          <span class="fs-xs text-muted mt-2">bpm</span>
        </div>
        <div class="card" style="text-align:center;border-top:3px solid var(--info);">
          <div style="font-size:var(--fs-xs);color:var(--text-muted);text-transform:uppercase;margin-bottom:var(--sp-2);">Temperature</div>
          <input type="text" class="form-input" style="width:100px;text-align:center;margin:0 auto;" placeholder="98.6" value="98.6">
          <span class="fs-xs text-muted mt-2">°F</span>
        </div>
        <div class="card" style="text-align:center;border-top:3px solid var(--success);">
          <div style="font-size:var(--fs-xs);color:var(--text-muted);text-transform:uppercase;margin-bottom:var(--sp-2);">SpO₂</div>
          <input type="text" class="form-input" style="width:100px;text-align:center;margin:0 auto;" placeholder="98" value="98">
          <span class="fs-xs text-muted mt-2">%</span>
        </div>
        <div class="card" style="text-align:center;border-top:3px solid var(--warning);">
          <div style="font-size:var(--fs-xs);color:var(--text-muted);text-transform:uppercase;margin-bottom:var(--sp-2);">Weight</div>
          <input type="text" class="form-input" style="width:100px;text-align:center;margin:0 auto;" placeholder="68" value="68">
          <span class="fs-xs text-muted mt-2">kg</span>
        </div>
        <div class="card" style="text-align:center;border-top:3px solid var(--primary);">
          <div style="font-size:var(--fs-xs);color:var(--text-muted);text-transform:uppercase;margin-bottom:var(--sp-2);">Respiratory Rate</div>
          <input type="text" class="form-input" style="width:100px;text-align:center;margin:0 auto;" placeholder="16" value="16">
          <span class="fs-xs text-muted mt-2">/min</span>
        </div>
      </div>
    </div>

    <!-- Pain Assessment -->
    <div class="form-section">
      <div class="form-section-title"><i data-lucide="frown" style="width:18px;height:18px;color:var(--warning);"></i> Pain Assessment</div>
      <div class="form-group">
        <label class="form-label">Pain Scale (0-10)</label>
        <div class="pain-scale">
          ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => `
            <div class="pain-face ${n === 5 ? 'selected' : ''}" onclick="selectPain(this)" data-value="${n}"
              style="background:hsl(${120 - n * 12}, 70%, ${90 - n * 3}%);">
              ${n}
            </div>
          `).join('')}
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Notes</label>
        <textarea class="form-textarea" rows="2" placeholder="Additional notes about vitals..."></textarea>
      </div>
    </div>

    <div style="display:flex;justify-content:flex-end;gap:var(--sp-3);">
      <button class="btn btn-secondary">Cancel</button>
      <button class="btn btn-primary btn-lg"><i data-lucide="save" style="width:16px;height:16px;"></i> Save Vitals</button>
    </div>`;
}

function selectPain(el) {
    document.querySelectorAll('.pain-face').forEach(f => f.classList.remove('selected'));
    el.classList.add('selected');
}
