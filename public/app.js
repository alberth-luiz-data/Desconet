
// Configuração do Firebase (substitua com suas configurações)
const firebaseConfig = {
    apiKey: "AIzaSyDFpUPteuanLDIynW7jQNL21HzqA3Jv8ew",
    authDomain: "desconet-8d482.firebaseapp.com",
    projectId: "desconet-8d482",
    storageBucket: "desconet-8d482.firebasestorage.app",
    messagingSenderId: "799067158158",
    appId: "1:799067158158:web:b9dd3ed9e49d0eaf56bbdf",
    measurementId: "G-7YEJ4B0KZW"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
// Inicialize o Firebase (se necessário)
// firebase.initializeApp(firebaseConfig);

// URL base do seu Functions (substitua pela sua URL)
const API_BASE_URL = 'https://api-qjufruucrq-uc.a.run.app/';

// Elementos do DOM
const usuariosList = document.getElementById('usuarios-list');
const usuarioForm = document.getElementById('usuario-form');
const formTitle = document.getElementById('form-title');
const submitBtn = document.getElementById('submit-btn');
const cancelBtn = document.getElementById('cancel-btn');
const usuarioIdInput = document.getElementById('usuario-id');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const usuarioModal = new bootstrap.Modal(document.getElementById('usuarioModal'));
const modalBody = document.getElementById('modal-body');

// Estado para controlar se estamos editando
let isEditing = false;

// Carregar usuários quando a página carregar
document.addEventListener('DOMContentLoaded', carregarUsuarios);

// Manipulador de formulário
usuarioForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const usuario = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        nascimento: new Date(document.getElementById('nascimento').value).toISOString(),
        "id-group": document.getElementById('id-group').value,
        status: document.getElementById('status').value,
        usuario_id: document.getElementById('usuario_id').value
    };
    
    const id = usuarioIdInput.value;
    
    try {
        if (isEditing && id) {
            await atualizarUsuario(id, usuario);
        } else {
            await criarUsuario(usuario);
        }
        
        resetForm();
        await carregarUsuarios();
    } catch (error) {
        console.error('Erro ao salvar usuário:', error);
        alert('Erro ao salvar usuário. Verifique o console para mais detalhes.');
    }
});

// Cancelar edição
cancelBtn.addEventListener('click', resetForm);

// Buscar usuários
searchBtn.addEventListener('click', buscarUsuarios);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') buscarUsuarios();
});

// Função para carregar usuários
async function carregarUsuarios() {
    try {
        const response = await fetch(`${API_BASE_URL}/usuarios`);
        if (!response.ok) throw new Error('Erro ao carregar usuários');
        
        const usuarios = await response.json();
        renderizarUsuarios(usuarios);
    } catch (error) {
        console.error('Erro ao carregar usuários:', error);
        usuariosList.innerHTML = '<div class="col-12"><div class="alert alert-danger">Erro ao carregar usuários. Verifique o console para mais detalhes.</div></div>';
    }
}

// Função para buscar usuários
async function buscarUsuarios() {
    const termo = searchInput.value.trim();
    if (!termo) return carregarUsuarios();
    
    try {
        const response = await fetch(`${API_BASE_URL}/usuarios?search=${encodeURIComponent(termo)}`);
        if (!response.ok) throw new Error('Erro ao buscar usuários');
        
        const usuarios = await response.json();
        renderizarUsuarios(usuarios);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        usuariosList.innerHTML = '<div class="col-12"><div class="alert alert-danger">Erro ao buscar usuários. Verifique o console para mais detalhes.</div></div>';
    }
}

