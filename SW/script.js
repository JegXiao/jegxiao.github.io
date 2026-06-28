// ===== 渲染分类与模型卡片 =====
const container = document.getElementById('app');

function render() {
    container.innerHTML = '';

    categories.forEach((cat, ci) => {
        const section = document.createElement('div');
        section.className = 'category';

        const btn = document.createElement('button');
        btn.className = 'category-header open';
        btn.textContent = cat.name;
        btn.addEventListener('click', () => {
            btn.classList.toggle('open');
            body.classList.toggle('open');
        });

        const body = document.createElement('div');
        body.className = 'category-body open';

        if (cat.models.length === 0) {
            body.innerHTML = '<div class="empty-tip">暂无模型</div>';
        } else {
            const grid = document.createElement('div');
            grid.className = 'model-grid';

            cat.models.forEach(model => {
                const card = document.createElement('div');
                card.className = 'model-card';
                card.innerHTML = `
                    <img src="${model.cover}" alt="${model.name}"
                         onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22150%22><rect fill=%22%23eef1f5%22 width=%22200%22 height=%22150%22/><text x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23aaa%22 font-size=%2214%22>无图片</text></svg>'">
                    <div class="info">
                        <h3>${model.name}</h3>
                        <p>${model.brief}</p>
                    </div>
                `;
                card.addEventListener('click', () => openModal(model));
                grid.appendChild(card);
            });

            body.appendChild(grid);
        }

        section.appendChild(btn);
        section.appendChild(body);
        container.appendChild(section);
    });
}

// ===== 详情弹窗 =====
let currentIdx = 0;

function openModal(model) {
    const overlay = document.getElementById('modal');
    overlay.classList.add('show');
    overlay.dataset.modelId = model.id;

    document.getElementById('modal-title').textContent = model.name;
    document.getElementById('modal-desc').textContent = model.description;

    const thumbs = document.getElementById('modal-thumbs');
    thumbs.innerHTML = '';
    currentIdx = 0;

    model.images.forEach((src, i) => {
        const img = document.createElement('img');
        img.src = src;
        img.className = i === 0 ? 'active' : '';
        img.addEventListener('click', () => setMainImage(i));
        thumbs.appendChild(img);
    });

    setMainImage(0);
}

function setMainImage(idx) {
    const model = findModel(document.getElementById('modal').dataset.modelId);
    if (!model) return;

    currentIdx = idx;
    document.getElementById('modal-main').src = model.images[idx];
    document.querySelectorAll('#modal-thumbs img').forEach((img, i) => {
        img.className = i === idx ? 'active' : '';
    });
}

function findModel(id) {
    for (const cat of categories) {
        for (const m of cat.models) {
            if (m.id === id) return m;
        }
    }
    return null;
}

// ===== 弹窗关闭 =====
document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
});

function closeModal() {
    document.getElementById('modal').classList.remove('show');
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') {
        const overlay = document.getElementById('modal');
        if (!overlay.classList.contains('show')) return;
        const model = findModel(overlay.dataset.modelId);
        if (model) setMainImage((currentIdx - 1 + model.images.length) % model.images.length);
    }
    if (e.key === 'ArrowRight') {
        const overlay = document.getElementById('modal');
        if (!overlay.classList.contains('show')) return;
        const model = findModel(overlay.dataset.modelId);
        if (model) setMainImage((currentIdx + 1) % model.images.length);
    }
});

// ===== 启动 =====
render();
