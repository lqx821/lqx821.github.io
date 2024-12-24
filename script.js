// AI工具数据
const toolsData = {
    // 文本创作工具
    writing: [
        {
            name: "ChatGPT",
            description: "OpenAI开发的AI语言模型，支持自然对话和创作",
            icon: "fa-robot",
            tags: ["免费版", "付费版"],
            link: "https://chat.openai.com"
        },
        {
            name: "文心一言",
            description: "百度推出的AI对话语言模型",
            icon: "fa-comment-dots",
            tags: ["免费版"],
            link: "https://yiyan.baidu.com"
        },
        {
            name: "Claude",
            description: "Anthropic开发的AI助手，擅长学术写作和分析",
            icon: "fa-brain",
            tags: ["付费版"],
            link: "https://claude.ai"
        },
        {
            name: "Notion AI",
            description: "集成在Notion中的AI写作助手",
            icon: "fa-pen-to-square",
            tags: ["付费版"],
            link: "https://notion.ai"
        }
    ],
    // 论文写作工具
    thesis: [
        {
            name: "Academic Writer",
            description: "AI驱动的学术论文写作助手",
            icon: "fa-pen-fancy",
            tags: ["付费"],
            link: "#"
        },
        {
            name: "QuillBot",
            description: "AI改写和润色工具，支持多种学术写作风格",
            icon: "fa-feather",
            tags: ["免费版", "付费版"],
            link: "https://quillbot.com"
        },
        {
            name: "Grammarly",
            description: "AI驱动的写作助手，提供语法检查和风格建议",
            icon: "fa-spell-check",
            tags: ["免费版", "付费版"],
            link: "https://www.grammarly.com"
        }
    ],
    // 论文查重
    check: [
        {
            name: "PaperPass",
            description: "专业的中文论文查重工具",
            icon: "fa-magnifying-glass",
            tags: ["付费"],
            link: "https://www.paperpass.com"
        },
        {
            name: "Turnitin",
            description: "国际认可的论文原创性检测工具",
            icon: "fa-check-double",
            tags: ["付费"],
            link: "https://www.turnitin.com"
        }
    ],
    // 内容检测
    content: [
        {
            name: "AI内容检测",
            description: "检测文本是否由AI生成",
            icon: "fa-shield-check",
            tags: ["免费"],
            link: "https://gptzero.me"
        },
        {
            name: "originality.ai",
            description: "专业的AI内容检测工具",
            icon: "fa-fingerprint",
            tags: ["付费"],
            link: "https://originality.ai"
        }
    ],
    // AI提示词
    prompt: [
        {
            name: "PromptHero",
            description: "AI提示词分享和探索平台",
            icon: "fa-lightbulb",
            tags: ["免费"],
            link: "https://prompthero.com"
        },
        {
            name: "MidJourney Prompt Helper",
            description: "MidJourney提示词生成工具",
            icon: "fa-wand-magic-sparkles",
            tags: ["免费"],
            link: "https://prompt.noonshot.com"
        }
    ],
    // AI小说
    novel: [
        {
            name: "NovelAI",
            description: "专注于小说创作的AI工具",
            icon: "fa-book",
            tags: ["付费"],
            link: "https://novelai.net"
        },
        {
            name: "Sudowrite",
            description: "AI辅助创意写作工具",
            icon: "fa-pen-nib",
            tags: ["付费", "新功能"],
            link: "https://www.sudowrite.com"
        }
    ],
    // AI公文
    doc: [
        {
            name: "公文写作助手",
            description: "专业的公文写作AI助手",
            icon: "fa-file-lines",
            tags: ["付费"],
            link: "#"
        },
        {
            name: "智能公文生成",
            description: "快速生成规范公文",
            icon: "fa-file-word",
            tags: ["付费"],
            link: "#"
        }
    ],
    // AIGC绘画工具
    drawing: [
        {
            name: "Midjourney",
            description: "强大的AI艺术创作工具，生成高质量图像",
            icon: "fa-palette",
            tags: ["付费", "热门"],
            link: "https://www.midjourney.com"
        },
        {
            name: "Stable Diffusion",
            description: "开源的AI图像生成模型，支持本地部署",
            icon: "fa-image",
            tags: ["免费", "开源"],
            link: "https://stability.ai"
        },
        {
            name: "DALL·E 3",
            description: "OpenAI开发的AI绘画模型，支持精确文本描述",
            icon: "fa-paintbrush",
            tags: ["付费", "新功能"],
            link: "https://openai.com/dall-e-3"
        },
        {
            name: "Canva AI",
            description: "集成AI功能的设计平台，支持图片生成和编辑",
            icon: "fa-pen-ruler",
            tags: ["免费版", "付费版"],
            link: "https://www.canva.com"
        }
    ],
    // AI绘画提示词
    prompt_art: [
        {
            name: "Midjourney Prompt Helper",
            description: "AI绘画提示词生成和优化工具",
            icon: "fa-wand-magic-sparkles",
            tags: ["免费"],
            link: "https://prompt.noonshot.com"
        },
        {
            name: "PromptBase",
            description: "AI艺术提示词市场，分享和购买优质提示词",
            icon: "fa-store",
            tags: ["付费"],
            link: "https://promptbase.com"
        }
    ],
    // AIGC视频平台
    video: [
        {
            name: "Runway",
            description: "专业的AI视频创作和编辑平台",
            icon: "fa-film",
            tags: ["付费", "专业版"],
            link: "https://runway.ml"
        },
        {
            name: "Synthesia",
            description: "AI数字人视频生成平台，支持多语言",
            icon: "fa-user-tie",
            tags: ["付费", "企业版"],
            link: "https://www.synthesia.io"
        },
        {
            name: "Descript",
            description: "AI驱动的视频编辑工具，支持文本编辑视频",
            icon: "fa-video",
            tags: ["免费版", "付费版"],
            link: "https://www.descript.com"
        },
        {
            name: "HeyGen",
            description: "AI数字人视频生成平台，适合营销内容",
            icon: "fa-person-rays",
            tags: ["付费"],
            link: "https://www.heygen.com"
        }
    ],
    // AIGC智能对话
    chat: [
        {
            name: "ChatGPT",
            description: "OpenAI的AI对话模型，支持多种任务",
            icon: "fa-message",
            tags: ["免费版", "Plus版"],
            link: "https://chat.openai.com"
        },
        {
            name: "Claude",
            description: "Anthropic的AI助手，擅长分析和写作",
            icon: "fa-brain",
            tags: ["付费"],
            link: "https://claude.ai"
        },
        {
            name: "Gemini",
            description: "Google的AI模型，支持多模态交互",
            icon: "fa-gem",
            tags: ["免费版", "付费版"],
            link: "https://gemini.google.com"
        },
        {
            name: "讯飞星火",
            description: "科大讯飞推出的认知大模型",
            icon: "fa-fire",
            tags: ["免费版", "付费版"],
            link: "https://xinghuo.xfyun.cn"
        }
    ],
    // AI搜索引擎
    search: [
        {
            name: "New Bing",
            description: "微软AI驱动的新一代搜索引擎",
            icon: "fa-search",
            tags: ["免费"],
            link: "https://www.bing.com/new"
        },
        {
            name: "Perplexity",
            description: "AI驱动的智能搜索和问答引擎",
            icon: "fa-compass",
            tags: ["免费版", "付费版"],
            link: "https://www.perplexity.ai"
        }
    ],
    // AI知识问答
    qa: [
        {
            name: "Wolfram Alpha",
            description: "专业的知识计算引擎",
            icon: "fa-square-root-variable",
            tags: ["免费版", "付费版"],
            link: "https://www.wolframalpha.com"
        },
        {
            name: "ChatPDF",
            description: "AI驱动的PDF智能问答工具",
            icon: "fa-file-pdf",
            tags: ["免费版", "付费版"],
            link: "https://www.chatpdf.com"
        }
    ]
};

