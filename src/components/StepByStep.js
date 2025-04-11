import React from "react";

function StepByStep() {
  const steps = [
    {
      title: "Passo 1",
      description: "Acesse a plataforma Atados e inscreva-se na iniciativa que mais combina com você!",
      link: "https://www.atados.com.br/ong/associacao-keralty/vagas"
    },
    {
        title: "Passo 2",
        description: "Agora é só aguardar. Nossa equipe entrará em contato por email!",
    },
    {
      title: "Passo 3",
      description: "Prepare-se para viver momentos únicos!",
    }
  ];

  return (
    <div className="w-full py-20 px-6 bg-third flex flex-col items-center">
      <h2 className="text-5xl text-white font-bold mb-10 text-center">Como Participar</h2>
      <div className="flex flex-col md:flex-row gap-10 max-w-5xl w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg flex-1 text-center hover:scale-110 transition"
          >
            <div className="w-14 h-14 flex items-center justify-center mx-auto mb-4 bg-primary text-white text-xl font-bold rounded-full">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>

            {step.link && (
              <a href={step.link} target="_blank" rel="noopener noreferrer" >
                <button className="bg-primary mt-5 text-white px-6 py-2 rounded-full hover:bg-white hover:text-primary border border-primary transition">Plataforma Atados</button>
              </a>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}

export default StepByStep;
