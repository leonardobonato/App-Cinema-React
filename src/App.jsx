import './App.css';
import { useForm } from 'react-hook-form';

function App() {

  const { register, watch } = useForm({
    defaultValues: {
      filme: "venom",
      ingresso: "1ingresso"
    }
  });

  function calculaPreco() {
    let preco;

    if (watch("filme") === "venom") {
      preco = 9.90;
    } else if (watch("filme") === "aranha") {
      preco = 12;
    } else {
      preco = 20;
    }

    const quantidadeIngresso = watch("ingresso");

    if (quantidadeIngresso === "1ingresso") {
      preco = preco
    } else if (quantidadeIngresso === "2ingresso") {
      preco = preco * 2;
    } else if (quantidadeIngresso === "3ingresso") {
      preco = preco * 3
    } else if (quantidadeIngresso === "4ingresso") {
      preco = preco * 4
    } else {
      preco = preco * 5
    }

    if (watch("3d")) {
      const ingresso3d = watch("ingresso");
      if (ingresso3d === "2ingresso") {
        preco += 20;
      } else if (ingresso3d === "3ingresso") {
        preco += 30;
      } else if (ingresso3d === "4ingresso") {
        preco += 40;
      } else if (ingresso3d === "5ingresso") {
        preco += 50;
      } else {
        preco += 10;
      }
    }



    return preco.toFixed(2);
  }


  return (
    <div className="container-fluid d-flex flex-column align-items-center" style={{ minHeight: "100vh" }}>
      <header className="bg-primary text-white text-center">
        <img src="./logo.png" alt="logo" width={200} className="mt-3 me-5" />
        <h1>Cinema React: Ingressos Online</h1>
      </header>
      <main className="text-center mt-3">
        <div className="container">
          <h2>Escolha um Filme:</h2>
          <div className="card mx-auto" style={{ width: "18rem" }}>
            <img src={watch("filme") + ".png"} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Filme</h5>
              <form>
                <select id="filme" {...register("filme")} className=''>
                  <option value="venom">Venom - R$ 9.90</option>
                  <option value="aranha">Homem Aranha - R$ 12.00</option>
                  <option value="ultimato">Vingadores: Ultimato - R$ 20.00</option>
                </select>
                <div className="form-check form-check-inline text-primary">
                  <input className="form-check-input" type="checkbox" id="3d" {...register("3d")} />
                  <label className="form-check-label" htmlFor="3d">Versão 3D</label>
                </div>

                <h5>N° Ingressos:</h5>
                <select id="ingresso" {...register("ingresso")}>
                  <option value="1ingresso">1 ingresso</option>
                  <option value="2ingresso">2 ingressos</option>
                  <option value="3ingresso">3 ingressos</option>
                  <option value="4ingresso">4 ingressos</option>
                  <option value="5ingresso">5 ingressos</option>
                </select>
              </form>
            </div>
            <h3 className="text-center">Valor total: R$ {calculaPreco()}</h3>
            <button className="btn btn-primary">Comprar</button>
          </div>
        </div>
      </main>
    </div>
  );


}

export default App;
