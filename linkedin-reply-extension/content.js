(function() {
  function addReplyButton() {
    if (document.getElementById('codex-reply-button')) return;
    const btn = document.createElement('button');
    btn.innerText = 'Reply';
    btn.id = 'codex-reply-button';
    btn.style.position = 'fixed';
    btn.style.bottom = '10px';
    btn.style.right = '10px';
    btn.style.zIndex = 1000;
    btn.style.padding = '8px 12px';
    btn.style.background = '#0a66c2';
    btn.style.color = '#fff';
    btn.style.border = 'none';
    btn.style.borderRadius = '4px';
    btn.style.cursor = 'pointer';

    btn.addEventListener('click', function() {
      // Attempt to focus the active message input
      const input = document.querySelector('div.msg-form__contenteditable');
      if (input) {
        input.focus();
      } else {
        alert('Reply clicked!');
      }
    });

    document.body.appendChild(btn);
  }

  // run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addReplyButton);
  } else {
    addReplyButton();
  }
})();
