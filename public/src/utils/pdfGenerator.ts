export type PdfBlock = { kind: 'text'; x: number; y: number; text: string; size?: number; bold?: boolean; color?: [number, number, number] } | { kind: 'line'; x1: number; y1: number; x2: number; y2: number; color?: [number, number, number]; width?: number } | { kind: 'rect'; x: number; y: number; w: number; h: number; fill?: [number, number, number]; stroke?: [number, number, number]; lineWidth?: number };

const PAGE_W = 595;
const PAGE_H = 842;

function esc(s: string) {
  return s.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)').replace(/\r?\n/g, ' ');
}

function rgb([r, g, b]: [number, number, number]) {
  return `${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)}`;
}

function emit(block: PdfBlock) {
  if (block.kind === 'text') {
    const size = block.size ?? 10;
    const color = block.color ?? [0.13, 0.12, 0.31];
    const font = block.bold ? 'F2' : 'F1';
    return `BT /${font} ${size} Tf ${rgb(color)} rg ${block.x} ${PAGE_H - block.y} Td (${esc(block.text)}) Tj ET\n`;
  }
  if (block.kind === 'line') {
    const c = block.color ?? [0.72, 0.72, 0.84];
    return `${rgb(c)} RG ${(block.width ?? 1)} w ${block.x1} ${PAGE_H - block.y1} m ${block.x2} ${PAGE_H - block.y2} l S\n`;
  }
  const fill = block.fill;
  const stroke = block.stroke;
  let out = '';
  if (fill) out += `${rgb(fill)} rg `;
  if (stroke) out += `${rgb(stroke)} RG ${(block.lineWidth ?? 1)} w `;
  out += `${block.x} ${PAGE_H - block.y - block.h} ${block.w} ${block.h} re `;
  if (fill && stroke) out += 'B'; else if (fill) out += 'f'; else out += 'S';
  return `${out}\n`;
}

function wrap(text: string, maxChars: number) {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = '';
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > maxChars && line) { lines.push(line); line = word; }
    else line = candidate;
  }
  if (line) lines.push(line);
  return lines;
}

function addWrapped(blocks: PdfBlock[], x: number, y: number, text: string, opts: { widthChars?: number; size?: number; bold?: boolean; color?: [number, number, number]; leading?: number } = {}) {
  const lines = wrap(text, opts.widthChars ?? 80);
  const leading = opts.leading ?? ((opts.size ?? 9) + 3);
  lines.forEach((line, i) => blocks.push({ kind: 'text', x, y: y + i * leading, text: line, size: opts.size ?? 9, bold: opts.bold, color: opts.color }));
  return y + lines.length * leading;
}

function makePdf(pages: PdfBlock[][]) {
  const objects: string[] = [];
  const add = (body: string) => { objects.push(body); return objects.length; };
  const font1 = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');
  const font2 = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>');
  const pageIds: number[] = [];
  const contentIds: number[] = [];
  for (const blocks of pages) {
    const stream = blocks.map(emit).join('');
    const contentId = add(`<< /Length ${stream.length} >>\nstream\n${stream}endstream`);
    contentIds.push(contentId);
    pageIds.push(0);
  }
  const pagesId = add('');
  for (let i = 0; i < pageIds.length; i++) {
    const pageId = add(`<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${PAGE_W} ${PAGE_H}] /Resources << /Font << /F1 ${font1} 0 R /F2 ${font2} 0 R >> >> /Contents ${contentIds[i]} 0 R >>`);
    pageIds[i] = pageId;
  }
  objects[pagesId - 1] = `<< /Type /Pages /Count ${pageIds.length} /Kids [${pageIds.map((id) => `${id} 0 R`).join(' ')}] >>`;
  const catalogId = add(`<< /Type /Catalog /Pages ${pagesId} 0 R >>`);
  let pdf = '%PDF-1.4\n%\xFF\xFF\xFF\xFF\n';
  const offsets: number[] = [0];
  objects.forEach((body, idx) => {
    offsets[idx + 1] = pdf.length;
    pdf += `${idx + 1} 0 obj\n${body}\nendobj\n`;
  });
  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i <= objects.length; i++) pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return new Blob([new TextEncoder().encode(pdf)], { type: 'application/pdf' });
}