// 全局变量存储图数据
let graphData = null;

// 笔记交互功能
function initNotesInteraction() {
    // 笔记目录交互
    const noteLinks = document.querySelectorAll('.notes-tree .note-link');
    const noteCards = document.querySelectorAll('.note-card');
    const outlineLinks = document.querySelectorAll('.outline-list a');

    // 目录项点击事件
    noteLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const parentLi = this.parentElement;
            const subMenu = parentLi.querySelector('ul');
            
            // 如果有子菜单，处理展开/收起
            if (subMenu) {
                e.preventDefault();
                parentLi.classList.toggle('active');
                
                // 切换子菜单显示状态
                if (parentLi.classList.contains('active')) {
                    subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
                } else {
                    subMenu.style.maxHeight = '0';
                }
            }

            // 高亮当前选中项
            noteLinks.forEach(link => link.classList.remove('current'));
            this.classList.add('current');

            // 滚动到对应内容
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    // 添加高亮动画
                    targetElement.classList.add('highlight-card');
                    setTimeout(() => {
                        targetElement.classList.remove('highlight-card');
                    }, 1000);
                }
            }
        });
    });

    // 笔记卡片交互
    noteCards.forEach(card => {
        // 展开/收起笔记内容
        const header = card.querySelector('.card-header');
        const body = card.querySelector('.card-body');

        header.addEventListener('click', () => {
            card.classList.toggle('expanded');
            if (card.classList.contains('expanded')) {
                body.style.maxHeight = body.scrollHeight + 'px';
            } else {
                body.style.maxHeight = '0';
            }
        });

        // 添加编辑功能
        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.innerHTML = '<i class="fas fa-edit"></i>';
        header.appendChild(editBtn);

        editBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            // 这里可以添加编辑功能
            console.log('编辑笔记');
        });
    });

    // 大纲导航交互
    outlineLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            outlineLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // 滚动到对应部分
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 监听滚动更新大纲状态
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        noteCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                const id = '#' + card.id;
                outlineLinks.forEach(link => {
                    if (link.getAttribute('href') === id) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    });
}

