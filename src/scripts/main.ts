type CopyTrigger = HTMLElement & { dataset: DOMStringMap };

const TOAST_DURATION = 4200;

let toastTimer: number | undefined;

function getToast(): HTMLElement | null {
  return document.querySelector<HTMLElement>('#toast');
}

function notify(message: string): void {
  const toast = getToast();
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove('is-visible');
  }, TOAST_DURATION);
}

function legacyCopy(text: string): boolean {
  const field = document.createElement('textarea');
  field.value = text;
  field.setAttribute('readonly', '');
  field.style.position = 'fixed';
  field.style.top = '-1000px';
  field.style.opacity = '0';
  document.body.appendChild(field);
  field.select();

  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch {
    copied = false;
  }

  field.remove();
  return copied;
}

async function copyText(text: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to the legacy path (e.g. permission denied).
    }
  }

  return legacyCopy(text);
}

function findTrigger(target: EventTarget | null): CopyTrigger | null {
  if (!(target instanceof Element)) return null;
  const element = target.closest<HTMLElement>('[data-copy]');
  return element as CopyTrigger | null;
}

function initCopyButtons(): void {
  document.addEventListener('click', (event) => {
    const trigger = findTrigger(event.target);
    const value = trigger?.dataset.copy;
    if (!value) return;

    void copyText(value).then((copied) => {
      notify(copied ? `Copied ${value}. Public launch coming soon.` : `Copy this address: ${value}`);
    });
  });
}

export function initSite(): void {
  initCopyButtons();
}
