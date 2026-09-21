export function printElementById(id: string) {
  const source = document.getElementById(id);
  if (!source) {
    window.print();
    return;
  }
  const printWindow = window.open('', '_blank', 'noopener,noreferrer,width=900,height=1200');
  if (!printWindow) {
    window.print();
    return;
  }
  const head = document.head.cloneNode(true) as HTMLElement;
  const base = document.createElement('base');
  base.href = window.location.origin + '/';
  head.prepend(base);
  const style = document.createElement('style');
  style.textContent = `
    @page { size: A4 portrait; margin: 0; }
    html, body { margin:0; padding:0; background:#fff; }
    body { width:210mm; }
    .print-copy { width:210mm; margin:0; }
    .wedding-print-page { width:210mm; height:297mm; min-height:297mm; max-height:297mm; overflow:hidden; page-break-after:always; break-after:page; box-sizing:border-box; }
    .wedding-print-page:last-child { page-break-after:auto; break-after:auto; }
    .cake-print-page { width:210mm; height:auto; min-height:0; max-height:none; box-sizing:border-box; page-break-after:auto; break-after:auto; }
    .print-hide-top, .print-hide { display:none !important; }
  `;
  head.appendChild(style);
  printWindow.document.open();
  printWindow.document.write('<!doctype html><html><head>');
  printWindow.document.write(head.innerHTML);
  printWindow.document.write('</head><body><div class="print-copy">');
  printWindow.document.write(source.innerHTML);
  printWindow.document.write('</div></body></html>');
  printWindow.document.close();
  printWindow.focus();
  window.setTimeout(() => { printWindow.print(); printWindow.close(); }, 350);
}
