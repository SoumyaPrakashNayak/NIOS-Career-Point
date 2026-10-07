import cv2
import numpy as np
from PIL import Image

img = Image.open('assets/images/nios-career-point.png')
arr = np.array(img)
alpha = arr[:, :, 3] > 40

def mask_to_svg_path(mask):
    contours, hierarchy = cv2.findContours(mask.astype(np.uint8), cv2.RETR_CCOMP, cv2.CHAIN_APPROX_TC89_L1)
    if not contours or hierarchy is None: return ''
    d = []
    hierarchy = hierarchy[0]
    for i, c in enumerate(contours):
        if len(c) < 3: continue
        pts = c.reshape(-1, 2)
        d.append(f'M {pts[0][0]} {pts[0][1]}')
        for pt in pts[1:]:
            d.append(f'L {pt[0]} {pt[1]}')
        d.append('Z')
    return ' '.join(d)

mask_n = alpha & (arr[:, :, 2] > 100) & (arr[:, :, 0] < 80) & (np.arange(400)[None, :] < 50)
mask_nib = alpha & (arr[:, :, 0] > 150) & (arr[:, :, 2] < 80) & (np.arange(400)[None, :] >= 50) & (np.arange(400)[None, :] < 86)
mask_o = alpha & (arr[:, :, 2] > 100) & (arr[:, :, 0] < 80) & (np.arange(400)[None, :] >= 85) & (np.arange(400)[None, :] < 131)
mask_s = alpha & (arr[:, :, 2] > 100) & (arr[:, :, 0] < 80) & (np.arange(400)[None, :] >= 131) & (np.arange(400)[None, :] < 165)

path_n = mask_to_svg_path(mask_n)
path_nib = mask_to_svg_path(mask_nib)
path_o = mask_to_svg_path(mask_o)
path_s = mask_to_svg_path(mask_s)

career_ranges = [
    ('c1', 174, 192),
    ('a1', 192, 212),
    ('r1', 212, 233),
    ('e1', 233, 252),
    ('e2', 252, 269),
    ('r2', 269, 290),
    ('p',  300, 320),
    ('o2', 320, 341),
    ('i2', 341, 350),
    ('n2', 350, 370),
    ('t',  370, 392),
]
career_paths = {}
for name, x0, x1 in career_ranges:
    m = alpha & (arr[:, :, 0] > 140) & (arr[:, :, 2] < 90) & (np.arange(400)[None, :] >= x0) & (np.arange(400)[None, :] < x1)
    career_paths[name] = mask_to_svg_path(m)

svg_content = f'''<svg id="intro-brand-svg" class="intro-brand-svg" viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <radialGradient id="goldSphereGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#FFF6B8"/>
            <stop offset="35%" stop-color="#EFAD1E"/>
            <stop offset="100%" stop-color="#B87204"/>
        </radialGradient>
        <filter id="brandDropGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#EFAD1E" flood-opacity="0.35"/>
            <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.45"/>
        </filter>
    </defs>

    <!-- MAIN BRAND VECTOR WRAPPER -->
    <g id="brand-vector-group" class="brand-vector-group" filter="url(#brandDropGlow)">
        
        <!-- 1. NIOS UNIT (Emblem, N, O, S) -->
        <g id="unit-nios" class="brand-unit unit-nios">
            
            <!-- CENTRAL EMBLEM (Pen Nib + Gold Ball) -->
            <g id="elem-emblem" class="brand-elem elem-emblem">
                <!-- Golden Ball (Circle on top) -->
                <circle id="elem-gold-ball" class="emblem-part elem-ball" cx="68.5" cy="12.5" r="5.5" fill="url(#goldSphereGrad)"/>
                <!-- Pen Nib Body -->
                <path id="elem-nib-body" class="emblem-part elem-nib" d="{path_nib}" fill="#ED1D25"/>
                <!-- Slit and Breather Hole -->
                <circle id="elem-nib-hole" class="emblem-part elem-hole" cx="68.5" cy="37" r="1.6" fill="#051329"/>
                <line id="elem-nib-slit" class="emblem-part elem-slit" x1="68.5" y1="38" x2="68.5" y2="58" stroke="#051329" stroke-width="1.4" stroke-linecap="round"/>
            </g>

            <!-- Letter N -->
            <g id="elem-letter-n" class="brand-elem elem-letter letter-n">
                <path d="{path_n}" fill="#2B2A87"/>
            </g>

            <!-- Letter O -->
            <g id="elem-letter-o" class="brand-elem elem-letter letter-o">
                <path d="{path_o}" fill="#2B2A87"/>
            </g>

            <!-- Letter S -->
            <g id="elem-letter-s" class="brand-elem elem-letter letter-s">
                <path d="{path_s}" fill="#2B2A87"/>
            </g>
        </g>

        <!-- 2. CAREER UNIT -->
        <g id="unit-career" class="brand-unit unit-career">
            <path id="letter-c"  class="career-letter let-c"  d="{career_paths['c1']}" fill="#ED1D25"/>
            <path id="letter-a"  class="career-letter let-a"  d="{career_paths['a1']}" fill="#ED1D25"/>
            <path id="letter-r1" class="career-letter let-r1" d="{career_paths['r1']}" fill="#ED1D25"/>
            <path id="letter-e1" class="career-letter let-e1" d="{career_paths['e1']}" fill="#ED1D25"/>
            <path id="letter-e2" class="career-letter let-e2" d="{career_paths['e2']}" fill="#ED1D25"/>
            <path id="letter-r2" class="career-letter let-r2" d="{career_paths['r2']}" fill="#ED1D25"/>
        </g>

        <!-- 3. POINT UNIT -->
        <g id="unit-point" class="brand-unit unit-point">
            <path id="letter-p"  class="point-letter let-p"  d="{career_paths['p']}"  fill="#ED1D25"/>
            <path id="letter-o2" class="point-letter let-o2" d="{career_paths['o2']}" fill="#ED1D25"/>
            <path id="letter-i2" class="point-letter let-i2" d="{career_paths['i2']}" fill="#ED1D25"/>
            <path id="letter-n2" class="point-letter let-n2" d="{career_paths['n2']}" fill="#ED1D25"/>
            <path id="letter-t"  class="point-letter let-t"  d="{career_paths['t']}"  fill="#ED1D25"/>
        </g>

        <!-- 4. TRADEMARK (R) -->
        <g id="unit-trademark" class="brand-unit unit-trademark">
            <circle cx="395" cy="22" r="3.5" fill="none" stroke="#ED1D25" stroke-width="0.8"/>
            <text x="395" y="24.5" font-family="'Segoe UI', Arial, sans-serif" font-size="4.5" font-weight="bold" fill="#ED1D25" text-anchor="middle">R</text>
        </g>
    </g>
</svg>
'''

with open('assets/images/nios-career-point.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)
print('Saved assets/images/nios-career-point.svg successfully!')
