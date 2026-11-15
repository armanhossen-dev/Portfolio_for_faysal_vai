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
import { UI_THEMES } from '../src/themes/themeConfig.js';

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
  });

  await t.test('personal details reflect residence and origin', () => {
    assert.equal(studentProfile.livesIn, 'Dhaka, Bangladesh');
    assert.equal(studentProfile.hometown, 'Chandpur, Chittagong, Bangladesh');
  });

  await t.test('education trajectory has all 3 verified institutions', () => {
    assert.equal(studentProfile.education.length, 3);
    
    // 1. DIU
    const diu = studentProfile.education[0];
    assert.equal(diu.institution, 'Daffodil International University');
    assert.equal(diu.enrolled, 'In January 2022');
    
    // 2. College
    const college = studentProfile.education[1];
    assert.equal(college.institution, 'Kachua Bangabondhu Govt Degree college');
    
    // 3. High School
    const school = studentProfile.education[2];
    assert.equal(school.institution, 'Monpura Batabaria Jafar Ali Memorial High school');
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
});

test('Projects & Technical Sheets Folio', async (t) => {
  await t.test('projects collection has all 6 academic works', () => {
    assert.equal(projects.length, 6);
  });

  await t.test('technical sheets collection has 12 technical drawings + cover', () => {
    assert.ok(allSheets.length >= 12);
  });

  await t.test('all referenced images exist on disk in public folder', () => {
    // Check Hero Background
    assert.ok(fs.existsSync(path.resolve('public/images/faysal-hero.jpg')), 'Hero background image missing');
    
    // Check Footer Silhouette
    assert.ok(fs.existsSync(path.resolve('public/images/footer-silhouette.jpg')), 'Footer silhouette missing');

    // Check Achievement images
    const achievement = recentAchievements[0];
    for (const [key, imgPath] of Object.entries(achievement.images)) {
      const cleanPath = imgPath.replace(/^\.\//, 'public/');
      assert.ok(fs.existsSync(path.resolve(cleanPath)), `Achievement image missing: ${cleanPath}`);
    }

    // Check project cover images
    for (const proj of projects) {
      const cover = proj.coverImage.replace(/^\.\//, 'public/');
      assert.ok(fs.existsSync(path.resolve(cover)), `Cover image missing: ${cover}`);
    }
  });
});

test('UI Design System - 57 Themes Collection', async (t) => {
  await t.test('contains all 57 design system themes', () => {
    assert.equal(UI_THEMES.length, 57);
  });

  await t.test('each theme has id, name, and description', () => {
    for (const theme of UI_THEMES) {
      assert.ok(theme.id, 'Theme must have id');
      assert.ok(theme.name, 'Theme must have name');
      assert.ok(theme.description, 'Theme must have description');
    }
  });
});
