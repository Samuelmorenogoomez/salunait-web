import LegalTopBar from "../../components/LegalTopBar";

export const metadata = {
  title: "Aviso Legal | Saluna Consulting",
  description: "Aviso legal de Saluna Consulting. Información sobre titularidad, condiciones de uso y responsabilidad.",
};

export default function AvisoLegal() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-300">
      <LegalTopBar />

      <h1 className="text-4xl font-bold mb-8 text-white">Aviso Legal</h1>

      <section className="space-y-6">
        <p>
          En cumplimiento con el deber de información recogido en el artículo 10
          de la Ley 34/2002, de Servicios de la Sociedad de la Información y del Comercio Electrónico,
          se informa que el presente sitio web es titularidad de:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Marca comercial:</strong> Saluna Consulting</li>
          <li><strong>Actividad:</strong> Consultoría tecnológica y soluciones empresariales</li>
          <li><strong>Email de contacto:</strong> contacto@saluna.es</li>
          <li><strong>Dominio:</strong> https://saluna.es</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-10">Condiciones de uso</h2>
        <p>
          El acceso y uso de este sitio web atribuye la condición de usuario,
          implicando la aceptación plena y sin reservas de todas las disposiciones
          incluidas en este Aviso Legal.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10">Propiedad intelectual</h2>
        <p>
          Todos los contenidos del sitio web, incluyendo textos, imágenes,
          diseño, logotipos y código fuente, son propiedad de Saluna Consulting
          o cuentan con las licencias correspondientes.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10">Responsabilidad</h2>
        <p>
          Saluna Consulting no se hace responsable del mal uso de los contenidos
          del sitio web ni de posibles daños derivados del acceso o uso del mismo.
        </p>
      </section>
    </main>
  );
}
