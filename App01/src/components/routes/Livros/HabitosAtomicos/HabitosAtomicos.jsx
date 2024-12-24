import { Outlet } from 'react-router-dom';

export default function HabitosAtomicos() {
  return (
    <div>
      <h1>Hábitos Atômicos</h1>
      <p>Escolha uma das páginas:</p>
      <nav>
        <ul>
          <li><Link to="/livros/habitosAtomicos/pag1">Página 1</Link></li>
          <li><Link to="/livros/habitosAtomicos/pag2">Página 2</Link></li>
        </ul>
      </nav>

      {/* O Outlet irá renderizar o conteúdo da rota filha */}
      <Outlet />
    </div>
  );
}
