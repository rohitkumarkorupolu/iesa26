/* ============================================================
   IESW 2026 – Registration Form Logic
   ============================================================ */

'use strict';

// ---------- Helpers ----------

/**
 * Show an error message for a field.
 * @param {string} inputId   - id of the <input>
 * @param {string} errorId   - id of the <span class="error-msg">
 */
function showError(inputId, errorId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  if (input)  input.classList.add('input-error');
  if (error)  error.classList.add('visible');
}

/**
 * Clear an error message for a field.
 */
function clearError(inputId, errorId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  if (input)  input.classList.remove('input-error');
  if (error)  error.classList.remove('visible');
}

/**
 * Basic email format check.
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Basic 10-digit phone check (India).
 */
function isValidPhone(phone) {
  return /^[6-9]\d{9}$/.test(phone.replace(/\s/g, ''));
}

// ---------- File upload ----------

/**
 * Called when the user selects a file in the visiting card upload zone.
 */
function handleFileChange(input) {
  const display = document.getElementById('file-name-display');
  if (!display) return;

  if (input.files && input.files[0]) {
    const file = input.files[0];

    // 5 MB guard
    if (file.size > 5 * 1024 * 1024) {
      display.textContent = '⚠ File too large. Max size is 5 MB.';
      display.style.color = '#e53e3e';
      input.value = '';
      return;
    }

    display.textContent = '✓ ' + file.name;
    display.style.color = '#228B64';
  } else {
    display.textContent = '';
  }
}

// ---------- Validation ----------

/**
 * Validate every field.
 * Returns true if all pass, false otherwise.
 */
function validateForm() {
  let isValid = true;

  // Name
  const name = document.getElementById('name').value.trim();
  if (!name) {
    showError('name', 'name-error');
    isValid = false;
  } else {
    clearError('name', 'name-error');
  }

  // Phone
  const phone = document.getElementById('phone').value.trim();
  if (!phone || !isValidPhone(phone)) {
    showError('phone', 'phone-error');
    isValid = false;
  } else {
    clearError('phone', 'phone-error');
  }

  // Email
  const email = document.getElementById('email').value.trim();
  if (!email || !isValidEmail(email)) {
    showError('email', 'email-error');
    isValid = false;
  } else {
    clearError('email', 'email-error');
  }

  // Company
  const company = document.getElementById('company').value.trim();
  if (!company) {
    showError('company', 'company-error');
    isValid = false;
  } else {
    clearError('company', 'company-error');
  }

  // Point of contact
  const poc = document.getElementById('poc').value.trim();
  if (!poc) {
    showError('poc', 'poc-error');
    isValid = false;
  } else {
    clearError('poc', 'poc-error');
  }

  return isValid;
}

// ---------- Inline validation on blur ----------

document.addEventListener('DOMContentLoaded', function () {

  const blurRules = [
    { id: 'name',    errorId: 'name-error',    check: v => v.trim() !== '' },
    { id: 'phone',   errorId: 'phone-error',   check: v => isValidPhone(v.trim()) },
    { id: 'email',   errorId: 'email-error',   check: v => isValidEmail(v.trim()) },
    { id: 'company', errorId: 'company-error', check: v => v.trim() !== '' },
    { id: 'poc',     errorId: 'poc-error',     check: v => v.trim() !== '' },
  ];

  blurRules.forEach(function (rule) {
    const el = document.getElementById(rule.id);
    if (!el) return;

    el.addEventListener('blur', function () {
      if (!rule.check(el.value)) {
        showError(rule.id, rule.errorId);
      } else {
        clearError(rule.id, rule.errorId);
      }
    });

    el.addEventListener('input', function () {
      if (rule.check(el.value)) {
        clearError(rule.id, rule.errorId);
      }
    });
  });

});

// ---------- Form submit ----------

function submitForm() {
  if (!validateForm()) return;

  // Disable button to prevent double-submit
  const btn = document.getElementById('submit-btn');
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Submitting…';
  }

  // Collect data (for future backend / Netlify Forms integration)
  const formData = {
    name:    document.getElementById('name').value.trim(),
    phone:   '+91' + document.getElementById('phone').value.trim(),
    email:   document.getElementById('email').value.trim(),
    company: document.getElementById('company').value.trim(),
    poc:     document.getElementById('poc').value.trim(),
  };

  console.log('Form submitted:', formData);

  // Simulate a short async delay then show thank-you screen
  setTimeout(function () {
    showThankYou();
  }, 600);
}

// ---------- Thank you screen ----------

function showThankYou() {
  const hero  = document.getElementById('hero-section');
  const wave  = document.getElementById('wave-divider');
  const form  = document.getElementById('form-section');
  const ty    = document.getElementById('thank-you-section');

  if (hero)  hero.classList.add('hidden');
  if (wave)  wave.classList.add('hidden');
  if (form)  form.classList.add('hidden');
  if (ty)    ty.classList.add('active');

  // Scroll card back to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