// 知识地图相关功能
function initKnowledgeMap() {
    const knowledgeMap = document.querySelector('#knowledgeMap');
    if (!knowledgeMap) return;

    try {
        // 获取知识点数据
        const dataElement = document.getElementById('knowledgeData');
        if (!dataElement) {
            console.error('Knowledge data element not found');
            return;
        }

        // 解析数据
        const graphData = JSON.parse(dataElement.textContent);

        // 设置画布尺寸
        const width = knowledgeMap.clientWidth || 800;
        const height = knowledgeMap.clientHeight || 600;

        // 创建SVG
        const svg = d3.select('#knowledgeMap')
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        // 创建容器组
        const container = svg.append('g');

        // 创建力导向图
        const simulation = d3.forceSimulation(graphData.nodes)
            .force('link', d3.forceLink(graphData.links).id(d => d.id).distance(100))
            .force('charge', d3.forceManyBody().strength(-300))
            .force('center', d3.forceCenter(width / 2, height / 2));

        // 添加连接线
        const links = container.append('g')
            .selectAll('line')
            .data(graphData.links)
            .enter()
            .append('line')
            .attr('class', 'link')
            .attr('stroke', '#999')
            .attr('stroke-width', 2);

        // 创建节点组
        const nodes = container.append('g')
            .selectAll('.node')
            .data(graphData.nodes)
            .enter()
            .append('g')
            .attr('class', 'node')
            .call(d3.drag()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended));

        // 添加节点圆形
        nodes.append('circle')
            .attr('r', d => d.level === 1 ? 40 : d.level === 2 ? 30 : 20)
            .attr('fill', d => {
                switch(d.level) {
                    case 1: return '#4CAF50';
                    case 2: return '#81C784';
                    case 3: return '#A5D6A7';
                    default: return '#C8E6C9';
                }
            });

        // 添加节点文本
        nodes.append('text')
            .text(d => d.name)
            .attr('dy', '.35em')
            .attr('text-anchor', 'middle')
            .attr('fill', '#fff');

        // 节点点击事件
        nodes.on('click', function(event, d) {
            event.stopPropagation();
            showNodeDetails(d);
            nodes.selectAll('circle')
                .style('stroke', '#fff')
                .style('stroke-width', '2px');
            d3.select(this).select('circle')
                .style('stroke', '#4CAF50')
                .style('stroke-width', '4px');
        });

        // 更新力导向图
        simulation.on('tick', () => {
            links
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);

            nodes.attr('transform', d => `translate(${d.x},${d.y})`);
        });

        // 拖拽功能
        function dragstarted(event) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }

        function dragged(event) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }

        function dragended(event) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }

        // 添加缩放功能
        const zoom = d3.zoom()
            .scaleExtent([0.5, 2])
            .on('zoom', (event) => {
                container.attr('transform', event.transform);
            });

        svg.call(zoom);

    } catch (error) {
        console.error('Error initializing knowledge map:', error);
        knowledgeMap.innerHTML = '<div class="error-message">加载知识地图时出错</div>';
    }
}

