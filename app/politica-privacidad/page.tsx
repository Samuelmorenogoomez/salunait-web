import LegalTopBar from "../../components/LegalTopBar";

export const metadata = {
  title: "Política de Privacidad | Saluna Consulting",
  description: "Política de privacidad de Saluna Consulting conforme al RGPD.",
};

export default function PoliticaPrivacidad() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-300">
      <LegalTopBar />

      <h1 className="text-4xl font-bold mb-8 text-white">Política de Privacidad</h1>

      <section className="space-y-6">
        <p>
          En Saluna Consulting nos comprometemos a garantizar la privacidad
          de los datos personales conforme al Reglamento (UE) 2016/679 (RGPD).
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10">Responsable del tratamiento</h2>
        <p>
          El responsable del tratamiento de los datos es Saluna Consulting.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10">Finalidad del tratamiento</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Responder a consultas realizadas mediante formularios.</li>
          <li>Prestar servicios solicitados.</li>
          <li>Mejorar la experiencia del usuario.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-10">Legitimación</h2>
        <p>
          La base legal para el tratamiento es el consentimiento del interesado
          o la ejecución de un contrato.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10">Conservación de datos</h2>
        <p>
          Los datos se conservarán mientras exista relación comercial
          o durante los plazos exigidos legalmente.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10">Derechos del usuario</h2>
        <p>
          Puede ejercer sus derechos de acceso, rectificación, supresión,
          oposición y portabilidad enviando un correo a contacto@saluna.es.
        </p>
      </section>
    </main>
  );
}
