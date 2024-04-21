function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error');

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      // Email válido!
      emailError.textContent = '';

      // Exibir alerta de email válido (opcional):
      alert('Email válido!');

      return true;
    } else {
        // Email inválido
        emailError.textContent = 'Por favor, digite um email válido (exemplo: email@provedor.com)';
        return false;
      }
    }