// 显示节点详情
function showNodeDetails(node) {
    const detailsContainer = document.querySelector('.node-details .detail-content');
    if (detailsContainer) {
        detailsContainer.innerHTML = `
            <h4>${node.name}</h4>
            <p class="description">${node.description}</p>
            <div class="tags">
                <span class="tag">${node.category === 'core' ? '核心' : node.category === 'main' ? '主要' : '扩展'}</span>
                <span class="tag">Level ${node.level}</span>
            </div>
            <div class="progress">
                <div class="progress-bar" style="width: ${node.progress}%"></div>
                <span>掌握度：${node.progress}%</span>
            </div>
        `;
    }
}

// 笔记系统相关功能
function initNotesSystem() {
    if (!document.querySelector('.notes-page')) return;

    // 目录树交互
    const treeItems = document.querySelectorAll('.tree-item');
    treeItems.forEach(item => {
        const header = item.querySelector('.item-header');
        const chevron = header.querySelector('.fa-chevron-right');
        const subtree = item.querySelector('.subtree');

        header.addEventListener('click', () => {
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                chevron.style.transform = 'rotate(90deg)';
                subtree.style.maxHeight = subtree.scrollHeight + 'px';
            } else {
                chevron.style.transform = 'rotate(0)';
                subtree.style.maxHeight = '0';
            }
        });
    });

    // 编辑器工具栏功能
    const toolbar = document.querySelector('.editor-toolbar');
    const editor = document.querySelector('.editor-content');

    if (toolbar && editor) {
        toolbar.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => {
                const command = btn.getAttribute('title');
                switch (command) {
                    case '加粗':
                        document.execCommand('bold', false, null);
                        break;
                    case '斜体':
                        document.execCommand('italic', false, null);
                        break;
                    case '下划线':
                        document.execCommand('underline', false, null);
                        break;
                    case '标题':
                        document.execCommand('formatBlock', false, '<h2>');
                        break;
                    case '列表':
                        document.execCommand('insertUnorderedList', false, null);
                        break;
                    case '引用':
                        document.execCommand('formatBlock', false, '<blockquote>');
                        break;
                    // 其他功能可以继续添加
                }
            });
        });
    }

    // AI助手交互
    const chatInput = document.querySelector('.chat-input input');
    const chatMessages = document.querySelector('.chat-messages');
    const sendBtn = document.querySelector('.chat-input button');

    if (chatInput && sendBtn) {
        sendBtn.addEventListener('click', () => {
            const message = chatInput.value.trim();
            if (message) {
                // 添加用户消息
                chatMessages.innerHTML += `
                    <div class="message user">${message}</div>
                `;
                chatInput.value = '';
                
                // 模拟AI回复
                setTimeout(() => {
                    chatMessages.innerHTML += `
                        <div class="message assistant">
                            这是AI助手的回复...
                        </div>
                    `;
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 1000);
            }
        });

        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendBtn.click();
            }
        });
    }

    // 学习工具功能
    const toolBtns = document.querySelectorAll('.tool-btn');
    toolBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tool = btn.querySelector('span').textContent;
            handleStudyTool(tool);
        });
    });
}

