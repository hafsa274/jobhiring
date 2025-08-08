window.addEventListener("DOMContentLoaded", () => {
  loadJobs();
  loadContacts();
  loadApplications();
  loadAdminData();
});

// ================= JOBS =================

async function loadJobs() {
  try {
    const res = await fetch("/api/jobs");
    const jobs = await res.json();
    document.getElementById("job-data").innerHTML = jobs.map(job => `
      <div class="admin-card">
        <h3>${job.title}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <button onclick="deleteJob('${job._id}')">Delete</button>
      </div>
    `).join("");
  } catch (err) {
    console.error("Failed to load jobs", err);
  }
}

async function deleteJob(id) {
  if (!confirm("Delete this job?")) return;
  await fetch(`/api/jobs/${id}`, { method: "DELETE" });
  loadJobs();
}

// ================= CONTACTS =================

async function loadContacts() {
  try {
    const res = await fetch("/api/contacts");
    const contacts = await res.json();
    document.getElementById("contact-data").innerHTML = contacts.map(contact => `
      <div class="admin-card">
        <h4>${contact.name} (${contact.email})</h4>
        <p><strong>Subject:</strong> ${contact.subject}</p>
        <p>${contact.message}</p>
        <button onclick="deleteContact('${contact._id}')">Delete</button>
      </div>
    `).join("");
  } catch (err) {
    console.error("Failed to load contacts", err);
  }
}

async function deleteContact(id) {
  if (!confirm("Delete this contact?")) return;
  await fetch(`/api/contacts/${id}`, { method: "DELETE" });
  loadContacts();
}

// ================= APPLICATIONS =================

async function loadApplications() {
  try {
    const res = await fetch("/api/applications");
    const applications = await res.json();
    document.getElementById("application-data").innerHTML = applications.map(app => `
      <div class="admin-card">
        <h4>${app.name} (${app.email})</h4>
        <p><strong>Phone:</strong> ${app.phone}</p>
        <p><strong>Job:</strong> ${app.jobTitle}</p>
        <a href="${app.resumeUrl}" target="_blank">View Resume</a>
        <p>${app.coverLetter}</p>
        <button onclick="deleteApplication('${app._id}')">Delete</button>
      </div>
    `).join("");
  } catch (err) {
    console.error("Failed to load applications", err);
  }
}

async function deleteApplication(id) {
  if (!confirm("Delete this application?")) return;
  await fetch(`/api/applications/${id}`, { method: "DELETE" });
  loadApplications();
}

// ================= ADMIN DATA =================

async function loadAdminData() {
  try {
    const res = await fetch("/api/admin-data");
    const adminItems = await res.json();
    document.getElementById("admin-data-list").innerHTML = adminItems.map(item => `
      <div class="admin-card">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <small>${new Date(item.createdAt).toLocaleString()}</small><br>
        <button onclick="deleteAdminData('${item._id}')">Delete</button>
      </div>
    `).join("");
  } catch (err) {
    console.error("Failed to load admin data", err);
  }
}

async function deleteAdminData(id) {
  if (!confirm("Delete this admin record?")) return;
  await fetch(`/api/admin-data/${id}`, { method: "DELETE" });
  loadAdminData();
}

// Admin Data form submission
const adminDataForm = document.getElementById('admin-data-form');
if (adminDataForm) {
  adminDataForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(adminDataForm);
    const data = Object.fromEntries(formData.entries());

    try {
      let url = '/api/admin-data';
      let method = 'POST';

      if (currentEditingAdminDataId) {
        url = `/api/admin-data/${currentEditingAdminDataId}`;
        method = 'PUT';
      }

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert(currentEditingAdminDataId ? 'Admin data updated successfully!' : 'Admin data created successfully!');
        adminDataForm.reset();
        currentEditingAdminDataId = null;
        loadAdminData();
        closeAdminDataModal();
      } else {
        alert('Error submitting admin data');
      }
    } catch (error) {
      alert('Error submitting admin data');
      console.error('Error submitting admin data:', error);
    }
  });
}