export function buildCakeOrderPdf(input: {
  estimateNumber: string;
  date: string;
  customer: string;
  phone: string;
  occasion: string;
  size: string;
  shape: string;
  icing: string;
  flavours: string;
  colour: string;
  design: string;
  message: string;
  toppers: string;
  orderDate: string;
  time: string;
  location: string;
  notes: string;
  dietary: string;
  inspo: string;
  budget: string;
  total: number;
  paid: number;
  balance: number;
}) {
  const blocks: PdfBlock[] = [];
  blocks.push({ kind: 'rect', x: 0, y: 0, w: 595, h: 72, fill: [0.29, 0.27, 0.56] });
  blocks.push({ kind: 'text', x: 36, y: 28, text: 'Bafliex Cakes Arena', size: 17, bold: true, color: [1,1,1] });
  blocks.push({ kind: 'text', x: 36, y: 48, text: 'A Taste of Heaven • 0727 45 38 39 • M-Pesa Buy Goods Till 678814', size: 8.5, color: [1,1,1] });
  blocks.push({ kind: 'text', x: 435, y: 31, text: 'Cake Order', size: 15, bold: true, color: [1,1,1] });
  blocks.push({ kind: 'text', x: 36, y: 94, text: `Order #${input.estimateNumber}`, size: 9.5, bold: true });
  blocks.push({ kind: 'text', x: 360, y: 94, text: input.date, size: 9.5 });
  blocks.push({ kind: 'line', x1: 36, y1: 106, x2: 559, y2: 106 });
  const rows: Array<[string, string]> = [
    ['Customer', `${input.customer || 'To be provided'} • ${input.phone || 'To be provided'}`],
    ['Occasion', input.occasion], ['Size', input.size], ['Shape', input.shape], ['Icing', input.icing],
    ['Flavours', input.flavours || 'To be confirmed'], ['Colour / Design', `${input.colour || 'To be confirmed'} / ${input.design || 'To be confirmed'}`],
    ['Message / Toppers', `${input.message || 'None'} / ${input.toppers || 'None'}`], ['Date / Time', `${input.orderDate} • ${input.time}`],
    ['Location', input.location], ['Special Notes', input.notes || 'None'], ['Dietary', input.dietary || 'None requested'], ['Inspo Photos', input.inspo || 'None']
  ];
  let y = 128;
  for (const [label, value] of rows) {
    blocks.push({ kind: 'rect', x: 36, y, w: 523, h: 30, fill: y % 60 === 8 ? [0.97,0.97,0.99] : [1,1,1], stroke: [0.83,0.83,0.9], lineWidth: 0.6 });
    blocks.push({ kind: 'text', x: 48, y: y + 19, text: label, size: 8.5, bold: true, color: [0.29,0.27,0.56] });
    blocks.push({ kind: 'text', x: 178, y: y + 19, text: value.slice(0, 95), size: 8.5, color: [0.15,0.15,0.15] });
    y += 30;
  }
  blocks.push({ kind: 'rect', x: 36, y: y + 14, w: 523, h: 48, fill: [0.29,0.27,0.56] });
  blocks.push({ kind: 'text', x: 52, y: y + 43, text: 'TOTAL', size: 11, bold: true, color: [1,1,1] });
  blocks.push({ kind: 'text', x: 430, y: y + 43, text: `Ksh ${input.total.toLocaleString()}.00`, size: 13, bold: true, color: [1,1,1] });
  blocks.push({ kind: 'text', x: 36, y: y + 84, text: `Paid: Ksh ${input.paid.toLocaleString()}.00    Balance: Ksh ${input.balance.toLocaleString()}.00`, size: 9.5, bold: true });
  addWrapped(blocks, 36, y + 112, 'N.B.: The displayed price is an estimate. It may change depending on the extras added, flavours chosen and the design itself.', { widthChars: 92, size: 8.5, color: [0.42,0.36,0.33] });
  addWrapped(blocks, 36, y + 148, 'Preparation & delivery: Cakes take at least 4 hours to prepare. Free delivery is available to many places; a small charge may apply depending on location and cake size. Delivery time depends on location, traffic conditions and delivery-person availability.', { widthChars: 92, size: 8.2, color: [0.42,0.36,0.33] });
  return makePdf([blocks]);
}