// 处理学习工具
function handleStudyTool(tool) {
    switch (tool) {
        case '专注模式':
            document.body.classList.toggle('focus-mode');
            break;
        case '待办清单':
            // 显示待办清单弹窗
            break;
        case '重点标记':
            document.execCommand('hiliteColor', false, '#ffeb3b');
            break;
    }
}

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing knowledge map...');
    initKnowledgeMap();

    // 获取必要的DOM元素
    const categoryBtns = document.querySelectorAll('.category-btn');
    const subcategoryLinks = document.querySelectorAll('.subcategories a');
    const contentArea = document.querySelector('.subcategory-content');
    const searchInput = document.querySelector('.search-box input');

    // 生成工具卡片HTML
    function createToolCard(tool) {
        return `
            <div class="tool-card">
                <div class="tool-icon">
                    <i class="fas ${tool.icon}"></i>
                </div>
                <div class="tool-content">
                    <h3>${tool.name}</h3>
                    <p>${tool.description}</p>
                    <div class="tool-tags">
                        ${tool.tags.map(tag => `
                            <span class="tag-${tag.toLowerCase().includes('免费') ? 'free' : 'pro'}">${tag}</span>
                        `).join('')}
                    </div>
                    <a href="${tool.link}" class="tool-link" target="_blank">
                        访问网站 <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
        `;
    }

    // 显示所有工具
    function showAllTools() {
        let html = '<div class="tools-grid">';
        for (let category in toolsData) {
            html += toolsData[category].map(tool => createToolCard(tool)).join('');
        }
        html += '</div>';
        contentArea.innerHTML = html;
    }

    // 显示特定分类的工具
    function showCategoryTools(category) {
        if (category === 'all') {
            showAllTools();
            return;
        }

        let html = `
            <div class="subcategory-header">
                <h2>${category} 相关工具</h2>
            </div>
            <div class="tools-grid">
        `;

        if (toolsData[category]) {
            html += toolsData[category].map(tool => createToolCard(tool)).join('');
            html += '</div>';
        } else {
            html = '<div class="no-content">暂无相关工具</div>';
        }

        contentArea.innerHTML = html;
    }

    // 分类按钮点击事件
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (e.target.closest('.subcategories')) return;
            
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            showCategoryTools(category);
        });
    });

    // 子分类链接点击事件
    subcategoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const subcategory = this.getAttribute('href').substring(1);
            showCategoryTools(subcategory);
            
            // 更新URL但不刷新页面
            history.pushState(null, '', `#${subcategory}`);
        });
    });

    // 搜索功能
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            let matchedTools = [];

            // 搜索所有分类中的工具
            for (let category in toolsData) {
                matchedTools = matchedTools.concat(
                    toolsData[category].filter(tool => 
                        tool.name.toLowerCase().includes(searchTerm) ||
                        tool.description.toLowerCase().includes(searchTerm)
                    )
                );
            }

            // 显示搜索结果
            let html = '<div class="tools-grid">';
            if (matchedTools.length > 0) {
                html += matchedTools.map(tool => createToolCard(tool)).join('');
            } else {
                html = '<div class="no-content">未找到相关工具</div>';
            }
            html += '</div>';
            contentArea.innerHTML = html;
        });
    }

    // 初始显示所有工具
    showAllTools();

    // 如果笔记页面，初始化笔记交互
    if (document.querySelector('.notes-page')) {
        initNotesInteraction();
    }

    initNotesSystem();

    // 初始化学习进度图表
    const ctx = document.getElementById('learningChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['新媒体运营', '内容创作', '数据分析', '平台运营', '用户研究', '视频制作'],
                datasets: [{
                    label: '学习进度',
                    data: [75, 80, 65, 70, 85, 60],
                    fill: true,
                    backgroundColor: 'rgba(76, 175, 80, 0.2)',
                    borderColor: '#4CAF50',
                    pointBackgroundColor: '#4CAF50',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#4CAF50'
                }]
            },
            options: {
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }
            }
        });
    }

    // 数字增长动画
    const countElements = document.querySelectorAll('.count');
    countElements.forEach(element => {
        const target = parseInt(element.textContent);
        let count = 0;
        const duration = 2000; // 2秒
        const increment = target / (duration / 16);
        
        const counter = setInterval(() => {
            count += increment;
            if (count >= target) {
                element.textContent = target;
                clearInterval(counter);
            } else {
                element.textContent = Math.floor(count);
            }
        }, 16);
    });

    // 更新卡片悬停效果
    const updateCards = document.querySelectorAll('.update-card');
    updateCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    if (document.querySelector('.hero-section')) {
        initHomePage();
    }

    initQuickView();
}); 

