const i18n = {
  zh: {
    site_title: 'OpenFlow 开放流动',
    nav_home: '首页',
    nav_about: '关于',
    nav_projects: '项目',
    nav_team: '团队',
    hero_title: 'OpenFlow 开放流动',
    hero_desc: '探索 · 创新 · 协作 —— 大学生科研项目',
    hero_btn: '了解我们',
    about_title: '关于项目',
    about_text: 'OpenFlow 是一个由大学生发起的研究项目，致力于推动学术开放流动。',
    projects_title: '研究项目',
    proj_1_title: '项目一',
    proj_1_desc: '项目简介占位文字。',
    proj_2_title: '项目二',
    proj_2_desc: '项目简介占位文字。',
    proj_3_title: '项目三',
    proj_3_desc: '项目简介占位文字。',
    team_title: '团队成员',
    member_1_name: '成员一',
    member_1_role: '角色',
    member_2_name: '成员二',
    member_2_role: '角色',
    member_3_name: '成员三',
    member_3_role: '角色',
    news_title: '动态',
    news_1_title: '动态标题一',
    news_1_meta: '2026年6月',
    news_1_desc: '动态内容占位文字。',
    news_2_title: '动态标题二',
    news_2_meta: '2026年5月',
    news_2_desc: '动态内容占位文字。',
    news_3_title: '动态标题三',
    news_3_meta: '2026年4月',
    news_3_desc: '动态内容占位文字。',
    footer_text: '© 2026 OpenFlow 开放流动',
    lang_label: 'EN',
  },
  en: {
    site_title: 'OpenFlow 开放流动',
    nav_home: 'Home',
    nav_about: 'About',
    nav_projects: 'Projects',
    nav_team: 'Team',
    hero_title: 'OpenFlow',
    hero_desc: 'Explore · Innovate · Collaborate — A Student Research Project',
    hero_btn: 'Learn More',
    about_title: 'About',
    about_text: 'OpenFlow is a student-led research project dedicated to advancing open academic exchange.',
    projects_title: 'Research Projects',
    proj_1_title: 'Project 1',
    proj_1_desc: 'Project description placeholder.',
    proj_2_title: 'Project 2',
    proj_2_desc: 'Project description placeholder.',
    proj_3_title: 'Project 3',
    proj_3_desc: 'Project description placeholder.',
    team_title: 'Our Team',
    member_1_name: 'Member 1',
    member_1_role: 'Role',
    member_2_name: 'Member 2',
    member_2_role: 'Role',
    member_3_name: 'Member 3',
    member_3_role: 'Role',
    news_title: 'Updates',
    news_1_title: 'Update 1',
    news_1_meta: 'June 2026',
    news_1_desc: 'Update content placeholder.',
    news_2_title: 'Update 2',
    news_2_meta: 'May 2026',
    news_2_desc: 'Update content placeholder.',
    news_3_title: 'Update 3',
    news_3_meta: 'April 2026',
    news_3_desc: 'Update content placeholder.',
    footer_text: '© 2026 OpenFlow',
    lang_label: '中',
  },
};

let currentLang = localStorage.getItem('of-lang') || 'zh';

function t(key) {
  return i18n[currentLang][key] || key;
}

function renderLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t(key);
    } else {
      el.textContent = t(key);
    }
  });
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  localStorage.setItem('of-lang', currentLang);
}

function toggleLang() {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  renderLang();
}
