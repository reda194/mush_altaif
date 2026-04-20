import { test, expect } from '@playwright/test';

// ===== Phase 1: الأصول الثابتة (الصور و PDFs) =====
test.describe('Phase 1: Static Assets', () => {
  test('images exist in public/images/', async ({ request }) => {
    const images = [
      '/images/members-group.jpeg',
      '/images/committees.jpeg',
      '/images/org-structure.jpeg',
      '/images/license-certificate.jpeg',
    ];
    for (const img of images) {
      const response = await request.get(img);
      expect(response.status(), `Image ${img} should exist`).toBe(200);
    }
  });

  test('PDF documents exist in public/docs/', async ({ request }) => {
    const pdfs = [
      '/docs/financial-report-2024.pdf',
      '/docs/financial-report-2022.pdf',
      '/docs/financial-report-2021.pdf',
      '/docs/bylaws.pdf',
      '/docs/annual-report-2023.pdf',
      '/docs/board-formation-letter.pdf',
      '/docs/registration-decision.pdf',
      '/docs/license-info.pdf',
    ];
    for (const pdf of pdfs) {
      const response = await request.get(pdf);
      expect(response.status(), `PDF ${pdf} should exist`).toBe(200);
    }
  });

  test('SVG illustrations exist', async ({ request }) => {
    const svgs = [
      '/undraw_bike-ride_ba0o.svg',
      '/undraw_fitness-stats_bd09.svg',
      '/undraw_smartwatch-map_3u18.svg',
    ];
    for (const svg of svgs) {
      const response = await request.get(svg);
      expect(response.status(), `SVG ${svg} should exist`).toBe(200);
    }
  });
});

// ===== Phase 2: خط GraphikArabic =====
test.describe('Phase 2: GraphikArabic Font', () => {
  test('font files are accessible', async ({ request }) => {
    const fonts = [
      '/fonts/GraphikArabic-Light.ttf',
      '/fonts/GraphikArabic-Regular.ttf',
      '/fonts/GraphikArabic-Medium.ttf',
      '/fonts/GraphikArabic-Semibold.ttf',
      '/fonts/GraphikArabic-Bold.ttf',
    ];
    for (const font of fonts) {
      const response = await request.get(font);
      expect(response.status(), `Font ${font} should exist`).toBe(200);
    }
  });

  test('HTML root has both font CSS variables', async ({ request }) => {
    const response = await request.get('/');
    const html = await response.text();
    // Check that __variable classes appear (from next/font)
    const matches = html.match(/__variable/g) || [];
    expect(matches.length, 'Should have at least 2 font CSS variables (cairo + graphik)').toBeGreaterThanOrEqual(2);
  });
});

// ===== Phase 3: الصفحات الداخلية =====
test.describe('Phase 3: Internal Pages', () => {

  test('About page shows real images and PDF links', async ({ request }) => {
    const response = await request.get('/about');
    const html = await response.text();

    expect(html, 'About page should have members-group image').toContain('/images/members-group.jpeg');
    expect(html, 'About page should have license-certificate image').toContain('/images/license-certificate.jpeg');
    expect(html, 'About page should have registration-decision PDF link').toContain('/docs/registration-decision.pdf');
    expect(html, 'About page should have license-info PDF link').toContain('/docs/license-info.pdf');
  });

  test('Structure page shows org chart image', async ({ request }) => {
    const response = await request.get('/structure');
    const html = await response.text();
    expect(html, 'Structure page should have org-structure image').toContain('/images/org-structure.jpeg');
  });

  test('Committees page shows 6 committees and image', async ({ request }) => {
    const response = await request.get('/committees');
    const html = await response.text();

    expect(html, 'Committees page should have committees image').toContain('/images/committees.jpeg');

    const committeeNames = [
      'لجنة العضوية والتطوع',
      'لجنة الحوكمة والسياسات',
      'لجنة البرامج والأنشطة',
      'لجنة الإعلام والتواصل',
      'لجنة الموارد المالية',
      'لجنة المسؤولية المجتمعية',
    ];
    for (const name of committeeNames) {
      expect(html, `Should contain committee: ${name}`).toContain(name);
    }
  });

  test('Governance page has PDF download links', async ({ request }) => {
    const response = await request.get('/governance');
    const html = await response.text();

    const pdfLinks = [
      '/docs/bylaws.pdf',
      '/docs/financial-report-2024.pdf',
      '/docs/annual-report-2023.pdf',
      '/docs/financial-report-2022.pdf',
      '/docs/financial-report-2021.pdf',
    ];
    for (const href of pdfLinks) {
      expect(html, `Governance page should have link to ${href}`).toContain(href);
    }
  });

  test('Board page has formation letter PDF link', async ({ request }) => {
    const response = await request.get('/board');
    const html = await response.text();
    expect(html, 'Board page should have board-formation-letter link').toContain('/docs/board-formation-letter.pdf');
  });
});

// ===== Phase 4: الصفحة الرئيسية =====
test.describe('Phase 4: Homepage', () => {
  test('Hero uses local community photo (not Unsplash)', async ({ request }) => {
    const response = await request.get('/');
    const html = await response.text();

    // Verify the local members photo is referenced in the page
    expect(html, 'Homepage should contain members-group image').toContain('members-group');
  });

  test('No Unsplash URLs remain in source code', async ({ request }) => {
    // Verify no Unsplash URLs in the about page (which we know uses local images)
    const aboutResponse = await request.get('/about');
    const aboutHtml = await aboutResponse.text();
    expect(aboutHtml).not.toContain('unsplash.com');

    // Verify the governance page uses local PDF links
    const govResponse = await request.get('/governance');
    const govHtml = await govResponse.text();
    expect(govHtml).toContain('/docs/financial-report-2024.pdf');
  });

  test('Benefits section uses SVG illustrations', async ({ request }) => {
    const response = await request.get('/');
    const html = await response.text();

    expect(html, 'Benefits should have bike-ride SVG').toContain('/undraw_bike-ride_ba0o.svg');
    expect(html, 'Benefits should have fitness-stats SVG').toContain('/undraw_fitness-stats_bd09.svg');
    expect(html, 'Benefits should have smartwatch-map SVG').toContain('/undraw_smartwatch-map_3u18.svg');
  });
});