function initViewToggle() {
    const viewBtns = document.querySelectorAll('.view-toggle .btn');
    const knowledgeMap = document.querySelector('.knowledge-map');
    const notesView = document.querySelector('.notes-view');

    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            viewBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const view = this.getAttribute('data-view');
            if (view === 'map') {
                knowledgeMap.style.display = 'block';
                notesView.style.display = 'none';
            } else {
                knowledgeMap.style.display = 'none';
                notesView.style.display = 'block';
                initNotesView(); // 初始化笔记视图交互
            }
        });
    });
}

function initNotesInteraction() {
    const noteCards = document.querySelectorAll('.note-card');

    noteCards.forEach(card => {
        const header = card.querySelector('.note-header');
        const content = card.querySelector('.note-content');
        const expandBtn = card.querySelector('.btn-expand');
        const editBtn = card.querySelector('.btn-edit');

        // 点击卡片头部展开/收起
        header.addEventListener('click', () => {
            card.classList.toggle('expanded');
            if (card.classList.contains('expanded')) {
                content.style.maxHeight = content.scrollHeight + 'px';
                expandBtn.innerHTML = '<i class="fas fa-compress"></i> 收起';
            } else {
                content.style.maxHeight = '0';
                expandBtn.innerHTML = '<i class="fas fa-expand"></i> 展开';
            }
        });

        // 展开按钮
        expandBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            header.click(); // 触发header的点击事件
        });

        // 编辑按钮
        editBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const noteId = card.getAttribute('data-id');
            // 这里可以添加编辑功能
            console.log('编辑笔记:', noteId);
        });

        // 显示笔记详情
        card.addEventListener('click', () => {
            const noteId = card.getAttribute('data-id');
            const node = graphData.nodes.find(n => n.id === noteId);
            if (node) {
                showNodeDetails(node);
            }
        });
    });
}

// 在DOMContentLoaded事件中初始化
document.addEventListener('DOMContentLoaded', function() {
    initKnowledgeMap();
    initViewToggle();
    initNotesInteraction();
}); 

function initQuickView() {
    const welcomeBtn = document.getElementById('welcomeBtn');
    const quickViewCard = document.querySelector('.quick-view-card');
    const closeCard = document.querySelector('.close-card');

    if (welcomeBtn && quickViewCard) {
        // 点击欢迎按钮显示卡片
        welcomeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            quickViewCard.classList.add('show');
            // 添加背景遮罩
            document.body.classList.add('modal-open');
        });

        // 点击关闭按钮
        closeCard.addEventListener('click', () => {
            quickViewCard.classList.remove('show');
            document.body.classList.remove('modal-open');
        });

        // 点击卡片外部关闭
        document.addEventListener('click', (e) => {
            if (quickViewCard.classList.contains('show') && 
                !quickViewCard.contains(e.target) && 
                !welcomeBtn.contains(e.target)) {
                quickViewCard.classList.remove('show');
                document.body.classList.remove('modal-open');
            }
        });

        // ESC键关闭
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && quickViewCard.classList.contains('show')) {
                quickViewCard.classList.remove('show');
                document.body.classList.remove('modal-open');
            }
        });
    }
} 

function initQuickPreview() {
    const welcomeBtn = document.getElementById('welcomeBtn');
    const previewModal = document.querySelector('.quick-preview-modal');
    const closeBtn = document.querySelector('.close-preview');

    if (welcomeBtn && previewModal) {
        // 显示预览
        welcomeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            previewModal.classList.add('show');
        });

        // 关闭预览
        closeBtn.addEventListener('click', () => {
            previewModal.classList.remove('show');
        });

        // 点击背景关闭
        previewModal.addEventListener('click', (e) => {
            if (e.target === previewModal) {
                previewModal.classList.remove('show');
            }
        });

        // ESC键关闭
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && previewModal.classList.contains('show')) {
                previewModal.classList.remove('show');
            }
        });
    }
}