export function buildWeddingPdf(input: {
  estimateNumber: string; quoteDate: string; clientName: string; clientPhone: string; eventDate: string; guests: string; packageTitle: string;
  mainKg: number; mainTiers: string; sideQty: number; sideEach: number; totalKg: number; precut: number; flavours: string; design: string; location: string; notes: string; budget: string;
  total: number; complimentary: string[]; transport: string;
}) {
  const p1: PdfBlock[] = [];
  p1.push({ kind: 'text', x: 46, y: 48, text: 'Bafliex Cakes Arena', size: 15, bold: true });
  p1.push({ kind: 'text', x: 46, y: 64, text: '0727 45 38 39 • bafliexcakes@gmail.com • A Taste of Heaven', size: 8.5, color: [0.34,0.34,0.34] });
  p1.push({ kind: 'text', x: 416, y: 50, text: 'Wedding Cake', size: 15, bold: true, color: [0.29,0.27,0.56] });
  p1.push({ kind: 'text', x: 468, y: 68, text: 'Quote', size: 15, bold: true, color: [0.29,0.27,0.56] });
  p1.push({ kind: 'line', x1: 46, y1: 82, x2: 549, y2: 82, width: 1.2 });
  p1.push({ kind: 'text', x: 46, y: 111, text: 'BILL TO', size: 9.5, bold: true });
  p1.push({ kind: 'text', x: 46, y: 128, text: input.clientName || 'To be provided', size: 10, bold: true });
  p1.push({ kind: 'text', x: 46, y: 143, text: input.clientPhone || 'To be provided', size: 8.5, color: [0.34,0.34,0.34] });
  p1.push({ kind: 'text', x: 340, y: 111, text: 'ESTIMATE #', size: 9.5, bold: true });
  p1.push({ kind: 'text', x: 424, y: 111, text: input.estimateNumber, size: 8.5 });
  p1.push({ kind: 'text', x: 340, y: 129, text: 'DATE', size: 9.5, bold: true });
  p1.push({ kind: 'text', x: 424, y: 129, text: input.quoteDate, size: 8.5 });
  p1.push({ kind: 'text', x: 340, y: 147, text: 'EVENT DATE', size: 9.5, bold: true });
  p1.push({ kind: 'text', x: 424, y: 147, text: input.eventDate || 'To be confirmed', size: 8.5 });
  const tableY = 170;
  p1.push({ kind: 'rect', x: 46, y: tableY, w: 503, h: 28, fill: [0.29,0.27,0.56] });
  p1.push({ kind: 'text', x: 56, y: tableY + 18, text: 'Description', size: 9, bold: true, color: [1,1,1] });
  p1.push({ kind: 'text', x: 364, y: tableY + 18, text: 'QTY', size: 9, bold: true, color: [1,1,1] });
  p1.push({ kind: 'text', x: 428, y: tableY + 18, text: 'Price', size: 9, bold: true, color: [1,1,1] });
  p1.push({ kind: 'text', x: 497, y: tableY + 18, text: 'Amount', size: 9, bold: true, color: [1,1,1] });
  let y = tableY + 28;
  const rows: Array<[string,string,string,string,string]> = [
    ['Main Cake', `${input.mainKg}kg • ${input.mainTiers || '-'} tiers • ${input.flavours || 'flavours to be confirmed'}`, `${input.mainKg}kg`, 'Ksh 2,500/kg', `Ksh ${Math.round(input.mainKg*2500).toLocaleString()}.00`],
    ['Side Cakes', `${input.sideQty} side cakes • ${input.sideEach}kg each`, `${(input.sideQty*input.sideEach).toFixed(2)}kg`, 'Ksh 2,500/kg', `Ksh ${Math.round(input.sideQty*input.sideEach*2500).toLocaleString()}.00`],
    ['Precut Cakes', `Free pre-cut pieces for the selected package`, `${input.precut} pcs`, 'Ksh 0.00', 'Ksh 0.00'],
    ['Complimentary Items', input.complimentary.join(' • '), '—', 'Ksh 0.00', 'Ksh 0.00'],
    ['Transport / Delivery', input.transport, '—', 'Confirm', 'Not included'],
  ];
  for (let i=0;i<rows.length;i++) {
    const [a,b,c,d,e] = rows[i];
    const h = i===3 ? 62 : 56;
    p1.push({ kind:'rect', x:46, y, w:503, h, fill:i%2===1 ? [0.965,0.965,0.985] : [1,1,1], stroke:[0.74,0.74,0.84], lineWidth:0.6 });
    p1.push({ kind:'text', x:56, y:y+16, text:a, size:8.6, bold:true });
    addWrapped(p1, 56, y+31, b, { widthChars: 54, size:7.8, color:[0.25,0.25,0.25], leading:9 });
    p1.push({ kind:'text', x:364, y:y+26, text:c, size:7.8, bold:true });
    p1.push({ kind:'text', x:428, y:y+26, text:d, size:7.8 });
    p1.push({ kind:'text', x:497, y:y+26, text:e.slice(0,15), size:7.2, bold:true });
    y += h;
  }
  p1.push({ kind:'text', x:56, y:y+28, text:`Guests: ${input.guests} • Total cake: ${input.totalKg}kg • Preferred budget: ${input.budget ? `Ksh ${Number(input.budget).toLocaleString()}` : 'To be discussed'}`, size:8.5, bold:true });
  addWrapped(p1, 56, y+47, `Design / colour theme: ${input.design || 'To be discussed'}`, { widthChars: 75, size:8 });
  addWrapped(p1, 56, y+66, `Location: ${input.location || 'To be confirmed'} • Special notes: ${input.notes || 'None'}`, { widthChars: 75, size:8 });
  p1.push({ kind:'rect', x: 395, y:y+88, w:154, h:38, fill:[0.29,0.27,0.56] });
  p1.push({ kind:'text', x:407, y:y+111, text:'TOTAL', size:10, bold:true, color:[1,1,1] });
  p1.push({ kind:'text', x:482, y:y+111, text:`Ksh ${input.total.toLocaleString()}.00`, size:9.5, bold:true, color:[1,1,1] });
  p1.push({ kind:'text', x:46, y:803, text:'1/2', size:8, color:[0.45,0.45,0.45] });

  const p2: PdfBlock[] = [];
  p2.push({ kind:'text', x:46, y:48, text:'Bafliex Cakes Arena', size:15, bold:true });
  p2.push({ kind:'text', x:46, y:64, text:'0727 45 38 39 • bafliexcakes@gmail.com • A Taste of Heaven', size:8.5, color:[0.34,0.34,0.34] });
  p2.push({ kind:'text', x:416, y:50, text:'Wedding Cake', size:15, bold:true, color:[0.29,0.27,0.56] });
  p2.push({ kind:'text', x:468, y:68, text:'Quote', size:15, bold:true, color:[0.29,0.27,0.56] });
  p2.push({ kind:'line', x1:46, y1:82, x2:549, y2:82, width:1.2 });
  p2.push({ kind:'text', x:46, y:115, text:'Payment Method', size:13, bold:true });
  addWrapped(p2,46,136,'M-Pesa Buy Goods Till: 678814\n30% upon booking\n75% @ 3 weeks to event day\n25% on or before eve of event',{widthChars:46,size:9,leading:13});
  p2.push({ kind:'rect', x:360, y:108, w:189, h:42, fill:[0.29,0.27,0.56] });
  p2.push({ kind:'text', x:375, y:134, text:'TOTAL', size:11, bold:true, color:[1,1,1] });
  p2.push({ kind:'text', x:448, y:134, text:`Ksh ${input.total.toLocaleString()}.00`, size:10.2, bold:true, color:[1,1,1] });
  p2.push({ kind:'rect', x:46, y:210, w:503, h:168, fill:[1,1,1], stroke:[0.86,0.86,0.86], lineWidth:0.8 });
  p2.push({ kind:'text', x:60, y:236, text:'Package Includes', size:13, bold:true });
  let cy=258;
  input.complimentary.forEach((item)=>{ cy = addWrapped(p2,70,cy,`• ${item}`,{widthChars:70,size:9,leading:13}) + 2; });
  p2.push({ kind:'rect', x:46, y:402, w:503, h:54, fill:[1,0.96,0.91], stroke:[0.91,0.45,0.15], lineWidth:0.8 });
  p2.push({ kind:'text', x:60, y:425, text:'N.B.', size:10, bold:true, color:[0.91,0.45,0.15] });
  addWrapped(p2,92,424,'This is an estimate. Final price may change depending on extras added, flavours chosen and the design itself.',{widthChars:76,size:8.8});
  p2.push({ kind:'text', x:46, y:492, text:'Terms & Conditions', size:13, bold:true });
  let ty=516;
  const terms=[
    'Prices are estimates based on the selected cake quantities and the Ksh 2,500 per kg base calculation.',
    'Wedding cake pricing can change depending on flavour, design, cake quantity and any extras requested.',
    'Transport / delivery is free to many locations; a small charge may apply depending on location and package.',
    'Cakes take at least 4 hours to prepare. Delivery time depends on location, traffic conditions and delivery-person availability.',
    'Final details are confirmed with Bafliex Cakes Arena before booking. We can adjust the cake plan to your preferred budget where possible.'
  ];
  for (const t of terms) ty = addWrapped(p2,46,ty,`• ${t}`,{widthChars:82,size:8.6,leading:13}) + 4;
  p2.push({ kind:'line', x1:46, y1:780, x2:549, y2:780 });
  p2.push({ kind:'text', x:46, y:803, text:`Estimate #${input.estimateNumber}`, size:8, color:[0.45,0.45,0.45] });
  p2.push({ kind:'text', x:520, y:803, text:'2/2', size:8, color:[0.45,0.45,0.45] });
  return makePdf([p1,p2]);
}

export async function sharePdf(blob: Blob, filename: string, shareText: string) {
  const file = new File([blob], filename, { type: 'application/pdf' });
  if (navigator.share && (!navigator.canShare || navigator.canShare({ files: [file] }))) {
    await navigator.share({ title: filename.replace(/\.pdf$/i, ''), text: shareText, files: [file] });
    return { shared: true };
  }
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = filename; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return { shared: false };
}
