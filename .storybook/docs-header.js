const injectHeader = () => {
    if (document.getElementById('rz-docs-header')) return;
  
    const header = document.createElement('div');
    header.id = 'rz-docs-header';
    header.innerHTML = `
      <div id="rz-progress-bar-bg">
        <div id="rz-progress-bar"></div>
      </div>
      <nav id="rz-nav">
        <img src="/redzone-logo.svg" alt="Redzone" id="rz-logo" />
        <ul id="rz-nav-links">
          <li>Foundations</li>
          <li class="active">Components</li>
          <li>Patterns</li>
          <li>Resources & Tools</li>
        </ul>
      </nav>
    `;
  
    document.body.prepend(header);
  
    // Progress bar on scroll
    const progressBar = document.getElementById('rz-progress-bar');
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      progressBar.style.width = `${progress}%`;
    });
  
    // Tab navigation
    const initTabs = () => {
      const tabs = document.querySelectorAll('.rz-tab');
      const panels = document.querySelectorAll('.rz-panel');
  
      if (tabs.length === 0) {
        setTimeout(initTabs, 300);
        return;
      }
  
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const target = tab.dataset.tab;
          tabs.forEach(t => t.classList.remove('active'));
          panels.forEach(p => p.classList.remove('active'));
          tab.classList.add('active');
          const panel = document.getElementById('panel-' + target);
          if (panel) panel.classList.add('active');
        });
      });
    };
  
    initTabs();
    
    
  };
  
  document.addEventListener('DOMContentLoaded', injectHeader);
  setTimeout(injectHeader, 500);