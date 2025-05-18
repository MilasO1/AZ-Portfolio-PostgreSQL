"use client";

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-blue-200 lg:sr-only">
          À propos
        </h2>
      </div>
      <div className="space-y-6">
        <p className="text-blue-200 leading-relaxed">
          J'ai toujours aimé<span className="font-semibold px-1 rounded">comprendre comment les choses fonctionnent</span>, surtout sur le web. Ce qui m'attire dans le développement, c'est ce mélange entre <span className="font-semibold text-blue-100">logique et créativité</span>. J'aime partir d'un simple design ou d'une idée, et le rendre <span className="font-semibold text-blue-100">vivant, fonctionnel</span>, et <span className="font-semibold text-blue-100">agréable à utiliser</span>.
        </p>

        <p className="text-blue-200 leading-relaxed">
          Après un <span className="font-semibold text-blue-100">bac STI2D</span> en 2021, j'ai fait plusieurs <span className="font-semibold text-blue-100">expériences pro</span> dans différents domaines, notamment le <span className="font-semibold text-blue-100">numérique</span> et la <span className="font-semibold text-blue-100">compta</span>. C'est en touchant un peu à tout que je me suis rendu compte que ce que j'aimais vraiment, c'était <span className="font-semibold text-blue-100">coder</span>. Alors je me suis lancé à fond : <span className="font-semibold text-blue-100">d'abord en solo</span>, puis avec une <span className="font-semibold text-blue-100">formation full stack</span> pour aller plus loin.
        </p>

        <p className="text-blue-200 leading-relaxed">
          Aujourd'hui, je cherche une <span className="font-semibold text-blue-100">équipe</span> où je pourrai <span className="font-semibold text-blue-100">continuer à progresser</span>, <span className="font-semibold text-blue-100">apprendre des autres</span> et <span className="font-semibold text-blue-100">m'impliquer dans des projets concrets</span>. Je m'intéresse aussi de plus en plus à <span className="font-semibold text-blue-100">l'architecture logicielle</span>, aux <span className="font-semibold text-blue-100">bonnes pratiques</span>, à ce qui fait une base de code <span className="font-semibold text-blue-100">propre et durable</span>.
        </p>

        <p className="text-blue-200 leading-relaxed">
          Je suis quelqu'un de <span className="font-semibold text-blue-100">curieux</span>, <span className="font-semibold text-blue-100">assez calme au début</span>, mais toujours partant pour <span className="font-semibold text-blue-100">bosser en équipe</span>, <span className="font-semibold text-blue-100">échanger des idées</span> et <span className="font-semibold text-blue-100">me dépasser</span>. J'ai envie d'<span className="font-semibold text-blue-100">avancer</span>, de <span className="font-semibold text-blue-100">construire des choses qui comptent</span>, et de me <span className="font-semibold text-blue-100">donner à fond</span> dans ce que je fais.
        </p>
      </div>
    </section>
  );
}
