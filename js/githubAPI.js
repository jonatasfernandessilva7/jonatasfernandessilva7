const repositories = document.querySelector('.parallax');

function getAPIGithubRepositories() {
    fetch('https://api.github.com/users/jonatasfernandessilva7/repos?per_page=100&sort=created&direction=desc')
        .then(async res => {
            if(!res.ok) {
                console.log(res.status);
            }

            let data = await res.json();

            console.log(data);

            data.map((item) => {
                let project = document.createElement('div');

                project.innerHTML = `
                    <section id="projects">
                           <h4 class="title">${item.name}</h4>
                            <span class="data-create">${Intl.DateTimeFormat("pt-BR").format(new Date(item.created_at))}</span>
                    </section>
                    <section>
                        <a href="${item.html_url}" target="_blank">${item.html_url}</a>
                        <span class="language">
                        <span class="circle"></span>
                           ${item.language}
                        </span>
                    </section>`

                repositories.appendChild(project);
            })

        })
}

getAPIGithubRepositories();