// ============================================
// DENTAL OPD — Consent Management Page
// ============================================

<<<<<<< HEAD
function renderConsent(role, params) {
    const p = getActivePatient(params);
=======
function renderConsent() {
>>>>>>> origin/main
    return `
    <div class="page-header">
      <div>
        <h1>Consent Management</h1>
        <p class="text-secondary" style="margin-bottom:0;">Informed consent documentation</p>
      </div>
    </div>

    <!-- Patient Banner -->
    <div style="display:flex;align-items:center;gap:var(--sp-4);padding:var(--sp-3) var(--sp-4);background:var(--primary-bg);border-radius:var(--radius);margin-bottom:var(--sp-5);border:1px solid var(--primary-100);">
<<<<<<< HEAD
      <div class="avatar">${p.name.charAt(0)}</div>
      <div><b>${p.name}</b> • ${p.uhid} • ${p.age}/${p.gender}</div>
=======
      <div class="avatar">R</div>
      <div><b>Ramesh Kumar</b> • UHID-2024-001 • 45/M</div>
>>>>>>> origin/main
    </div>

    <!-- Consent Document -->
    <div class="form-section">
      <div class="form-section-title"><i data-lucide="file-signature" style="width:18px;height:18px;color:var(--primary);"></i> Informed Consent for Treatment</div>

      <div style="background:var(--bg);padding:var(--sp-4);border-radius:var(--radius);font-size:var(--fs-sm);line-height:1.7;color:var(--text-secondary);margin-bottom:var(--sp-4);">
        <p><b>Procedure:</b> Root Canal Treatment (RCT) followed by Post & Core and PFM Crown on tooth #46</p>
<<<<<<< HEAD
        <p><b>I, ${p.name},</b> hereby authorize the dental team at the College of Dental Sciences & Hospital to perform the above-mentioned procedure(s).</p>
=======
        <p><b>I, Ramesh Kumar,</b> hereby authorize the dental team at the College of Dental Sciences & Hospital to perform the above-mentioned procedure(s).</p>
>>>>>>> origin/main
        <p>I understand and acknowledge the following:</p>
        <ul style="list-style:decimal;padding-left:var(--sp-6);margin:var(--sp-3) 0;">
          <li style="margin-bottom:var(--sp-2);">The nature of the proposed treatment, including the steps involved in Root Canal Treatment, has been explained to me.</li>
          <li style="margin-bottom:var(--sp-2);">Possible risks and complications include: pain, swelling, instrument fracture, perforation, re-infection, and in rare cases, tooth loss.</li>
          <li style="margin-bottom:var(--sp-2);">Alternative treatments such as extraction, or no treatment at all, have been discussed.</li>
          <li style="margin-bottom:var(--sp-2);">The estimated cost of treatment is ₹10,300 (subject to clinical findings).</li>
          <li style="margin-bottom:var(--sp-2);">I consent to the administration of local anesthesia (Lignocaine 2% with Adrenaline) and understand its potential side effects.</li>
          <li style="margin-bottom:var(--sp-2);">I have disclosed all relevant medical history including current medications and allergies.</li>
        </ul>
      </div>

      <!-- Consent Checklist -->
      <div style="display:flex;flex-direction:column;gap:var(--sp-2);margin-bottom:var(--sp-5);">
        ${[
            'I have read and understood the information provided above',
            'I have had the opportunity to ask questions and they were answered satisfactorily',
            'I understand the risks, benefits, and alternatives of the proposed treatment',
            'I consent to the procedure voluntarily and without coercion',
            'I understand I can withdraw consent at any time before the procedure'
        ].map(text => `
          <div class="approval-check">
            <input type="checkbox" id="c-${text.slice(0, 5)}"> <span>${text}</span>
          </div>
        `).join('')}
      </div>

      <!-- Signatures -->
      <div class="grid grid-2 gap-4">
        <div>
          <label class="form-label">Patient Signature</label>
          <div class="signature-pad">
            <span>Click to sign or draw</span>
          </div>
          <div class="form-row mt-3">
            <div class="form-group">
              <label class="form-label fs-xs">Patient Name</label>
<<<<<<< HEAD
              <input type="text" class="form-input" value="${p.name}">
=======
              <input type="text" class="form-input" value="Ramesh Kumar">
>>>>>>> origin/main
            </div>
            <div class="form-group">
              <label class="form-label fs-xs">Date</label>
              <input type="date" class="form-input" value="2026-02-16">
            </div>
          </div>
        </div>
        <div>
          <label class="form-label">Doctor Signature</label>
          <div class="signature-pad">
            <span>Click to sign or draw</span>
          </div>
          <div class="form-row mt-3">
            <div class="form-group">
              <label class="form-label fs-xs">Doctor Name</label>
              <input type="text" class="form-input" value="Dr. Diva Chaitava" readonly>
            </div>
            <div class="form-group">
              <label class="form-label fs-xs">Date</label>
              <input type="date" class="form-input" value="2026-02-16">
            </div>
          </div>
        </div>
      </div>

      <!-- Witness -->
      <div class="form-row mt-4">
        <div class="form-group">
          <label class="form-label">Witness Name</label>
          <input type="text" class="form-input" placeholder="Witness name">
        </div>
        <div class="form-group">
          <label class="form-label">Relationship</label>
          <input type="text" class="form-input" placeholder="e.g., Staff Nurse">
        </div>
      </div>
    </div>

    <div style="display:flex;justify-content:space-between;margin-top:var(--sp-4);">
<<<<<<< HEAD
      <button class="btn btn-ghost" onclick="navigateTo('treatment-plan', {id:'${p.id}'})">← Treatment Plan</button>
      <div style="display:flex;gap:var(--sp-3);">
        <button class="btn btn-secondary"><i data-lucide="printer" style="width:16px;height:16px;"></i> Print</button>
        <button class="btn btn-primary btn-lg" onclick="navigateTo('prescription', {id:'${p.id}'})"><i data-lucide="check" style="width:16px;height:16px;"></i> Confirm & Proceed to Rx</button>
=======
      <button class="btn btn-ghost" onclick="navigateTo('treatment-plan')">← Treatment Plan</button>
      <div style="display:flex;gap:var(--sp-3);">
        <button class="btn btn-secondary"><i data-lucide="printer" style="width:16px;height:16px;"></i> Print</button>
        <button class="btn btn-primary btn-lg" onclick="navigateTo('prescription')"><i data-lucide="check" style="width:16px;height:16px;"></i> Confirm & Proceed to Rx</button>
>>>>>>> origin/main
      </div>
    </div>`;
}
