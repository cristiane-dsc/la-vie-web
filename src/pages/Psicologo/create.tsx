import { FormEvent, useState } from "react";
import { cadastroPsicologo } from "../../services/MainApi/psicologos";

export default function PsicologoCreate() {
  const [nome, setNome] = useState<string>("");
  const [apresentacao, setApresentacao] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  // função async no botão pq request sempre trabalha com assincronismo
  const cadastro = async (event: FormEvent) => {
    event.preventDefault();
    const payload = { nome, apresentacao, email, senha };
    // como a estrutura é assíncrona, usamos try-catch com tratamento de erros
    // cadastroPsicologo() faz uma chamada e retorna a resposta do servidor
    try {
      const response = await cadastroPsicologo(payload);
      if (response.status !== 201) {
        return alert("Algo deu errado");
      }
      alert("Cadastro efetuado com sucesso!");
    } catch (error) {
      alert("Algo deu errado");
    }
  };

  return (
    <main className="container card my-5 p-5">
      <h1>Cadastro de Psicólogo</h1>
      <form onSubmit={cadastro}>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Apresentação</label>
          <textarea
            className="form-control"
            value={apresentacao}
            onChange={(event) => setApresentacao(event.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Senha</label>
          <input
            type="password"
            className="form-control"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Cadastrar</button>
      </form>
    </main>
  );
}