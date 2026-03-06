// ============================================
// DENTAL OPD — Case History Page
// ============================================

<<<<<<< HEAD
function renderCaseHistory(role, params) {
    const p = getActivePatient(params);
    const allergyText = p.allergies.length ? p.allergies.join(', ') : 'No known allergies';
=======
function renderCaseHistory() {
>>>>>>> origin/main
    return `
    <div class="page-header">
      <div>
        <h1>Case History Entry</h1>
        <p class="text-secondary" style="margin-bottom:0;">Comprehensive dental case sheet</p>
      </div>
      <div class="page-header-actions">
        <button class="btn btn-secondary">Save Draft</button>
        <button class="btn btn-primary"><i data-lucide="send" style="width:16px;height:16px;"></i> Submit for Review</button>
      </div>
    </div>

    <!-- Patient Header -->
    <div style="display:flex;align-items:center;gap:var(--sp-4);padding:var(--sp-4);background:var(--primary-bg);border-radius:var(--radius-lg);margin-bottom:var(--sp-5);border:1px solid var(--primary-100);">
<<<<<<< HEAD
      <div class="avatar avatar-lg">${p.name.charAt(0)}</div>
      <div>
        <div style="font-weight:var(--fw-semibold);font-size:var(--fs-md);">${p.name} <span style="margin-left:var(--sp-2);">${statusBadge(p.status)}</span></div>
        <div style="font-size:var(--fs-sm);color:var(--text-secondary);">${p.uhid} • ${p.age}/${p.gender} • ${p.bloodGroup} • Allergy: ${allergyText}</div>
=======
      <div class="avatar avatar-lg">R</div>
      <div>
        <div style="font-weight:var(--fw-semibold);font-size:var(--fs-md);">Ramesh Kumar <span class="badge badge-treatment" style="margin-left:var(--sp-2);">In Treatment</span></div>
        <div style="font-size:var(--fs-sm);color:var(--text-secondary);">UHID-2024-001 • 45/M • B+ • Allergy: Penicillin</div>
>>>>>>> origin/main
      </div>
    </div>

    <!-- Chief Complaint -->
    <div class="form-section">
      <div class="form-section-title"><i data-lucide="message-circle" style="width:18px;height:18px;color:var(--primary);"></i> Chief Complaint</div>
      <div class="form-group">
        <label class="form-label">In patient's own words <span class="required">*</span></label>
<<<<<<< HEAD
        <textarea class="form-textarea" rows="3" placeholder="Record the patient's chief complaint verbatim...">${p.chiefComplaint}</textarea>
=======
        <textarea class="form-textarea" rows="3" placeholder="Record the patient's chief complaint verbatim...">Pain in lower right back tooth since 1 week.</textarea>
>>>>>>> origin/main
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Duration</label>
          <input type="text" class="form-input" value="1 week" placeholder="e.g., 3 days, 2 weeks">
        </div>
        <div class="form-group">
          <label class="form-label">Onset</label>
          <select class="form-select">
            <option>Gradual</option>
            <option selected>Sudden</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Severity</label>
          <select class="form-select">
            <option>Mild</option>
            <option>Moderate</option>
            <option selected>Severe</option>
          </select>
        </div>
      </div>
    </div>

    <!-- History of Present Illness -->
    <div class="form-section">
      <div class="form-section-title"><i data-lucide="file-text" style="width:18px;height:18px;color:var(--info);"></i> History of Present Illness</div>
      <div class="form-group">
        <label class="form-label">Detailed History <span class="required">*</span></label>
        <textarea class="form-textarea" rows="4" placeholder="Describe the progression and characteristics of the complaint...">Patient reports sharp, throbbing pain in the lower right posterior region that started approximately 1 week ago. Pain is aggravated by hot and cold foods and lingering in nature. No spontaneous pain reported initially, but now experiences nocturnal pain. History of a previous filling in the same tooth 2 years ago.</textarea>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Pain Character</label>
          <div style="display:flex;flex-wrap:wrap;gap:var(--sp-2);margin-top:var(--sp-1);">
            ${['Sharp', 'Throbbing', 'Dull', 'Radiating', 'Continuous', 'Intermittent', 'Spontaneous', 'Nocturnal'].map((t, i) => `
              <label class="form-check" style="background:var(--bg);padding:var(--sp-1) var(--sp-3);border-radius:var(--radius);"><input type="checkbox" ${[0, 1, 7].includes(i) ? 'checked' : ''}> <span class="fs-sm">${t}</span></label>
            `).join('')}
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Aggravating Factors</label>
          <input type="text" class="form-input" value="Hot food, cold beverages, biting" placeholder="What makes it worse?">
        </div>
        <div class="form-group">
          <label class="form-label">Relieving Factors</label>
          <input type="text" class="form-input" value="Analgesics (Ibuprofen)" placeholder="What makes it better?">
        </div>
      </div>
    </div>

    <!-- Past Dental History -->
    <div class="form-section">
      <div class="form-section-title"><i data-lucide="history" style="width:18px;height:18px;color:var(--accent);"></i> Past Dental History</div>
      <div class="form-group">
        <label class="form-label">Previous Treatments</label>
        <textarea class="form-textarea" rows="3" placeholder="Previous dental treatments, fillings, extractions...">Composite filling done on #46 (lower right first molar) 2 years ago at a private clinic. No history of RCT. Last dental visit was 6 months ago for routine scaling.</textarea>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Last Visit Date</label>
          <input type="date" class="form-input" value="2025-08-15">
        </div>
        <div class="form-group">
          <label class="form-label">Oral Hygiene Habits</label>
          <select class="form-select">
            <option>Good</option>
            <option selected>Fair</option>
            <option>Poor</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Brushing Frequency</label>
          <select class="form-select">
            <option>Once daily</option>
            <option selected>Twice daily</option>
            <option>Irregular</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Past Medical History -->
    <div class="form-section">
      <div class="form-section-title"><i data-lucide="heart" style="width:18px;height:18px;color:var(--danger);"></i> Past Medical History</div>
      <div class="form-row" style="grid-template-columns:repeat(4, 1fr);">
<<<<<<< HEAD
        <label class="form-check"><input type="checkbox" ${p.pmh.htn ? 'checked' : ''}> <span>Hypertension</span></label>
        <label class="form-check"><input type="checkbox" ${p.pmh.dm ? 'checked' : ''}> <span>Diabetes Mellitus</span></label>
        <label class="form-check"><input type="checkbox" ${p.pmh.cad ? 'checked' : ''}> <span>Cardiac Disease</span></label>
=======
        <label class="form-check"><input type="checkbox" checked> <span>Hypertension</span></label>
        <label class="form-check"><input type="checkbox"> <span>Diabetes Mellitus</span></label>
        <label class="form-check"><input type="checkbox"> <span>Cardiac Disease</span></label>
>>>>>>> origin/main
        <label class="form-check"><input type="checkbox"> <span>Bleeding Disorder</span></label>
        <label class="form-check"><input type="checkbox"> <span>Asthma</span></label>
        <label class="form-check"><input type="checkbox"> <span>Epilepsy</span></label>
        <label class="form-check"><input type="checkbox"> <span>Hepatitis</span></label>
        <label class="form-check"><input type="checkbox"> <span>Thyroid</span></label>
      </div>
      <div class="form-group mt-3">
        <label class="form-label">Details / Other Conditions</label>
<<<<<<< HEAD
        <textarea class="form-textarea" rows="2" placeholder="Specify details...">${p.pmh.htn ? 'On antihypertensive medication (Amlodipine 5mg OD). Well controlled.' : 'No major systemic medical history reported.'}</textarea>
=======
        <textarea class="form-textarea" rows="2" placeholder="Specify details...">On antihypertensive medication (Amlodipine 5mg OD) for 3 years. Well controlled.</textarea>
>>>>>>> origin/main
      </div>
    </div>

    <!-- Personal History -->
    <div class="form-section">
      <div class="form-section-title"><i data-lucide="cigarette" style="width:18px;height:18px;color:var(--text-muted);"></i> Personal & Habit History</div>
      <div class="form-row" style="grid-template-columns:repeat(4, 1fr);">
        <label class="form-check"><input type="checkbox"> <span>Smoking</span></label>
        <label class="form-check"><input type="checkbox"> <span>Alcohol</span></label>
        <label class="form-check"><input type="checkbox"> <span>Tobacco Chewing</span></label>
        <label class="form-check"><input type="checkbox"> <span>Betel Nut</span></label>
      </div>
      <div class="form-group mt-3">
        <label class="form-label">Diet</label>
        <select class="form-select" style="width:200px;">
          <option>Vegetarian</option>
          <option selected>Mixed</option>
          <option>Non-Vegetarian</option>
        </select>
      </div>
    </div>

    <!-- Family History -->
    <div class="form-section">
      <div class="form-section-title"><i data-lucide="users" style="width:18px;height:18px;color:var(--info);"></i> Family History</div>
      <div class="form-group">
        <label class="form-label">Relevant Family Medical / Dental History</label>
        <textarea class="form-textarea" rows="2" placeholder="Any hereditary conditions...">Father — Hypertension, Diabetes. No significant dental history in family.</textarea>
      </div>
    </div>

    <!-- Bottom Actions -->
    <div style="display:flex;justify-content:space-between;align-items:center;margin-top:var(--sp-4);">
      <button class="btn btn-ghost" onclick="navigateTo('patients')">← Back to Patients</button>
      <div style="display:flex;gap:var(--sp-3);">
        <button class="btn btn-secondary">Save Draft</button>
<<<<<<< HEAD
        <button class="btn btn-primary btn-lg" onclick="navigateTo('clinical-exam', {id:'${p.id}'})"><i data-lucide="arrow-right" style="width:16px;height:16px;"></i> Proceed to Clinical Exam</button>
=======
        <button class="btn btn-primary btn-lg"><i data-lucide="arrow-right" style="width:16px;height:16px;"></i> Proceed to Clinical Exam</button>
>>>>>>> origin/main
      </div>
    </div>`;
}