// 在DOMContentLoaded事件中初始化
document.addEventListener('DOMContentLoaded', function() {
    initQuickPreview();
    // ... 其他初始化代码 ...
}); 

// 初始化预览功能
function initPreview() {
    const welcomeBtn = document.getElementById('welcomeBtn');
    const previewModal = document.getElementById('previewModal');
    const closeBtn = previewModal.querySelector('.close-preview');

    // 显示预览
    welcomeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        previewModal.classList.add('show');
    });

    // 关闭预览
    closeBtn.addEventListener('click', () => {
        previewModal.classList.remove('show');
    });

    // 点击背景关闭
    previewModal.addEventListener('click', (e) => {
        if (e.target === previewModal) {
            previewModal.classList.remove('show');
        }
    });

    // ESC键关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && previewModal.classList.contains('show')) {
            previewModal.classList.remove('show');
        }
    });
}

// 在页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initPreview();
}); 

// 在initViewToggle函数中添加笔记视图的交互
function initNotesView() {
    const noteCards = document.querySelectorAll('.notes-view .note-card');
    
    noteCards.forEach(card => {
        const header = card.querySelector('.note-header');
        const content = card.querySelector('.note-content');
        const expandBtn = card.querySelector('.btn-expand');
        
        // 点击卡片头部展开/收起
        header.addEventListener('click', () => {
            toggleNoteCard(card, content, expandBtn);
        });
        
        // 展开按钮点击
        expandBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleNoteCard(card, content, expandBtn);
        });
    });
}

// 切换笔记卡片展开/收起状态
function toggleNoteCard(card, content, expandBtn) {
    card.classList.toggle('expanded');
    if (card.classList.contains('expanded')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        expandBtn.innerHTML = '<i class="fas fa-compress"></i> 收起';
    } else {
        content.style.maxHeight = '0';
        expandBtn.innerHTML = '<i class="fas fa-expand"></i> 展开';
    }
}

// 在视图切换时初始化笔记视图
function initViewToggle() {
    const viewBtns = document.querySelectorAll('.view-toggle .btn');
    const knowledgeMap = document.querySelector('.knowledge-map');
    const notesView = document.querySelector('.notes-view');

    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            viewBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const view = this.getAttribute('data-view');
            if (view === 'map') {
                knowledgeMap.style.display = 'block';
                notesView.style.display = 'none';
            } else {
                knowledgeMap.style.display = 'none';
                notesView.style.display = 'block';
                initNotesView(); // 初始化笔记视图交互
            }
        });
    });
}

// 编程知识页面功能
function initCodingPage() {
    if (!document.querySelector('.coding-page')) return;

    // 初始化代码编辑器
    initCodeEditor();
    // 初始化学习卡片
    initLearningCards();
    // 初始化AI助手
    initAIAssistant();
    // 初始化代码片段
    initCodeSnippets();
    // 初始化学习统计
    initLearningStats();
}

