// ============================================
// DENTAL OPD — Notifications Page
// ============================================

function renderNotifications() {
    const allNotifications = [
        ...MOCK.notifications,
        { title: 'Treatment Plan Approved', message: 'Dr. SriRam V approved RCT plan for Ramesh Kumar.', time: '1 hour ago', type: 'success', read: false },
        { title: 'Lab Report Available', message: 'CBC results ready for patient Deepa K.', time: '2 hours ago', type: 'info', read: false },
        { title: 'Appointment Reminder', message: 'Kavitha R is scheduled for RCT obturation tomorrow at 10:00 AM.', time: '3 hours ago', type: 'warning', read: true },
        { title: 'System Update', message: 'Drug database updated with 15 new entries.', time: 'Yesterday', type: 'info', read: true },
        { title: 'Patient Follow-up Due', message: 'Arun P is due for post-extraction follow-up (7 days).', time: 'Yesterday', type: 'warning', read: true },
        { title: 'Consent Signed', message: 'Ramesh Kumar signed consent for RCT + Crown.', time: '2 days ago', type: 'success', read: true },
    ];

    const iconMap = { success: 'check-circle', info: 'info', warning: 'alert-triangle', danger: 'alert-octagon' };
    const colorMap = { success: 'var(--success)', info: 'var(--info)', warning: 'var(--warning)', danger: 'var(--danger)' };

    return `
    <div class="page-header">
      <div>
        <h1>Notifications</h1>
        <p class="text-secondary" style="margin-bottom:0;">${allNotifications.filter(n => !n.read).length} unread notifications</p>
      </div>
      <div class="page-header-actions">
        <button class="btn btn-ghost">Mark All Read</button>
        <select class="form-select" style="width:120px;padding:var(--sp-2);font-size:var(--fs-sm);">
          <option>All</option>
          <option>Unread</option>
          <option>Approvals</option>
          <option>System</option>
        </select>
      </div>
    </div>

    <div class="table-wrapper">
      ${allNotifications.map(n => `
        <div class="notif-item ${!n.read ? 'unread' : ''}">
          <div class="notif-icon" style="background:${colorMap[n.type] || colorMap.info}20;">
            <i data-lucide="${iconMap[n.type] || 'bell'}" style="width:16px;height:16px;color:${colorMap[n.type] || colorMap.info};"></i>
          </div>
          <div class="notif-content">
            <div class="notif-title">${n.title}</div>
            <div class="notif-desc">${n.message}</div>
          </div>
          <div class="notif-time">${n.time}</div>
        </div>
      `).join('')}
    </div>`;
}
