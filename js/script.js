(function () {
    // ---------- DADOS ESTÁTICOS (habilidades, cursos, experiência) ----------
    const skillsData = [
        { name: "Inteligência Artificial" },
        { name: "Cybersecurity & Gestão de Riscos (ISO/IEC 27001, ISO 31000, CIS Controls)" },
        { name: "Python, JavaScript, SQL" },
        { name: "Liderança e Gestão de Projetos (Scrum, SFPC)" },
        { name: "Pesquisa Científica / Metodologia" },
        { name: "Inglês Técnico e Comunicação Multidisciplinar" }
    ];

    const coursesData = [
        { title: "Risk Management Foundation (ISO 31000)", issuer: "ITCERTS (2025)", status: "Aprovado" },
        { title: "Critical Security Controls Foundation (CIS v8)", issuer: "ITCERTS (2025)", status: "Aprovado" },
        { title: "Information Security Management Foundation (ISO 27001)", issuer: "ITCERTS (2025)", status: "Aprovado" },
        { title: "Scrum Foundation Professional Certification (SFPC)", issuer: "CertiProf (2025)", status: "Aprovado" },
        { title: "Scrum Fundamentals Certified (SFC)", issuer: "SCRUMstudy (2025)", status: "Concluído" },
        { title: "Business Strategies", issuer: "Fundação Bradesco (2025)", status: "Concluído" },
        { title: "Monitoring and Evaluation of Public Policies", issuer: "FGV (2025)", status: "Concluído" },
        { title: "Management and Leadership", issuer: "EducaWeb (2025)", status: "Concluído" }
    ];

    const experienceData = [
        { role: "Gerente de Projetos (Voluntário)", company: "Projeto FOGO - UFC", period: "Atual", description: "Coordenação de equipe, planejamento e execução de entregas no ecossistema de inovação." },
        { role: "Pesquisador em Cibersegurança e IA", company: "FEA-USP", period: "2025 - 2026", description: "Pesquisa em crise cibernética, governança de riscos e aplicações de IA." },
        { role: "Empreendedor Individual", company: "Autônomo", period: "2025 - 2025", description: "Vendas." },
        { role: "Auxiliar Contábil", company: "W. Xavier Contabilidade 2 LTDA", period: "2023 - 2024", description: "Atuação em holdings familiares, sistemas Fortes, rotinas contábeis." },
        { role: "Tesoureiro do Centro Acadêmico", company: "Curso de ADS - UFC", period: "2022 - 2024", description: "Gestão financeira, representação estudantil e organização de eventos." }
    ];

    // Renderização estática
    function renderSkills() {
        const container = document.getElementById('skillsContainer');
        if (container) {
            container.innerHTML = skillsData.map(skill => `
                    <div class="skill-card">
                        <div class="skill-title">✨ ${skill.name}</div>
                    </div>
                `).join('');
        }
    }

    function renderCourses() {
        const container = document.getElementById('coursesContainer');
        if (container) {
            container.innerHTML = coursesData.map(course => `
                    <div class="course-card">
                        <div class="course-title">📘 ${course.title}</div>
                        <div><strong>${course.issuer}</strong> — ${course.status}</div>
                    </div>
                `).join('');
        }
    }

    function renderExperience() {
        const container = document.getElementById('experienceContainer');
        if (container) {
            container.innerHTML = experienceData.map(exp => `
                    <div class="exp-card">
                        <div class="exp-title">${exp.role}</div>
                        <div style="font-size:0.85rem; color: var(--accent);">${exp.company} · ${exp.period}</div>
                        <p style="margin-top: 0.4rem;">${exp.description}</p>
                    </div>
                `).join('');
        }
    }

    // ---------- BUSCA DE REPOSITÓRIOS DO GITHUB (PROJETOS) ----------
    async function fetchGitHubProjects() {
        const container = document.getElementById('projectsContainer');
        if (!container) return;

        // Mostra loader
        container.innerHTML = '<div class="loader">🚀 Buscando repositórios orbitais...</div>';

        try {
            const username = 'jonatasfernandessilva7';
            const url = `https://api.github.com/users/${username}/repos?per_page=100&sort=updated&direction=desc`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Erro ${response.status}: ${response.statusText}`);
            }

            let repos = await response.json();

            // Ordena por número de estrelas (decrescente) e depois por data de atualização
            repos.sort((a, b) => {
                if (a.stargazers_count !== b.stargazers_count)
                    return b.stargazers_count - a.stargazers_count;
                return new Date(b.updated_at) - new Date(a.updated_at);
            });

            // Pega os top repos
            const topRepos = repos.slice(0, 12);

            if (topRepos.length === 0) {
                container.innerHTML = '<div class="loader">🌠 Nenhum repositório encontrado.</div>';
                return;
            }

            // Renderiza os cards dos projetos
            container.innerHTML = topRepos.map(repo => {
                const createdDate = new Date(repo.created_at).toLocaleDateString('pt-BR');
                const updatedDate = new Date(repo.updated_at).toLocaleDateString('pt-BR');
                const description = repo.description ? repo.description.substring(0, 120) : "Sem descrição disponível.";
                const stars = repo.stargazers_count;
                const forks = repo.forks_count;
                const language = repo.language || "Não especificada";

                return `
                        <div class="project-card">
                            <div class="project-title">🛸 ${repo.name.replace(/-/g, ' ')}</div>
                            <p style="margin: 0.5rem 0 0.3rem; font-size: 0.9rem;">${description}${description.length >= 120 ? '...' : ''}</p>
                            <div class="project-stats">
                                <span>⭐ ${stars}</span>
                                <span>🍴 ${forks}</span>
                                <span>📅 ${createdDate}</span>
                                <span>🔧 ${language}</span>
                            </div>
                            <a href="${repo.html_url}" target="_blank" class="project-link">Ver no GitHub →</a>
                        </div>
                    `;
            }).join('');

        } catch (error) {
            console.error("Erro ao buscar repositórios:", error);
            container.innerHTML = `<div class="loader">💥 Erro ao carregar projetos: ${error.message}. Tente novamente mais tarde.</div>`;
        }
    }

    // ---------- Navegação entre seções ----------
    const sections = ['sobre', 'habilidades', 'cursos', 'projetos', 'experiencia'];
    function activateSection(sectionId) {
        sections.forEach(id => {
            const sec = document.getElementById(id);
            const btn = document.querySelector(`.nav-btn[data-section="${id}"]`);
            if (sec) {
                if (id === sectionId) {
                    sec.classList.add('active-section');
                    if (btn) btn.classList.add('active');
                } else {
                    sec.classList.remove('active-section');
                    if (btn) btn.classList.remove('active');
                }
            }
        });
    }

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const sectionTarget = btn.getAttribute('data-section');
            if (sectionTarget) activateSection(sectionTarget);
        });
    });

    // ---------- Alternância de Tema (Claro / Escuro) ----------
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('cosmic-theme', theme);
        document.querySelectorAll('.theme-btn').forEach(btn => {
            const btnTheme = btn.getAttribute('data-theme');
            if (btnTheme === theme) btn.classList.add('active');
            else btn.classList.remove('active');
        });
    }

    const savedTheme = localStorage.getItem('cosmic-theme');
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        setTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }

    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const theme = btn.getAttribute('data-theme');
            if (theme) setTheme(theme);
        });
    });

    // Inicialização
    renderSkills();
    renderCourses();
    renderExperience();
    fetchGitHubProjects();  // Busca projetos da API

    // Efeito na imagem de perfil
    const profileImg = document.getElementById('profileImage');
    if (profileImg) {
        profileImg.addEventListener('mouseenter', () => {
            profileImg.style.transform = 'scale(1.03) rotate(1deg)';
        });
        profileImg.addEventListener('mouseleave', () => {
            profileImg.style.transform = 'scale(1) rotate(0deg)';
        });
    }
})();