// 初始化代码编辑器
function initCodeEditor() {
    if (!document.querySelector('.code-playground')) return;

    // 创建编辑器实例
    const htmlEditor = ace.edit("htmlEditor");
    const cssEditor = ace.edit("cssEditor");
    const jsEditor = ace.edit("jsEditor");

    // 配置编辑器
    const editors = [htmlEditor, cssEditor, jsEditor];
    editors.forEach(editor => {
        editor.setTheme("ace/theme/monokai");
        editor.setFontSize(14);
        editor.setShowPrintMargin(false);
        editor.session.setTabSize(2);
    });

    // 设置语言模式
    htmlEditor.session.setMode("ace/mode/html");
    cssEditor.session.setMode("ace/mode/css");
    jsEditor.session.setMode("ace/mode/javascript");

    // 设置初始内容
    htmlEditor.setValue(`<!DOCTYPE html>
<html>
<head>
  <title>在线编程</title>
</head>
<body>
  <h1>Hello World!</h1>
</body>
</html>`, -1);

    cssEditor.setValue(`body {
  font-family: Arial, sans-serif;
  margin: 20px;
}

h1 {
  color: #333;
}`, -1);

    jsEditor.setValue(`// 在这里编写JavaScript代码
console.log('Hello from JavaScript!');`, -1);

    // 标签切换功能
    const tabs = document.querySelectorAll('.editor-tabs .tab');
    const editorElements = document.querySelectorAll('.code-editor');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const editorType = tab.getAttribute('data-editor');
            
            // 更新标签状态
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // 更新编辑器显示
            editorElements.forEach(editor => {
                editor.classList.remove('active');
                if (editor.id === `${editorType}Editor`) {
                    editor.classList.add('active');
                }
            });
        });
    });

    // 实时预览功能
    let previewTimeout;
    const updatePreview = () => {
        clearTimeout(previewTimeout);
        previewTimeout = setTimeout(() => {
            const iframe = document.getElementById('previewFrame');
            const html = htmlEditor.getValue();
            const css = cssEditor.getValue();
            const js = jsEditor.getValue();

            const content = `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>${css}</style>
                </head>
                <body>
                    ${html}
                    <script>
                        try {
                            ${js}
                        } catch (error) {
                            console.error(error);
                        }
                    </script>
                </body>
                </html>
            `;

            iframe.srcdoc = content;
        }, 500);
    };

    // 监听编辑器变化
    editors.forEach(editor => {
        editor.session.on('change', updatePreview);
    });

    // 工具栏功能
    // 格式化代码
    document.querySelector('.btn-format').addEventListener('click', () => {
        const activeEditor = document.querySelector('.code-editor.active');
        const editor = ace.edit(activeEditor.id);
        const session = editor.session;
        const position = editor.getCursorPosition();
        session.setValue(js_beautify(session.getValue(), {
            indent_size: 2,
            space_in_empty_paren: true
        }));
        editor.setCursorPosition(position);
    });

    // 清空编辑器
    document.querySelector('.btn-clear').addEventListener('click', () => {
        const activeEditor = document.querySelector('.code-editor.active');
        const editor = ace.edit(activeEditor.id);
        editor.setValue('');
    });

    // 复制代码
    document.querySelector('.btn-copy').addEventListener('click', () => {
        const activeEditor = document.querySelector('.code-editor.active');
        const editor = ace.edit(activeEditor.id);
        const code = editor.getValue();
        navigator.clipboard.writeText(code).then(() => {
            showToast('代码已复制到剪贴板');
        });
    });

    // 全屏模式
    document.querySelector('.btn-fullscreen').addEventListener('click', () => {
        const playground = document.querySelector('.code-playground');
        if (!document.fullscreenElement) {
            playground.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });

    // 设备预览
    document.querySelector('.preview-device').addEventListener('change', (e) => {
        const device = e.target.value;
        const wrapper = document.querySelector('.preview-frame-wrapper');
        wrapper.setAttribute('data-device', device);
    });

    // 控制台输出
    const originalConsole = window.console;
    window.console = {
        log: (...args) => {
            originalConsole.log(...args);
            appendToConsole('log', args);
        },
        error: (...args) => {
            originalConsole.error(...args);
            appendToConsole('error', args);
        },
        warn: (...args) => {
            originalConsole.warn(...args);
            appendToConsole('warn', args);
        }
    };

    function appendToConsole(type, args) {
        const output = document.querySelector('.console-output');
        const message = document.createElement('div');
        message.className = type;
        message.textContent = args.join(' ');
        output.appendChild(message);
        output.scrollTop = output.scrollHeight;
    }

    // 清空控制台
    document.querySelector('.btn-clear-console').addEventListener('click', () => {
        document.querySelector('.console-output').innerHTML = '';
    });

    // 初始化预览
    updatePreview();
}

// 显示提示消息
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 2000);
    }, 100);
}

// 在页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initCodingPage();
});