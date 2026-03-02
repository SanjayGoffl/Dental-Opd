// ============================================
// DENTAL OPD — Interactive Dental Chart
// ============================================

function renderDentalChart() {
  const upperRight = [18, 17, 16, 15, 14, 13, 12, 11];
  const upperLeft = [21, 22, 23, 24, 25, 26, 27, 28];
  const lowerLeft = [31, 32, 33, 34, 35, 36, 37, 38];
  const lowerRight = [48, 47, 46, 45, 44, 43, 42, 41];

  // Pre-set conditions for demo
  const conditions = { 46: 'caries', 36: 'filled', 17: 'crown', 24: 'rct', 38: 'missing' };

  function toothHtml(num, archClass) {
    const cond = conditions[num] || '';
    return `<div class="tooth ${cond}" data-num="${num}" onclick="selectTooth(this)">${num}</div>`;
  }

  return `
    <div class="page-header">
      <div>
        <h1>Dental Chart</h1>
        <p class="text-secondary" style="margin-bottom:0;">Interactive FDI dental charting — click teeth to mark conditions</p>
      </div>
      <div class="page-header-actions">
        <button class="btn btn-secondary"><i data-lucide="printer" style="width:16px;height:16px;"></i> Print</button>
        <button class="btn btn-primary"><i data-lucide="save" style="width:16px;height:16px;"></i> Save Chart</button>
      </div>
    </div>

    <!-- Patient Banner -->
    <div style="display:flex;align-items:center;gap:var(--sp-4);padding:var(--sp-3) var(--sp-4);background:var(--primary-bg);border-radius:var(--radius);margin-bottom:var(--sp-5);border:1px solid var(--primary-100);">
      <div class="avatar">R</div>
      <div><b>Ramesh Kumar</b> • UHID-2024-001 • 45/M</div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 280px;gap:var(--sp-5);">

      <!-- Dental Chart -->
      <div class="dental-chart-container">
        <div class="dental-chart">
          <!-- Upper Arch -->
          <div style="text-align:center;font-size:var(--fs-xs);font-weight:var(--fw-semibold);color:var(--text-muted);margin-bottom:var(--sp-1);">UPPER ARCH (MAXILLARY)</div>
          <div class="arch-row">
            <span class="quadrant-label">Q1</span>
            <div class="dental-arch">
              ${upperRight.map(n => toothHtml(n)).join('')}
            </div>
            <div class="dental-midline"></div>
            <div class="dental-arch">
              ${upperLeft.map(n => toothHtml(n)).join('')}
            </div>
            <span class="quadrant-label">Q2</span>
          </div>

          <!-- Divider -->
          <div style="width:80%;height:1px;background:var(--border-strong);margin:var(--sp-2) 0;"></div>

          <!-- Lower Arch -->
          <div class="arch-row">
            <span class="quadrant-label">Q4</span>
            <div class="dental-arch lower">
              ${lowerRight.map(n => toothHtml(n)).join('')}
            </div>
            <div class="dental-midline"></div>
            <div class="dental-arch lower">
              ${lowerLeft.map(n => toothHtml(n)).join('')}
            </div>
            <span class="quadrant-label">Q3</span>
          </div>
          <div style="text-align:center;font-size:var(--fs-xs);font-weight:var(--fw-semibold);color:var(--text-muted);margin-top:var(--sp-1);">LOWER ARCH (MANDIBULAR)</div>
        </div>

        <!-- Legend -->
        <div class="tooth-legend mt-6">
          <div class="legend-item"><div class="legend-color" style="background:var(--surface);border:2px solid var(--border-strong);"></div> Normal</div>
          <div class="legend-item"><div class="legend-color" style="background:#FEF3C7;border-color:var(--warning);"></div> Caries</div>
          <div class="legend-item"><div class="legend-color" style="background:#DBEAFE;border-color:var(--info);"></div> Filled</div>
          <div class="legend-item"><div class="legend-color" style="background:#E0E7FF;border-color:#6366F1;"></div> RCT</div>
          <div class="legend-item"><div class="legend-color" style="background:#FEE2E2;border-color:var(--danger);"></div> Crown</div>
          <div class="legend-item"><div class="legend-color" style="background:var(--bg-alt);border:2px dashed var(--text-muted);"></div> Missing</div>
          <div class="legend-item"><div class="legend-color" style="background:var(--primary);"></div> Selected</div>
        </div>
      </div>

      <!-- Right Panel -->
      <div style="display:flex;flex-direction:column;gap:var(--sp-4);">
        <!-- Selected Tooth Info -->
        <div class="card" id="tooth-info-panel">
          <div class="card-title mb-3">Tooth Details</div>
          <div id="tooth-info-content">
            <p class="text-muted fs-sm text-center">Click a tooth to see details</p>
          </div>
        </div>

        <!-- Condition Palette -->
        <div class="condition-panel">
          <div style="font-size:var(--fs-sm);font-weight:var(--fw-semibold);margin-bottom:var(--sp-3);">Apply Condition</div>
          <div style="display:flex;flex-wrap:wrap;gap:var(--sp-2);">
            ${['Normal', 'Caries', 'Filled', 'RCT', 'Crown', 'Missing', 'Extraction'].map(c => `
              <button class="condition-btn ${c === 'Caries' ? 'active' : ''}" onclick="selectCondition(this, '${c.toLowerCase()}')">${c}</button>
            `).join('')}
          </div>
        </div>

        <!-- Notes -->
        <div class="card">
          <div class="card-title mb-3">Chart Notes</div>
          <textarea class="form-textarea" rows="4" placeholder="Enter notes about the charting...">46: Deep carious lesion, negative vitality.
36: Old amalgam filling, satisfactory.
38: Missing / unerupted.</textarea>
        </div>
      </div>
    </div>

    <div style="display:flex;justify-content:space-between;margin-top:var(--sp-6);">
      <button class="btn btn-ghost" onclick="navigateTo('clinical-exam')">← Clinical Exam</button>
      <div style="display:flex;gap:var(--sp-3);">
        <button class="btn btn-secondary">Save Draft</button>
        <button class="btn btn-primary btn-lg" onclick="navigateTo('investigation')"><i data-lucide="arrow-right" style="width:16px;height:16px;"></i> Investigations</button>
      </div>
    </div>`;
}

let selectedCondition = 'caries';

function selectTooth(el) {
  document.querySelectorAll('.tooth.selected').forEach(t => {
    if (!t.dataset.originalClass) t.dataset.originalClass = '';
    t.className = 'tooth ' + (t.dataset.originalClass || '');
  });

  el.dataset.originalClass = el.className.replace('tooth ', '').replace(' selected', '');
  el.classList.add('selected');

  const num = el.dataset.num;
  const cond = el.dataset.originalClass || 'Normal';
  document.getElementById('tooth-info-content').innerHTML = `
    <div style="display:flex;flex-direction:column;gap:var(--sp-2);">
      <div><span class="text-muted fs-xs">Tooth Number</span><div class="fw-bold fs-lg">#${num}</div></div>
      <div><span class="text-muted fs-xs">Current Condition</span><div class="fw-medium fs-sm" style="text-transform:capitalize;">${cond || 'Normal'}</div></div>
      <div><span class="text-muted fs-xs">Quadrant</span><div class="fw-medium fs-sm">Q${num.toString().charAt(0)}</div></div>
    </div>`;
}

function selectCondition(btn, cond) {
  document.querySelectorAll('.condition-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedCondition = cond;
}