// Função para renderizar usuários na tela
function renderizarUsuarios(usuarios) {
    if (!usuarios || usuarios.length === 0) {
        usuariosList.innerHTML = '<div class="col-12"><div class="alert alert-info">Nenhum usuário encontrado.</div></div>';
        return;
    }
    
    const usuariosHTML = usuarios.map(usuario => {
        const dataNasc = new Date(usuario.nascimento);
        const dataFormatada = dataNasc.toLocaleDateString('pt-BR');
        
        return `
            <div class="col-md-6 col-lg-4">
                <div class="usuario-card">
                    <div class="usuario-header">
                        <h5>${usuario.nome} ${usuario.sobrenome}</h5>
                        <span class="status-${usuario.status}">${usuario.status}</span>
                    </div>
                    <p class="mb-1"><strong>Email:</strong> ${usuario.email}</p>
                    <p class="mb-1"><strong>ID:</strong> ${usuario.usuario_id}</p>
                    <div class="d-flex justify-content-between mt-3">
                        <button class="btn btn-sm btn-outline-primary" onclick="mostrarDetalhes('${usuario.usuario_id}')">
                            Mostrar
                        </button>
                        <div>
                            <button class="btn btn-sm btn-outline-secondary" onclick="editarUsuario('${usuario.usuario_id}')">
                                Editar
                            </button>
                            <button class="btn btn-sm btn-outline-danger" onclick="deletarUsuario('${usuario.usuario_id}')">
                                Excluir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    usuariosList.innerHTML = usuariosHTML;
}

// Função para mostrar detalhes do usuário
async function mostrarDetalhes(usuarioId) {
    try {
        const response = await fetch(`${API_BASE_URL}/usuarios/${usuarioId}`);
        if (!response.ok) throw new Error('Erro ao carregar detalhes do usuário');
        
        const usuario = await response.json();
        const dataNasc = new Date(usuario.nascimento);
        const dataFormatada = dataNasc.toLocaleDateString('pt-BR');
        
        modalBody.innerHTML = `
            <p><strong>Nome completo:</strong> ${usuario.nome} ${usuario.sobrenome}</p>
            <p><strong>Email:</strong> ${usuario.email}</p>
            <p><strong>Telefone:</strong> ${usuario.telefone}</p>
            <p><strong>Data de nascimento:</strong> ${dataFormatada}</p>
            <p><strong>ID Grupo:</strong> ${usuario["id-group"]}</p>
            <p><strong>Status:</strong> <span class="status-${usuario.status}">${usuario.status}</span></p>
            <p><strong>ID Usuário:</strong> ${usuario.usuario_id}</p>
        `;
        
        usuarioModal.show();
    } catch (error) {
        console.error('Erro ao carregar detalhes do usuário:', error);
        alert('Erro ao carregar detalhes do usuário. Verifique o console para mais detalhes.');
    }
}

// Função para criar um novo usuário
async function criarUsuario(usuario) {
    const response = await fetch(`${API_BASE_URL}/usuarios`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    });
    
    if (!response.ok) throw new Error('Erro ao criar usuário');
    return await response.json();
}

// Função para atualizar um usuário
async function atualizarUsuario(id, usuario) {
    const response = await fetch(`${API_BASE_URL}/usuarios/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    });
    
    if (!response.ok) throw new Error('Erro ao atualizar usuário');
    return await response.json();
}

// Função para deletar um usuário
async function deletarUsuario(id) {
    if (!confirm('Tem certeza que deseja excluir este usuário?')) return;
    
    try {
        const response = await fetch(`${API_BASE_URL}/usuarios/${id}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) throw new Error('Erro ao deletar usuário');
        await carregarUsuarios();
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        alert('Erro ao deletar usuário. Verifique o console para mais detalhes.');
    }
}

// Função para editar um usuário
async function editarUsuario(usuarioId) {
    try {
        const response = await fetch(`${API_BASE_URL}/usuarios/${usuarioId}`);
        if (!response.ok) throw new Error('Erro ao carregar usuário para edição');
        
        const usuario = await response.json();
        
        // Preencher formulário
        document.getElementById('nome').value = usuario.nome || '';
        document.getElementById('sobrenome').value = usuario.sobrenome || '';
        document.getElementById('email').value = usuario.email || '';
        document.getElementById('telefone').value = usuario.telefone || '';
        
        // Converter timestamp para formato de date input
        const dataNasc = new Date(usuario.nascimento);
        const dataFormatada = dataNasc.toISOString().split('T')[0];
        document.getElementById('nascimento').value = dataFormatada;
        
        document.getElementById('id-group').value = usuario["id-group"] || '';
        document.getElementById('status').value = usuario.status || 'ativo';
        document.getElementById('usuario_id').value = usuario.usuario_id || '';
        usuarioIdInput.value = usuario.usuario_id;
        
        // Mudar estado para edição
        isEditing = true;
        formTitle.textContent = 'Editar Usuário';
        submitBtn.textContent = 'Atualizar';
        cancelBtn.style.display = 'inline-block';
        
        // Rolagem suave para o formulário
        document.querySelector('.container').scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
        console.error('Erro ao editar usuário:', error);
        alert('Erro ao carregar usuário para edição. Verifique o console para mais detalhes.');
    }
}

// Função para resetar o formulário
function resetForm() {
    usuarioForm.reset();
    usuarioIdInput.value = '';
    isEditing = false;
    formTitle.textContent = 'Adicionar Novo Usuário';
    submitBtn.textContent = 'Salvar';
    cancelBtn.style.display = 'none';
}

// Tornar funções disponíveis globalmente para os eventos onclick
window.mostrarDetalhes = mostrarDetalhes;
window.editarUsuario = editarUsuario;
window.deletarUsuario = deletarUsuario;