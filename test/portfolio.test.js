import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { 
  studentProfile, 
  projects, 
  allSheets, 
  recentAchievements, 
  projectCategories 
} from '../src/data/projectsData.js';

test('Student Profile - Identity, Credentials & Contacts', async (t) => {
  await t.test('profile has correct name and academic standing', () => {
    assert.equal(studentProfile.name, 'Faysal Ahmed');
    assert.match(studentProfile.degree, /B\.Arch/i);
    assert.equal(studentProfile.university, 'Daffodil International University');
    assert.match(studentProfile.academicPeriod, /January 2022/i);
  });

  await t.test('contact email and social links match latest requirements', () => {
    assert.equal(studentProfile.email, 'faysal934ahmed@gmail.com');
    assert.equal(studentProfile.linkedin, 'https://www.linkedin.com/in/faysalahmed934');
    assert.equal(studentProfile.linkedinHandle, 'faysalahmed934');
    assert.equal(studentProfile.facebook, 'https://www.facebook.com/faysal.ahmed.576645');
    assert.equal(studentProfile.facebookHandle, 'faysal.ahmed.576645');
    assert.equal(studentProfile.behance, 'https://www.behance.net/faysalahmed89');
    assert.equal(studentProfile.behanceHandle, 'faysalahmed89');
  });

  await t.test('personal details reflect residence and origin', () => {
    assert.equal(studentProfile.livesIn, 'Dhaka, Bangladesh');
    assert.equal(studentProfile.hometown, 'Chandpur, Chittagong, Bangladesh');
  });

  await t.test('education trajectory has all 3 verified institutions with logos', () => {
    assert.equal(studentProfile.education.length, 3);
    
    // 1. DIU
    const diu = studentProfile.education[0];
    assert.equal(diu.institution, 'Daffodil International University');
    assert.equal(diu.enrolled, 'In January 2022');
    assert.ok(fs.existsSync(path.resolve(diu.logo.replace(/^\.\//, 'public/'))), 'DIU logo missing');
    
    // 2. College
    const college = studentProfile.education[1];
    assert.equal(college.institution, 'Kachua Bangabondhu Govt Degree college');
    assert.ok(fs.existsSync(path.resolve(college.logo.replace(/^\.\//, 'public/'))), 'College logo missing');
    
    // 3. High School
    const school = studentProfile.education[2];
    assert.equal(school.institution, 'Monpura Batabaria Jafar Ali Memorial High school');
    assert.ok(fs.existsSync(path.resolve(school.logo.replace(/^\.\//, 'public/'))), 'High school logo missing');
  });

  await t.test('daily apps & tools list contains all 12 specified software', () => {
    assert.equal(studentProfile.dailyTools.length, 12);
    const expectedTools = [
      'Adobe Photoshop',
      'Sketchup',
      'Autocad',
      'Archicad',
      'Lumion',
      'Enscape',
      'D5 Render',
      'Affinity',
      'VS Code',
      'QGIS',
      'Autodesk Forma',
      'Archimap'
    ];
    const actualNames = studentProfile.dailyTools.map(t => t.name.toLowerCase());
    for (const exp of expectedTools) {
      assert.ok(
        actualNames.includes(exp.toLowerCase()),
        `Missing daily tool: ${exp}`
      );
    }
    const d5 = studentProfile.dailyTools.find(t => t.name === 'D5 Render');
    assert.ok(d5 && d5.image, 'D5 Render should have custom logo image');
    assert.ok(fs.existsSync(path.resolve(d5.image.replace(/^\.\//, 'public/'))), 'D5 Render logo missing on disk');

    const cad = studentProfile.dailyTools.find(t => t.name === 'Autocad');
    assert.ok(cad && cad.image, 'Autocad should have custom logo image');
    assert.ok(fs.existsSync(path.resolve(cad.image.replace(/^\.\//, 'public/'))), 'Autocad logo missing on disk');

    const forma = studentProfile.dailyTools.find(t => t.name === 'Autodesk Forma');
    assert.ok(forma && forma.image, 'Autodesk Forma should have custom logo image');
    assert.ok(fs.existsSync(path.resolve(forma.image.replace(/^\.\//, 'public/'))), 'Autodesk Forma logo missing on disk');
  });
});

test('Privacy & Redaction - No Student ID Leakage', async (t) => {
  await t.test('student ID 221-42-053 must not exist anywhere in src files', () => {
    const srcDir = path.resolve('src');
    
    function scanDir(dir) {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          scanDir(fullPath);
        } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.css') || file.endsWith('.html')) {
          const content = fs.readFileSync(fullPath, 'utf8');
          assert.equal(
            content.includes('221-42-053'),
            false,
            `Forbidden student ID 221-42-053 found in ${fullPath}`
          );
        }
      }
    }
    scanDir(srcDir);
  });
});

test('Recent Achievements & Honors', async (t) => {
  await t.test('contains ARCHFEST 2026 Winner Best Design Award', () => {
    assert.ok(recentAchievements.length >= 1);
    const archfest = recentAchievements[0];
    assert.equal(archfest.event, 'ARCHFEST 2026');
    assert.equal(archfest.category, 'Category 08');
    assert.match(archfest.title, /WINNER/i);
    assert.match(archfest.citation, /Award of Excellence/i);
    assert.equal(archfest.projectId, 'between-water-and-home');
  });

  await t.test('winning project references ARCHFEST award', () => {
    const winningProject = projects.find(p => p.id === 'between-water-and-home');
    assert.ok(winningProject, 'Winning project between-water-and-home must exist');
    assert.ok(winningProject.award, 'Project 02 must have award object');
    assert.match(winningProject.award.badge, /WINNER/i);
  });

  await t.test('contains Paraa Presents shortlisted achievement with images on disk', () => {
    const paraa = recentAchievements.find(a => a.id === 'paraa-korail-shortlisted');
    assert.ok(paraa, 'Paraa shortlisted achievement must exist');
    assert.match(paraa.title, /Shortlisted by Paraa Presents/i);
    assert.ok(fs.existsSync(path.resolve(paraa.images.poster.replace(/^\.\//, 'public/'))));
    assert.ok(fs.existsSync(path.resolve(paraa.images.modules.replace(/^\.\//, 'public/'))));
  });

  await t.test('achievements section supports gallery sequential navigation in lightbox', () => {
    const achieveJsx = fs.readFileSync(path.resolve('src/components/AchievementsSection.jsx'), 'utf8');
    const appJsx = fs.readFileSync(path.resolve('src/App.jsx'), 'utf8');
    assert.ok(achieveJsx.includes('onOpenLightbox(targetSheet, achievementSheets)'));
    assert.ok(appJsx.includes('lightboxGallery || lightboxSheet.gallery || allSheets'));
  });
});

test('Projects & Technical Sheets Folio', async (t) => {
  await t.test('projects collection has all 6 academic works', () => {
    assert.equal(projects.length, 6);
  });

  await t.test('technical sheets collection has 12 technical drawings', () => {
    assert.ok(allSheets.length >= 12);
  });

  await t.test('all referenced images exist on disk in public folder', () => {
    // Check Hero Background
    assert.ok(fs.existsSync(path.resolve('public/images/faysal-hero.jpg')), 'Hero background image missing');
    
    // Check Footer Silhouette
    assert.ok(fs.existsSync(path.resolve('public/images/footer-silhouette.jpg')), 'Footer silhouette missing');

    // Check DIU Logo
    assert.ok(fs.existsSync(path.resolve('public/images/diu-logo.png')), 'Daffodil International University logo missing');

    // Check Achievement images
    for (const ach of recentAchievements) {
      for (const [key, imgPath] of Object.entries(ach.images)) {
        const cleanPath = imgPath.replace(/^\.\//, 'public/');
        assert.ok(fs.existsSync(path.resolve(cleanPath)), `Achievement image missing: ${cleanPath}`);
      }
    }

    // Check project cover images
    for (const proj of projects) {
      const cover = proj.coverImage.replace(/^\.\//, 'public/');
      assert.ok(fs.existsSync(path.resolve(cover)), `Cover image missing: ${cover}`);
    }
  });
});

test('Architectural Design System Integrity', async (t) => {
  await t.test('no theme studio modal or theme switcher pill in source code', () => {
    const appJsx = fs.readFileSync(path.resolve('src/App.jsx'), 'utf8');
    const navbarJsx = fs.readFileSync(path.resolve('src/components/Navbar.jsx'), 'utf8');
    assert.equal(appJsx.includes('ThemeStudioModal'), false);
    assert.equal(appJsx.includes('ThemeSwitcherFloatingPill'), false);
    assert.equal(navbarJsx.includes('57 UI Styles'), false);
  });

  await t.test('navbar contains only name with no logo box and no subtitle text', () => {
    const navbarJsx = fs.readFileSync(path.resolve('src/components/Navbar.jsx'), 'utf8');
    assert.equal(navbarJsx.includes('FA ARCH'), false);
    assert.equal(navbarJsx.includes('B.Arch Portfolio • Daffodil Int. University'), false);
    assert.ok(navbarJsx.includes('{studentProfile.name}'));
  });

  await t.test('hero section removed technical floating badges and maintains clean photo background', () => {
    const heroJsx = fs.readFileSync(path.resolve('src/components/Hero.jsx'), 'utf8');
    assert.equal(heroJsx.includes('SCALE: NTS // DEPT_OF_ARCHITECTURE'), false);
    assert.equal(heroJsx.includes('[+] 23°49\'32"N'), false);
  });

  await t.test('images have drag protection and right-click context menu prevention', () => {
    const appJsx = fs.readFileSync(path.resolve('src/App.jsx'), 'utf8');
    const indexCss = fs.readFileSync(path.resolve('src/index.css'), 'utf8');
    assert.ok(appJsx.includes('handleImageContextMenu'));
    assert.ok(appJsx.includes('handleImageDragStart'));
    assert.ok(indexCss.includes('-webkit-user-drag: none'));
  });

  await t.test('responsive layout docks navbar right and places hero photo stage at top', () => {
    const indexCss = fs.readFileSync(path.resolve('src/index.css'), 'utf8');
    assert.ok(indexCss.includes('.hero .stage {\n    order: 1;'));
    assert.ok(indexCss.includes('right: 16px;'));
  });

  await t.test('theme switch button uses circular radial View Transition animation', () => {
    const navbarJsx = fs.readFileSync(path.resolve('src/components/Navbar.jsx'), 'utf8');
    const indexCss = fs.readFileSync(path.resolve('src/index.css'), 'utf8');
    assert.ok(navbarJsx.includes('startViewTransition'));
    assert.ok(navbarJsx.includes('circle(${endRadius}px at ${x}px ${y}px)'));
    assert.ok(indexCss.includes('::view-transition-new(root)'));
  });
});
