// ============================================
// DENTAL OPD — Prescription Page
// ============================================

function renderPrescription(role, params) {
    const p = getActivePatient(params);
    const allergyText = p.allergies.length ? p.allergies.join(', ') : 'None';
    const hasAllergy = p.allergies.length > 0;
    return `
    <div class="page-header">
      <div>
        <h1>Prescription</h1>
        <p class="text-secondary" style="margin-bottom:0;">Generate and manage prescriptions</p>
      </div>
      <div class="page-header-actions">
        <button class="btn btn-secondary"><i data-lucide="printer" style="width:16px;height:16px;"></i> Print</button>
        <button class="btn btn-primary"><i data-lucide="save" style="width:16px;height:16px;"></i> Save Prescription</button>
      </div>
    </div>

    <!-- Patient Banner -->
    <div style="display:flex;align-items:center;gap:var(--sp-4);padding:var(--sp-3) var(--sp-4);background:var(--primary-bg);border-radius:var(--radius);margin-bottom:var(--sp-5);border:1px solid var(--primary-100);">
      <div class="avatar">${p.name.charAt(0)}</div>
      <div style="flex:1;">
        <b>${p.name}</b> • ${p.uhid} • ${p.age}/${p.gender} • ${p.bloodGroup}<br>
        <span class="fs-xs ${hasAllergy ? 'text-danger' : 'text-muted'} fw-medium">${hasAllergy ? '⚠ Allergy: ' + allergyText : 'No known allergies'}</span>
      </div>
    </div>

    <!-- Rx Header -->
    <div class="form-section">
      <div class="rx-header">
        <div class="rx-symbol">℞</div>
        <div>
          <div class="fw-semibold">Prescription</div>
          <div class="fs-xs text-muted">Date: Feb 16, 2026 • Rx #: RX-2026-001</div>
        </div>
      </div>

      <!-- Drug List -->
      <div id="drug-list">
        <div class="drug-row">
          <div class="form-group">
            <label class="form-label fs-xs">Drug Name</label>
            <select class="form-select">
              ${MOCK.drugs.filter(d => d.name !== 'Amoxicillin').map(d => `<option ${d.name === 'Ibuprofen' ? 'selected' : ''}>${d.name}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label fs-xs">Dosage</label>
            <select class="form-select"><option>400mg</option><option>600mg</option></select>
          </div>
          <div class="form-group">
            <label class="form-label fs-xs">Frequency</label>
            <select class="form-select"><option>TDS</option><option>BD</option><option>OD</option><option>QID</option><option>SOS</option></select>
          </div>
          <div class="form-group">
            <label class="form-label fs-xs">Duration</label>
            <input type="text" class="form-input" value="5 days">
          </div>
          <div class="form-group">
            <label class="form-label fs-xs">Route</label>
            <select class="form-select"><option>Oral</option></select>
          </div>
          <div class="form-group" style="padding-bottom:var(--sp-4);">
            <button class="btn btn-icon btn-ghost" style="margin-top:var(--sp-5);">✕</button>
          </div>
        </div>

        <div class="drug-row">
          <div class="form-group">
            <label class="form-label fs-xs">Drug Name</label>
            <select class="form-select">
              ${MOCK.drugs.map(d => `<option ${d.name === 'Metronidazole' ? 'selected' : ''}>${d.name}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label fs-xs">Dosage</label>
            <select class="form-select"><option>400mg</option></select>
          </div>
          <div class="form-group">
            <label class="form-label fs-xs">Frequency</label>
            <select class="form-select"><option>TDS</option></select>
          </div>
          <div class="form-group">
            <label class="form-label fs-xs">Duration</label>
            <input type="text" class="form-input" value="5 days">
          </div>
          <div class="form-group">
            <label class="form-label fs-xs">Route</label>
            <select class="form-select"><option>Oral</option></select>
          </div>
          <div class="form-group" style="padding-bottom:var(--sp-4);">
            <button class="btn btn-icon btn-ghost" style="margin-top:var(--sp-5);">✕</button>
          </div>
        </div>

        <div class="drug-row">
          <div class="form-group">
            <label class="form-label fs-xs">Drug Name</label>
            <select class="form-select">
              ${MOCK.drugs.map(d => `<option ${d.name === 'Paracetamol' ? 'selected' : ''}>${d.name}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label fs-xs">Dosage</label>
            <select class="form-select"><option>650mg</option></select>
          </div>
          <div class="form-group">
            <label class="form-label fs-xs">Frequency</label>
            <select class="form-select"><option selected>SOS</option><option>TDS</option></select>
          </div>
          <div class="form-group">
            <label class="form-label fs-xs">Duration</label>
            <input type="text" class="form-input" value="As needed">
          </div>
          <div class="form-group">
            <label class="form-label fs-xs">Route</label>
            <select class="form-select"><option>Oral</option></select>
          </div>
          <div class="form-group" style="padding-bottom:var(--sp-4);">
            <button class="btn btn-icon btn-ghost" style="margin-top:var(--sp-5);">✕</button>
          </div>
        </div>
      </div>

      <button class="btn btn-ghost btn-sm mt-2"><i data-lucide="plus" style="width:14px;height:14px;"></i> Add Drug</button>

      <!-- Allergy Warning -->
      <div style="margin-top:var(--sp-4);padding:var(--sp-3);background:var(--danger-bg);border-left:3px solid var(--danger);border-radius:var(--radius);display:flex;align-items:center;gap:var(--sp-2);">
        <i data-lucide="alert-triangle" style="width:16px;height:16px;color:var(--danger);"></i>
        <span class="fs-sm"><b>Allergy Alert:</b> ${hasAllergy ? `Patient is allergic to <b>${allergyText}</b>. Amoxicillin excluded from drug list.` : 'No known drug allergies recorded.'}</span>
      </div>
    </div>

    <!-- Instructions -->
    <div class="form-section">
      <div class="form-section-title"><i data-lucide="info" style="width:18px;height:18px;color:var(--info);"></i> Instructions to Patient</div>
      <div class="form-group">
        <textarea class="form-textarea" rows="3">1. Take medications after food.
2. Avoid chewing on the right side for 24 hours.
3. Rinse with warm salt water 3 times a day.
4. Follow up after 5 days for obturation appointment.
5. In case of severe pain or swelling, contact immediately.</textarea>
      </div>
    </div>

    <!-- Approval -->
    <div class="card" style="border-left:3px solid var(--success);background:var(--success-bg);">
      <div class="flex items-center gap-3">
        <i data-lucide="check-circle" style="width:20px;height:20px;color:var(--success);"></i>
        <div>
          <div class="fw-semibold fs-sm">Approved by Dr. SriRam V</div>
          <div class="fs-xs text-muted">Asst. Professor • Feb 14, 2026 at 3:30 PM</div>
        </div>
      </div>
    </div>

    <div style="display:flex;justify-content:space-between;margin-top:var(--sp-5);">
      <button class="btn btn-ghost" onclick="navigateTo('consent', {id:'${p.id}'})">← Consent</button>
      <div style="display:flex;gap:var(--sp-3);">
        <button class="btn btn-secondary"><i data-lucide="printer" style="width:16px;height:16px;"></i> Print Rx</button>
        <button class="btn btn-primary btn-lg"><i data-lucide="check" style="width:16px;height:16px;"></i> Finalize Prescription</button>
      </div>
    </div>`;
}
