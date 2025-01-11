const postsContainer = document.getElementById("posts-container");
const form = document.getElementById("new-post-form");
const postTitle = document.getElementById("post-title");
const postBody = document.getElementById("post-body");
 
// Array para armazenar os posts temporariamente
let posts = [];
 
// Função para renderizar os posts
function renderPosts() {
    postsContainer.innerHTML = ""; // Limpa o container de posts
 
    // Renderiza cada post
    posts.forEach((post, index) => {
        const postElement = document.createElement("div");
        postElement.classList.add("card", "mb-3");
        
        postElement.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.body}</p>
 
                <!-- Botão de Like para o Post -->
                <button class="btn btn-outline-success" onclick="addLike(${index})">
                    Like <span id="like-count-${index}">${post.likes}</span>
                </button>
                
                <!-- Botão de Comentários -->
                <button class="btn btn-outline-info ms-3" onclick="toggleCommentForm(${index})">
                    Comentários
                </button>
                
                <!-- Formulário de Comentário -->
                <div id="comment-form-${index}" class="mt-3" style="display: none;">
                    <input type="text" id="comment-name-${index}" placeholder="Seu nome" class="form-control mb-2" required>
                    <textarea id="comment-body-${index}" placeholder="Seu comentário" class="form-control mb-2" rows="3" required></textarea>
                    <button class="btn btn-primary" onclick="addComment(${index})">Comentar</button>
                </div>
 
                <!-- Lista de Comentários -->
                <div id="comments-${index}" class="mt-3">
                    ${post.comments.map((comment, commentIndex) => `
                        <div class="card mb-2">
                            <div class="card-body">
                                <strong>${comment.name}:</strong> ${comment.body}
 
                                <!-- Like para o Comentário -->
                                <button class="btn btn-outline-success ms-3" onclick="addCommentLike(${index}, ${commentIndex})">
                                    Like <span id="comment-like-count-${index}-${commentIndex}">${comment.likes}</span>
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
 
        postsContainer.appendChild(postElement);
    });
 
    // Exibe uma mensagem se não houver posts
    if (posts.length === 0) {
        postsContainer.innerHTML = `<p class="text-muted">Nenhum post ainda. Seja o primeiro a publicar!</p>`;
    }
}
 
// Função para adicionar um like ao post
function addLike(postIndex) {
    posts[postIndex].likes += 1;
    document.getElementById(`like-count-${postIndex}`).innerText = posts[postIndex].likes;
}
 
// Função para exibir ou ocultar o formulário de comentários
function toggleCommentForm(postIndex) {
    const commentForm = document.getElementById(`comment-form-${postIndex}`);
    commentForm.style.display = commentForm.style.display === 'none' ? 'block' : 'none';
}
 
// Função para adicionar um comentário ao post
function addComment(postIndex) {
    const name = document.getElementById(`comment-name-${postIndex}`).value;
    const body = document.getElementById(`comment-body-${postIndex}`).value;
 
    if (name && body) {
        const newComment = {
            name,
            body,
            likes: 0 // Inicializa o contador de likes do comentário
        };
        posts[postIndex].comments.push(newComment);
        
        // Limpa os campos do formulário
        document.getElementById(`comment-name-${postIndex}`).value = '';
        document.getElementById(`comment-body-${postIndex}`).value = '';
 
        // Atualiza a lista de posts
        renderPosts();
    }
}
 
// Função para adicionar um like ao comentário
function addCommentLike(postIndex, commentIndex) {
    posts[postIndex].comments[commentIndex].likes += 1;
    document.getElementById(`comment-like-count-${postIndex}-${commentIndex}`).innerText = posts[postIndex].comments[commentIndex].likes;
}
 
// Evento de envio do formulário
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário
 
    // Cria um novo post com os valores do formulário
    const newPost = {
        title: postTitle.value,
        body: postBody.value,
        likes: 0, // Contador de likes do post inicializado em 0
        comments: [] // Array para armazenar os comentários do post
    };
 
    // Adiciona o novo post ao array de posts
    posts.push(newPost);
 
    // Atualiza a interface com os posts
    renderPosts();
 
    // Limpa o formulário
    form.reset();
});
 
// Renderiza os posts iniciais (vazio por padrão)
renderPosts();