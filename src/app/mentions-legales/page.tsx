"use client";

import Link from "next/link";

export default function MentionsLegales() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors mb-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Retour au site
      </Link>

      <h1 className="mb-8 text-3xl font-light tracking-tight text-slate-200">
        Mentions légales
      </h1>

      <div className="prose prose-invert prose-slate">
        <section className="mb-8">
          <h2 className="text-xl font-light text-slate-200 mb-4">
            Éditeur du site
          </h2>
          <p className="text-slate-400 font-light">
            Ayoub Zinane
            <br />
            Développeur Web
            <br />
            Email : milas.denim@proton.me
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-light text-slate-200 mb-4">
            Hébergement
          </h2>
          <p className="text-slate-400 font-light">
            Ce site est hébergé par Vercel Inc.
            <br />
            340 S Lemon Ave #4133
            <br />
            Walnut, CA 91789
            <br />
            États-Unis
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-light text-slate-200 mb-4">
            Propriété intellectuelle
          </h2>
          <p className="text-slate-400 font-light">
            L'ensemble de ce site relève de la législation française et
            internationale sur le droit d'auteur et la propriété intellectuelle.
            Tous les droits de reproduction sont réservés, y compris pour les
            documents téléchargeables et les représentations iconographiques et
            photographiques.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-light text-slate-200 mb-4">
            Protection des données personnelles
          </h2>
          <p className="text-slate-400 font-light">
            Conformément au Règlement Général sur la Protection des Données
            (RGPD) et à la loi Informatique et Libertés du 6 janvier 1978
            modifiée, vous disposez des droits suivants concernant vos données
            personnelles :
          </p>
          <ul className="list-disc pl-6 text-slate-400 font-light mt-4">
            <li>Droit d'accès et de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
            <li>Droit d'opposition au traitement</li>
          </ul>
          <p className="text-slate-400 font-light mt-4">
            Pour exercer ces droits, vous pouvez me contacter à l'adresse email
            : math.jacquart@gmail.com
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-light text-slate-200 mb-4">
            Finalité du traitement des données
          </h2>
          <p className="text-slate-400 font-light">
            Les données personnelles collectées sur ce site sont utilisées
            uniquement pour :
          </p>
          <ul className="list-disc pl-6 text-slate-400 font-light mt-4">
            <li>Répondre à vos demandes de contact</li>
            <li>Améliorer votre expérience de navigation</li>
            <li>Assurer la sécurité du site</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-light text-slate-200 mb-4">
            Durée de conservation des données
          </h2>
          <p className="text-slate-400 font-light">
            Les données personnelles sont conservées pendant une durée maximale
            de 3 ans à compter de leur collecte ou du dernier contact émanant de
            vous.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-light text-slate-200 mb-4">Cookies</h2>
          <p className="text-slate-400 font-light">
            Ce site n'utilise pas de cookies de suivi. Seuls des cookies
            techniques essentiels au fonctionnement du site peuvent être
            utilisés.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-light text-slate-200 mb-4">
            Réclamation
          </h2>
          <p className="text-slate-400 font-light">
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez
            adresser une réclamation à la Commission Nationale de l'Informatique
            et des Libertés (CNIL) sur leur site internet : www.cnil.fr
          </p>
        </section>
      </div>
    </div>
  );
}
